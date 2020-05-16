import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Export all components
import Button from "./Button/Button";
import Form from "./Form/Form";

export { Form, Button };

const wrapper = document.getElementById("container");
ReactDOM.render(<App />, wrapper);
