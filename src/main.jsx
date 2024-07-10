import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Banner from './partials/Banner';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Banner text="Op Nederland! Veel succes in de halve finale van het EK" />
      <App />
    </Router>
  </React.StrictMode>
);
