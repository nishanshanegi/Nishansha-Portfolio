import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're importing from 'react-dom/client'
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component using the created root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
