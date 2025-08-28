// ===== ANIMACIÓN LÍNEAS WELCOME =====
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

// ===== FORMULARIO (reset) =====
const form = document.querySelector("footer form");
if (form) {
  form.addEventListener("submit", function () {
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

  // Si el menú está abierto (móvil), NO ocultar
  if (navCollapse && navCollapse.classList.contains("show")) {
    navbar.classList.remove("hide");
    lastY = y <= 0 ? 0 : y;
    return;
  }

  // ocultar al bajar / mostrar al subir
  if (goingDown) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  // color de fondo:
  // - transparente si estás arriba del todo
  // - azul SOLO cuando ya bajaste y estás subiendo (para legibilidad)
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

// Sincronizar estado al abrir/cerrar el menú en móvil
document.addEventListener("shown.bs.collapse", (e) => {
  if (e.target === navCollapse) {
    navbar.classList.remove("hide");
  }
});
document.addEventListener("hidden.bs.collapse", (e) => {
  if (e.target === navCollapse) {
    navbarOnScroll();
  }
});

// ===== AJUSTAR PADDING-TOP DEL HOME SEGÚN ALTURA NAVBAR =====
document.addEventListener("DOMContentLoaded", function () {
  const homeSection = document.querySelector("#home");
  function ajustarPadding() {
    const h = navbar.getBoundingClientRect().height;
    homeSection.style.paddingTop = h + "px";
  }
  ajustarPadding();
  window.addEventListener("resize", ajustarPadding);
});
