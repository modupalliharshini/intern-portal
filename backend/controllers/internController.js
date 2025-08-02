// const getProfile = (req, res) => {
//   res.json({
//     name: "Modupalli Harshini",
//     referralCode: "Harshini2025",
//     totalDonations: 500
//   });
// };

const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const dbName = 'intern-portal';

const getProfile = async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const profile = await db.collection('profile').findOne({});

    await client.close();
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// module.exports = { getProfile };

const getLeaderboard = (req, res) => {
  res.json([
    { name: "Liansh", score: 600 },
    { name: "Modupalli Harshini", score: 500 },
    { name: "Samy", score: 300 }
  ]);
};

module.exports = { getProfile, getLeaderboard };
