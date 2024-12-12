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
        openButton1: { level: "Taipei Branch", description: "Founded on...." },
        openButton2: { level: "Kaohsiung Branch", description: "Founded on...." },
        openButton3: { level: "Taichung Branch", description: "Founded on...." },
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