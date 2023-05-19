const openMenuBtn = document.querySelector(".open-btn");
const closeMenuBtn = document.querySelector(".close-btn");
const navContainer = document.querySelector(".navigation-container");
// const containerLinks = document.querySelector(".links");
//
//

function handleMenuVisibility() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 901) {
    navContainer.style.display = "flex";
    openMenuBtn.style.display = "none";
  } else {
    openMenuBtn.style.display = "block";
    navContainer.style.display = "none";
    closeMenuBtn.style.display = "none";
  }
}
// Initial check on page load
handleMenuVisibility();
// Listen for window resize events
window.addEventListener("resize", handleMenuVisibility);

openMenuBtn.addEventListener("click", () => {
  navContainer.style.display = "block";
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  navContainer.style.display = "none";
  openMenuBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
});
//
//
const linksTitle = document.querySelectorAll(".links-title");
const arrow = document.querySelectorAll(".arrow");
const linksList = document.querySelectorAll(".links-list");
//
//
//
let activeIndex = null; // Variable to store the index of the active linksList
// Add click event listener to each linksTitle element
linksTitle.forEach((title, index) => {
  title.addEventListener("click", () => {
    if (activeIndex !== null && activeIndex !== index) {
      // If there is an active linksList and it's not the clicked one, close it
      arrow[activeIndex].classList.remove("active");
      linksList[activeIndex].classList.remove("show");
    }

    // Toggle the "active" class on the arrow element
    arrow[index].classList.toggle("active");

    // Toggle the "show" class on the linksList element
    linksList[index].classList.toggle("show");

    // Update the activeIndex variable
    activeIndex = activeIndex === index ? null : index;
  });
});
