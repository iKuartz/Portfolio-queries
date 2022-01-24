const buttonMobile = document.getElementById('menu-toggle');
//const closingButton = document.getElementById('close');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('menu-open');
}

buttonMobile.addEventListener('click', toggleMenu);
//closingButton.addEventListener('click', toggleMenu);