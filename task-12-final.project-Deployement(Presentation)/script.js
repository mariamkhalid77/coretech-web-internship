// ==========================
// Mobile Menu
// ==========================

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


// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};


// ==========================
// Contact Form Validation
// ==========================

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{11}$/;

    if(name === ""){
        alert("Please enter your name.");
        return;
    }

    if(!emailRegex.test(email)){
        alert("Please enter a valid email.");
        return;
    }

    if(!phoneRegex.test(phone)){
        alert("Please enter an 11-digit phone number.");
        return;
    }

    if(message.length < 10){
        alert("Message must contain at least 10 characters.");
        return;
    }

    // Save data in LocalStorage

    const userData = {
        name,
        email,
        phone,
        message
    };

    localStorage.setItem("contactData", JSON.stringify(userData));

    // Success Message

    document.getElementById("formMessage").innerHTML =
    "✅ Your message has been sent successfully!";

    this.reset();

});


// ==========================
// Fade In Animation
// ==========================

const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {

    fadeElements.forEach(element => {

        const position = element.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            element.classList.add("show");
        }

    });

});


// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});