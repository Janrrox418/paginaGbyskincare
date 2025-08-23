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

  // ===== DROPDOWNS: móvil y cierre correcto =====
(function () {
  const isMobile = () => window.innerWidth < 992;

  // Cerrar el collapse solo cuando navegamos de verdad
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      const isToggle = this.classList.contains('dropdown-toggle');
      const hasSubmenu = this.nextElementSibling && this.nextElementSibling.classList.contains('dropdown-menu');

      if (isMobile() && (isToggle || hasSubmenu)) {
        // En móvil: abrir/cerrar dropdown sin cerrar el collapse ni navegar
        e.preventDefault();
        e.stopPropagation();
        const dd = bootstrap.Dropdown.getOrCreateInstance(this);
        dd.toggle();
        return;
      }

      // Cerrar el menú colapsado si está abierto (navegación normal)
      const nav = document.querySelector('.navbar-collapse.show');
      if (nav) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });

  // Limpieza: al cerrar cualquier dropdown, ocultar submenús que hayan quedado abiertos
  document.querySelectorAll('.nav-item.dropdown').forEach(drop => {
    drop.addEventListener('hidden.bs.dropdown', function () {
      this.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
    });
  });
})();

  

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
