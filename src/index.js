import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Favorites from './routes/Favorites';
import Home from './routes/Home';
import Categories from './routes/Categories';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import BookPage from './routes/BookPage';


const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style:none;
  }
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path='/favorites' element ={<Favorites />}/>
        <Route path='/home' element ={<Home />}/>
        <Route path='/categories' element ={<Categories />}/>
        <Route path='/login' element ={<Login />}/>
        <Route path='/signup' element ={<SignUp />}/>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/book/:id" element={<BookPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
