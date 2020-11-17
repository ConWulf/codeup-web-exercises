$(document).ready(function () {

    let weatherCard = $('#weatherInfo');

    mapboxgl.accessToken = mapboxKey;
    mapObj = {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    }

    var map = new mapboxgl.Map(mapObj);

    // function weatherData(weatherObj) {
    //     let cardHtml = "";
    //     cardHtml += '<div class="card" style="width: 18rem;">'
    //     cardHtml += '<div class="card-body">'
    //     cardHtml += `<h5 class="card-title">Current Forecast</h5>
    //             <h6 class="card-subtitle mb-2 text-muted">San Antonio</h6>
    //             <p class="card-text">Temperature: ${weatherObj.current.temp}°F</p>`
    //     cardHtml += `<p class="card-text">Humidity: ${weatherObj.current.humidity}%</p>
    //             <p class="card-text">Dew Point: ${weatherObj.current.dew_point}°F</p>
    //             <p class="card-text">UV Index: ${weatherObj.current.uvi}</p>`
    //     cardHtml += '</div>'
    //     cardHtml += '</div>'
    //     return cardHtml;
    // }

    function weatherData(weatherObj) {
        let cardHtml = "";
        cardHtml += '<div class="card weather-info">'
        cardHtml += '<div class="card-body">'
        cardHtml += `<h6 class="card-subtitle mb-2 text-muted">${dates(weatherObj.dt)}</h6>
                <p class="card-text">Temperature: ${weatherObj.temp.day}°F</p>`
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
        let options = {weekday: "long", month: "long",
            day: "numeric", year: "numeric",
            hour: "numeric", timeZoneName: "short"
        }
        return dateObj.toLocaleString("en-US", options);
    }

    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        appid: openWeatherKey,
        "lat": 29.42,
        "lon": -98.49,
        "exclude": "minutely,hourly",
        "units": "imperial",
    }).done(function (data) {
        let cards = "";
        let counter = 0;
        for (const days of data.daily) {
            counter += 1;
            cards += weatherData(days)
            if (counter === 5) {
                break;
            }
        }
       weatherCard.html(cards);
        console.log(data);
    });



});