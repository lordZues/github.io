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

  document.querySelector('.subscribe-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = event.currentTarget.querySelector('.form-status');
    if (status) status.textContent = 'Thanks — we will contact you within one business day.';
    event.currentTarget.reset();
  });
})();
