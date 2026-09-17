(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const form = document.querySelector('.subscribe-form');

  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => nav?.classList.remove('open'));
  });

  // GitHub Pages is a static host, so FormSubmit handles secure delivery to email.
  if (form) {
    form.action = 'https://formsubmit.co/zmresults@gmail.com';
    form.method = 'POST';

    const fields = form.querySelectorAll('input, textarea');
    const fieldNames = ['business_name', 'email', 'phone', 'message'];
    fields.forEach((field, index) => {
      field.name = fieldNames[index] || `field_${index}`;
    });

    const hiddenFields = {
      _subject: 'New Local Growth website enquiry',
      _template: 'table',
      _captcha: 'false'
    };

    Object.entries(hiddenFields).forEach(([name, value]) => {
      let input = form.querySelector(`input[name="${name}"]`);
      if (!input) {
        input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        form.appendChild(input);
      }
      input.value = value;
    });

    form.addEventListener('submit', () => {
      const button = form.querySelector('button[type="submit"]');
      if (button) {
        button.disabled = true;
        button.textContent = 'Sending…';
      }
    });
  }

  const contactSection = document.querySelector('#contact .subscribe-wrap');
  if (contactSection && !contactSection.querySelector('.whatsapp-link')) {
    const whatsapp = document.createElement('a');
    whatsapp.className = 'whatsapp-link';
    whatsapp.href = 'https://wa.me/27736967783?text=Hi%20Local%20Growth%2C%20I%27d%20like%20to%20discuss%20getting%20my%20business%20on%20Google%27s%20first%20page.';
    whatsapp.target = '_blank';
    whatsapp.rel = 'noopener';
    whatsapp.textContent = 'Chat with us on WhatsApp: 073 696 7783';
    contactSection.querySelector('.subscribe-form')?.appendChild(whatsapp);
  }
})();
