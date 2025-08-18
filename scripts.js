document.addEventListener("DOMContentLoaded", function () {

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

  // ===== ANIMACIÓN EN CASCADA TEXTOS HOME =====
  const leftBox = document.querySelector(".welcome-box-left");
  const rightBox = document.querySelector(".welcome-box-right");

  if (leftBox && rightBox) {
    // Animación izquierda
    const leftLines = leftBox.querySelectorAll(".line");
    leftLines.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, i * 500);
    });

    // Animación derecha (empieza después de la izquierda)
    const rightLines = rightBox.querySelectorAll(".line");
    rightLines.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, (i + leftLines.length) * 500);
    });
  }

});
