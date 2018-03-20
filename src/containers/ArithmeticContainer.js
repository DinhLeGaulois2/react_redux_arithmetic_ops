import React from 'react'
import { connect } from 'react-redux'
require('../style.scss')

import arithmeticAction  from '../actions/arithmeticAction'

import arithmeticComponent from '../components/ArithmeticComponent'

const mapStateToProps = (state) => ({    
    toDisplay: state.calc.toDisplay,
    step: state.calc.byNumber,
    operator: state.calc.status,
    previousResult: state.calc.result
})

const mapDispatchToProps = (dispatch) => ({
    onClickMakeCal: (data) => {dispatch(arithmeticAction.makeCalculation(data))},
    onClickChangeOp: (data) => {dispatch(arithmeticAction.makeChangeOp(data))},    
    onClickChangeStep: (data) => {dispatch(arithmeticAction.makeChangeStep(data))},
})

// You have to connect() to any reducers that you wish to connect to yourself
const JobSearchDisplayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(arithmeticComponent)

export default JobSearchDisplayContainer
