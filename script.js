const menu = document.querySelector("header");
function toggleHeaderClass() {
  if (window.scrollY > 0) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
}

function animateHeaderTransition() {
  requestAnimationFrame(toggleHeaderClass);
}
window.addEventListener("scroll", animateHeaderTransition);

toggleHeaderClass();
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});
