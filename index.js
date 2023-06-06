// API key
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

// HTML elements;
const search = document.querySelector("#search");
const button = document.querySelector("button");
const message = document.querySelector("#message");

// action listener to button;
button.addEventListener("click", checkButtonEvent);


// object to store data obtain from weather API;
let weatherData = {};

// function on button;
function checkButtonEvent() {

    // setting visible to loading;
    message.innerHTML = "Loading...";
    message.classList.remove("hide");

    const city = search.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            weatherData.temperature = `${data["main"]["temp"]}<sup>o</sup>C`;
            weatherData.atmosphere = data["weather"][0]["description"];
            weatherData.pressure = data["main"]["pressure"];
            weatherData.city = data["name"];
            weatherData.country = data["sys"]["country"];
            weatherData.time = getCurrentTime(data["timezone"]);

            message.innerHTML = weatherData.time;
            window.location.href = "weather.html";
    });
}

// caculate time from timezone;
function getCurrentTime(timezone) {
    const currentTime = new Date();
    const localTimezoneOffset = currentTime.getTimezoneOffset() * 60; // Get local timezone offset in seconds
    const targetTime = new Date(currentTime.getTime() + (timezone + localTimezoneOffset) * 1000);
  
    return targetTime.toLocaleTimeString();
}