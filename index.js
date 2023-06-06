// API key
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

// HTML elements;
const search = document.querySelector("#search");
const button = document.querySelector("button");
const message = document.querySelector("#message");

// action listener to button;
button.addEventListener("click", checkButtonEvent);

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
            // console.log(data["main"]["temp"]);
            message.innerHTML = `${data["main"]["temp"]}<sup>o</sup>C`;
    });
}