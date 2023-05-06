import React from "react";
import rootReducer from "../src/store/reducers/rootReducer.js";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Test from "./pages/Test.js";
// import { store } from "./store/store";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const reduxStore = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={reduxStore}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// cung cấp store cho tất cả các thành phần của ứng dụng
