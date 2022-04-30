import './App.css';
import * as React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/css/bootstrap.min.css';
import './assets/css/google-icon.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
      <script src="./assets/js/bootstrap.bundle.min.js" type="text/javascript" />
    </div>
  );
}

export default App;
