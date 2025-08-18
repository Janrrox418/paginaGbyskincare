// ========================
// ANIMACIÓN EN CASCADA
// ========================
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hidden");

  const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", showOnScroll);
  showOnScroll(); // ejecutar al cargar
});

// ========================
// SUBMENÚS RESPONSIVE
// ========================

// En pantallas pequeñas (móviles/tablets), el submenu se abre al hacer clic
document.querySelectorAll(".dropdown-toggle").forEach((dropdown) => {
  dropdown.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      const submenu = this.nextElementSibling;

      if (submenu) {
        submenu.classList.toggle("show");
      }
    }
  });
});

// ========================
// CERRAR MENÚ OFFCANVAS AL HACER CLIC
// ========================
document.querySelectorAll(".offcanvas .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const offcanvas = document.querySelector(".offcanvas.show");
    if (offcanvas) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
      bsOffcanvas.hide();
    }
  });
});
