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
            <p><strong>Business Name:</strong> ${formData.businessName}</p>
            <p><strong>Membership Level:</strong> ${formData.membership}</p>
            <p><strong>Timestamp:</strong> ${formData.timestamp}</p>
        `;
    } else {
        document.getElementById("form-data").innerHTML = "<p>No data found.</p>";
    }
});
