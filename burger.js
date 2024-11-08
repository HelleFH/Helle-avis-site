const hamburger = document.querySelector(".burger-menu-button");
const navMenu = document.querySelector(".menu");
const faBars = document.querySelector(".fa-bars");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

faBars.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

function isInside(element) {
  return navMenu.contains(element);
}

document.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (!isInside(clickedElement) && !clickedElement.classList.contains("burger-menu-button") && !clickedElement.classList.contains("fa-bars")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

