document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const scrollTop = window.scrollY;

  // Add the "rolar" class if the user scrolls down, otherwise remove it
  if (scrollTop > 0) {
    header.classList.add("rolar");
  } else {
    header.classList.remove("rolar");
  }
});

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const btnMenuMob = document.getElementById("btn-menu-mob");
  const menuMobile = document.getElementById("menu-mobile");
  const body = document.querySelector("body");

  // Add click event listener to the hamburger menu button
  btnMenuMob.addEventListener("click", () => {
    menuMobile.classList.toggle("abrir"); // Toggle the "abrir" class to show/hide the menu
    body.classList.toggle("no-overflow"); // Prevent scrolling when the menu is open
  });
});

/* Menu mobile */
let line1 = document.querySelector('.line-menumob-1');
let line2 = document.querySelector('.line-menumob-2');

// Function to toggle the menu (if needed elsewhere)
function toggleMenu() {
  document.getElementById("menu-list").classList.toggle("active");
}