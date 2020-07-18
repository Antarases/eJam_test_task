import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";

import App from "./components/pages/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
