// Toggle menu/mobile view
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
});


// Fetch members data and render them
document.addEventListener('DOMContentLoaded', async () => {
    const directory = document.getElementById('directory');
    const gridViewBtn = document.getElementById('gridview');
    const listViewBtn = document.getElementById('listview');
    const allBtn = document.getElementById('all-btn');
    const memberBtn = document.getElementById('member-btn');
    const silverBtn = document.getElementById('silver-btn');
    const goldBtn = document.getElementById('gold-btn');

    // Fetch JSON data
    const response = await fetch('data/members.json');
    const members = await response.json();

    let isGrid = true; // Default to grid view

    // Render members
    const renderMembers = (members, isGrid) => {
        directory.innerHTML = members.map(member => `
             <div class="${isGrid ? 'member-card' : 'member-list'}">
                <img src="${member.image}" alt="${member.name}" />
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.email}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p>Membership: ${getMembershipName(member.membership)}</p>
                <p>Office Hours: ${member.officehours}</p>
            </div>
        `).join('');
    };

    // Function to get membership name
    const getMembershipName = (membership) => {
        switch (membership) {
            case "1": return "Member";
            case "2": return "Silver";
            case "3": return "Gold";
            default: return "--";
        }
    };

    // Initially render all members in grid view
    renderMembers(members, isGrid);

    // Filter members by membership level
    const filterMembers = (level) => {
        let filteredMembers;
        if (level === "all") {
            filteredMembers = members;
        } else {
            filteredMembers = members.filter(member => member.membership === level);
        }
        renderMembers(filteredMembers, isGrid);
    };

    // Event listeners for filter buttons
    allBtn.addEventListener("click", () => filterMembers("all"));
    memberBtn.addEventListener("click", () => filterMembers("1"));
    silverBtn.addEventListener("click", () => filterMembers("2"));
    goldBtn.addEventListener("click", () => filterMembers("3"));

    // Toggle to grid view
    gridViewBtn.addEventListener('click', () => {
        isGrid = true;
        renderMembers(members, isGrid);
    });

    // Toggle to list view
    listViewBtn.addEventListener('click', () => {
        isGrid = false;
        renderMembers(members, isGrid);
    });
});

//weather
//weather
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const myHumidity = document.querySelector('#humidity');
const mySunrise = document.querySelector('#sunrise');
const mySunset = document.querySelector('#sunset');

const myKey = "fd3550dbe16551fca8f4f62fc882bc6c"
const myLat = "11.556445942513216"
const myLong = "104.92518213140643"

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

