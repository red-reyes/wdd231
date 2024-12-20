// Toggle menu/mobile view
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
});

//weather
const myTown = document.querySelector('#town');
const myTimezone = document.querySelector('#timezone')
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const myHumidity = document.querySelector('#humidity');
const mySunrise = document.querySelector('#sunrise');
const mySunset = document.querySelector('#sunset');

const myKey = "fd3550dbe16551fca8f4f62fc882bc6c"
const myLat = "11.556445942513216"
const myLong = "104.92518213140643"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;


async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    myHumidity.innerHTML = `${data.main.humidity}%`;

    const myTimezone = `UTC${data.timezone >= 0 ? '+' : ''}${(data.timezone / 3600).toFixed(1)}`;
    document.querySelector('#timezone').innerHTML = myTimezone;

    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    mySunrise.innerHTML = sunriseTime;
    mySunset.innerHTML = sunsetTime;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}

apiFetch();

//footer
//current year
//date
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Display last modification date and time
    const full = document.querySelector("#datetimemodified");

    if (full) { // Check to avoid errors if the element is missing
        const today = new Date();

        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZone: "UTC"
        };

        const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(today);
        full.innerHTML = `Last Modification: <span class="highlight">${formattedDateTime}</span>`;
    }
});
