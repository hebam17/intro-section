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

let isIn = false;
const toggleDropdownHover = (arrow, dropdown, e) => {
  switch (e.type) {
    case "mouseenter":
      isIn = true;
      dropdown.style.display = "block";
      arrow.src = "../images/icon-arrow-up.svg";
      break;
    case "mouseleave":
      isIn = false;
      dropdown.style.display = "none";
      arrow.src = "../images/icon-arrow-down.svg";
      break;
    default:
      isIn = false;
  }
};

// sidemenu function
// open sidebar
const sideMenuOpen = () => {
  sideNav.style.width = "70vw";
  sideNavContainer.style.display = "block";
};
// close sidebar
const sideMenuClose = () => {
  // console.log(e.target);
  sideNav.style.width = "0vw";
  sideNavContainer.style.display = "none";
};

// menu on hover(mouseenter,mouseleave)
companyList.addEventListener("mouseenter", (e) =>
  toggleDropdownHover(companyArrow, companyListItems, e)
);
companyList.addEventListener("mouseleave", (e) =>
  toggleDropdownHover(companyArrow, companyListItems, e)
);

featuresList.addEventListener("mouseenter", (e) =>
  toggleDropdownHover(featuresArrow, featuresListItems, e)
);
featuresList.addEventListener("mouseleave", (e) =>
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
