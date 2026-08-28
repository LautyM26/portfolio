const menuBtn = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Cerrar el menú cuando se hace clic en un enlace

const links = document.querySelectorAll(".nav-links a");


links.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});