// HTML elements;
const searchInput = document.querySelector("#searchInput");
const citylist = document.querySelector("#citylist");
const searchButton = document.querySelector("Button");

// action listener to searchButton;
searchButton.addEventListener("click", searchButtonEvent);

// add listener to searchInput-bar;
searchInput.addEventListener("input", addSuggestions);

// searchInput-bar listener to add to give suggestions;
function addSuggestions() {

    let cityName = new String(searchInput.value);

    // GeoNames API;
    const CITIES_API_URL = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=5&username=junaid_ali`;

    let cities = [];
    
    // getting data using API;
    fetch(CITIES_API_URL)
        .then(response =>  response.json())
        .then(data => {

            data.geonames.forEach(cityInfo => {
                cities.push(cityInfo.toponymName);
            });

            // adding cities to suggestion;
            cities = cities.map(element => `<option value="${element}">${element}</option>`);
            citylist.innerHTML = cities;
        })
        .catch(reason => {
            console.log(reason);
        });
}

// check searchButton listener;
function searchButtonEvent() {
    const city = searchInput.value;

    if(city == "") {
        return;
    }

    window.location.href = `weather.html?city=${city}`;
}