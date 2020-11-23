$(document).ready(function () {
    "use strict"
// containers to set html
    const weatherCard = $('#weatherInfo');
    const currentWeather = $('#currentInfo');
    const location = $('#location');
    let scrollInitialPos = $(window).scrollTop();

    mapboxgl.accessToken = mapboxKey;
//     //object to display map
    const mapObj = {
        container: 'map',
        center: [-98.49, 29.42], // starting position [lng, lat]
        zoom: 9, // starting zoom
        minZoom: 2,
        style: 'mapbox://styles/mapbox/satellite-streets-v11'
    }
    //marker styling
    const markerStyle = {
        draggable: true,
        color: '#ADFCF9'
    }
    //options object to pass to geocoder
    const geocodeOptions = {
        accessToken: mapboxgl.accessToken,
        marker: false,
        reverseGeocode: true,
        collapsed: true,
        flyTo: {
            speed: 1
        }
    }

    const map = new mapboxgl.Map(mapObj);
    let marker = new mapboxgl.Marker(markerStyle)
        .setLngLat([-98.49, 29.42])
        .addTo(map);

    //function to set the weather on marker drag
    function getDataOnMove() {
        marker.on("dragend", function () {
            let getCoordinates = this.getLngLat();
            renderFiveDayWeather(getCoordinates.lng, getCoordinates.lat);
        });
    }
    getDataOnMove()

    //function to set current data
    const currentWeatherData = weatherObj =>
        `<div class="card border-0 " id="currentWeather">
            <div class="card-body">
            <h5 class="card-subtitle mb-2 text-muted">${dates(weatherObj.dt)}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${times(weatherObj.dt)}</h6>
                <p class="card-text">Temperature: ${weatherObj.temp}°F</p>
                ${weatherDescription(weatherObj.weather)}
                <p class="card-text">Humidity: ${weatherObj.humidity}%</p>
                <p class="card-text">Dew Point: ${weatherObj.dew_point}°F</p>
                <p class="card-text">UV Index: ${weatherObj.uvi}</p>
            </div>
         </div>`;


    //function to set the five day cards
    const fiveDayWeatherData = weatherObj =>
        `<div class="card weather-info text-center mb-3 border-0">
            <div class="card-header date border-0">
              <h6 class="card-subtitle mb-2 text-muted">${dates(weatherObj.dt)}</h6>
            </div>
            <div class="card-body">
              <p class="card-text">${weatherObj.temp.day}°F</p>
               ${weatherDescription(weatherObj.weather)}
              <p class="card-text">Humidity: ${weatherObj.humidity}%</p>
              <p class="card-text">Dew Point: ${weatherObj.dew_point}°F</p>
              <p class="card-text">UV Index: ${weatherObj.uvi}</p>
            </div>
         </div>`;

    //function to get date
    const dates = unixTime => {
        let milliseconds = unixTime * 1000;
        let dateObj = new Date(milliseconds);
        let options = {
            weekday: "long", month: "long",
            day: "numeric", year: "numeric"
        }
        return dateObj.toLocaleString("en-US", options);
    }

    //function to get time
    const times = unixTime => {
        let milliseconds = unixTime * 1000;
        let dateObj = new Date(milliseconds);
        let options = {hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short"}
        return dateObj.toLocaleString("en-US", options);
    }

    //render the icon and description
    const weatherDescription = descriptionArr => {
        let descriptorHtml = "";
        descriptionArr.forEach(function (descriptor) {
            descriptorHtml += `<a class="card-text" href="#"><img src="http://openweathermap.org/img/wn/${descriptor.icon}@2x.png"></a>
                               <p class="card-text">${descriptor.description}</p>`
        });
        return descriptorHtml;
    }

    //ajax request for five day
    const renderFiveDayWeather = (lng, lat) => {
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            appid: openWeatherKey,
            lat: lat,
            lon: lng,
            exclude: "minutely,hourly,alerts",
            units: "imperial"
        }).done(data => {
            for (const [i, days] of data.daily.entries()) {
                 if (i > 0 ) {
                    weatherCard.append(fiveDayWeatherData(days));
                }
            }
            currentWeather.html(currentWeatherData(data.current))
            console.log(data);
        }).fail(() => {
            weatherCard.html(`<h3>we cannot find that location</h3>`);
        });
    }

    renderFiveDayWeather(-98.49, 29.42)

    //function to get location name, returns promise
    function reverseGeocode(coordinates, token) {
        let baseUrl = 'https://api.mapbox.com';
        let endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                return res.json();
            })
            // to get all the data from the request, comment out the following three lines...
            .then(function (data) {
                return data.features[2].place_name;
            });
    }

    reverseGeocode({lng: -98.49, lat: 29.42}, mapboxKey).then(result => {
        location.text(result);
    })

    // set text on navbar initially
    reverseGeocode({lng: -98.49, lat: 29.42}, mapboxKey).then(result => {
        location.text(result);
    })

// add geocoder
    let geocoder = new MapboxGeocoder(geocodeOptions);
    map.addControl(geocoder);

// set location on drag
    marker.on("dragend", function () {
        let getCoordinates = this.getLngLat();
        reverseGeocode({lng: getCoordinates.lng, lat: getCoordinates.lat}, mapboxKey).then(result => {
            location.text(result);
        })
    });

    //remove and marker and reset it on the searched point
    geocoder.on("result", function (result) {
        marker.remove();
        marker = new mapboxgl.Marker(markerStyle)
            .setLngLat([result.result.center[0], result.result.center[1]])
            .addTo(map);
        renderFiveDayWeather(result.result.center[0], result.result.center[1]);
        getDataOnMove();
        location.text(result.result["place_name_en-US"]);
        // set location on drag
        marker.on("dragend", function () {
            let getCoordinates = this.getLngLat();
            reverseGeocode({lng: getCoordinates.lng, lat: getCoordinates.lat}, mapboxKey).then(result => {
                location.text(result);
            })
        });
    });

    // $(window).scroll(function () {
    //     const scrollChangePos = $(this).scrollTop();
    //     if (scrollChangePos > scrollInitialPos) {
    //         $('.navigation').slideUp('fast')
    //     } else {
    //         $('.navigation').slideDown('fast');
    //     }
    //     scrollInitialPos = scrollChangePos;
    // });


});