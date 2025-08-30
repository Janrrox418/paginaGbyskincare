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

  // ===== CERRAR MENÚ EN MÓVIL AL CLICAR LINK =====
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
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

  // ===== NAVBAR DINÁMICA =====
  const navbar = document.querySelector(".navbar");
  let lastScroll = 0;
  window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 50) {
      navbar.classList.add("navbar-hidden");
    } else {
      navbar.classList.remove("navbar-hidden");
    }
    lastScroll = currentScroll;

    if (window.scrollY > 50) {
      navbar.classList.add("navbar-colored");
    } else {
      navbar.classList.remove("navbar-colored");
    }
  });

  // ===== AJUSTAR PADDING EN HOME SEGÚN NAVBAR =====
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
