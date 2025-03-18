// Selecting required elements
const containerEL = document.querySelector(".container");
const btnEL = document.querySelector(".btn");
const popupContainerEL = document.querySelector(".popup-container");
const closeIconEL = document.querySelector(".close-icon");

// Event listener for button click to show popup
btnEL.addEventListener("click", () => {
  containerEL.classList.add("active");
  popupContainerEL.classList.remove("active");
});

// Event listener for close icon to hide popup
closeIconEL.addEventListener("click", () => {
  containerEL.classList.remove("active");
  popupContainerEL.classList.add("active");
});
