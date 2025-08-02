import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Router>
      <>
  <div className="navbar">Intern Portal</div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      </>
    </Router>
  );
}

export default App;
