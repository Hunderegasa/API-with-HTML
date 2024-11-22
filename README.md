# API-with-HTML
Build a Website using an API with HTML, JavaScript, and JSON


o build a weather report website using an API, HTML, JavaScript, and JSON, we will integrate an external weather API, such as OpenWeatherMap, which provides weather data in JSON format. Below is a step-by-step guide with the complete source code for building a weather report website.
Steps:

    Get API Key: You need an API key from OpenWeatherMap to access the weather data. Sign up at OpenWeatherMap and get your free API key.

    Create HTML Structure: This will include fields to enter the city name, a button to fetch the weather, and a section to display the results.

    Fetch Weather Data using JavaScript: Use JavaScript to fetch weather data from the OpenWeatherMap API and display it in the HTML.

    Handle JSON Data: Parse the returned JSON data and dynamically update the HTML to show the weather report.



Explanation of the Code
HTML File (index.html)

    Input Field:
        <input type="text" id="city" class="input-field" placeholder="Enter city name" /> allows the user to enter the city for which they want the weather.
    Button:
        <button class="btn" id="getWeather">Get Weather</button> triggers the JavaScript function to fetch the weather data.
    Weather Info Section:
        <div class="weather-info" id="weatherInfo"> is where the weather details will be displayed after fetching data.

JavaScript File (script.js)

    API Key: Replace 'your_api_key_here' with your actual OpenWeatherMap API key.
    fetchWeather(city):
        This function uses the fetch API to make a request to the OpenWeatherMap API.
        It appends the city name and API key to the URL, with &units=metric to get temperature in Celsius.
        The function checks if the response is successful (status code 200).
    displayWeather(data):
        This function extracts relevant weather information (e.g., temperature, humidity, wind speed) from the JSON data and dynamically updates the webpage.

Fetch API

    fetch(url): This sends an HTTP request to the OpenWeatherMap API with the query parameters: city name, API key, and temperature unit.
    response.json(): This parses the JSON data returned from the API.
    Error Handling: If the city is not found, or if there is an error fetching the data, an alert is shown.

Styling (CSS)

    The design uses simple styles to center the content, make input fields look clean, and add a button hover effect for better user experience.

How to Run the Weather Report Website:

    Sign up for an OpenWeatherMap API Key:
        Go to OpenWeatherMap and sign up to get your free API key.
    Replace the API Key:
        In the script.js file, replace 'your_api_key_here' with your actual API key.
    Save Files:
        Save the HTML code as index.html and the JavaScript code as script.js in the same directory.
    Open the Website:
        Open index.html in your browser.

Expected Output:

When you open the website and enter a city name, you'll get a report like this:

Weather in London
Condition: clear sky
Temperature: 15°C
Humidity: 63%
Wind Speed: 4.6 m/s
Notes:

    API Key Security: In production, it’s recommended to keep your API key secure, typically on the backend, to avoid exposing it publicly in your frontend code.
    Error Handling: This basic implementation checks for missing or incorrect city names but could be expanded to handle other types of errors (e.g., network issues).
