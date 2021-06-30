import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import "./assets/css/index.css";
import { AppProvider } from "./contexts/app.context";
import Background from "./components/background";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Background>
        <Pages />
      </Background>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
