
document.addEventListener("DOMContentLoaded", function () {
    // Update the footer year automatically
    document.getElementById("year").textContent =
        new Date().getFullYear();

    // Contact form demonstration
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formStatus.textContent =
            "Thank you for your message! This demo form does not send emails yet.";

        contactForm.reset();
    });
});
