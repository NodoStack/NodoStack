const idiomaToggle = document.getElementById('idioma-toggle');

let idiomaActual = 'es';

idiomaToggle.addEventListener('click', () => {
  if (idiomaActual === 'es') {
    // ✅ NAVBAR
    document.querySelector('a.nav-link[href="#sobre"]').textContent = 'About us';
    document.querySelector('a.nav-link[href="#servicios"]').textContent = 'Services';
    document.querySelector('a.nav-link[href="#proyectos"]').textContent = 'Projects';
    document.querySelector('a.nav-link[href="#team"]').textContent = 'Team';
    document.querySelector('a.nav-link[href="#contacto"]').textContent = 'Contact';

    // ✅ HERO
    document.querySelector('.hero-text h1').textContent = 'Where technology becomes real solutions.';

    // ✅ CTA WhatsApp
    const ctaWhatsApp = document.querySelector('.btn-cta');
    if (ctaWhatsApp) {
      ctaWhatsApp.textContent = '📩 Chat on WhatsApp';
    }
    // ✅ SOBRE NOSOTRAS
    document.querySelector('#sobre h2').textContent = 'About Us';
    document.querySelector('#sobre p.lead').innerHTML = `
      We are a team of developers passionate about transforming ideas into real solutions. NodoStack was born with a clear vision: to use technology to accompany, create and generate positive impact.  
      <br><br>
      We are united by creativity, collaboration and the desire to build meaningful digital experiences. Each project is an opportunity to connect with people, solve challenges and leave a mark.
      <br><br>
      <strong class="text-acento">We don’t just code – we build digital stories. Ready to build yours?</strong>
    `;

    // ✅ ¿QUÉ RESOLVEMOS?
    document.querySelector('section.bg-accento h2').textContent = 'What we solve';
    const textosCards = document.querySelectorAll('.card-dev-custom');

    if (textosCards.length >= 4) {
      textosCards[0].querySelector('h5').textContent = 'Need technical support';
      textosCards[0].querySelector('p').textContent = 'Whether for one-time deliveries or ongoing support, we work as your tech team.';

      textosCards[1].querySelector('h5').textContent = 'Tech disconnect';
      textosCards[1].querySelector('p').textContent = 'We help you adopt digital tools that boost your business, without the headaches.';

      textosCards[2].querySelector('h5').textContent = 'Processes needing optimization';
      textosCards[2].querySelector('p').textContent = 'We automate tasks and digitize workflows so your time goes further.';

      textosCards[3].querySelector('h5').textContent = 'Custom solutions';
      textosCards[3].querySelector('p').textContent = 'We develop platforms 100% tailored to your needs.';
    }

    document.querySelector('section.bg-accento p.fst-italic').textContent = 'Every project is unique. We solve it accordingly.';

    // ✅ SERVICIOS
    document.querySelector('#servicios h2').textContent = 'Our Services';
    const servicios = document.querySelectorAll('#servicios .col-md-6');

    if (servicios.length >= 4) {
      servicios[0].querySelector('h5').textContent = 'Web & Mobile Development';
      servicios[0].querySelector('p').textContent = 'We build modern websites and apps, aligned with your goals and ready to scale.';

      servicios[1].querySelector('h5').textContent = 'UX/UI Design';
      servicios[1].querySelector('p').textContent = 'We create visual experiences that are clear, intuitive and user-centered.';

      servicios[2].querySelector('h5').textContent = 'Tech consulting & support';
      servicios[2].querySelector('p').textContent = 'We advise you from idea to launch, and optionally provide ongoing support.';

      servicios[3].querySelector('h5').textContent = 'Testing & QA';
      servicios[3].querySelector('p').textContent = 'We test every part to ensure stability, usability and a great experience.';
    }

    // ✅ PROYECTOS
    document.querySelector('#proyectos h2').textContent = 'Real solutions, real results';
    document.querySelector('#proyectos p.lead').textContent = 'We build simple tools that solve real business problems.';

    const cards = document.querySelectorAll('#proyectos .card-body');

    if (cards.length >= 2) {
      cards[0].querySelector('h4').textContent = 'Want to sell online?';
      cards[0].querySelector('p').textContent = 'We built an app (web + mobile) where clients shop easily and you control everything.';
      cards[0].querySelectorAll('li')[0].textContent = 'Product catalog with images';
      cards[0].querySelectorAll('li')[1].textContent = 'Online payments and order management';
      cards[0].querySelectorAll('li')[2].textContent = 'Works on desktop or mobile';
      cards[0].querySelectorAll('li')[3].textContent = 'Fully custom, no generic templates';

      cards[1].querySelector('h4').textContent = 'Too many repeated inquiries?';
      cards[1].querySelector('p').textContent = 'We implement a chatbot to auto-respond common questions from clients or staff.';
      cards[1].querySelectorAll('li')[0].textContent = 'Saves time on customer service';
      cards[1].querySelectorAll('li')[1].textContent = 'Available 24/7';
      cards[1].querySelectorAll('li')[2].textContent = 'Customized with your brand tone';
      cards[1].querySelectorAll('li')[3].textContent = 'Integrates with WhatsApp or your website';
    }

    // ✅ EQUIPO
    document.querySelector('#team h2').textContent = 'Our Team';
    document.querySelectorAll('#team .card-text').forEach(p => p.textContent = 'Developer Team');

    // ✅ CONTACTO
    document.querySelector('#contacto h2').textContent = 'Contact';
    document.querySelector('#contacto p.text-center').textContent = 'Got an idea or a project? Contact us – we reply within 24h.';
    document.querySelector('#contacto label[for="nombre"]').textContent = 'Name';
    document.querySelector('#contacto input#nombre').placeholder = 'Your full name';
    document.querySelector('#contacto label[for="email"]').textContent = 'Email';
    document.querySelector('#contacto input#email').placeholder = 'your@email.com';
    document.querySelector('#contacto label[for="mensaje"]').textContent = 'Message';
    document.querySelector('#contacto textarea#mensaje').placeholder = 'Tell us how we can help you';
    document.querySelector('#contacto button[type="submit"]').textContent = 'Send message';
  
    // ✅ FOOTER
    document.querySelector('footer p').textContent = 'NodoStack © 2025 – Where code connects';

    // ✅ Toggle texto del botón
  
    idiomaActual = 'en';

  } else {
    location.reload(); // Volver al español refrescando
  }
});