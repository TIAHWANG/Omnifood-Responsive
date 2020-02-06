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
