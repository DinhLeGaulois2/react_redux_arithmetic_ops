import arithmeticCst from '../constants/arithmeticCst'

const arithmeticAction = {
    makeCalculation: () => {
        return dispatch => {
            dispatch({ type: arithmeticCst.CALCULATE })
        }
    },

    makeChangeOp: (val) => {
        console.log("op, val: " + val)
        return dispatch => {
            dispatch({
                type: arithmeticCst.SET_OP,
                payload: val
            })
        }
    },

    makeChangeStep: (val) => {
        console.log("step, val: " + parseInt(val))
        return dispatch => {
            dispatch({
                type: arithmeticCst.SET_STEP,
                payload: parseInt(val)
            })
        }
    },
}

export default arithmeticAction