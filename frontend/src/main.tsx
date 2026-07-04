import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AstraProvider } from "./context/AstraContext";

import "./styles/global/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AstraProvider>
      <App />
    </AstraProvider>
  </React.StrictMode>
);