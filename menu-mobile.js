const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu(event) {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
