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

document.addEventListener("DOMContentLoaded", () => {
    const dialogBox = document.querySelector("#dialog");
    const level = document.querySelector("#dialog h3");
    const description = document.querySelector("#dialog p");
    const close = document.querySelector("#closeButton");

    const membershipData = {
        openButton1: { level: "NP Membership", description: "A program designed for non-profit organizations to access a range of benefits without any membership fees. This initiative aims to empower non-profits by providing them with resources, networking opportunities, and exclusive services to help them thrive. Whether you’re a small grassroots group or a larger established organization, the NP Membership is here to support your mission at no cost."},
        openButton2: { level: "Bronze Membership", description: "The Bronze Membership is perfect for non-profits just starting out or those looking to grow their network. With this entry-level membership, organizations receive access to basic resources, such as online guides, educational webinars, and the ability to connect with other non-profits in the network. This tier is designed to help organizations lay a solid foundation for future success."},
        openButton3: { level: "Silver Membership", description: "Silver Membership offers an enhanced set of benefits for organizations looking to expand their impact. Along with everything included in the Bronze tier, Silver members gain access to exclusive networking events, targeted resources for funding opportunities, and priority support from experienced mentors in the non-profit sector. This tier is ideal for organizations that are ready to take their work to the next level."},
        openButton4: { level: "Gold Membership", description: "The Gold Membership is the highest level of support and is designed for established non-profits that are seeking to maximize their influence. Gold members enjoy all the perks of the Bronze and Silver tiers, plus additional benefits like personalized consultations, advanced training sessions, and access to high-level partnerships with corporate sponsors and donors. This tier provides exclusive access to premium events, visibility opportunities, and strategic advice to help organizations achieve their most ambitious goals."},
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

// Function to check if the element is in the viewport
function checkIfInView() {
    const elements = document.querySelectorAll('.membership-cards div');
  
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        element.classList.add('fade-in-visible'); // Trigger the animation when in view
      }
    });
  }
  
  // Call the function on page load and on scroll
  window.addEventListener('scroll', checkIfInView);
  window.addEventListener('load', checkIfInView); // In case elements are already in view when the page loads
  