document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the form data from sessionStorage
    const formData = JSON.parse(sessionStorage.getItem("formData"));

    if (formData) {
        // Populate the form data into the page
        document.getElementById("form-data").innerHTML = `
            <p><strong>First Name:</strong> ${formData.firstName}</p>
            <p><strong>Last Name:</strong> ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Age Bracket:</strong> ${formData.bracket}</p>
            <p><strong>Description:</strong> ${formData.description}</p>
            <p><strong>Timestamp:</strong> ${formData.timestamp}</p>
        `;
    } else {
        // Display a message if no form data is found
        document.getElementById("form-data").innerHTML = "<p>No data found. Please submit the form again.</p>";
    }
});
