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


//WEATHER TEMPLATE
// embed template
const contentDiv = document.querySelector('#weather-content');

// Path to the external HTML template
const externalTemplatePath = 'chamber\scripts\weather.js';

// Fetch the external HTML file and insert its content
fetch(externalTemplatePath)
  .then(response => {
    if (response.ok) {
      return response.text(); // Read the response as text
    } else {
      throw new Error('Failed to load external HTML');
    }
  })
  .then(html => {
    // Create a temporary DOM element to parse the fetched HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Extract the <body> content from the external HTML
    const externalBody = tempDiv.querySelector('body').innerHTML;

    // Insert the external content into the target <div>
    contentDiv.innerHTML = externalBody;
  })
  .catch(error => {
    console.error('Error loading external HTML:', error);
    contentDiv.innerHTML = '<p>Failed to load content. Please try again later.</p>';
  });

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

