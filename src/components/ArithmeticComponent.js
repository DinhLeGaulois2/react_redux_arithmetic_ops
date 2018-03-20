import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field, reset, formValueSelector } from 'redux-form'
import arithmeticComponent from '../components/ArithmeticComponent'
import cst from '../constants/arithmeticCst'

const stepList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const opList = [cst.ADDITION, cst.SUBSTRACTION, cst.MULTIPLICATION, cst.DIVISION]

const opConvertisor = (op) => {
    if (op == cst.ADDITION) return "+"
    else if (op == cst.SUBSTRACTION) return "-"
    else if (op == cst.MULTIPLICATION) return "*"
    else if (op == cst.DIVISION) return "/"
}

let ArithmeticComponent = ({ handleSubmit, toDisplay, onClickMakeCal, onClickChangeOp, onClickChangeStep, step, operator, previousResult }) =>
    <div className="container">
        <br />
        <div className="panel panel-primary">
            <div className="panel-heading"><h1 align="center">Arithmetic - 4 Operations</h1></div>
            <div className="panel-body">
                <form onSubmit={handleSubmit(onClickMakeCal)}>
                    <h3 align="center">
                        <Field name="op" component="select" onChange={e => onClickChangeOp(e.target.value)}>
                            <option>Change Operator</option>
                            {opList.map(e =>
                                <option key={e} value={e}>{e.toLowerCase().replace(/(\b\w)/gi, function (m) { return m.toUpperCase(); })}</option>
                            )}
                        </Field>&nbsp;&nbsp;
                        <Field name="step" component="select" onChange={e => onClickChangeStep(e.target.value)}>
                            <option>Change Step</option>
                            {stepList.map(e =>
                                <option key={e} value={e}>{e}</option>
                            )}
                        </Field>
                    </h3>
                    <hr />
                    <h3 align="center">(Next Result Will Be The Result of: {previousResult.toFixed(2)} {opConvertisor(operator)} {step})</h3>
                    <br /><br />
                    <p align="center"><button type="submit">Submit</button>
                    </p>
                </form>
                <hr /><br />
                {toDisplay.length > 0 &&
                    <div className="showResult">
                        <h1 align="center">{toDisplay}</h1>
                    </div>
                }
            </div>
        </div>
    </div>

ArithmeticComponent.propTypes = {
    toDisplay: PropTypes.string,
    step: PropTypes.number,
    operator: PropTypes.string,
    previousResult: PropTypes.number,

    onClickMakeCal: PropTypes.func.isRequired,
    onClickChangeOp: PropTypes.func.isRequired,
    onClickChangeStep: PropTypes.func.isRequired
};

// Reset the form after submission
// const afterSubmit = (result, dispatch) =>
//     dispatch(reset('arithmeticForm'));

ArithmeticComponent = reduxForm({
    form: 'arithmeticForm',
    // onSubmitSuccess: afterSubmit
})(ArithmeticComponent)

ArithmeticComponent = connect(
    state => ({
        initialValues: {
            step: state.calc.byNumber,
            op: state.calc.status
        }
    })
)(ArithmeticComponent)

export default ArithmeticComponent