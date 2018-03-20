import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";

import ArithmeticContainer from './containers/ArithmeticContainer';

ReactDOM.render(
    <Provider store={store}>
        <ArithmeticContainer />
    </Provider>,
    document.getElementById('app')
);