(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));
  if (nav && !nav.querySelector('[href="services.html"]')) {
    const link = document.createElement('a');
    link.href = 'services.html';
    link.textContent = 'Services & contact';
    nav.insertBefore(link, nav.firstChild);
  }
  const contact = document.querySelector('.contact-links');
  if (contact && !contact.querySelector('.whatsapp-link')) {
    const link = document.createElement('a');
    link.className = 'whatsapp-link';
    link.href = 'https://wa.me/27736957783?text=Hi%20ZM%20Results%2C%20I%27d%20like%20a%20free%20growth%20audit.';
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = '☏ WhatsApp 073 695 7783';
    contact.appendChild(link);
  }
  document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
    const button = event.currentTarget.querySelector('button');
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }
  });
})();
