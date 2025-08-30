document.addEventListener("DOMContentLoaded", function () {
  // ===== ANIMACIÓN LÍNEAS WELCOME =====
  const leftLines = document.querySelectorAll(".welcome-box-left .line");
  const rightLines = document.querySelectorAll(".welcome-box-right .line");

  leftLines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.3}s`;
  });
  rightLines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.3}s`;
  });

  // ===== CERRAR MENÚ EN MÓVIL AL CLICAR LINK (solo si NO tiene submenú) =====
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const parentLi = link.closest(".nav-item.dropdown");

      // Si es un dropdown (tiene submenu) en móvil, no cerramos el menú principal
      if (parentLi && window.innerWidth < 992) {
        e.preventDefault(); // evita que navegue de golpe
        const menu = parentLi.querySelector(".dropdown-menu");
        menu.classList.toggle("show");
        return;
      }

      // Si es un link normal, cerramos el menú
      const navbarCollapse = document.querySelector(".navbar-collapse");
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });

  // ===== FORMULARIO =====
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting us! We will get back to you soon.");
      this.reset();
    });
  }

  // ===== AJUSTAR PADDING EN HOME SEGÚN NAVBAR =====
  const navbar = document.querySelector(".navbar");
  const homeSection = document.querySelector(".home");
  if (homeSection) {
    homeSection.style.paddingTop = `${navbar.offsetHeight}px`;
  }

  // ===== SUBMENÚS: CLICK EN MÓVIL / HOVER EN PC =====
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    // Click en móvil
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        menu.classList.toggle("show");
      }
    });

    // Hover en PC
    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth >= 992) {
        menu.classList.add("show");
      }
    });
    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth >= 992) {
        menu.classList.remove("show");
      }
    });
  });

  // ===== RESET ESTADOS AL CAMBIAR TAMAÑO =====
  window.addEventListener("resize", function () {
    const menus = document.querySelectorAll(".dropdown-menu");
    menus.forEach((menu) => menu.classList.remove("show"));
  });

  // ===== IMAGEN FLOTANTE (decorativa) =====
  const floatingImage = document.querySelector(".imagen-flotante");
  if (floatingImage) {
    setTimeout(() => {
      floatingImage.classList.add("visible");
    }, 500);
  }

  // ===== FADE-IN EN SECCIONES AL SCROLL =====
  const fadeElems = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );
  fadeElems.forEach((el) => observer.observe(el));

  // ===== CARDS DE PROCEDURES (animación) =====
  const procedureCards = document.querySelectorAll(".procedure-card");
  procedureCards.forEach((card) => {
    card.addEventListener("mouseenter", () =>
      card.classList.add("hovered")
    );
    card.addEventListener("mouseleave", () =>
      card.classList.remove("hovered")
    );
  });

  // ===== FIX: SUBMENÚS PRINCIPALES EN MÓVIL =====
  document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        const parentLi = this.closest(".nav-item.dropdown");
        const menu = parentLi.querySelector(".dropdown-menu");

        if (!menu.classList.contains("show")) {
          e.preventDefault(); // Evita navegar en el primer toque
          let dropdown = new bootstrap.Dropdown(this);
          dropdown.show();
        }
      }
    });
  });
});

// ===== NAVBAR: ESCONDER EN SCROLL HACIA ABAJO, MOSTRAR EN SCROLL HACIA ARRIBA =====
const navbar = document.querySelector(".navbar");
const navCollapse = document.getElementById("navbarNavDropdown");
let lastY = window.scrollY;
let ticking = false;

function navbarOnScroll() {
  const y = window.scrollY;
  const goingDown = y > lastY;
  const pastTop = y > 80;

  // Si el menú móvil está abierto, no esconder navbar
  if (navCollapse && navCollapse.classList.contains("show")) {
    navbar.classList.remove("hide");
    lastY = y <= 0 ? 0 : y;
    return;
  }

  if (goingDown) {
    navbar.classList.add("hide");   // se esconde
  } else {
    navbar.classList.remove("hide"); // aparece
  }

  // Color de fondo al pasar del top
  if (!pastTop) {
    navbar.classList.remove("scrolled");
  } else if (!goingDown) {
    navbar.classList.add("scrolled");
  }

  lastY = y <= 0 ? 0 : y;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(navbarOnScroll);
    ticking = true;
  }
}, { passive: true });
