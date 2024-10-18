const menuToggle = document.querySelector(".nav-toggle");
const menuHeader = document.querySelector(".nav-list");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
});

window.addEventListener("click", function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches(".nav-toggle")) {
    menuHeader.classList.remove(expandClass);
  }
});
