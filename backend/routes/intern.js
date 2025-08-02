const express = require('express');
const router = express.Router();
const { getProfile, getLeaderboard } = require('../controllers/internController');

router.get('/profile', getProfile);
router.get('/leaderboard', getLeaderboard);

module.exports = router;
