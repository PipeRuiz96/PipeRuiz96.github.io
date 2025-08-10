// Utilidades y comportamiento básico
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // === WhatsApp links (edita tu número aquí) ===
  // TODO: reemplaza por tu número real, formato 57XXXXXXXXXX
  const WHATSAPP_NUMBER = '57XXXXXXXXXX';
  const defaultMsg = encodeURIComponent('Hola, vi tu web y quiero ayuda con automatización. ¿Podemos hablar?');
  const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMsg}`;

  const waBtn = document.getElementById('cta-whatsapp');
  const waSecondary = document.getElementById('waSecondary');
  const waFAB = document.getElementById('waFAB');
  [waBtn, waSecondary, waFAB].forEach(el => { if (el) el.href = waURL; });

  // Prefill por "asunto" desde el formulario
  const asunto = document.getElementById('asunto');
  if (asunto) {
    asunto.addEventListener('input', () => {
      const msg = encodeURIComponent(`Hola, vi tu web. Asunto: ${asunto.value}`);
      const liveURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
      [waSecondary, waFAB, waBtn].forEach(el => { if (el) el.href = liveURL; });
    });
  }

  // === Filtros del portfolio ===
  const filterButtons = document.querySelectorAll('[data-filter]');
  const grid = document.getElementById('portfolioGrid');
  if (grid && filterButtons.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        grid.querySelectorAll('.p-card').forEach(card => {
          const cat = card.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // === Formulario (Formspree) ===
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
        if (resp.ok) {
          form.reset();
          status.textContent = '¡Gracias! Te responderé pronto.';
        } else {
          status.textContent = 'Ups, no se pudo enviar. Escríbeme por WhatsApp.';
        }
      } catch (err) {
        status.textContent = 'Error de red. Intenta de nuevo o usa WhatsApp.';
      }
    });
  }
});

