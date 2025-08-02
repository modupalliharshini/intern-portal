const express = require('express');
const cors = require('cors');
const internRoutes = require('./routes/intern');
const leaderboardRoutes = require('./routes/leaderboard'); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/intern', internRoutes);
app.use('/api/leaderboard', leaderboardRoutes); 
app.use('/api/profile', internRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
