import cst from '../constants/arithmeticCst'

const calculation = (num1, num2, op) => {    
    if (op == cst.ADDITION) return num1 + num2
    else if (op == cst.DIVISION) return num1 / num2
    else if (op == cst.MULTIPLICATION) return num1 * num2
    else if (op == cst.SUBSTRACTION) return num1 - num2
}

const op2Sign = (op) => {
    if (op == cst.ADDITION) return "+"
    else if (op == cst.DIVISION) return "/"
    else if (op == cst.MULTIPLICATION) return "*"
    else if (op == cst.SUBSTRACTION) return "-"
}

const arithmeticReducer = (state = {
    result: 0,
    byNumber: 1,
    toDisplay: "",
    status: cst.ADDITION
}, action) => {
    switch (action.type) {        
        case cst.CALCULATE: {
            let oldNumber = state.result;
            return Object.assign({}, state, {
                toDisplay: oldNumber.toFixed(2) + " " + op2Sign(state.status) + " " + state.byNumber + " = " + calculation(oldNumber, state.byNumber, state.status).toFixed(2),
                result: calculation(state.result, state.byNumber, state.status),
            })
        }
        case cst.SET_STEP: {
            return Object.assign({}, state, { 
                byNumber: action.payload 
            })
        }
        case cst.SET_OP: {
            return Object.assign({}, state, { 
                status: action.payload 
            })
        }
    }
    return state
}

export default arithmeticReducer