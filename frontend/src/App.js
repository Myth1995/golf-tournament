import './App.css';
import * as React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Admin from './components/Admin';
import Profile from './components/Profile';
import Register from './components/Register';
import Leaderboard from './components/Leaderboard';
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
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
        </Routes>
      </Router>
      <script src="./assets/js/bootstrap.bundle.min.js" type="text/javascript" />
    </div>
  );
}

export default App;
