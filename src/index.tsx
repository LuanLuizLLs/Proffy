import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // ENVIA CÓDIGOS EM HTML DENTRO DO ELEMENTO CUJO O ID É "ROOT"
  <React.StrictMode>
    <App />	
  </React.StrictMode>,
  document.getElementById('root')
);
