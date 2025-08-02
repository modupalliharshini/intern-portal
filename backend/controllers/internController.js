const getProfile = (req, res) => {
  res.json({
    name: "Modupalli Harshini",
    referralCode: "Harshini2025",
    totalDonations: 500
  });
};

// const getLeaderboard = (req, res) => {
//   res.json([
//     { name: "Liansh", donations: 600 },
//     { name: "Modupalli Harshini", donations: 500 },
//     { name: "Samy", donations: 300 }
//   ]);
// };

module.exports = { getProfile, getLeaderboard };
