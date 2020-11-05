/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]

mapboxgl.accessToken = mapboxKey;
var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 10,
    // minPitch: 59,
    // maxPitch: 4
    // minZoom: 6,
    // maxZoom: 16,// starting zoom
}

var map = new mapboxgl.Map(mapOptions);

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~10 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
// TODO TOGETHER: Change the color of the marker
// var markerColor = {
//     color: "#af39db",
//     // draggable: true,
//     scale: 1,
// }
//
// var  alamoMarker = new mapboxgl.Marker (markerColor)
//     .setLngLat([-98.4861, 29.4260])
//     .addTo(map);


// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.

//     var codeupPop = {
//         closeButton: true,
//         closeOnMove: true,
// }
//
// var popup = new mapboxgl.Popup(codeupPop)
//     .setLngLat([-98.489615, 29.426827])
//     .setText("<h1>Codeup Rocks!</h1>")
//     .addTo(map);





// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"
// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>remember the Alamo</p>")
//     .addTo(map)
//     .setMaxWidth('none')
//
// alamoMarker.setPopup(alamoPopup)


/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup.
//https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter


// geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxKey).then(result => {
//    map.setZoom(10);
//     console.log(result);
//    map.setCenter(result);
// })


//TODO: Using the geocode method above, add a marker at Codeup to the map
//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()


// geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxKey).then(result => {
//     console.log(result);
//     map.setCenter(result)
//     var codeupMarker = new mapboxgl.Marker()
//         .setLngLat(result)
//         .addTo(map)
// })



geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxKey).then(result => {
    var fly = {
        center: result,
        zoom: 14,
        speed: 1,
        curve: 1,
        easing(t) {
            return t;
        }
    }
    console.log(result);
    document.getElementById("fly").addEventListener("click", () => {
        map.flyTo(fly);
    })
})

// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo
// TODO: Reverse geocode coordinates of your choice using the reverse geocode method

// reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxKey).then(result => {
//     console.log(result);
// })


