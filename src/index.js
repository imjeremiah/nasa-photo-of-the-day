import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "styled-components";
import theme from './theme/';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App /> 
    </ThemeProvider>, 
    document.getElementById("root")
);
