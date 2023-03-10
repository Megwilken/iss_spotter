// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchFlyoverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("it worked! Returned IP:", ip);
// });

// fetchCoordsByIP("71.17.147.45", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("it worked! Returned coordinates:", coordinates);
// });
// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchFlyoverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned flyover times:", passTimes)
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for {duration} second!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  printPassTimes(passTimes);
});