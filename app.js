const yargs = require('yargs');
const geo = require("./geo/geo.js");
const weather = require("./weather/weather.js")

const argv = yargs
  .option({
    a: {
      demand: true,
      alias: 'address',
      describe: 'The address you want to fetch weather',
      string: true
      }
      })
    .help()
    .alias('help', 'h')
    .argv;


geo.geoAddress(argv.a, (errorMessage, results) => {
      if(errorMessage) {
        console.log(errorMessage);
        console.log("Here");
      }
      else {
        var lat = results.latitude;
        var log = results.longtitude;
        weather.getWeather(lat, log, (errorMessage, results) => {
          if(errorMessage) {
            console.log(errorMessage);
            console.log("Here1");
          }
          else {
            console.log("Here");
            console.log(results);
          }
        });
      }
    });
