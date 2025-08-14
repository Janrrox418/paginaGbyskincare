function saludo() {
  alert('¡Gracias por visitar GBY Skincare!');
}

document.addEventListener("DOMContentLoaded", function () {
  // ===== BOTÓN HAMBURGUESA EN MÓVIL =====
  const sidebar = document.querySelector(".sidebar");
  const btn = document.createElement("button");
  btn.textContent = "☰";
  btn.classList.add("menu-btn");
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // Cierra el menú al hacer clic en enlace
  const links = document.querySelectorAll(".sidebar .nav-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  });

  // ===== ANIMACIÓN EN CASCADA =====
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll("h1, h2, p, button");
        elements.forEach((el, index) => {
          el.classList.add("hidden");
          setTimeout(() => {
            el.classList.add("show");
          }, index * 200); // 200ms entre elementos
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // ===== MENÚ ACTIVO SEGÚN SCROLL =====
  const navLinks = document.querySelectorAll(".sidebar .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // margen para activar antes
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
});
