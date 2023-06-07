// HTML elements;
const search = document.querySelector("#search");
const datalist = document.querySelector("#datalist");
const button = document.querySelector("button");
const message = document.querySelector("#message");

// action listener to button;
button.addEventListener("click", checkButtonEvent);

// "input" eventListener on search bar;
let cities = [];

// this function uses API and store all the city names into "cities" ARRAY;
function getCities() {
    const CITIES_API_URL = "https://countriesnow.space/api/v0.1/countries";
    
    fetch(CITIES_API_URL)
        .then(response => response.json())
        .then(data => {

            data["data"].forEach(country => {
                country["cities"].forEach(city => {
                    cities.push(city);
                });
            });
        })
        .catch(reason => {
            console.log(reason);
        });
}

// calling function to get cities using API;
getCities();


search.addEventListener("input", addSuggestions);


function addSuggestions() {

    let city = new String(search.value).toLowerCase();

    let matchedCities = cities.filter(element =>
        new String(element).toLowerCase().startsWith(city));

    matchedCities = matchedCities.map(element => `<option value="${element}">${element}</option>`);

    datalist.innerHTML = matchedCities;
}

function checkButtonEvent() {
    const city = search.value;
    window.location.href = `weather.html?city=${city}`;
}