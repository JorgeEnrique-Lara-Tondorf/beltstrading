// main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Archivos cargados y listos para trabajar.");

    // Ejemplo: Añadir un poco de sombra extra al menú al hacer scroll
    const cabecera = document.getElementById('cabecera');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            cabecera.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
        } else {
            cabecera.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        }
    });

    // Aquí meteremos más adelante el código del carrusel de categorías
});