require("dotenv").config();
var keys = require("../keys/google_api.js");

//console.log("folder", keys)

var google_key = keys.google.key;

//console.log("key", google_key);

//Test Req
//===============================================
var googleMapsClient = require('@google/maps').createClient({
    key: google_key,
    Promise: Promise
});

var directionInfo = {
    origin: "26 Northern Way Ct. Durham, NC 27712",
    destination: "3643 N Roxboro St, Durham, NC 27704"

}
console.log("HERE",directionInfo)
googleMapsClient.directions(
    directionInfo
).asPromise()
    .then((response) => {
        console.log(response.json.routes);
    })
    .catch((err) => {
        console.log(err);
    });