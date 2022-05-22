// get elements
const companyList = document.getElementById("company-list");
const companyListItems = document.getElementById("company-dropdown-container");
const companyArrow = document.getElementById("company-arrow");

const featuresList = document.getElementById("features-list");
const featuresListItems = document.getElementById(
  "features-dropdown-container"
);
const featuresArrow = document.getElementById("features-arrow");

// functions

// For hover function
let isIn = false;
const toggleDropdownHover = (arrow, dropdown, e) => {
  switch (e.type) {
    case "mouseenter":
      isOpen = true;
      dropdown.style.display = "block";
      arrow.src = "../images/icon-arrow-down.svg";
      console.log("isIn:", isIn);
      break;
    case "mouseleave":
      isIn = false;
      dropdown.style.display = "none";
      arrow.src = "../images/icon-arrow-up.svg";
      console.log("isIn:", isIn);
      break;
    default:
      isIn = false;
  }
};

// For clicking function

// let isOpen = false;

// const toggleDropdownClick = (arrow, dropdown, e) => {
//   if (isOpen === false) {
//     isOpen = true;
//     dropdown.style.display = "block";
//     arrow.src = "../images/icon-arrow-down.svg";
//   } else {
//     isIn = false;
//     dropdown.style.display = "none";
//     arrow.src = "../images/icon-arrow-up.svg";
//   }
// };

// event listeners
// menu on click
// companyList.addEventListener("click", (e) =>
//   toggleDropdownClick(companyArrow, companyListItems, e)
// );
// featuresList.addEventListener("click", (e) =>
//   toggleDropdownClick(featuresArrow, featuresListItems, e)
// );

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
