import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';    // ← make sure this line is present!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
