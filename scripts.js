function saludo() {
  alert('¡Gracias por visitar GBY Skincare!');
}

document.addEventListener("DOMContentLoaded", function () {
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
});
