// JavaScript const variable declaration
const map = L.map('the_map').setView([34.095287, -118.127014], 15); // (1)!

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // (2)!

//JavaScript let variable declaration to create a marker
let marker1 = L.marker([34.094620, -118.1267235]).addTo(map) // (3)!
		.bindPopup('<b>Borneo Kalimantan in Alhambra, CA<b> <br> 19 S Garfield Ave, Alhambra, CA 91801 <br> This Michelin star Indonesian and Singaporean restaurant serves the best comfort food in a causal dining environment. I recommend starting off with the Roti Prata and getting the Hookien Mie!')
		.openPopup();

let marker2 = L.marker([34.083280, -118.073870]).addTo(map) // (3)!
		.bindPopup("<b>Rose City Pizza in Rosemead, CA<b> <br> 3588 Rosemead Blvd, Rosemead, CA 91770 <br> I bet you've never had pizza like this, this pizzeria offers unique toppings based off of neighboring cuisines! I recommend getting a half Island Shrimp and half Birria or Taiwanese Popcorn Chicken pizza.")
		.openPopup();

let marker3 = L.marker([34.083280, -118.073870]).addTo(map) // (3)!
		.bindPopup("<b>Neighborhood Tea House in Rosemead, CA<b> <br> 4213 Rosemead Blvd h2, Rosemead, CA 91770 <br> Not food, but the Vietnamese inspired drinks here are refreshing and one of a kind! I recommend getting the signature Smashed Avocado Durian and Cocotaro drinks.")
		.openPopup();

let marker4 = L.marker([34.102150, -118.112080]).addTo(map) // (3)!
		.bindPopup("<b>Tasty Noodle House in San Gabriel, CA<b> <br> 827 W Las Tunas Dr San Gabriel, CA 91776 <br> This Chinese restaurant is another comfort spot that has solid food at cheap prices! I recommend the Pan-fried Pork Buns and House Beef Noodle Soup.")
		.openPopup();

let marker5 = L.marker([34.046170, -118.161490]).addTo(map) // (3)!
		.bindPopup("<b>Carnitas El Momo in Monterey Park, CA<b> <br> 1470 Monterey Pass Rd, Monterey Park, CA 91754 <br> Featured in the Netflix Street Food Series, this Mexican spot is a staple for everyone in the area. I recommend the usual Michoacan-style carnitas tacos and the Cucumber-Lime agua fresca.")
		.openPopup();