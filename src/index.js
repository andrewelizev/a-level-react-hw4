import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path='*' element={<App />} />
    </Routes>
    {/* <App /> */}
  </BrowserRouter>,
  document.getElementById('root')
);