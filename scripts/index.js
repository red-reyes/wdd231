//course buttons
document.addEventListener("DOMContentLoaded", () => {
    // Course data array
    const courses = [
        { id: 1, name: "CSE 110", type: "CSE", credits: 2, completed: true },
        { id: 2, name: "WDD 130", type: "WDD", credits: 2, completed: true },
        { id: 3, name: "CSE 111", type: "CSE", credits: 2, completed: true },
        { id: 4, name: "CSE 210", type: "CSE", credits: 2, completed: true },
        { id: 5, name: "WDD 131", type: "WDD", credits: 2, completed: true },
        { id: 6, name: "WDD 231", type: "WDD", credits: 2, completed: false }
    ];

    const courseContainer = document.querySelector(".coursesbuttons");

    function displayCourses(filter = "all") {
        courseContainer.innerHTML = "";

        const filteredCourses = courses.filter(course => 
            filter === "all" || course.type === filter
        );

        filteredCourses.forEach(course => {
            const courseButton = document.createElement("a");
            courseButton.classList.add("button-cert");
            courseButton.textContent = `${course.name} (${course.credits} credits)`;


            if (course.completed) {
                courseButton.classList.add("completed");
            }

            courseContainer.appendChild(courseButton);
        });
    }

    // Display all courses on page load
    displayCourses();

    //filter buttons
    document.querySelector(".buttons").addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.classList.contains("button")) {
            const filterType = event.target.textContent.trim();
            if (filterType === "All") displayCourses("all");
            else if (filterType === "CSE") displayCourses("CSE");
            else if (filterType === "WDD") displayCourses("WDD");
        }
    });
});
//menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-links');

menuToggle.addEventListener('click',() => {
    menuLinks.classList.toggle('show');
});
//active menu
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".menu-links a");
    const currentPage = document.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
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

