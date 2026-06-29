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
import Form2copy from './Form2copy';
import ProtectedRoute from "./ProtectedRoute";
import './styles.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form2 from './Form2';
import Terms from './Terms';
import Dashboard from './Dashboard';
import UpdatePassword from './UpdatePassword';
import List from './Shared/List';
import PrivacyPolicy from './PrivacyPolicy';
import TalkToUs from './Home/TalkToUs';
import Sidebar from './Shared/Sidebar';
import DashboardLayout from './Shared/DashboardLayout';
import About from './Shared/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='login' Component={Login}/>
        <Route path='signup' Component={Signup}/>
        <Route path='forgot-password' Component={ForgotPassword} />
        <Route path='form2' Component={Form2} />
        <Route path='form2-copy' Component={Form2copy} />
        <Route path='terms' Component={Terms} />
        <Route path='privacy' Component={PrivacyPolicy} />
        <Route path='contact-us' Component={TalkToUs} />
        <Route path='list' Component={List}/>
        <Route path='sidebar' Component={Sidebar} />
        <Route path="/dashboard1" element={<DashboardLayout />}></Route>
        <Route path="/about" element={<About />} />
        <Route path='dashboard' 
          element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute> }
         />
           <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
          path="/update-password"
          element={
            <ProtectedRoute>
              <UpdatePassword />
            </ProtectedRoute>
          }
          />
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
