import "./styles/styles.scss";

const navToggle = document.querySelector(".nav__toggle");
const mobNav = document.querySelector(".mob-contain");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  if (document.body.classList.contains("nav-open")) {
    console.log("open");
    mobNav.style.display = "block";
  } else {
    mobNav.style.display = "none";
    console.log("closed");
  }
});
