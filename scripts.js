document.addEventListener("DOMContentLoaded", function () {
  // ===== ANIMACIÓN LÍNEAS WELCOME =====
  const leftLines = document.querySelectorAll(".welcome-box-left .line");
  const rightLines = document.querySelectorAll(".welcome-box-right .line");

  leftLines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, i * 300);
  });

  rightLines.forEach((line, i) => {
    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, i * 300);
  });

  // ===== NAVBAR (cerrar en móviles al hacer clic) =====
  const nav = document.querySelector(".navbar-collapse");
  if (nav) {
    document
      .querySelectorAll(
        ".navbar-nav .dropdown-item, .navbar-nav .nav-link:not(.dropdown-toggle)"
      )
      .forEach((el) => {
        el.addEventListener("click", () => {
          if (nav.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(nav).hide();
          }
        });
      });
  }

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

  // ===== NAVBAR HIDE ON SCROLL =====
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Bajando -> ocultar
      navbar.classList.add("hide");
    } else {
      // Subiendo -> mostrar
      navbar.classList.remove("hide");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // evita negativos
  });
});
