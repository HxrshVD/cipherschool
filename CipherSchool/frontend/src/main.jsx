// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind CSS entry

const container = document.getElementById("root");
const root = createRoot(container); // ✅ React 19 correct API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
