function getMapReady(){
  var map = L.map('map').setView([42.37930089, -71.03267141],  13);

  // load a tile layer
  L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
    {
      attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
      maxZoom: 17,
      minZoom: 9
    }).addTo(map);

    $.getJSON("buildings_file.geojson",function(data1){
    L.geoJson(data1, {
      onEachFeature: function(feature, layer) {
          layer.bindPopup(
              feature.properties.OWNER.bold() + "<br />" +
              feature.properties.ADDRESS + "<br />" +
              "0" + feature.properties.ZIPCODE
              )
      }
    }).addTo(map);
  });
}


function useResult(result) {
  var lat = result.geometry.location.lat();
  console.log(lat);
  var lon = result.geometry.location.lon();
  console.log(lon);
}

function codeAddress() {
  var address = document.getElementById('btn').value;
  geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {
    console.log(results[0].geometry.location);
    if(status == 'OK'){
      console.log(results[0].geometry.location);
    }
    else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
}


function getLatLon(callback, address) {
    // Initialize the Geocoder
    geocoder = new google.maps.Geocoder();
    if (geocoder) {
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                callback(results[0]);
            } else {
              console.log("There was an error with the status");
            }
        });
    } else {
      console.log("There was an error loading up the geocoder");
    }
}



function onloadFunction(){
  addClickEvent();
  getMapReady();
}

function addClickEvent() {
  var button = document.getElementById('btn');
  button.addEventListener("click", function(){
  codeAddress();
  });
}
