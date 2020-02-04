const toggles = document.querySelector(".toggle");
const toggleBtn = document.getElementById("toggle-btn");

function handleOff() {
  [].forEach.call(toggles, function(t) {
    t.classList.remove("on");
  });
}

toggleBtn.addEventListener("click", function() {
  toggles.classList.toggle("on");
});

window.addEventListener("resize", function() {
  if (window.innerWidth > 1024) {
    toggles.classList.remove("on");
  }
});
