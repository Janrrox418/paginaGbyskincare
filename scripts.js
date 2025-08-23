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

  document.addEventListener("DOMContentLoaded", function () {
  // Cerrar el collapse solo cuando hay navegación real (no al abrir dropdown)
  const nav = document.querySelector(".navbar-collapse");
  if (nav) {
    document.querySelectorAll(".navbar-nav .dropdown-item, .navbar-nav .nav-link:not(.dropdown-toggle)")
      .forEach(el => {
        el.addEventListener("click", () => {
          if (nav.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(nav).hide();
          }
        });
      });
  }
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
