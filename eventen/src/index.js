import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Import app-level CSS (kept minimal) and ensure dark overrides are available in build.
import './index.css';

// Dynamically load light.css from the public folder so the app defaults to light (white) theme
const themeLink = document.createElement('link');
themeLink.rel = 'stylesheet';
themeLink.href = process.env.PUBLIC_URL + '/assets/css/light.css';
document.head.appendChild(themeLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Only one BrowserRouter here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
