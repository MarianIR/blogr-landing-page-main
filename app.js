const openMenuBtn = document.querySelector(".open-btn");
const closeMenuBtn = document.querySelector(".close-btn");
const navContainer = document.querySelector(".navigation-container");
const containerLinks = document.querySelector(".links");
const linksTitle = document.querySelectorAll(".links-title");
const arrow = document.querySelectorAll(".arrow");
const linksList = document.querySelectorAll(".links-list");
openMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if ((navContainer.style.display = "none")) {
    navContainer.style.display = "flex";
  } else {
    navContainer.style.display = "none";
  }
  closeMenuBtn.style.display = "block";
  openMenuBtn.style.display = "none";
});

closeMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if ((navContainer.style.display = "flex")) {
    navContainer.style.display = "none";
  } else {
    navContainer.style.display = "flex";
  }
  openMenuBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
});

// linksTitle.forEach((elementLink) => {
//   elementLink.addEventListener("click", (e) => {
//     e.preventDefault();

//     arrow.forEach((arrowElement) => {
//       arrowElement.style.transform = "rotate(180deg)";
//     });
//   });
// });
