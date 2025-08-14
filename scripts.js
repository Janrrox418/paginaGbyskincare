document.addEventListener("DOMContentLoaded", function () {
  // ===== ANIMACIÓN EN CASCADA SECCIONES =====
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll("h1, h2, p, button");
        elements.forEach((el, index) => {
          el.classList.add("hidden");
          setTimeout(() => {
            el.classList.add("show");
          }, index * 200);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(section => observer.observe(section));

  // ===== MENÚ ACTIVO SEGÚN SCROLL =====
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
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
  const mobileMenu = document.getElementById("mobileMenu");
  const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(mobileMenu);
  document.querySelectorAll("#mobileMenu .nav-link").forEach(link => {
    link.addEventListener("click", () => offcanvas.hide());
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

  // ===== ANIMACIÓN CASCADA SUBMENÚS MÓVIL =====
  const mobileSubmenus = document.querySelectorAll(".offcanvas .collapse");
  mobileSubmenus.forEach(submenu => {
    submenu.addEventListener('show.bs.collapse', () => {
      const items = submenu.querySelectorAll("li");
      items.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(10px)";
        setTimeout(() => {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        }, index * 100);
      });
    });
  });
});
