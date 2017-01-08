function useResult(result) {
  var lat = result.geometry.location.lat();
  var lon = result.geometry.location.lon();
  console.log("Lat and lon should be here.")
  console.log(lat);
  console.log(lon);
}

function getLatLon(callback, address) {
    console.log("test console.log")
    console.out("Test Console Out")
    // Initialize the Geocoder
    geocoder = new google.maps.Geocoder();
    console.out(geocoder)
    if (geocoder) {
        console.log("GeoCoder is true.")
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            console.out("Inside funceion...")
            if (status == google.maps.GeocoderStatus.OK) {
                console.out("Inside geocoder status - if stmt.")
                callback(results[0]);
            } /*else {
              console.log("There was an error with the status");
            }*/
        });
    } /*else {
      console.log("There was an error loading up the geocoder");
    }*/
}

var button;

button = document.getElementById('btn');

if (button != null){
    console.log("yay, there is a button");
}

button.addEventListener("click", function(){
  console.log("Yahahahehaheaha");
  var address = document.getElementById("address").value;
  console.log("yo wassup");
  if (address != null){
    console.log("yay, there is an address");
  }
  console.out("Before getLatLon")
  getLatLon(useResult, address);

  console.log("getLatLon func running now.")
});
