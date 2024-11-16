//toggle menu
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

menuToggle.addEventListener('click',() => {
    menuLinks.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', async () => {
    const directory = document.getElementById('directory');
    const toggleView = document.getElementById('toggle-view');

    // Fetch JSON data
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Render members
    const renderMembers = (isGrid) => {
        directory.innerHTML = members.map(member => `
            <div class="${isGrid ? 'member-card' : 'member-list'}">
                <img src="images/${member.image}" alt="${member.name}" />
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join('');
    };
    renderMembers(true);
});

//toggle view
document.addEventListener('DOMContentLoaded', async () => {
    const directory = document.getElementById('directory');
    const toggleView = document.getElementById('toggle-view');
    
    // Fetch JSON data
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Function to render members
    const renderMembers = (isGrid) => {
        directory.innerHTML = members.map(member => `
            <div class="${isGrid ? 'member-card' : 'member-list'}">
                <img src="images/${member.image}" alt="${member.name}" />
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join('');
    };

    // Render members in grid view initially
    renderMembers(true);

    // Toggle view between grid and list
    toggleView.addEventListener('click', () => {
        const isGrid = directory.classList.toggle('grid-view');
        renderMembers(isGrid);
    });
});

//footer
//current year
//date
document.addEventListener("DOMContentLoaded", function() {

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

