const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    openMenu.style.display = 'none';
    setTimeout(() => {
        menu.style.opacity = '1';
        menu.style.right = '0';
    }, 10);
});

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    setTimeout(() => {
        menu.removeAttribute('style');
        openMenu.removeAttribute('style');
    }, 200);
});

document.addEventListener("DOMContentLoaded", function() {
    const textos = document.querySelectorAll(".texto");
    let currentIndex = 0;

    function mostrarTexto(index) {
        textos.forEach((texto, i) => {
            if (i === index) {
                texto.classList.add("mostrando");
            } else {
                texto.classList.remove("mostrando");
            }
        });
    }

    function avancarTexto() {
        currentIndex = (currentIndex + 1) % textos.length;
        mostrarTexto(currentIndex);
    }

    mostrarTexto(currentIndex);

    setInterval(avancarTexto, 3000);
});