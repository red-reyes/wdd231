document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('timestamp').value = new Date().toLocaleString();

    document.getElementById("inquiry-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            bracket: document.getElementById("bracket").value,
            description: document.getElementById("description").value,
            timestamp: document.getElementById("timestamp").value,
        };

        console.log("Form Data:", formData); // Debugging log

        // Store the form data in sessionStorage
        sessionStorage.setItem("formData", JSON.stringify(formData));

        // Redirect to the confirmation page
        window.location.href = "confirmation.html";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const dialogBox = document.querySelector("#dialog");
    const level = document.querySelector("#dialog h3");
    const description = document.querySelector("#dialog p");
    const close = document.querySelector("#closeButton");

    const membershipData = {
        openButton1: { level: "Taipei Branch", description: "Established in 2023, the Taipei branch of Reveal Rainbow Co. is conveniently located in the bustling heart of the city. Designed to embody the vibrant spirit of the brand, this branch serves as a hub for innovation, collaboration, and growth. Strategically positioned in the city center, it offers unparalleled accessibility for clients, partners, and employees alike. Reveal Rainbow Co. continues to shine as a beacon of excellence, bringing its signature commitment to quality and creativity to Taipei’s dynamic business landscape." },
        openButton2: { level: "Kaohsiung Branch", description: "Established in 2018, the Kaohsiung branch of Reveal Rainbow Co. was inspired by the rapid success of its Taichung counterpart. Nestled in the vibrant port city, this branch has become a key player in the company’s expanding operations. Known for its dynamic energy and strategic location, the Kaohsiung branch continues to uphold Reveal Rainbow Co.'s commitment to excellence, driving innovation and strengthening its global presence." },
        openButton3: { level: "Taichung Branch", description: "Founded in 2015, the Taichung branch of Reveal Rainbow Co. began as a humble hobby and quickly grew into a thriving retail business. Over the years, it has evolved into an international manufacturing powerhouse, bringing creativity and innovation to a global audience. Located in the vibrant city of Taichung, this branch symbolizes the company’s journey of growth, resilience, and success, making it a cornerstone of Reveal Rainbow Co.'s expanding legacy." },
    };

    Object.keys(membershipData).forEach((buttonId) => {
        const openButton = document.querySelector(`#${buttonId}`);
        openButton.addEventListener("click", () => {
            const { level: levelText, description: descText } = membershipData[buttonId];
            level.textContent = levelText;
            description.textContent = descText;
            dialogBox.showModal();
        });
    });

    close.addEventListener("click", () => {
        dialogBox.close();
    });
});

function checkIfInView() {
    const elements = document.querySelectorAll('.branch-cards div');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.classList.add('fade-in-visible'); 
        }
    });
}

window.addEventListener('scroll', checkIfInView);
window.addEventListener('load', checkIfInView);