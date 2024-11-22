const apiKey = 'ac2375f3f51f17e64943c3e2ee5c639d'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            alert('Error fetching weather data');
            console.error(error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    
    const city = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    
    const weatherHTML = `
        <h3>${city}, ${country}</h3>
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon" />
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Condition:</strong> ${description}</p>
    `;

    weatherInfo.innerHTML = weatherHTML;
}
