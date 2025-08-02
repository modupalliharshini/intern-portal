import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles.css';

const Dashboard = () => {
  const [profile, setProfile] = useState(null);

  // useEffect(() => {
  //   axios.get('https://intern-portal-backend-muzv.onrender.com/api/intern/profile')
  //     .then(res => setProfile(res.data))
  //     .catch(err => console.error(err));
  // }, []);

  useEffect(() => {
  axios.get('https://intern-portal-backend-muzv.onrender.com/api/intern/profile')
    .then(res => {
      console.log('✅ Profile data:', res.data);
      setProfile(res.data);
    })
    .catch(err => {
      console.error('❌ Error fetching profile:', err);
    });
}, []);


  // if (!profile) return <div className="container">Loading...</div>;
  if (!profile) {
  return (
    <div className="container">
      <div className="card">
        <p>⏳ Loading profile...</p>
      </div>
    </div>
  );
}


  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Dashboard</h1>
      <div className="card">
        <h2>Hello, {profile.name}</h2>
        <p><strong>Referral Code:</strong> {profile.referralCode}</p>
        <p><strong>Total Donations:</strong> ${profile.totalDonations}</p>
      </div>

      <div className="card">
        <h3>🎁 Rewards</h3>
        <ul>
          <li>Bronze Badge</li>
          <li>Swag Kit</li>
          <li>Early Access</li>
        </ul>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/leaderboard">📊 View Leaderboard</Link>
      </div>
    </div>
  );
};

export default Dashboard;
