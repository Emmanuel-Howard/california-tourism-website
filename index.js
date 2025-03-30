// Creating functions for email verification

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = form.querySelector(".btn");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("first").value;
        const lastName = document.getElementById("last").value;
        const email = document.getElementById("email").value;
        const email2 = document.getElementById("email2").value;
        const message = document.getElementById("message").value;

        if (!firstName || !lastName || !email || !email2 || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        if (email !== email2) {
            alert("The email addresses do not match.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Form submitted successfully!");
    });
});



