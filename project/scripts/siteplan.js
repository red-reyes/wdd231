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
