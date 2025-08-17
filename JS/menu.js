const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = navMenu.querySelectorAll('a');
const menuCloseIcon = document.getElementById('menu-close');

// ☰ opens menu
hamburger.addEventListener('click', () => {
  navMenu.classList.add('show');
});

// ✖ closes menu
menuCloseIcon.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

// Close menu when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});
