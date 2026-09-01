const menuBtn = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");

const themeBtn = document.getElementById("theme-btn");


// =========================
// MENÚ MOBILE
// =========================

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// =========================
// CERRAR EL MENÚ
// =========================

const links = document.querySelectorAll(".nav-links a");


links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =========================
// MODO OSCURO / CLARO
// =========================

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "🌙";

    } else {

        themeBtn.textContent = "☀️";

    }

});


// =========================
// ANIMACIÓN DE HABILIDADES
// =========================

const skillsSection = document.querySelector(".skills-section");

const skillProgress = document.querySelectorAll(".skill-progress");


const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            skillProgress.forEach((skill) => {

                const width = skill.getAttribute("data-width");

                skill.style.width = width + "%";

            });


            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.3

});


observer.observe(skillsSection);


// =========================
// ANIMACIÓN AL HACER SCROLL (FADE IN)
// =========================

const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");
            // Deja de observar el elemento una vez que ya apareció
            fadeObserver.unobserve(entry.target);

        }

    });

}, {

    // Se activa cuando el elemento asoma un 15% en la pantalla
    threshold: 0.15 

});


fadeElements.forEach((el) => {

    fadeObserver.observe(el);

});


// =========================
// MODAL DE IMÁGENES (LIGHTBOX)
// =========================

const modal = document.getElementById("image-modal");

const modalImg = document.getElementById("modal-img");

const modalClose = document.getElementById("modal-close");

const certificateImages = document.querySelectorAll(".certificate-card img");


certificateImages.forEach((img) => {

    img.addEventListener("click", () => {

        modal.classList.add("active");

        modalImg.src = img.src;

        modalImg.alt = img.alt;

    });

});


modalClose.addEventListener("click", () => {

    modal.classList.remove("active");

});


modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});