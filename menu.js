const buttonMobile = document.getElementById('menu-toggle');
const closingButton = document.getElementById('close');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('menu-open');
}

buttonMobile.addEventListener('click', toggleMenu);
closingButton.addEventListener('click', toggleMenu);
document.querySelectorAll('.menu_links').forEach((item) => { const nav = document.getElementById('nav'); item.addEventListener('click', () => { nav.classList.remove('menu-open'); }); });
