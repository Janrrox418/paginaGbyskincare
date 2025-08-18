document.addEventListener("DOMContentLoaded", function () {
 // ===== ANIMACIÓN ENTRADA HOME =====
const leftBox = document.querySelector(".welcome-box-left");
const rightBox = document.querySelector(".welcome-box-right");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      leftBox.classList.add("show");
      setTimeout(() => rightBox.classList.add("show"), 500);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

observer.observe(document.querySelector(".home-section"));


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
});
