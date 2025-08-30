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
  document.querySelectorAll(".navbar-nav .dropdown-item, .navbar-nav .nav-link:not(.dropdown-toggle)")
    .forEach((el) => {
      el.addEventListener("click", (e) => {
        // Si es un item que abre submenu, no cerrar el collapse
        if (e.target.closest(".dropdown-submenu")) return;

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

  if (navCollapse && navCollapse.classList.contains("show")) {
    navbar.classList.remove("hide");
    lastY = y <= 0 ? 0 : y;
    return;
  }

  if (goingDown) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

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

// ===== SUBMENÚS: CLICK EN MÓVIL + HOVER EN PC =====
const isMobile = () => window.innerWidth < 992;

document.querySelectorAll(".dropdown-submenu > a.dropdown-toggle").forEach((link) => {
  if (link.dataset.bound === "true") return; // evita doble binding si el script se recarga
  link.dataset.bound = "true";

  const menu = link.nextElementSibling;

  // Click en móviles
  link.addEventListener("click", function (e) {
    if (!isMobile()) return; // en desktop se maneja por hover
    e.preventDefault();
    e.stopPropagation();

    const parentMenu = link.closest(".dropdown-menu");
    if (parentMenu) {
      parentMenu.querySelectorAll(".dropdown-menu.show").forEach((sm) => {
        if (sm !== menu) sm.classList.remove("show");
      });
    }
    menu.classList.toggle("show");
  });
});

// Hover en PC
document.querySelectorAll(".dropdown-submenu").forEach((submenu) => {
  const menu = submenu.querySelector(".dropdown-menu");
  submenu.addEventListener("mouseenter", function () {
    if (!isMobile()) menu.classList.add("show");
  });
  submenu.addEventListener("mouseleave", function () {
    if (!isMobile()) menu.classList.remove("show");
  });
});

// Cierra submenús al cerrar el dropdown principal
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.addEventListener("hidden.bs.dropdown", function () {
    this.querySelectorAll(".dropdown-menu.show").forEach((sm) => sm.classList.remove("show"));
  });
});

// Limpia estados al cambiar tamaño
window.addEventListener("resize", () => {
  if (!isMobile()) {
    document.querySelectorAll(".dropdown-menu.show").forEach((sm) => sm.classList.remove("show"));
  }
});

// ===== Imagen flotante decorativa =====
document.addEventListener("DOMContentLoaded", function () {
  const floatingImg = document.querySelector(".floating-image");
  if (floatingImg) {
    setTimeout(() => {
      floatingImg.classList.add("show");
    }, 300);
  }
});

// ===== FADE-IN ANIMACIONES (About Us + Other Treatments, etc.) =====
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // animar solo una vez
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
// ===== PROCEDURES / ANIMACIONES DE CARDS DE PROCEDIMIENTOS =====
document.addEventListener("DOMContentLoaded", () => {
  const procedureCards = document.querySelectorAll(".procedure-card");

  // Animación fade-in al hacer scroll
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // animar solo una vez
      }
    });
  }, { threshold: 0.2 });

  procedureCards.forEach(card => observer.observe(card));

  // Hover con efecto leve de elevación
  procedureCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
    });
  });
});

