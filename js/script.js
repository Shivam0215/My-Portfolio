const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const form = document.querySelector("#contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (
        nameInput.value === "" ||
        emailInput.value === "" ||
        messageInput.value === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {

        alert("Please enter a valid email");

        return;
    }

    alert("Form submitted successfully!");

    form.reset();
});

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
}