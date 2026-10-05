// ==============================================
// BELTS TRADING - AVISO DE COOKIES / ALMACENAMIENTO LOCAL
// Esta web solo usa almacenamiento técnico (sin analítica ni publicidad),
// por lo que no se requiere consentimiento previo, pero sí informar.
// SI EN EL FUTURO AÑADES GOOGLE ANALYTICS, PÍXELES, MAPAS, VÍDEOS, ETC.,
// hay que cambiar este aviso por uno con botones "Aceptar" y "Rechazar"
// y no cargar esos servicios hasta que el usuario acepte.
// ==============================================
document.addEventListener('DOMContentLoaded', function () {
    var KEY = 'cookiesAvisoVisto';
    var visto = false;
    try { visto = localStorage.getItem(KEY) === 'true'; } catch (e) {}
    if (visto) return;

    var aviso = document.createElement('div');
    aviso.id = 'avisoCookies';
    aviso.className = 'aviso-cookies';
    aviso.setAttribute('role', 'region');
    aviso.setAttribute('aria-label', 'Aviso sobre cookies');
    aviso.innerHTML =
        '<p>Esta web solo utiliza almacenamiento técnico imprescindible para su funcionamiento ' +
        '(por ejemplo, recordar que has cerrado este aviso). No usamos cookies de analítica ni de publicidad. ' +
        '<a href="politica-cookies.html">Más información</a>.</p>' +
        '<div class="acciones-cookies"><button id="btnEntendidoCookies" class="btn-cookies" type="button">Entendido</button></div>';
    document.body.appendChild(aviso);

    setTimeout(function () { aviso.classList.add('mostrar'); }, 500);

    document.getElementById('btnEntendidoCookies').addEventListener('click', function () {
        aviso.classList.remove('mostrar');
        try { localStorage.setItem(KEY, 'true'); } catch (e) {}
        setTimeout(function () { aviso.remove(); }, 600);
    });
});
