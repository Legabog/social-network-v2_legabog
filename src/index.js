import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "redux/root-reducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

import { Preloader } from "pres-components/Preloader";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();