const { fetchMyIP, fetchCoordByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Return IP: ", ip);
// });

// fetchCoordByIP('68.145.212.26', (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Return coordinates:", data);
// });

// const coord = { latitude: 49.69349, longitude: -112.84184 };
// fetchISSFlyOverTimes(coord, (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Return fly over times:", data);
// });