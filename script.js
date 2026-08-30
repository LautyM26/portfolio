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