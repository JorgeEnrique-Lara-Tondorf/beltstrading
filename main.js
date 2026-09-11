// ==============================================
// BELTS TRADING - INTERACTIVIDAD JS COMPLETA
// ==============================================

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------
    // 1. MENÚ MÓVIL RESPONSIVE Y SOMBRA DE CABECERA
    // ----------------------------------------------
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const cabecera = document.getElementById('cabecera');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('activo');
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('#navMenu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('activo');
            });
        });
    }

    // Efecto de sombra en cabecera al hacer scroll
    window.addEventListener('scroll', () => {
        if (cabecera) {
            if (window.scrollY > 30) {
                cabecera.classList.add('scrolled');
            } else {
                cabecera.classList.remove('scrolled');
            }
        }
    });


    // ----------------------------------------------
    // 2. MODAL / LIGHTBOX PARA AMPLIAR IMÁGENES
    // ----------------------------------------------
    // Crear el modal dinámicamente en el DOM
    const modalHTML = `
        <div id="modalImagen" class="modal-overlay">
            <div class="modal-contenido">
                <span class="modal-cerrar">&times;</span>
                <img id="imgModal" src="" alt="Vista ampliada">
                <h3 id="tituloModal"></h3>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('modalImagen');
    const imgModal = document.getElementById('imgModal');
    const tituloModal = document.getElementById('tituloModal');
    const btnCerrarModal = document.querySelector('.modal-cerrar');

    // Asignar evento click a todas las imágenes de tarjetas y galerías
    const selectorImagenes = '.contenedor-img-tarjeta img, .card-instalacion img, .imagen-nosotros img';
    
    document.body.addEventListener('click', (e) => {
        if (e.target.matches(selectorImagenes)) {
            const src = e.target.getAttribute('src');
            const alt = e.target.getAttribute('alt') || 'Imagen Belts Trading';
            
            if (imgModal && modal) {
                imgModal.src = src;
                tituloModal.textContent = alt;
                modal.classList.add('activo');
            }
        }
    });

    // Cerrar Modal
    if (btnCerrarModal && modal) {
        btnCerrarModal.addEventListener('click', () => {
            modal.classList.remove('activo');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('activo');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('activo')) {
                modal.classList.remove('activo');
            }
        });
    }


    // ----------------------------------------------
    // 3. BOTÓN FLOTANTE "VOLVER ARRIBA"
    // ----------------------------------------------
    const btnArriba = document.createElement('button');
    btnArriba.id = 'btnVolverArriba';
    btnArriba.innerHTML = '↑';
    btnArriba.title = 'Volver arriba';
    document.body.appendChild(btnArriba);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnArriba.classList.add('visible');
        } else {
            btnArriba.classList.remove('visible');
        }
    });

    btnArriba.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // ----------------------------------------------
    // 4. VALIDACIÓN DE FORMULARIO CON FEEDBACK JS
    // ----------------------------------------------
    const formContacto = document.getElementById('form-contacto');
    if (formContacto) {
        formContacto.addEventListener('submit', (e) => {
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const mensaje = document.getElementById('mensaje');

            if (!nombre.value.trim() || !email.value.trim() || !mensaje.value.trim()) {
                e.preventDefault();
                mostrarNotificacion('Por favor, rellena todos los campos obligatorios (*)', 'error');
            } else {
                mostrarNotificacion('¡Gracias! Enviando tu mensaje...', 'exito');
            }
        });
    }

    function mostrarNotificacion(texto, tipo) {
        let notif = document.getElementById('notificacionJS');
        if (!notif) {
            notif = document.createElement('div');
            notif.id = 'notificacionJS';
            document.body.appendChild(notif);
        }
        notif.className = `notificacion-toast ${tipo}`;
        notif.textContent = texto;
        notif.classList.add('mostrar');

        setTimeout(() => {
            notif.classList.remove('mostrar');
        }, 4000);
    }
});


// ----------------------------------------------
// 5. FILTRADO INTERACTIVO DE CATÁLOGO CON CONTEO
// ----------------------------------------------
function filtrarCategoria(categoria) {
    const botones = document.querySelectorAll('.btn-categoria');
    botones.forEach(btn => btn.classList.remove('activo'));
    
    if (event && event.target) {
        event.target.classList.add('activo');
    }

    const bloques = document.querySelectorAll('.bloque-catalogo');
    let totalVisibles = 0;

    bloques.forEach(bloque => {
        if (categoria === 'todas') {
            bloque.classList.add('activo');
            totalVisibles++;
        } else {
            if (bloque.classList.contains(categoria)) {
                bloque.classList.add('activo');
                totalVisibles++;
            } else {
                bloque.classList.remove('activo');
            }
        }
    });

    // Feedback en consola o banner si se desea
    console.log(`Categorías activas visibles: ${totalVisibles}`);
}