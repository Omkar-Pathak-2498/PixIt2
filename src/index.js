import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const rootEl = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEl);

function App2() {
  return <App />;
}

root.render(<App2 />);
