document.addEventListener("DOMContentLoaded", function () {
    // Set the timestamp when the page loads
    document.getElementById('timestamp').value = new Date().toLocaleString();

    // Handle form submission
    document.getElementById("join-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Capture form data
        const formData = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            orgTitle: document.getElementById("org-title").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            businessName: document.getElementById("business-name").value,
            membership: document.getElementById("membership").value,
            description: document.getElementById("description").value,
            timestamp: document.getElementById("timestamp").value,
        };

        // Store the data in sessionStorage (or localStorage)
        sessionStorage.setItem("formData", JSON.stringify(formData));

        // Redirect to the thank you page
        window.location.href = "thankyou.html";
    });
});

