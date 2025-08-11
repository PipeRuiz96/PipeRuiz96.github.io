document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

  // === Edita con tus datos ===
  const WHATSAPP_NUMBER = '57XXXXXXXXXX'; // tu número real
  const CALENDLY_URL = '#'; // tu enlace de Calendly/TidyCal (opcional)
  const defaultMsg = encodeURIComponent('Hola, vi tu web y quiero ayuda con automatización. ¿Podemos hablar?');
  const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMsg}`;
  const waFAB = document.getElementById('waFAB');
  const waButton = document.getElementById('waButton');
  const calButton = document.getElementById('calButton');
  const ctaCal = document.getElementById('cta-cal');
  [waFAB, waButton].forEach(el => { if (el) el.href = waURL; });
  [calButton, ctaCal].forEach(el => { if (el) el.href = CALENDLY_URL; });

  // Prefill por "asunto"
  const asunto = document.getElementById('asunto');
  function updateWAWithSubject() {
    const msg = encodeURIComponent('Hola, vi tu web. Asunto: ' + asunto.value);
    const liveURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    [waFAB, waButton].forEach(el => { if (el) el.href = liveURL; });
  }
  if (asunto) asunto.addEventListener('input', updateWAWithSubject);

  // Filtros de extensiones
  const filterButtons = document.querySelectorAll('[data-filter]');
  const grid = document.getElementById('extGrid');
  if (grid && filterButtons.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        grid.querySelectorAll('.e-card').forEach(card => {
          const cat = card.getAttribute('data-category');
          card.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
        });
      });
    });
  }

  // Formspree
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Enviando…';
      const data = new FormData(form);
      try {
        const resp = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (resp.ok) { form.reset(); status.textContent = '¡Gracias! Te responderé pronto.'; }
        else { status.textContent = 'No se pudo enviar. Escríbeme por WhatsApp.'; }
      } catch (err) { status.textContent = 'Error de red. Intenta de nuevo o usa WhatsApp.'; }
    });
  }
});
