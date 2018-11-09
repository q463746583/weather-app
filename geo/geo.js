const request = require('request');


var geoAddress = (RawAddress, callback) => {
  var encodeAddress = encodeURIComponent(RawAddress);

  request({

    url: `http://www.mapquestapi.com/geocoding/v1/address?key=mmfx2MOGilYWSQenn6ZEWN88ieI1BM2H&location=${encodeAddress}`,
    json: true
  }, (error, response, body) => {
    if(body.info.statuscode != 0) {
      callback("Wrong from the server");
    } else {
      callback(undefined, {
         address: body.results[0].locations[0].street,
         latitude: body.results[0].locations[0].latLng.lat,
         longtitude:body.results[0].locations[0].latLng.lng});
    }
  })

};

module.exports.geoAddress = geoAddress;
