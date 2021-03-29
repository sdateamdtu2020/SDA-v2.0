import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./app/store";
import { ThemeProvider } from "@material-ui/core/styles";
import { THEME } from "./components/theme/GlobalStyles";

ReactDOM.render(
  <>
    <ThemeProvider theme={THEME}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
