const carrusel = document.querySelector('.carrusel');
const carruselContenedor = carrusel.querySelector('.carrusel-contenedor');
const carruselItems = carrusel.querySelectorAll('.carrusel-item');
const carruselCantidad = carruselItems.length;
let carruselIndice = 0;
const carruselAncho = 100 / carruselCantidad;

carruselItems.forEach(item => {
    item.style.width = `${carruselAncho}%`;
});

function carruselAvanzar() {
    carruselIndice++;
    if (carruselIndice > carruselCantidad - 1) {
        carruselIndice = 0;
}
  carruselContenedor.style.transform = `translateX(-${carruselAncho * carruselIndice}%)`;
}

setInterval(carruselAvanzar, 5000);







