import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { NewsProvider } from './context/NewsContext';

ReactDOM.render(
  <React.StrictMode>  
    <BrowserRouter>
      <NewsProvider>
        <App />
      </NewsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
