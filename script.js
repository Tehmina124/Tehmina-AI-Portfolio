// ===========================
// Portfolio JavaScript
// ===========================


// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



// ===========================
// Header Shadow on Scroll
// ===========================

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
        "0 3px 10px rgba(0,0,0,0.2)";

    } else {

        header.style.boxShadow = "none";

    }

});



// ===========================
// Active Navigation Link
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// ===========================
// Fade In Animation
// ===========================


const cards = document.querySelectorAll(
    ".card, .project-card, .skill-card"
);


const observer = new IntersectionObserver(entries => {


    entries.forEach(entry => {


        if (entry.isIntersecting) {


            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";


        }


    });


});



cards.forEach(card => {


    card.style.opacity = "0";

    card.style.transform =
    "translateY(30px)";


    card.style.transition =
    "0.6s ease";


    observer.observe(card);


});
