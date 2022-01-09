let elForm = document.querySelector('.weather__form');
let elInp = document.querySelector('.weather__inp');
let elSearch = document.querySelector('.weather__search');
let api_key = "fdface970e3c36a5fef6fa02fb3755cb";
let city = "Tashkent";
elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if(elInp.value === "") {
    elInp.value = "";
  } 
  else {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + elInp.value + "&units=metric&appid=" + api_key +"") 
    .then((e) => {
      return e.json();
    }).then((data) => {
        document.querySelector('.weather__country-res').innerHTML = data.name;
        document.querySelector('.weather__humidity-res').innerHTML = data.main.humidity + "%";
        document.querySelector('.weather__wind-res').innerHTML = data.wind.speed + "km/h";
        document.querySelector('.weather__gradus-res').innerHTML = data.main.temp;
        document.querySelector('.weather__gradus-icon').innerHTML = "℃";
        document.querySelector('.weather__img').src = "https://openweathermap.org/img/wn/" + data.weather[0].icon +".png";
        document.querySelector('.weather__des').innerHTML = data.weather[0].description;
        elInp.value = "";
    });
  }
  
})
