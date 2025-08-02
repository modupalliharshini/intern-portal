const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const dbName = 'intern-portal';
const collectionName = 'leaderboard';

const getLeaderboard = async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const leaderboard = await db.collection(collectionName).find().sort({ score: -1 }).toArray();
    await client.close();

    res.json(leaderboard);
  } catch (error) {
    console.error('Failed to fetch leaderboard:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getLeaderboard };
