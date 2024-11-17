// Toggle menu/mobile view
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('show');
});

// Fetch members data and render them
document.addEventListener('DOMContentLoaded', async () => {
    const directory = document.getElementById('directory');
    const toggleView = document.getElementById('toggle-view');

    // Fetch JSON data
    const response = await fetch('data/members.json');
    const members = await response.json();

    let isGrid = true;

    // render members
    const renderMembers = (members, isGrid) => {
        directory.innerHTML = members.map(member => `
            <div class="${isGrid ? 'member-card' : 'member-list'}">
                <img src="images/${member.image}" alt="${member.name}" />
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
    document.getElementById("all-btn").addEventListener("click", () => filterMembers("all"));
    document.getElementById("member-btn").addEventListener("click", () => filterMembers("1"));
    document.getElementById("silver-btn").addEventListener("click", () => filterMembers("2"));
    document.getElementById("gold-btn").addEventListener("click", () => filterMembers("3"));

    // Toggle view functionality
    toggleView.addEventListener('click', () => {
        isGrid = !isGrid;
        renderMembers(members, isGrid);
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

