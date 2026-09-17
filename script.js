(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => nav?.classList.remove('open'));
  });

  const form = document.querySelector('.subscribe-form');
  form?.addEventListener('submit', (event) => {
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.disabled = true;
      button.textContent = 'Sending…';
    }
  });
})();
