const apiKey = '675676a6815a678c46bb033c60a9c39f';

const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-sunny",
    "Snow": "wi wi-day-snow",
    "Mist": "wi wi-day-fog",
    "Drizzle": "wi wi-day-sleet",
}
console.log(apiKey);

let apiCall = (city) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fr&units=metric`;

    fetch(url)
        .then((response) => response.json().then((data) => {
            
            console.log(data);
            document.querySelector('#city').innerHTML = `Ville : ${data.name}`;
            document.querySelector('#temp').innerHTML = `Degré :   ${data.main.temp} °C`;
            document.querySelector('#humidity').innerHTML = `Humidité : ${data.main.humidity} %`;
            document.querySelector('#wind').innerHTML = `Vent :  ${data.wind.speed} km/h`;
            document.querySelector('#weather').innerHTML = data.weather[0].description;

            document.querySelector("i.wi").className = weatherIcons[data.weather[0].description];
            document.body.className = data.weather[0].main.toLowerCase();
        })
        )
        .catch((err) => console.log('erreur : ' + err));
    };

            document.querySelector('form').addEventListener('submit', function(event) {
                event.preventDefault();
            let ville = document.querySelector('#inputCity').value;
            apiCall(ville);
});