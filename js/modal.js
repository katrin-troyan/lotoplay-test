const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu-backdrop');
const closeBtn = document.querySelector('.menu-close-btn');
const mobileLinks = document.querySelectorAll('.mobile-link');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});
