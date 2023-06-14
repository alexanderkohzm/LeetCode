import { StrictMode } from "react";
import ReactDOM from "react-dom";

// change which app to import
import App from "./starRating/app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
