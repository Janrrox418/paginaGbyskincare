// ===== ANIMACIÓN LÍNEAS WELCOME =====
document.addEventListener("DOMContentLoaded", function () {
  const leftLines = document.querySelectorAll(".welcome-box-left .line");
  const rightLines = document.querySelectorAll(".welcome-box-right .line");

  leftLines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, i * 300);
  });

  rightLines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, i * 300);
  });
});

// ===== CERRAR MENÚ EN MÓVIL AL HACER CLICK =====
const navCollapse = document.getElementById("navbarNavDropdown");
if (navCollapse) {
  document
    .querySelectorAll(".navbar-nav .dropdown-item, .navbar-nav .nav-link:not(.dropdown-toggle)")
    .forEach((el) => {
      el.addEventListener("click", () => {
        if (navCollapse.classList.contains("show")) {
          bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
      });
    });
}

// ===== FORMULARIO (reset + alerta) =====
const form = document.querySelector("footer form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    setTimeout(() => {
      form.reset();
      alert("¡Gracias! Tu mensaje ha sido enviado.");
    }, 100);
  });
}

// ===== NAVBAR: HIDE ON SCROLL + COLOR SOLO CUANDO CORRESPONDE =====
const navbar = document.querySelector(".navbar");
let lastY = window.scrollY;
let ticking = false;

function navbarOnScroll() {
  const y = window.scrollY;
  const goingDown = y > lastY;
  const pastTop = y > 80;

  // No ocultar si menú móvil abierto
  if (navCollapse && navCollapse.classList.contains("show")) {
    navbar.classList.remove("hide");
    lastY = y <= 0 ? 0 : y;
    return;
  }

  // Ocultar al bajar / mostrar al subir
  if (goingDown) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  // Color de fondo según scroll
  if (!pastTop) {
    navbar.classList.remove("scrolled");
  } else if (!goingDown) {
    navbar.classList.add("scrolled");
  }

  lastY = y <= 0 ? 0 : y;
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      requestAnimationFrame(navbarOnScroll);
      ticking = true;
    }
  },
  { passive: true }
);

// Sincronizar estado al abrir/cerrar menú móvil
document.addEventListener("shown.bs.collapse", (e) => {
  if (e.target === navCollapse) navbar.classList.remove("hide");
});
document.addEventListener("hidden.bs.collapse", (e) => {
  if (e.target === navCollapse) navbarOnScroll();
});

// ===== AJUSTAR PADDING-TOP DEL HOME SEGÚN ALTURA NAVBAR =====
document.addEventListener("DOMContentLoaded", function () {
  const homeSection = document.querySelector("#welcome");
  function ajustarPadding() {
    const alturaNavbar = navbar.getBoundingClientRect().height;
    homeSection.style.paddingTop = alturaNavbar + "px";
  }
  ajustarPadding();
  window.addEventListener("resize", ajustarPadding);
});

// ===== SUBMENÚS MÓVILES =====
  const isMobile = () => window.innerWidth < 992;

 document.querySelectorAll(".dropdown-submenu > a").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const submenu = this.nextElementSibling;
    if (submenu) {
      const parentMenu = this.closest(".dropdown-menu");
      parentMenu.querySelectorAll(".dropdown-menu.show").forEach(sm => {
        if (sm !== submenu) sm.classList.remove("show");
      });
      submenu.classList.toggle("show");
    }
  });
});


  // Cierra submenús al cerrar dropdown principal
  document.querySelectorAll(".dropdown").forEach(dropdown => {
    dropdown.addEventListener("hidden.bs.dropdown", function () {
      this.querySelectorAll(".dropdown-menu.show").forEach(sm => sm.classList.remove("show"));
    });
  });

