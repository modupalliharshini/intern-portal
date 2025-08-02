// const express = require('express');
// const cors = require('cors');
// const internRoutes = require('./routes/intern');
// const leaderboardRoutes = require('./routes/leaderboard'); 

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// app.use('/api/intern', internRoutes);
// app.use('/api/leaderboard', leaderboardRoutes); 
// app.use('/api/profile', internRoutes);

// app.get('/', (req, res) => {
//   res.send('Backend is running');
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



require('dotenv').config(); // Load .env file

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const internRoutes = require('./routes/intern');
const leaderboardRoutes = require('./routes/leaderboard'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/api/intern', internRoutes);
app.use('/api/leaderboard', leaderboardRoutes); 
app.use('/api/profile', internRoutes); // Redundant, already handled by /api/intern

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
