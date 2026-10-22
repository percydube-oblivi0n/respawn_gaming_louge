// Small vanilla JavaScript enhancements for the Respawn landing page.
const menuButton = document.querySelector('.mobile-menu-toggle');
const navigation = document.querySelector('#main-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
    menuButton.querySelector('span').textContent = isOpen ? '☰' : '✕';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.querySelector('span').textContent = '☰';
    });
  });
}

// Keep the copyright year current without manually editing the HTML each year.
const year = document.querySelector('#current-year');
if (year) year.textContent = new Date().getFullYear();
