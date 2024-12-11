// Función para mostrar el modal de carga y redirigir a la nueva página
function showLoadingModal(url) {
    // Mostrar el modal
    const modal = document.getElementById('loading-modal');
    modal.style.display = 'block';

    // Redirigir después de un breve retraso
    setTimeout(function() {
        window.location.href = url; // Redirige a la nueva URL
    }, 2000); // Espera 2 segundos antes de redirigir
}

// Agregar evento a los enlaces del menú
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a, .back-button');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento por defecto del enlace
            const url = this.href; // Obtener la URL del enlace
            showLoadingModal(url); // Mostrar el modal de carga y redirigir
        });
    });
});