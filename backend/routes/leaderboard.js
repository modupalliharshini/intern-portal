const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'intern-portal';
const collectionName = 'Leaderboard';

router.get('/', async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const leaderboard = await collection.find({}).toArray();

    res.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  } finally {
    await client.close();
  }
});

module.exports = router;
