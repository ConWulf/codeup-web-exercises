$(document).ready(function () {

    const weatherCard = $('#weatherInfo');
    const currentWeather = $('#currentInfo');

    mapboxgl.accessToken = mapboxKey;
    const mapObj = {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-98.49, 29.42], // starting position [lng, lat]
        zoom: 9, // starting zoom
        minZoom: 2
    }

    const markerStyle = {
        draggable: true
    }

    const map = new mapboxgl.Map(mapObj);
    const marker = new mapboxgl.Marker(markerStyle)
        .setLngLat([-98.49, 29.42])
        .addTo(map);


    marker.on("dragend", function () {
        let getCoordinates = marker.getLngLat();
        renderFiveDayWeather(getCoordinates.lng, getCoordinates.lat);
        renderCurrentWeather(getCoordinates.lng, getCoordinates.lat);
    });


    // var count = 0
    // function f() {
    //     setTimeout(f, 1000);
    //     count+=1
    //     console.log(count);
    // }
    //
    // f();

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    )

    function currentWeatherData(weatherObj) {
        let cardHtml = "";
        cardHtml += '<div class="card" id="currentWeather">'
        cardHtml += `<div class="card-header">
                 <h5 class="card-subtitle mb-2 text-muted">${dates(weatherObj.current.dt)}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">${times(weatherObj.current.dt)}</h6>
                 </div>`
        cardHtml += '<div class="card-body">'
        cardHtml += `<p class="card-text">Temperature: ${weatherObj.current.temp}°F</p>`
        cardHtml += `<p class="card-text">Humidity: ${weatherObj.current.humidity}%</p>
                <p class="card-text">Dew Point: ${weatherObj.current.dew_point}°F</p>
                <p class="card-text">UV Index: ${weatherObj.current.uvi}</p>`
        cardHtml += '</div>'
        cardHtml += '</div>'

        return cardHtml;

    }

    function fiveDayWeatherData(weatherObj) {
        let cardHtml = "";
        cardHtml += '<div class="card weather-info text-center">'
        cardHtml += `<div class="card-header">
                 <h5 class="card-subtitle mb-2 text-muted">${dates(weatherObj.dt)}</h5>
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


    function weatherDescription(descriptionArr) {
        let descriptorHtml = "";
        descriptionArr.forEach(function (descriptor) {
            descriptorHtml += `<a class="card-text" href="#"><img src="http://openweathermap.org/img/wn/${descriptor.icon}@2x.png"></a>`
            descriptorHtml += `<p class="card-text">${descriptor.description}</p>`
        });
        return descriptorHtml;
    }


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
                cards += fiveDayWeatherData(days);
                if (counter === 5) {
                    break;
                }
            }
            weatherCard.html(cards);
            // console.log(data);
        }).fail(function () {
            weatherCard.html(`<h3>we cannot find that location</h3>`);
        });
    }

    function renderCurrentWeather(lng, lat) {
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            "appid": openWeatherKey,
            "lat": lat,
            "lon": lng,
            "exclude": "minutely,hourly",
            "units": "imperial",
            "lang": "ja"
        }).done(function (data) {
            let cards = "";
                cards += currentWeatherData(data);
            currentWeather.html(cards);
        }).fail(function () {
            weatherCard.html(`<h3>we cannot find that location</h3>`);
        });
    }

    renderFiveDayWeather(-98.49, 29.42)
    renderCurrentWeather(-98.49, 29.42)


});