document.addEventListener("DOMContentLoaded", function () {
  // ===== DESACTIVAR TRANSICIONES/ANIMACIONES EN NAVBAR =====
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .navbar .dropdown-menu,
    .navbar .dropdown-menu *,
    .navbar .dropdown,
    .navbar .nav-link {
      transition: none !important;
      animation: none !important;
    }
  `;
  document.head.appendChild(styleEl);

  // Quita "fade" si existe en los dropdowns (Bootstrap)
  document.querySelectorAll('.navbar .dropdown-menu').forEach(menu => {
    menu.classList.remove('fade');
  });

  // Limpia posibles estilos inline residuales
  document.querySelectorAll('.navbar .dropdown-menu li').forEach(el => {
    el.style.opacity = "";
    el.style.transform = "";
  });

  // ===== ANIMACIÓN LÍNEAS WELCOME =====
  const leftLines = document.querySelectorAll(".welcome-box-left .line");
  const rightLines = document.querySelectorAll(".welcome-box-right .line");

  [...leftLines].forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, i * 300);
  });

  [...rightLines].forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, i * 300);
  });

  // ===== MENÚ ACTIVO SEGÚN SCROLL =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle("active-link", link.getAttribute("href") === `#${current}`);
    });
  });

  // ===== CIERRE MENÚ MÓVIL AL HACER CLICK =====
  document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item').forEach(link => {
    link.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar && navbar.classList.contains('show')) {
        new bootstrap.Collapse(navbar).hide();
      }
    });
  });

  // ===== SIN ANIMACIONES EN NAVBAR =====
  // Eliminado: hover/cascada en desktop
  // Eliminado: lógica custom de toggle en móviles
  // Bootstrap manejará los dropdowns por defecto (click), sin animación.
  
  // ===== FORMULARIO =====
  const form = document.querySelector("footer form");
  if (form) {
    form.addEventListener("submit", function () {
      setTimeout(() => {
        form.reset();
        alert("¡Gracias! Tu mensaje ha sido enviado.");
      }, 100);
    });
  }
});
