import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./routes";
import { GraphProvider } from "./shared/contexts/graph-context";

import "./shared/styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <GraphProvider>
      <App />
    </GraphProvider>
  </React.StrictMode>
);
