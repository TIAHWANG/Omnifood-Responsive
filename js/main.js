const toggle = document.querySelector(".toggle");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function() {
    toggle.classList.toggle("on");
});

window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        toggle.classList.remove("on");
    }
});

// sticky nav bar
window.onscroll = function() {
    const navbar = document.querySelector(".header__nav");

    if (window.pageYOffset >= 780) {
        navbar.classList.add("sticky");
        toggleBtn.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    } else {
        navbar.classList.remove("sticky");
    }
};
