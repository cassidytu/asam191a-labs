console.log("Hello Asia-Am 191A! :)")

// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 15); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

//JavaScript let variable declaration to create a marker
let marker1 = L.marker([34.0709, -118.444]).addTo(map) 
        .bindPopup('<strong>Math Sciences</strong> 4328 aka the Technology Sandbox <br> is the lab where I work in <br><img src="https://chancellor.ucla.edu/wp-content/uploads/2019/01/Math-Sciences-Building-13.jpg" width=100px>')
        .openPopup();

let marker2 = L.marker([34.061100, -118.446300]).addTo(map) 
        .bindPopup('<strong>CAVA</strong> <br> super yummy Mediterreanan food <br><img src="https://derbystshops.com/wp-content/uploads/2019/04/cava-featured.jpg" width=200px>')
        .openPopup();

function addMarker(lat,lng,message){ 
    console.log(message) 
    L.marker([lat,lng]).addTo(map).bindPopup(message) 
    return message 
}

addMarker(37,-122,'you are awesome! you automated a marker function')
addMarker(37,-122,'home','home land!')
addMarker(32,-118,'work','where i work land!')
addMarker(39,-119,'location 1','random location')
addMarker(36,-120,'location 2','another random location')

        