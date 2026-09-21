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
  document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
    const button = event.currentTarget.querySelector('button');
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }
  });
})();
