"use strict";
(function () {
  if (fixedPluginButtonNav) {
    fixedPluginButtonNav.onclick = function () {
      if (!fixedPlugin.classList.contains("show")) {
        fixedPlugin.classList.add("show");
      } else {
        fixedPlugin.classList.remove("show");
      }
    };
  }

  if (navbar) {
    if (navbar.getAttribute("data-scroll") == "true" && buttonNavbarFixed) {
      buttonNavbarFixed.setAttribute("checked", "true");
    }
  }
});

/*  Fixed Plugin */

// get all variables
var fixedPlugin = document.querySelector(".fixed-plugin");
var fixedPluginButton = document.querySelector(".fixed-plugin-button");
var fixedPluginButtonNav = document.querySelector(".fixed-plugin-button-nav");
var fixedPluginCard = document.querySelector(".fixed-plugin .card");
var fixedPluginCloseButton = document.querySelectorAll(
  ".fixed-plugin-close-button"
);
var navbar = document.getElementById("navbarBlur");
var buttonNavbarFixed = document.getElementById("navbarFixed");

if (fixedPlugin) {
  if (fixedPluginButton) {
    fixedPluginButton.onclick = function () {
      if (!fixedPlugin.classList.contains("show")) {
        fixedPlugin.classList.add("show");
      } else {
        fixedPlugin.classList.remove("show");
      }
    };
  }

  fixedPluginCloseButton.forEach(function (el) {
    el.onclick = function () {
      fixedPlugin.classList.remove("show");
    };
  });

  document.querySelector("body").onclick = function (e) {
    if (
      e.target != fixedPluginButton &&
      e.target.closest(".fixed-plugin .card") != fixedPluginCard
    ) {
      fixedPlugin.classList.remove("show");
    }
  };
}

//Set Main Color
function switchMainColor(a) {
  var parentTxt = document.querySelector(".main-Color");
  var parentBG = document.querySelector(".bg-main-Color");
  var parentShadow = document.querySelector(".shadow-main-color");
  var parentTxt2 = document.querySelector(".main-footer-Color");

  var txtColors = document.getElementsByClassName("side-color");

  var color = a.getAttribute("data-color");

  if (parentTxt.classList.contains("text-primary")) {
    parentTxt.classList.remove("text-primary");
    parentBG.classList.remove("bg-primary");
    parentShadow.classList.remove("focus-primary");
  }
  if (parentTxt.classList.contains("text-dark")) {
    parentTxt.classList.remove("text-dark");
    parentBG.classList.remove("bg-dark");
    parentShadow.classList.remove("focus-dark");
  }
  if (parentTxt.classList.contains("text-info")) {
    parentTxt.classList.remove("text-info");
    parentBG.classList.remove("bg-info");
    parentShadow.classList.remove("focus-info");
  }
  if (parentTxt.classList.contains("text-success")) {
    parentTxt.classList.remove("text-success");
    parentBG.classList.remove("bg-success");
    parentShadow.classList.remove("focus-success");
  }
  if (parentTxt.classList.contains("text-warning")) {
    parentTxt.classList.remove("text-warning");
    parentBG.classList.remove("bg-warning");
    parentShadow.classList.remove("focus-warning");
  }
  if (parentTxt.classList.contains("text-danger")) {
    parentTxt.classList.remove("text-danger");
    parentBG.classList.remove("bg-danger");
    parentShadow.classList.remove("focus-danger");
  }
  if (parentTxt.classList.contains("text-secondary")) {
    parentTxt.classList.remove("text-secondary");
    parentBG.classList.remove("bg-secondary");
    parentShadow.classList.remove("focus-secondary");
  }
  parentTxt.classList.add("text-" + color);
  parentBG.classList.add("bg-" + color);
  parentShadow.classList.add("focus-" + color);

  parentTxt2.style.color = `var(--bs-${color})`;
  parentTxt2.style.textDecoration = `var(--bs-${color})`;

  for (var i = 0; i < txtColors.length; i++) {
    txtColors[i].style.color = `var(--bs-${color})`;
  }
}
let WebModeClass = "bg-dark text-white";
let WebModeMoreClass = "bg-more-dark text-white";

