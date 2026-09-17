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

  document.querySelectorAll('.copy-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const numbers = [...button.closest('.result-card').querySelectorAll('.balls span')]
        .map((ball) => ball.textContent.trim()).join(' ');
      try {
        await navigator.clipboard.writeText(numbers);
        const original = button.textContent;
        button.textContent = 'Copied';
        setTimeout(() => { button.textContent = original; }, 1400);
      } catch {
        button.textContent = numbers;
      }
    });
  });

  document.querySelector('.subscribe-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = event.currentTarget.querySelector('.form-status');
    if (status) status.textContent = 'Thanks — alerts will be available soon.';
    event.currentTarget.reset();
  });
})();
