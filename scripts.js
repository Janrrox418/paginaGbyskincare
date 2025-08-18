document.addEventListener("DOMContentLoaded", function () {
  // ===== ANIMACIÓN LÍNEAS WELCOME =====
  const leftLines = document.querySelectorAll(".welcome-box-left .line");
  const rightLines = document.querySelectorAll(".welcome-box-right .line");

  leftLines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, index * 300); // retardo en cascada
  });

  rightLines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, index * 300);
  });

  // ===== MENÚ ACTIVO SEGÚN SCROLL =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      const y = window.scrollY;
      if (y >= sectionTop && y < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-link");
      }
    });
  });

  // ===== CIERRE MENÚ MÓVIL AL HACER CLICK =====
  document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .dropdown-item').forEach(link => {
    link.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar.classList.contains('show')) {
        new bootstrap.Collapse(navbar).hide();
      }
    });
  });

  // ===== ANIMACIÓN CASCADA SUBMENÚS PC =====
  const dropdowns = document.querySelectorAll(".navbar .dropdown");
  dropdowns.forEach(drop => {
    drop.addEventListener("mouseenter", () => {
      const items = drop.querySelectorAll(".dropdown-menu li");
      items.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(10px)";
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }, index * 100);
      });
    });
    drop.addEventListener("mouseleave", () => {
      const items = drop.querySelectorAll(".dropdown-menu li");
      items.forEach(el => {
        el.style.opacity = "";
        el.style.transform = "";
      });
    });
  });
  // ===== FORMULARIO=====
    const form = document.querySelector("footer form"); // selecciona tu formulario
  if (form) {
    form.addEventListener("submit", function(e) {
      // Espera un momento para que el formulario se envíe
      setTimeout(() => {
        form.reset(); // limpia todos los campos
        alert("¡Gracias! Tu mensaje ha sido enviado."); // opcional
      }, 100);
    });
  }
});
