// declare variables
let mapOptions = {'center': [34.07, -118.1],'zoom':11}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

// change basemap tile
var Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
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

// create a function to add markers
function addMarker(lat,lng,type,title,image,message){
    console.log(message)
    let marker = L.marker([lat,lng], {icon: type["off"]}).addTo(map).bindPopup(`<center><h2>${title}</h2></center> <center><img src="${image}" height=130vh></center> <body>${message}</body>`);

    // hover effect for markers
    marker.on('mouseover',function(ev) {
        marker.setIcon(type["on"]);
        marker.openPopup();
    })
    marker.on('mouseout', function(ev) {
        marker.setIcon(type["off"]);
        marker.closePopup();
    })
    return message
}

// use our marker functions
addMarker(
    34.09483407950944, -118.12669146465645, food,
    'Borneo Kalimantan',
    'assets/borneo.jpg',
    '<br>Rating: ⭐️⭐️⭐️⭐️⭐️ <br> 19 S Garfield Ave, Alhambra, CA 91801 <br><br> This Michelin star Indonesian and Singaporean restaurant serves the best comfort food in a causal dining environment. I recommend starting off with the Roti Prata and getting the Hookien Mie!'
);

addMarker(
    34.08338222526376, -118.07388971762553, drink,
    'Neighborhood Tea House', 
    'assets/neighbors.jpg',
    '<br>Rating: ⭐️⭐️⭐️⭐️⭐️ <br> 3588 Rosemead Blvd, Rosemead, CA 91770 <br><br> Not food, but the Vietnamese inspired drinks here are refreshing and one of a kind! I recommend getting the signature Smashed Avocado Durian and Cocotaro drink.'
);

addMarker(
    34.08003210487496, -118.1041489964439, drink,
    'CHICHA San Chen',
    'assets/chicha.jpg',
    '<br> Rating: ⭐️⭐️⭐️⭐️ <br> 301 W Valley Blvd #116, San Gabriel, CA 91776 <br><br> A little on the pricier side, but the quality is definitely there! The drinks are made from the freshest ingridents, especially their seasonal Green Tea Latte with Taro Paste and Balls.'
);

addMarker(
    34.04616098914602, -118.16164099644392, food,
    'Carnitas El Momo',
    'assets/elmomo.jpg',
    '<br> Rating: ⭐️⭐️⭐️⭐️ <br> 1470 Monterey Pass Rd, Monterey Park, CA 91754 <br><br> Not Asian food, but still very yummy! Featured in the Netflix Street Food Series, this Mexican spot is a staple for everyone in the area. I recommend the usual Michoacan-style carnitas tacos and the Cucumber-Lime agua fresca.'
);

addMarker(
    34.10215985944407, -118.11216827526248, food,
    'Tasty Noodle House',
    'assets/tasty.jpg',
    '<br> Rating: ⭐️⭐️⭐️ <br> 827 W Las Tunas Dr San Gabriel, CA 91776 <br><br> This Chinese restaurant is another comfort spot that has solid food at cheap prices! I recommend the Pan-fried Pork Buns and House Beef Noodle Soup.'
);

addMarker(
    34.0747169854441, -118.0710687176248, food,
    'Rose City Pizza',
    'assets/pizza.jpg',
    '<br> Rating: ⭐️⭐️⭐️⭐️ <br> 3588 Rosemead Blvd, Rosemead, CA 91770 <br><br> I bet you have never had pizza like this, this pizzeria offers unique toppings based off of neighboring cuisines! I recommend getting a half Island Shrimp and half Birria or Taiwanese Popcorn Chicken pizza.'
);