import React from "react";
import ReactDOM from "react-dom";

import { AppWithIssues } from "./AppWithIssues";
import { App } from "./App";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithIssues />, rootElement);
