const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const dbName = 'intern-portal';
const collectionName = 'Leaderboard';

router.get('/', async (req, res) => {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const leaderboard = await collection.find({}).toArray();
    res.json(leaderboard);

    await client.close();
  } catch (error) {
    console.error('❌ Error fetching leaderboard:', error);
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

module.exports = router;
