import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App tituloCalculadora="Calculadora con React" />
  </React.StrictMode>,
  document.getElementById('root')
);