const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const menuButton = document.querySelector('.menu-button');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const xIcon = document.querySelector('.x-icon');
const navMenu = document.querySelector('.nav-menu');

menuButton.addEventListener('click', () => {
  logo.classList.toggle('active');
  hamburgerIcon.classList.toggle('active');
  xIcon.classList.toggle('active');
  menuButton.classList.toggle('active');
  navMenu.classList.toggle('active');
  header.classList.toggle('full-screen');
});

// document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
//   logo.classList.toggle('active');
//   hamburgerIcon.classList.toggle('active');
//   xIcon.classList.toggle('active');
//   menuButton.classList.toggle('active');
//   navMenu.classList.toggle('active');
//   header.classList.toggle('full-screen');
// }));