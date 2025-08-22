document.addEventListener("DOMContentLoaded", function () {
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

  // ===== DROPDOWNS MÓVILES: PRIMER TOQUE ABRE/CERRA, NO NAVEGA =====
  document.querySelectorAll('.navbar .dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth < 992) {
        const menu = this.nextElementSibling;
        const isOpen = menu.classList.contains('show');

        e.preventDefault();
        e.stopPropagation();

        // Cierra otros submenús abiertos
        document.querySelectorAll('.navbar .dropdown-menu.show').forEach(openMenu => {
          if (openMenu !== menu) openMenu.classList.remove("show");
        });

        // Alterna este submenú
        menu.classList.toggle("show", !isOpen);
      }
    });
  });

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
