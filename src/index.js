import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Signup from "./Signup"
import Home from "./Home";
import Profile from './Profile';
import ForgotPassword from './Forgotpassword';
import './styles.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='login' Component={Login}/>
        <Route path='signup' Component={Signup}/>
        <Route path='forgot-password' Component={ForgotPassword} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>


  // <React.StrictMode>
  //   <Signup />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
