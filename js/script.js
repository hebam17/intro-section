// get elements
const companyList = document.getElementById("left-link-company");
const companyListItems = document.getElementById("company-dropdown-container");
const companyArrow = document.getElementById("company-arrow");

const featuresList = document.getElementById("left-link-features");
const featuresListItems = document.getElementById(
  "features-dropdown-container"
);
const featuresArrow = document.getElementById("features-arrow");
const sideNavBtn = document.getElementById("hamburger-menu");
const sideNavCloseBtn = document.getElementById("close-btn");
const sideNav = document.getElementById("links-outer");
const sideNavContainer = document.getElementById("shallow-screen");

// functions

// For hover function

const toggleDropdownHover = (arrow, dropdown) => {
  let isIn = dropdown.style.display;
  if (isIn === "block") {
    isIn = false;
    dropdown.style.display = "none";
    arrow.src = "./images/icon-arrow-down.svg";
    console.log("isIn:", isIn);
  } else {
    isIn = true;
    dropdown.style.display = "block";
    arrow.src = "./images/icon-arrow-up.svg";
    console.log("isIn:", isIn);
  }
};

// sidemenu function
// open sidebar
const sideMenuOpen = () => {
  sideNavContainer.style.display = "block";
};
// close sidebar
const sideMenuClose = () => {
  sideNavContainer.style.display = "none";
};

// menu on hover(mouseenter,mouseleave)
companyList.addEventListener("click", (e) =>
  toggleDropdownHover(companyArrow, companyListItems, e)
);

featuresList.addEventListener("click", (e) =>
  toggleDropdownHover(featuresArrow, featuresListItems, e)
);

// sidebar event listeners
sideNavBtn.addEventListener("click", sideMenuOpen);
sideNavCloseBtn.addEventListener("click", sideMenuClose);
window.addEventListener("click", (e) => {
  if (e.target == sideNavContainer) {
    sideMenuClose();
  }
});
