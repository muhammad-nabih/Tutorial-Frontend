// Get the toggle button and dropdown menu elements
const toggle = document.querySelector(".toggle_btn");
const drop = document.querySelector(".dropdown_menu");

// Define the icons for the hamburger and close symbols
const iconBars = `<i class="fa-solid fa-bars"></i>`;
const iconXMark = `<i class="fa-solid fa-xmark"></i>`;

// Add a click event listener to the toggle button
toggle.addEventListener("click", () => {
  // Toggle the "active" class on the dropdown menu
  drop.classList.toggle("active");

  // Update the toggle button's inner HTML based on the dropdown's state
  toggle.innerHTML = drop.classList.contains("active") ? iconXMark : iconBars;
});
