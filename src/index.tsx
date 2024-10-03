// 原代码
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// 修改后代码
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

debugger;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
