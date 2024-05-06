import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = document.getElementById('root');
const rootInstance = createRoot(root);

rootInstance.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
