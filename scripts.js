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

  // ===== ANIMACIÓN CASCADA TEXTOS HOME =====
  const leftLines = document.querySelectorAll(".welcome-box-left .line");
  const rightLines = document.querySelectorAll(".welcome-box-right .line");

  leftLines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = 1;
      line.style.transform = "translateY(0)";
    }, i * 500); // 500ms entre líneas
  });

  rightLines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = 1;
      line.style.transform = "translateY(0)";
    }, (leftLines.length + i) * 500); // empieza después de izquierda
  });

});
