document.addEventListener('DOMContentLoaded', function() {
    // Handle menu toggle
    const menuToggle = document.querySelector('.menu-toggle');  // Get the menu toggle button
    const menuLinks = document.querySelector('.menu-links');    // Get the menu links container

    // Toggle the visibility of the menu
    menuToggle.addEventListener('click', function() {
        menuLinks.classList.toggle('show');  // Toggle the 'show' class to make the menu visible
    });

    // Wayfinding: Highlight the active link based on the current page
    const currentPage = window.location.pathname; // Get the current page's path
    const links = document.querySelectorAll('.menunav .menu-links a'); // Get all links in the nav

    links.forEach(link => {
        // Check if the link href matches the current page path
        if (link.href.includes(currentPage)) {
            link.classList.add('active'); // Add active class to the current page link
        }
    });

    // Footer: Display the current year and last modification date/time
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Display last modification date and time
    const full = document.querySelector("#datetimemodified");
    if (full) {
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

    // Weather: Fetch and display weather data
    const myTown = document.querySelector('#town');
    const myDescription = document.querySelector('#description');
    const myTemperature = document.querySelector('#temperature');
    const myGraphic = document.querySelector('#graphic');
    const myHumidity = document.querySelector('#humidity');
    const mySunrise = document.querySelector('#sunrise');
    const mySunset = document.querySelector('#sunset');

    const myKey = "fd3550dbe16551fca8f4f62fc882bc6c";
    const myLat = "24.155857776857115";
    const myLong = "120.66604109734003";

    const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

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
        myTemperature.innerHTML = `${data.main.temp}&deg;C`;
        myHumidity.innerHTML = `${data.main.humidity}%`;

        const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        mySunrise.innerHTML = sunriseTime;
        mySunset.innerHTML = sunsetTime;

        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        myGraphic.setAttribute('src', iconsrc);
        myGraphic.setAttribute('alt', data.weather[0].description);
    }

    apiFetch();  // Call the weather fetch function

});