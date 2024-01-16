// let newYorkCoords = [40.73, -74.0059];
// let mapZoomLevel = 12;

// Create the createMap function.
let myMap = L.map("map", {
  center: [40.73, -74.0059],
  zoom: 12
  layers = [street, cityLayer]
});

  // Create the tile layer that will be the background of our map.
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


d3.json('https://gbfs.citibikenyc.com/gbfs/en/station_information.json').then(function(response) {
  console.log(response);
}
);
  // Create a baseMaps object to hold the lightmap layer.
let baseMaps = {
  "Light Map": street

};

  // Create an overlayMaps object to hold the bikeStations layer.
let overLayMaps = {
  "Bike Stations": cityLayer
};

  // Create the map object with options.
let map = L.map('map, mapOptions');

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
L.control.layers(baseMaps, overLayMaps).addTo(myMapap);

}); 
// Create the createMarkers function.

  // Pull the "stations" property from response.data.

  // Initialise an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
