(function () {



mapboxgl.accessToken = mapboxKey;
var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 10
}

var favoriteRestaurants = [{
    address: "9546 Old Keene Mill Rd, Burke, VA 22015",
    name: "H Pho"
},{
    address: "8190 Strawberry Ln #1, Falls Church, VA 22042",
    name: "Four Sisters"
},{
    address: "9339 Wurzbach Rd, San Antonio, TX 78240",
    name: "Pasha"
}]
var map = new mapboxgl.Map(mapOptions);

var markerHeight = 40;

favoriteRestaurants.forEach((restaurant, index) => {
    geocode(restaurant.address, mapboxKey).then(function (result) {
        // console.log(index);
        switch (index) {
            case 0:
                let flyToRestaurant1 = {
                    center: result,
                    curve: 1.1,
                    speed: .9,
                    zoom: 19
                }
                document.getElementById("flyBtn").onclick = function() {
                    map.flyTo(flyToRestaurant1);
                }
                break;
            case 1:
                let flyToRestaurant2 = {
                    center: result,
                    curve: 1.1,
                    speed: .9,
                    zoom: 19
                }
                document.getElementById("flyToGloryBtn").onclick = function() {
                    map.flyTo(flyToRestaurant2);
                }
                break;
            case 2:
                let flyToRestaurant3 = {
                    center: result,
                    curve: 1.1,
                    speed: .9,
                    zoom: 19
                }
                document.getElementById("flyToR2").onclick = function() {
                    map.flyTo(flyToRestaurant3);
                }
        }


            var marker = new mapboxgl.Marker()
                .setLngLat(result)
                .addTo(map)

        if (result[0] === -77.273887) {
        map.on("click", function () {
                var popupOffsets = {'bottom': [0, -markerHeight]}
                var popup = new mapboxgl.Popup({offset: popupOffsets})
                    .setLngLat(result)
                    .setHTML("<h3>" + restaurant.name + "</h3>" + "<h5>" + restaurant.address + "</h5>")
                    .addTo(map);
            marker.setPopup(popup)
            });
        }
    })
})


//     geocode("9546 Old Keene Mill Rd, Burke, VA 22015", mapboxKey).then(result1 => {
//     let flyToRestaurant = {
//         center: result1,
//         curve: 1.1,
//         speed: .9,
//         zoom: 17
//     }
//     document.getElementById("flyBtn").onclick = function() {
//         map.flyTo(flyToRestaurant);
//     }
//     var phoMarker = new mapboxgl.Marker()
//         .setLngLat(result1)
//         .addTo(map)
//     map.on("click", function() {
//         var popupOffsets = {'bottom': [0, -markerHeight]}
//         var popup1 = new mapboxgl.Popup({offset: popupOffsets})
//             .setLngLat(result1)
//             .setHTML("<h3>H Pho</h3>")
//             .addTo(map)
//     })
//
// })




    // geocode("8190 Strawberry Ln #1, Falls Church, VA 22042", mapboxKey).then(result2 => {
    //     var flyToRestaurant = {
    //         center: result2,
    //         curve: 1.1,
    //         speed: .9,
    //         zoom: 17
    //     }
    //     document.getElementById("flyToGloryBtn").onclick = function() {
    //         map.flyTo(flyToRestaurant);
    //     }
    //     var gloryMarker = new mapboxgl.Marker()
    //         .setLngLat(result2)
    //         .addTo(map)
    //     map.on("click", function() {
    //         var popupOffsets = {'bottom': [0, -markerHeight]}
    //         var popup2 = new mapboxgl.Popup({offset: popupOffsets})
    //             .setLngLat(result2)
    //             .setHTML("<h3>H Pho</h3>")
    //             .addTo(map)
    //     })
    // })







})();