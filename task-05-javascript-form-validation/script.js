document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let result = document.getElementById("result");

    if (name === "") {
        result.innerHTML = "Name is required";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        result.innerHTML = "Please enter a valid email";
        return;
    }

    if (phone.length < 10) {
        result.innerHTML = "Phone number must be at least 10 digits";
        return;
    }

    if (message.length < 20) {
        result.innerHTML = "Message must be at least 20 characters";
        return;
    }

    result.innerHTML = "Form submitted successfully!";
});