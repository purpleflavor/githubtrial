let now = new Date();

let i = document.querySelector("i");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

i.innerHTML = `${day} ${date}, ${hours}:${minutes}`;

function DisplayWeather(response) {
  document.querySelector("#cityName").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(cityName) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(DisplayWeather);
}

function search(event) {
  event.preventDefault();
  let cityName = document.querySelector("#cityp").value;
  searchCity(cityName);
  /*let cityName = document.querySelector("#cityName");
  let cityp = document.querySelector("#cityp");
  cityName.innerHTML = cityp.value;*/

  searchCity(cityName);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showPosition(position) {
  let apiKey = "5bd5d2ab0481b15d7a6336f49e9f66d6";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&callback=test&appId=${apiKey}&units=metric`;

  axios.get(apiUrl).then(DisplayWeather);
}
function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getPosition);
searchCity("Madrid");
