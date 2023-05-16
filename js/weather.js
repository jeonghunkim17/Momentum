const API_KEY = "7ce9bcf01a4d3818471a2a6fb1837cdc";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherIcon = document.createElement("img");
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weatherIcon.alt = "icon";
      const weatherStatus = document.querySelector("#weatherNow");
      weatherStatus.appendChild(weatherIcon);
      const weather = document.querySelector("#weatherNow span");
      const city = document.querySelector("#area span");
      city.innerText = data.name;
      weather.innerText = `${Math.ceil(data.main.temp)}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
