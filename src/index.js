import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider } from "@mui/material/styles";
import { store } from "./State Manager/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// "@material-ui/core": "^5.0.0-beta.5",

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
