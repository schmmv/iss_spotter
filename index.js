const { nextISSTimesForMyLocation } = require('./iss');

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
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${date} for ${pass.duration} seconds!`)
  }
};

nextISSTimesForMyLocation((error, data) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(data);
});

module.exports = { printPassTimes };