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

const btn = document.getElementById("btnVerMas");
const texto = document.getElementById("sobreTxt");

btn.addEventListener("click", ()=>{
    texto.classList.toggle("expandido");

    if(texto.classList.contains("expandido")){
        btn.textContent = "Ver menos";
    }else{
        btn.textContent = "Ver más";
    }
});

const cards = document.querySelectorAll(".card");
// const values = document.querySelectorAll(".value");

cards.forEach(card => {
    const cardHeader = card.querySelector(".card-header");
    const content = card.querySelector(".card-content");
    
    cardHeader.addEventListener("click", () => {
        // e.stopPropagation();

        cards.forEach(c => {
            if (c !== card){
                c.classList.remove("active");
                c.querySelector(".card-content").style.maxHeight = null;
            }
        });
        card.classList.toggle("active");

        if (card.classList.contains("active")){
            content.style.maxHeight = content.scrollHeight + "px";
        }else {
            content.style.maxHeight = null;
        }
    });
});

const servicios = document.querySelectorAll(".servicio");

servicios.forEach(servicio => {
    const servHeader = servicio.querySelector(".servicio-header");
    const servContent = servicio.querySelector(".servicio-content");
    
    servHeader.addEventListener("click", () => {
        // e.stopPropagation();

        servicios.forEach(s => {
            if (s !== servicio){
                s.classList.remove("active");
                s.querySelector(".servicio-content").style.maxHeight = null;
            }
        });
        servicio.classList.toggle("active");

        if (servicio.classList.contains("active")){
            servContent.style.maxHeight = servContent.scrollHeight + "px";
        }else {
            servContent.style.maxHeight = null;
        }
    });
});