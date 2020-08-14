import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ENVIA CÓDIGOS EM HTML DENTRO DO ELEMENTO CUJO O ID É "ROOT"
ReactDOM.render(
  <React.StrictMode>
    <App />	
  </React.StrictMode>,
  document.getElementById('root')
);
