const hamburger = document.getElementById("hamburger");
const navbar_content = document.getElementById("navbar-content");
const navItems = document.querySelectorAll(".navbar-content a");

hamburger.addEventListener("click", function () {
    navbar_content.classList.toggle("active");
});

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navbar_content.classList.remove("active");
    });
});