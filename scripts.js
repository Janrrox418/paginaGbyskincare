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

// Animación al hacer scroll con efecto cascada
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll("h1, h2, p, button");

        elements.forEach((el, index) => {
          el.classList.add("hidden");
          setTimeout(() => {
            el.classList.add("show");
          }, index * 200); // 200ms entre cada elemento
        });

        observer.unobserve(entry.target); // Evita repetir animación
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});