// Light Mode / Dark Mode
function darkMode(el) {
  const text_dark = document.querySelectorAll(".text-dark");
  const text_white = document.querySelectorAll(".text-white");
  const bg_dark = document.querySelectorAll(".bg-dark");
  const bg_white = document.querySelectorAll(".bg-white");

  const bg_more_dark = document.querySelectorAll(".bg-more-dark");
  const bg_more_white = document.querySelectorAll(".bg-more-white");

  if (!el.getAttribute("checked")) {
    el.setAttribute("checked", true);
    /*  document.getElementById("weather-layout").style.backgroundImage =
      "url(Assets/imgs/street-bg-dark.jpg)";*/
    WebModeClass = "bg-dark text-white";
    WebModeMoreClass = "bg-more-dark text-white";
    document.getElementById("weather-overlay").style.backgroundColor =
      "#00000063";
    for (var i = 0; i < text_dark.length; i++) {
      text_dark[i].classList.remove("text-dark");
      text_dark[i].classList.add("text-white");
    }
    for (var i = 0; i < bg_white.length; i++) {
      bg_white[i].classList.remove("bg-white");
      bg_white[i].classList.add("bg-dark");
    }
    for (var i = 0; i < bg_more_white.length; i++) {
      bg_more_white[i].classList.remove("bg-more-white");
      bg_more_white[i].classList.add("bg-more-dark");
    }
  } else {
    el.removeAttribute("checked");
    /*  document.getElementById("weather-layout").style.backgroundImage =
      "url(Assets/imgs/street-bg-light.jpg)";*/
    document.getElementById("weather-overlay").style.backgroundColor =
      "#00000000";
    WebModeClass = "bg-white text-dark";
    WebModeMoreClass = "bg-more-white text-dark";
    for (var i = 0; i < text_white.length; i++) {
      text_white[i].classList.remove("text-white");
      text_white[i].classList.add("text-dark");
    }
    for (var i = 0; i < bg_dark.length; i++) {
      bg_dark[i].classList.remove("bg-dark");
      bg_dark[i].classList.add("bg-white");
    }
    for (var i = 0; i < bg_more_dark.length; i++) {
      bg_more_dark[i].classList.remove("bg-more-dark");
      bg_more_dark[i].classList.add("bg-more-white");
    }
  }

  console.log(el.getAttribute("checked"));
}

/* Search Weather in API */

//Add event to input to get value entered by user
let searchWeather = document.getElementById("searchWeather");
const API_KEY = "ENTER YOUR API";
searchWeather.addEventListener("keyup", getValueToSearch);

let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  d = new Date(),
  CurrentLoc,
  todayWeather,
  tomorrowWeather,
  nextTomorrowWeather;

function getValueToSearch() {
  let searchWord = searchWeather.value;
  if (searchWord.length >= 3) {
    getWeather(searchWord);
  }
}

