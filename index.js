document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  const navBar = document.querySelector('nav');
  if (scrollTop > 0) {
    navBar.classList.add('rolar');
  } else {
    navBar.classList.remove('rolar');
  }
});

/* Menu mobile */
let line1 = document.querySelector('.line-menumob-1');
let line2 = document.querySelector('.line-menumob-2');

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

// Function to toggle the menu (if needed elsewhere)
function toggleMenu() {
  document.getElementById("menu-list").classList.toggle("active");
}