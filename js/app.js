/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navList = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");
const goUpBtn = document.getElementById("up");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//  display the nav
function displayNav() {
  navList.style.display = "block";
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach((item) => {
  let li = `<li  ><a class="menu__link" href="#${item.getAttribute(
    "id"
  )}" data-nav = "${item.getAttribute("id")}">${item.getAttribute(
    "id"
  )}</a></li>`;
  navList.innerHTML += li;
});

window.onscroll = function () {
  // Add class 'active' to section when near top of viewport
  sections.forEach(function (active) {
    let navLink = navList.querySelector(
      `[data-nav= ${active.getAttribute("id")}]`
    );
    if (
      active.getBoundingClientRect().top >= -450 &&
      active.getBoundingClientRect().top <= 200
    ) {
      active.classList.add("your-active-class");
      navLink.classList.add("active-link");
    } else {
      active.classList.remove("your-active-class");
      navLink.classList.remove("active-link");
    }
    // display scroll to top button
    if (window.pageYOffset >= 500) {
      goUpBtn.style.display = "block";
    } else {
      goUpBtn.style.display = "none";
    }
  });
};
// Scroll to anchor ID using scrollTO event
navList.addEventListener("click", function (scrollTo) {
  scrollTo.preventDefault();
  if (scrollTo.target.dataset.nav) {
    document.getElementById(`${scrollTo.target.dataset.nav}`).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// on click go to top
goUpBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  });
});

// hide nav while scroll

window.addEventListener("scroll", function () {
  if (window.scrollY >= 150) {
    navList.style.display = "none";
    setTimeout(displayNav, 1500);
  }
});

/**
 * End Main Functions
 */
