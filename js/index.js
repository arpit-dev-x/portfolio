const hamburger = document.getElementById("hamburger");
const navbar_content = document.getElementById("navbar-content");

hamburger.addEventListener("click", function () {
    navbar_content.classList.toggle("active");
});