async function getWeather(city = "Cairo") {
  let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`
    ),
    responseData = await response.json();

  CurrentLoc =
    responseData.location.name + " , " + responseData.location.region;

  todayWeather = {
    date: getDayName(responseData.forecast.forecastday[0].date),
    degree: {
      maxDegree: responseData.forecast.forecastday[0].day.maxtemp_c,
      minDegree: responseData.forecast.forecastday[0].day.mintemp_c,
    },
    condition: {
      icon: responseData.forecast.forecastday[0].day.condition.icon,
      text: responseData.forecast.forecastday[0].day.condition.text,
    },
  };
  tomorrowWeather = {
    date: getDayName(responseData.forecast.forecastday[1].date),
    degree: {
      maxDegree: responseData.forecast.forecastday[1].day.maxtemp_c,
      minDegree: responseData.forecast.forecastday[1].day.mintemp_c,
    },
    condition: {
      icon: responseData.forecast.forecastday[1].day.condition.icon,
      text: responseData.forecast.forecastday[1].day.condition.text,
    },
  };
  nextTomorrowWeather = {
    date: getDayName(responseData.forecast.forecastday[2].date),
    degree: {
      maxDegree: responseData.forecast.forecastday[2].day.maxtemp_c,
      minDegree: responseData.forecast.forecastday[2].day.mintemp_c,
    },
    condition: {
      icon: responseData.forecast.forecastday[2].day.condition.icon,
      text: responseData.forecast.forecastday[2].day.condition.text,
    },
  };

  displayLocationInfo();
  displayTodayWeather();
  displayTomorrowWeather();
  displayNextTomorrowWeather();
}
getWeather("Cairo");
// get day name of week
function getDayName(dateValue) {
  let d = new Date(dateValue),
    x = d.getDay(),
    dayName = "";
  switch (x) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thrusday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      break;
  }
  return dayName;
}
function displayLocationInfo() {
  let Currentlocation = document.getElementById("LocationInfo");
  if (Currentlocation) {
    Currentlocation.innerHTML = `<h3 class="city text-white"> ${CurrentLoc} </h3>`;
  }
}
//display today weather
function displayTodayWeather() {
  let today = document.getElementById("today");
  today.innerHTML = `<div class="card ${WebModeClass}">
  <div class="card-header d-flex justify-center ${WebModeMoreClass}">
    <h5 class="day">${todayWeather.date}</h5>
  </div>
  <div class="card-body">
    <div class="card-title degree">
    <div class="row">
    <div class="col-md-6">
    <h4 class="degree">${todayWeather.degree.maxDegree}</h4>
    <h5 class="side-color">${todayWeather.degree.minDegree}<sup>o</sup>C</h5>
    </div>
    <div class="col-md-6 weather-item-icon">
    <img src="https:${todayWeather.condition.icon}" alt="" />
    </div>
    <p class="card-text weather-txt">${todayWeather.condition.text}</p>
    </div>
</div>`;
}

function displayTomorrowWeather() {
  let tomorrow = document.getElementById("tomorrow");
  tomorrow.innerHTML = `<div class="card ${WebModeClass}">
  <div class="card-header d-flex justify-content-between ${WebModeMoreClass}">
    <h5 class="day">${tomorrowWeather.date}</h5>
  </div>
  <div class="card-body ">
    <div class="card-title degree">
    <div class="row">
    <div class="col-md-6">
    <h4 class="degree">${tomorrowWeather.degree.maxDegree}</h4>
    <h5 class="side-color">${tomorrowWeather.degree.minDegree}<sup>o</sup>C</h5>
    </div>
    <div class="col-md-6 weather-item-icon">
    <img src="https:${tomorrowWeather.condition.icon}" alt="" />
    </div>
    <p class="card-text weather-txt">${tomorrowWeather.condition.text}</p>
    </div>
</div>`;
}

function displayNextTomorrowWeather() {
  let nextTomorrow = document.getElementById("nextTomorrow");
  nextTomorrow.innerHTML = `<div class="card ${WebModeClass}">
  <div class="card-header  d-flex justify-content-between ${WebModeMoreClass}">
    <h5 class="day">${nextTomorrowWeather.date}</h5>
  </div>
  <div class="card-body ">
    <div class="card-title degree">
    <div class="row">
    <div class="col-md-6">
    <h4 class="degree">${nextTomorrowWeather.degree.maxDegree}</h4>
    <h5 class="side-color">${nextTomorrowWeather.degree.minDegree}<sup>o</sup>C</h5>
    </div>
    <div class="col-md-6 weather-item-icon">
    <img src="https:${nextTomorrowWeather.condition.icon}" alt="" />
    </div>
    <p class="card-text weather-txt">${nextTomorrowWeather.condition.text}</p>
    </div>
</div>`;
}
