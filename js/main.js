const header = document.querySelector(".header__nav");
const sticky = header.offsetTop;
const arrowBtn = document.querySelector(".arrow");
const toggle = document.querySelector(".toggle");
const toggleBtn = document.getElementById("toggle-btn");

function handleToggle() {
  if (window.pageYOffset < 750) {
    toggle.classList.toggle("on");
  } else {
    header.classList.toggle("active");
    toggle.classList.toggle("on");
  }
}

function handleSticky() {
  if (window.pageYOffset > sticky + 750) {
    header.classList.add("sticky");
    arrowBtn.classList.add("show");
    arrowBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    header.classList.remove("sticky");
    arrowBtn.classList.remove("show");
  }
}

window.onscroll = () => {
  handleSticky();
  toggleBtn.addEventListener("click", handleToggle);
};
