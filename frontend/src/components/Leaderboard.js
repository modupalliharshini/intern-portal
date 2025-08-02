// import React, { useEffect, useState } from 'react';

// const Leaderboard = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/leaderboard')
//       .then(res => res.json())
//       .then(setData)
//       .catch(err => console.error('Failed to load leaderboard:', err));
//   }, []);




//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h2>Leaderboard</h2>
//       {data.length === 0 ? (
//         <p>No data available.</p>
//       ) : (
//         <table border="1" style={{ margin: '0 auto', width: '50%' }}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Score</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((entry, idx) => (
//               <tr key={idx}>
//                 <td>{entry.name}</td>
//                 <td>{entry.score}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>




//     <div className="container">
//   <div className="card">
//     <h2>Leaderboard</h2>
//     {data.length === 0 ? (
//       <p>No data available.</p>
//     ) : (
//       <table className="leaderboard-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Donations</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((entry) => (
//             <tr key={entry._id}>
//               <td>{entry.name}</td>
//               <td>${entry.donations}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     )}
//   </div>
// </div>

//   );
// };

// export default Leaderboard;


import React, { useEffect, useState } from 'react';
import '../styles.css';

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://intern-portal-backend-muzv.onrender.com/api/leaderboard')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Error fetching leaderboard:', err));
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Leaderboard</h1>
      <div className="card">
        {data.length === 0 ? (
          // <p>No data available.</p>
          <p>⏳ Fetching leaderboard data...</p>
        ) : (
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th> 
              </tr>
            </thead>
            <tbody>
              {data.map((entry) => (
                <tr key={entry._id}>
                  <td>{entry.name}</td>
                  <td>{entry.score}</td> 
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;

