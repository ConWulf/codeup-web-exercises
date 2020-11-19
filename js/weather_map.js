$(document).ready(function () {
"use strict"

    const weatherCard = $('#weatherInfo');
    const currentWeather = $('#currentInfo');
    const location = $('#location');

    mapboxgl.accessToken = mapboxKey;
    const mapObj = {
        container: 'map',
        center: [-98.49, 29.42], // starting position [lng, lat]
        zoom: 9, // starting zoom
        minZoom: 2,
        style: 'mapbox://styles/mapbox/satellite-streets-v11'
    }

    const markerStyle = {
        draggable: true,
        color: '#ADFCF9'
    }

    const geocodeOptions = {accessToken: mapboxgl.accessToken,
        marker: false,
        reverseGeocode: true,
        collapsed: true,
    }

    const map = new mapboxgl.Map(mapObj);
    let marker = new mapboxgl.Marker(markerStyle)
        .setLngLat([-98.49, 29.42])
        .addTo(map);

    function getDataOnMove() {
        marker.on("dragend", function () {
            let getCoordinates = marker.getLngLat();
            renderFiveDayWeather(getCoordinates.lng, getCoordinates.lat);
            renderCurrentWeather(getCoordinates.lng, getCoordinates.lat);
        });
    }

    getDataOnMove()


    function currentWeatherData(weatherObj) {
        let cardHtml = "";
        cardHtml += '<div class="card" id="currentWeather">'
        cardHtml += `<div class="card-header">
                 <h5 class="card-subtitle mb-2 text-muted">${dates(weatherObj.current.dt)}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">${times(weatherObj.current.dt)}</h6>
                 </div>`
        cardHtml += '<div class="card-body">'
        cardHtml += `<p class="card-text">Temperature: ${weatherObj.current.temp}°F</p>
                  ${weatherDescription(weatherObj.current.weather)}`
        cardHtml += `<p class="card-text">Humidity: ${weatherObj.current.humidity}%</p>
                <p class="card-text">Dew Point: ${weatherObj.current.dew_point}°F</p>
                <p class="card-text">UV Index: ${weatherObj.current.uvi}</p>`
        cardHtml += '</div>'
        cardHtml += '</div>'

        return cardHtml;

    }

    function fiveDayWeatherData(weatherObj) {
        let cardHtml = "";
        cardHtml += '<div class="card weather-info text-center mb-3">'
        cardHtml += `<div class="card-header date">
                 <h6 class="card-subtitle mb-2 text-muted">${dates(weatherObj.dt)}</h6>
                 </div>`
        cardHtml += '<div class="card-body">'
        cardHtml += `<p class="card-text">${weatherObj.temp.day}°F</p> ${weatherDescription(weatherObj.weather)}`
        cardHtml += `<p class="card-text">Humidity: ${weatherObj.humidity}%</p>
                <p class="card-text">Dew Point: ${weatherObj.dew_point}°F</p>
                <p class="card-text">UV Index: ${weatherObj.uvi}</p>`
        cardHtml += '</div>'
        cardHtml += '</div>'
        return cardHtml;
    }

    function dates(unixTime) {
        let milliseconds = unixTime * 1000;
        let dateObj = new Date(milliseconds);
        let options = {
            weekday: "long", month: "long",
            day: "numeric", year: "numeric"
        }
        return dateObj.toLocaleString("en-US", options);
    }

    function times(unixTime) {
        let milliseconds = unixTime * 1000;
        let dateObj = new Date(milliseconds);
        let options = {hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short"}
        return dateObj.toLocaleString("en-US", options);
    }

    //render the icon and description
    function weatherDescription(descriptionArr) {
        let descriptorHtml = "";
        descriptionArr.forEach(function (descriptor) {
            descriptorHtml += `<a class="card-text" href="#"><img src="http://openweathermap.org/img/wn/${descriptor.icon}@2x.png"></a>`
            descriptorHtml += `<p class="card-text">${descriptor.description}</p>`
        });
        return descriptorHtml;
    }

    //ajax request for five day
    function renderFiveDayWeather(lng, lat) {
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            "appid": openWeatherKey,
            "lat": lat,
            "lon": lng,
            "exclude": "minutely,hourly",
            "units": "imperial",
            "lang": "ja"
        }).done(function (data) {
            let cards = "";
            let counter = 0;
            for (const days of data.daily) {
                counter += 1;
                if (counter === 1) {
                    continue;
                }
                cards += fiveDayWeatherData(days);
                if (counter === 6) {
                    break;
                }
            }
            weatherCard.html(cards);
        }).fail(function () {
            weatherCard.html(`<h3>we cannot find that location</h3>`);
        });
    }

    //ajax request for the current weather
    function renderCurrentWeather(lng, lat) {
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            "appid": openWeatherKey,
            "lat": lat,
            "lon": lng,
            "exclude": "minutely,hourly,daily,alerts",
            "units": "imperial",
            "lang": "ja"
        }).done(function (data) {
            let cards = "";
                cards += currentWeatherData(data);
            currentWeather.html(cards);
            console.log(data);
        }).fail(function () {
            weatherCard.html(`<h3>we cannot find that location</h3>`);
        });
    }

    renderFiveDayWeather(-98.49, 29.42)
    renderCurrentWeather(-98.49, 29.42)

    //function to get location name, returns promise
    function reverseGeocode(coordinates, token) {
        let baseUrl = 'https://api.mapbox.com';
        let endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
            })
            // to get all the data from the request, comment out the following three lines...
            .then(function(data) {
                return data.features[2].place_name;
            });
    }

    // set text on navbar initially
    reverseGeocode({lng: -98.49, lat: 29.42}, mapboxKey).then(result => {
        location.text(result);
    })

// add geocoder
    let geocoder = new MapboxGeocoder(geocodeOptions);
    map.addControl(geocoder);

// set location on drag
    marker.on("dragend", function () {
        let getCoordinates = marker.getLngLat();
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
        renderCurrentWeather(result.result.center[0], result.result.center[1]);
        getDataOnMove();
        location.text(result.result["place_name_en-US"]);
        // set location on drag
        marker.on("dragend", function () {
            let getCoordinates = marker.getLngLat();
            reverseGeocode({lng: getCoordinates.lng, lat: getCoordinates.lat}, mapboxKey).then(result => {
                location.text(result);
            })
        });
    });


});