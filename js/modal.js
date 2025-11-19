// ====== BURGER MENU ======
const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu-backdrop');
const closeBtn = document.querySelector('.menu-close-btn');
const mobileLinks = document.querySelectorAll('.nav-link');

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

// ====== MODAL ======
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('close-modal-btn');
const openBtns = document.querySelectorAll('.hero-btn, .concert-btn');

openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

modalCloseBtn.addEventListener('click', () => closeModal());

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ====== CONTACT FORM ======
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    const params = new URLSearchParams({ name, email, message });
    const url = `/send-form?${params.toString()}`;

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      showPopup('Дякуємо! Ваше повідомлення відправлено.');
      form.reset();
    } catch (error) {
      console.error(error);
      showPopup('Сталася помилка. Спробуйте ще раз.');
    }
  });

  function showPopup(message) {
    const popup = document.createElement('div');
    popup.classList.add('popup-message');
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 3000);
  }
});
