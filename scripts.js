// ====== SUBMENÚ EN HOVER (SOLO PARA PC) ======
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768) {
    document.querySelectorAll(".dropdown").forEach(function (dropdown) {
      dropdown.addEventListener("mouseenter", function () {
        const menu = this.querySelector(".dropdown-menu");
        if (menu) {
          menu.classList.add("show");
        }
      });
      dropdown.addEventListener("mouseleave", function () {
        const menu = this.querySelector(".dropdown-menu");
        if (menu) {
          menu.classList.remove("show");
        }
      });
    });
  }
});

// ====== ANIMACIÓN DE CASCADA ======
document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });

  hiddenElements.forEach((el) => observer.observe(el));
});

// ====== FORZAR CIERRE DE SUBMENÚ EN MÓVIL ======
document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      const menu = this.nextElementSibling;
      if (menu) {
        menu.classList.toggle("show");
      }
    }
  });
});
// ====== CIERRE DEL MENÚ AL HACER CLICK FUERA ======
document.addEventListener("click", function (e) {
  if (!e.target.closest(".navbar-nav") && !e.target.closest(".navbar-toggler")) {
    document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
      menu.classList.remove("show");
    });
  }
});