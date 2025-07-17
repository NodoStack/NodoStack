
// --- Animación de entrada para secciones ---
const secciones = document.querySelectorAll("section");

const mostrarSeccion = () => {
  secciones.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const visible = top < window.innerHeight - 100;
    if (visible) {
      sec.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", mostrarSeccion);
window.addEventListener("load", mostrarSeccion);

// --- Mensaje de envío de formulario ---
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json"
      }
    }).then(() => {
      alert("¡Gracias por tu mensaje! Nos pondremos en contacto.");
      form.reset();
    }).catch(() => {
      alert("Hubo un error. Intentalo más tarde.");
    });
  });
}

// --- Botón de idioma ---
window.addEventListener("DOMContentLoaded", () => {
  const idiomaBtn = document.getElementById("idioma-toggle");
  if (!idiomaBtn) return;

  let enIngles = false;

  idiomaBtn.addEventListener("click", () => {
    enIngles = !enIngles;

    // Hero
    const tituloHero = document.querySelector(".hero h1");
    const slogan = document.querySelector(".slogan");
    const btnCta = document.querySelector(".btn-cta");

    tituloHero.textContent = "NodoStack";
    slogan.textContent = enIngles
      ? "We connect ideas. We deploy solutions."
      : "Conectamos ideas. Desplegamos soluciones.";
    btnCta.textContent = enIngles ? "Learn more" : "Conocé más";

    // Sobre
    const sobreTitulo = document.querySelector("#sobre h2");
    const sobreTexto = document.querySelector("#sobre p");

    sobreTitulo.textContent = enIngles ? "Who we are" : "¿Quiénes somos?";
    sobreTexto.textContent = enIngles
      ? "We are a team of passionate developers who love technology, collaboration, and clean code. At NodoStack, we build digital solutions that connect people and empower ideas."
      : "Somos un equipo de desarrolladoras apasionadas por la tecnología, la colaboración y el código limpio. En NodoStack creamos soluciones digitales que conectan personas y potencian ideas.";

    // Stack
    const stackTitulo = document.querySelector("#stack h2");
    stackTitulo.textContent = enIngles ? "Our Stack" : "Nuestro Stack";

    // Equipo
    const equipoTitulo = document.querySelector("#equipo h2");
    const miembroRol = document.querySelector(".miembro p");

    equipoTitulo.textContent = enIngles ? "The Team" : "El equipo";
    miembroRol.textContent = enIngles ? "Fullstack Developer" : "Desarrolladora Fullstack";

    // Contacto
    const contactoTitulo = document.querySelector("#contacto h2");
    const inputNombre = document.querySelector("input[name='nombre']");
    const inputEmail = document.querySelector("input[name='_replyto']");
    const textareaMensaje = document.querySelector("textarea[name='mensaje']");
    const btnEnviar = document.querySelector("button[type='submit']");

    contactoTitulo.textContent = enIngles ? "Contact" : "Contacto";
    inputNombre.placeholder = enIngles ? "Your name" : "Tu nombre";
    inputEmail.placeholder = enIngles ? "Your email" : "Tu correo";
    textareaMensaje.placeholder = enIngles ? "Your message" : "Tu mensaje";
    btnEnviar.textContent = enIngles ? "Send" : "Enviar";

    // Footer
    const footerTexto = document.querySelector(".footer p");
    footerTexto.textContent = enIngles
      ? "NodoStack © 2025 – Where code connects"
      : "NodoStack © 2025 – Donde el código conecta";

    // Cambiar texto del botón
    idiomaBtn.textContent = enIngles ? "🇪🇸 Español" : "🇬🇧 English";
  });
});