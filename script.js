// get the mobile menu button and navigation links
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

// open and close the mobile navigation menu
menuButton.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

// get all navigation links
const links = document.querySelectorAll('.navLinks a');

// close the mobile menu after a navigation link is selected
links.forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
  });
});

// get all elements that should fade into view
const fadeElements = document.querySelectorAll('.fadeIn');

// create an observer that detects when elements enter the screen
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

// observe each fade element on the page
fadeElements.forEach(function (element) {
  observer.observe(element);
});
