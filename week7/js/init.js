// declare variables
let mapOptions = {'center': [34.07, -118.1],'zoom':10}

let foodGroup = L.featureGroup();
let drinkGroup = L.featureGroup();

const foodLegendHTML = document.getElementById("foodCheckbox");
const drinkLegendHTML = document.getElementById("drinkCheckbox");

let layers = {
    "food group": foodGroup,
    "drink group": drinkGroup
}

//add custom marker icon dictionaries
let food = {
    "off": L.icon({
        iconUrl: 'assets/food-icon.png',
        iconSize: [50,50],
    }),
    "on": L.icon({
        iconUrl: 'assets/food-on-icon.png',
        iconSize: [50,50],
    }),
}; 
let drink = {
    "off": L.icon({
        iconUrl: 'assets/drink-icon.png',
        iconSize: [50,50],
    }),
    "on": L.icon({
        iconUrl: 'assets/drink-on-icon.png',
        iconSize: [50,50],
        
    }),
};

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,image,message,rating,type){
    console.log(message)
    let marker = L.marker([lat,lng]).addTo(map).bindPopup(`<center><h2>${title}</h2><img src=${image} height=130vh></center> <br> <body><b>Rating: </b>${rating} <br> ${message}</body>`)
    
    marker["id"] = "marker"+title;

    if (type == "Food"){
        marker.setIcon(food["off"]);
        foodGroup.addLayer(marker);
    } else {
        marker.setIcon(drink["off"]);
        drinkGroup.addLayer(marker);
    }

    // click selection effect for markers
    marker.on('popupopen', function(ev) {
        if (type == "Food"){
            marker.setIcon(food["on"]);
        } else {
            marker.setIcon(drink["on"]);
        }
   })
   marker.on('popupclose', function(ev) {
    if (type == "Food"){
        marker.setIcon(food["off"]);
    } else {
        marker.setIcon(drink["off"]);
    }
    })

    createButtons(lat,lng,title,type);
    // open popup on button
    document.getElementById("button"+title).addEventListener('click', function(){
        marker.openPopup();
    })
    return marker
}

function createButtons(lat,lng,title,type){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    
    // sort buttons by type
    if (type == "Food") {
        const foodButtons = document.getElementById('foodCol')
        foodButtons.appendChild(newButton);//this adds the button to our page.
    } else {
        const drinkButtons = document.getElementById('drinkCol');
        drinkButtons.appendChild(newButton);//this adds the button to our page.
    }
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRnbtDjLj1Y7EzX9AF6e_VkcK17dvH2rR8-5kZeOTNA_HWKnEYcPNbMrBEWoDtohbHesenjfYJBNTnv/pub?output=csv"

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data.lat,data.lng,data['What is the name of the place?'],data['What does it look like?'],data['Write a bit about the place!'],data['How would you rate it?'],data['What type of place is it?'])
    })
    foodGroup.addTo(map);
    drinkGroup.addTo(map);
    let allLayers = L.featureGroup([foodGroup, drinkGroup]);
    map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl);

let popUp = document.getElementById("popup");
let mapBlock = document.getElementById("the_map");

function openPopup(){
    popUp.style.display = "block";
    mapBlock.style.gridColumn = "span 1";
}

function closePopup(){
    popUp.style.display = "none";
    mapBlock.style.gridColumn = "span 2";
}

// toggle the legend for foodLegend group layer
foodLegendHTML.addEventListener("click",toggleFoodLayer) 

function toggleFoodLayer(){
    if(document.getElementById('foodCheckbox').checked){
        map.addLayer(foodGroup)
    }
    else{
        map.removeLayer(foodGroup)
    }
}

// add the event listener for the click
drinkLegendHTML.addEventListener("click",toggleDrinkLayer) 

// toggle the legend for drinkLegend grouplayer
function toggleDrinkLayer(){
    if(document.getElementById('drinkCheckbox').checked){
        map.addLayer(drinkGroup)
    }
    else{
        map.removeLayer(drinkGroup)
    }
}
