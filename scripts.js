document.addEventListener("DOMContentLoaded", function () {
  // ===== ANIMACIÓN LÍNEAS WELCOME =====
  const leftLines = document.querySelectorAll(".welcome-box-left .line");
  const rightLines = document.querySelectorAll(".welcome-box-right .line");
  leftLines.forEach((line, i) => {
    setTimeout(() => { line.style.opacity = "1"; line.style.transform = "translateY(0)"; }, i * 300);
  });
  rightLines.forEach((line, i) => {
    setTimeout(() => { line.style.opacity = "1"; line.style.transform = "translateY(0)"; }, i * 300);
  });

  // ===== MENÚ ACTIVO SEGÚN SCROLL =====
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.clientHeight;
      if (window.scrollY >= top && window.scrollY < top + height) current = section.id;
    });
    navLinks.forEach(link => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("active-link", href === `#${current}`);
    });
  });

  // ===== CERRAR COLLAPSE AL NAVEGAR (no al abrir dropdown) =====
  document.querySelectorAll(".navbar-nav a").forEach(a => {
    a.addEventListener("click", function () {
      const isToggle = this.classList.contains("dropdown-toggle");
      if (isToggle) return; // deja que Bootstrap maneje el dropdown

      const navbar = document.querySelector(".navbar-collapse.show");
      if (navbar) {
        bootstrap.Collapse.getOrCreateInstance(navbar).hide();
      }
    });
  });

  // ===== FORMULARIO =====
  const form = document.querySelector("footer form");
  if (form) {
    form.addEventListener("submit", function () {
      setTimeout(() => {
        form.reset();
        alert("¡Gracias! Tu mensaje ha sido enviado.");
      }, 100);
    });
  }
});
