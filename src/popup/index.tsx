import * as React from "react";
import * as ReactDOM from "react-dom";
import { Popup } from "./component";
import "../scss/app.scss";

// // // //

window.chrome.tabs.query({ active: true, currentWindow: true }).then(() => {
    ReactDOM.render(<Popup />, document.getElementById("popup"));
});
