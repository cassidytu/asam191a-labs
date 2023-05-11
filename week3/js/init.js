// declare variables
let mapOptions = {'center': [34.07, -118.1],'zoom':13}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//add custom marker icon dictionaries
var food = {
    "off": L.icon({iconUrl: 'assets/food-icon.png'}),
    "on": L.icon({iconUrl: 'assets/food-on-icon.png'}),
}; 
var drink = {
    "off": L.icon({ iconUrl: 'assets/drink-icon.png'}),
    "on": L.icon({ iconUrl: 'assets/drink-on-icon.png'}),
};

function createButtons(lat,lng,title,category){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    if (category == "food"){
        document.getElementById("foodCol").appendChild(newButton); //this adds the button to food column of button table
    } else {
       document.getElementById("drinkCol").appendChild(newButton); //this adds the button to drink column of button table
    }
}

function addPopup(feature, layer) {
	layer.bindPopup(
		`<center><h2>${feature.properties.place}</h2></center> <center><img src="${feature.properties.src}" height=130vh></center> <body>${feature.properties.message}</body>`
	);
	createButtons(
		feature.geometry.coordinates[1],
		feature.geometry.coordinates[0],
		feature.properties.place,
        feature.properties.category,
	);
}

fetch("map.geojson")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Basic Leaflet method to add GeoJSON data
        L.geoJSON(data, {
			onEachFeature: addPopup,
			pointToLayer: (feature, latlng,) => {
                let marker = L.marker(latlng,);
                if (feature.properties.category == "food"){
                    marker.setIcon(food["off"]);
                } else {
                    marker.setIcon(drink["off"]);
                }

                // hover effect for markers
                marker.on('mouseover',function(ev) {
                    if (feature.properties.category == "food"){
                        marker.setIcon(food["on"]);
                    } else {
                        marker.setIcon(drink["on"]);
                    }
                   marker.openPopup();
               })
               marker.on('mouseout', function(ev) {
                    if (feature.properties.category == "food"){
                        marker.setIcon(food["off"]);
                    } else {
                        marker.setIcon(drink["off"]);
                    }
                   marker.closePopup();
               })
			    return marker;
			},
		}).addTo(map);
    });