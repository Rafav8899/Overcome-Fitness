let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
const threshold = 10;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Si el scroll apenas se movió, no hacemos nada
    if (Math.abs(currentScrollY - lastScrollY) < threshold) return;

    // Bajando
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        header.classList.add('header--hidden');
    } 
    // Subiendo
    else {
        header.classList.remove('header--hidden');
    }

    lastScrollY = currentScrollY;
});