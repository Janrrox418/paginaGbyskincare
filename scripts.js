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

  // ===== CIERRE MENÚ MÓVIL AL HACER CLICK (excepto dropdown-toggle) =====
  document
    .querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle), .navbar-nav .dropdown-item')
    .forEach(link => {
      link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar && navbar.classList.contains('show')) {
          new bootstrap.Collapse(navbar).hide();
        }
      });
    });

  // ===== DROPDOWNS MÓVILES: PRIMER TOQUE ABRE/CERRA, NO NAVEGA =====
  document.querySelectorAll('.navbar .dropdown-toggle').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth < 992) { // Solo en móviles
        e.preventDefault();
        e.stopPropagation();

        const menu = this.nextElementSibling;
        const isShown = menu.classList.contains('show');

        // Cerrar otros submenús
        document.querySelectorAll('.navbar .dropdown-menu.show').forEach(function (openMenu) {
          openMenu.classList.remove('show');
        });

        // Abrir/cerrar el submenú actual
        if (!isShown) {
          menu.classList.add('show');
        }
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
  // Manejo de submenús en móviles
document.querySelectorAll('.dropdown-submenu > a').forEach(trigger => {
  trigger.addEventListener('click', function (e) {
    e.preventDefault(); // Evita navegación
    e.stopPropagation();

    // Cierra otros submenús abiertos dentro del mismo dropdown
    const parentMenu = this.closest('.dropdown-menu');
    parentMenu.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
      if (openMenu !== this.nextElementSibling) {
        openMenu.classList.remove('show');
      }
    });

    // Alternar visibilidad del submenu clicado
    this.nextElementSibling.classList.toggle('show');
  });
});

// Cierra todos los submenús al cerrar el dropdown principal
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('hide.bs.dropdown', function () {
    this.querySelectorAll('.dropdown-menu.show').forEach(subMenu => {
      subMenu.classList.remove('show');
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos todos los <a> que tienen submenú
  document.querySelectorAll(".dropdown-submenu > a").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault(); // Evita navegar
      e.stopPropagation();

      let submenu = this.nextElementSibling;

      // Cierra otros submenús abiertos en el mismo nivel
      let parentMenu = this.closest(".dropdown-menu");
      parentMenu.querySelectorAll(".dropdown-menu.show").forEach(function (open) {
        if (open !== submenu) {
          open.classList.remove("show");
        }
      });

      // Alterna el submenu actual
      submenu.classList.toggle("show");
    });
  });

  // Al cerrar cualquier dropdown, cerramos también los submenús
  document.querySelectorAll(".dropdown").forEach(function (dropdown) {
    dropdown.addEventListener("hide.bs.dropdown", function () {
      this.querySelectorAll(".dropdown-menu.show").forEach(function (submenu) {
        submenu.classList.remove("show");
      });
    });
  });
});


});
