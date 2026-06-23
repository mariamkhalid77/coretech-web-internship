const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let phone =
    document.getElementById("phone").value.trim();

    let message =
    document.getElementById("message").value.trim();

    let emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === ""){
        alert("Please enter your name");
        return;
    }

    if(!emailRegex.test(email)){
        alert("Please enter valid email");
        return;
    }

    if(phone.length < 10){
        alert("Please enter valid phone number");
        return;
    }

    if(message.length < 10){
        alert("Message must contain at least 10 characters");
        return;
    }

    alert("Form submitted successfully!");

    this.reset();
});