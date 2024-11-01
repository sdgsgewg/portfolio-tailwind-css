// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Read More
function toggleText(id) {
  const moreText = document.querySelector(`.moreText[data-id="${id}"]`);
  const button = document.querySelector(`.toggleButton[data-id="${id}"]`);

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    button.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    button.textContent = "Read More";
  }
}
