function saludo() {
  alert('¡Gracias por visitar GBY Skincare!');
}

// Cierra automáticamente el menú cuando se hace clic en un enlace
document.addEventListener("DOMContentLoaded", function () {
  const offcanvasElement = document.getElementById('sidebar');
  const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

  const navLinks = offcanvasElement.querySelectorAll('a.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      offcanvas.hide();
    });
  });
});
