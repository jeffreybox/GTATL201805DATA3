//SOURCES:
// usga earthquake info: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
// tectonic plates github: https://github.com/fraxen/tectonicplates
// mapbox styles: https://www.mapbox.com/studio/

// NOTE: Getting JSON data into a usable form is not something we did in class
// Credit to John Commander (and Devang) for the help on the 'async call to url'

//************************
// ASYNC CALL TO URL
//************************
var quakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var plateUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json";

var globalquakedata;
var globalplatedata;

// GET quake data
async function quakeCollector () {
  var result = await d3.json(quakeUrl).then(function(data) {
    // console.log(`length before function call: ${data.features.length}`)
    globalquakedata = data;
  });
  return globalquakedata;
};

// GET plate data
async function plateCollector () {
  var result = await d3.json(plateUrl).then(function(data) {
    // console.log(`length before function call: ${data.features.length}`)
    globalplatedata = data;
  });
  return globalplatedata;
};

var earthquakeData = {};
var plateData = {};

// weird thing that must be done with async fcns to return data in usable format 
var eqd = quakeCollector().then((result)=>{earthquakeData.data=result});
var pd = plateCollector().then((result)=>{plateData.data=result});

// *************************************
//THIS IS HOW EVERYTHING RUNS*****
Promise.all([eqd, pd]).then(function(){
// *************************************

// Testing the data
  console.log("Earthquake data JSON:");
  console.log(earthquakeData.data);
  console.log("Plate data JSON:");
  console.log(plateData.data);
  // console.log(emptyObject.data.features[0]);
  console.log(`length of earthquake data.features: ${earthquakeData.data.features.length}`);
  console.log(`length of plate data.features: ${plateData.data.features.length}`);

//************
// SCALER
//************
  function markerSize(mag) {return mag * 20000};

  function getColor(mag) {
    var color = "";

    if (mag >= 5) {
      color = "rgb(224, 115, 11)"; // light yellowish down to...
    }
    else if (mag >= 4) {
      color = "rgb(230, 169, 117)";
    }
    else if (mag >= 3) {
      color = "rgb(235, 187, 97)";
    }
    else if (mag >= 2) {
      color = "rgb(240, 219, 103)";
    }
    else if (mag >= 1) {
      color = "rgb(229, 241, 106)";
    }
    else {
      color = "rgb(196, 240, 105)"; // light redish...? #colorblind 
    }
    return color;
  }

//************
// MAG MARKERS 
//************
  var magMarkers = [];

  var length = earthquakeData.data.features.length;

// Loop through locations and create magnitude markers
  for (var i = 0; i < length; i++) {
    
    // Setting the marker radius and color
    magMarkers.push(
      L.circle([earthquakeData.data.features[i].geometry.coordinates[1],earthquakeData.data.features[i].geometry.coordinates[0]], {
        stroke: false,
        fillOpacity: 0.75,
        color: "black",
        fillColor: getColor(earthquakeData.data.features[i].properties.mag),
        radius: markerSize(earthquakeData.data.features[i].properties.mag)
      }).bindPopup("<h1 style='text-align: center'> Magnitude: " + earthquakeData.data.features[i].properties.mag + "</h1> <hr> <h3 style='text-align: center'> Location: " + earthquakeData.data.features[i].properties.place+ "</h3>")
    );
  };

  console.log("magMarkers list below:");
  console.log(magMarkers);

//************
// LAYERS 
//************
// Define variables for our base layers
  var satmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.satellite",
    accessToken: API_KEY
  });

  var outdoorsmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.outdoors",
    accessToken: API_KEY
  });

  var graymap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

  // the magnitude layer group from the now populated "magMarkers" list of objects
  var magnitude = L.layerGroup(magMarkers);
  var plates = L.geoJSON(plateData.data);

  console.log(magnitude);
  console.log(plates);

  // Create a baseMaps object from MapBox stuffz
  var baseMaps = {
    "Satellite": satmap,
    "Grayscale": graymap,
    "Outdoors": outdoorsmap
  };

  // Create an overlay object from the magnitude layer group
  var overlayMaps = {
    "Magnitude": magnitude,
    "Tectonic Plates": plates
  };

  // Define a map object
  var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [satmap, plates, magnitude]
  });

  // Pass our map layers into our layer control & add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);


//***************
// I AM LEGEND  
//***************

var legend = L.control({position: "bottomright"});
legend.onAdd = function () {
  var div = L.DomUtil.create('div', 'info legend'),
  categories = [0, 1, 2, 3, 4, 5];
  labels = [];

  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < categories.length-1; i++) {
    var legendInfo = `<i style="background: ${getColor(categories[i])} "></i>${categories[i]} - ${categories[i+1]}`;
    labels.push(legendInfo);
    };
  labels.push(`<i style="background: ${getColor(5)} "></i>5+`);
  //console.log(labels);
  div.innerHTML = labels.join('<br>');
  return div;
};
legend.addTo(myMap);

});

