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

themeToggle.addEventListener("change", () => {

    if (themeToggle.checked) {

        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");

    } else {

        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");

    }

});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true; // Important!
} else {
    themeToggle.checked = false;
}

const projects = [
    {
        title: "Portfolio Website",
        description: "Personal portfolio built using HTML, CSS and JavaScript.",
        category: "web"
    },
    {
        title: "Cafe-Nest",
        description: "A Platform for Cafes to automate daily operation.",
        category: "web"
    },
    {
        title: "eNotes",
        description: "The right place for all the resources for engineering students.",
        category: "web"
    }
];
const projectsContainer =
    document.querySelector("#projects-container");
projects.forEach(project => {

    const projectCard = document.createElement("div");

    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;

    projectsContainer.appendChild(projectCard);

});
function renderProjects(projectList) {

    projectsContainer.innerHTML = "";

    projectList.forEach(project => {

        const projectCard = document.createElement("div");

        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectsContainer.appendChild(projectCard);

    });

}
const filterButtons =
    document.querySelectorAll(".filter-btn");
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.filter;

        if (category === "all") {

            renderProjects(projects);

        } else {

            const filteredProjects =
                projects.filter(project =>
                    project.category === category
                );

            renderProjects(filteredProjects);

        }

    });

});

const transition = document.querySelector(".theme-transition");

themeToggle.addEventListener("change", (e) => {

    const rect = themeToggle.getBoundingClientRect();

    transition.style.left = rect.left + "px";
    transition.style.top = rect.top + "px";

    transition.classList.add("active");

    setTimeout(() => {

        if (themeToggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }

    }, 300);

    setTimeout(() => {
        transition.classList.remove("active");
    }, 800);

});