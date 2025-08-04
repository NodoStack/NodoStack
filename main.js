ddocument.addEventListener("DOMContentLoaded", () => {
  // 🌍 Estado del idioma
  let enIngles = false;

  // 🔘 Botón de idioma
  const idiomaBtn = document.getElementById("idioma-btn");

  // 🧠 Recuperar idioma guardado (si existe)
  const idiomaGuardado = localStorage.getItem("idioma");
  if (idiomaGuardado === "en") {
    enIngles = true;
  }

  // 📝 Ejecutar traducción inicial
  if (typeof traducir === "function") {
    traducir(enIngles);
  } else {
    console.warn("La función traducir() no está disponible.");
  }

  // 🔁 Escuchar clic en el botón de idioma
  if (idiomaBtn) {
    // Mostrar el idioma al que se va a cambiar
    idiomaBtn.textContent = enIngles ? "Español" : "English";

    idiomaBtn.addEventListener("click", () => {
      enIngles = !enIngles;
      localStorage.setItem("idioma", enIngles ? "en" : "es");

      // Mostrar el idioma al que se va a cambiar
      idiomaBtn.textContent = enIngles ? "Español" : "English";

      if (typeof traducir === "function") {
        traducir(enIngles);
      }
    });
  }

  // 🔧 Animación al hacer scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // 🛡️ Validación de formulario
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const nombre = document.querySelector("input[name='nombre']");
      const email = document.querySelector("input[name='_replyto']");
      const mensaje = document.querySelector("textarea[name='mensaje']");

      if (!nombre?.value || !email?.value || !mensaje?.value) {
        e.preventDefault();
        alert(enIngles ? "Please complete all fields." : "Por favor completá todos los campos.");
      }
    });
  }

  // 🔧 Más funciones, sliders, efectos, etc.
});