import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { ThemeProvider } from "./contexts/ThemeContext"; // ← adicionar

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
