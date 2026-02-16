// ===========================================
// PORTFOLIO - JAVASCRIPT MEJORADO
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== AÑO EN FOOTER =====
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // ===== FILTROS DE PROYECTOS =====
  const filterButtons = document.querySelectorAll('.filters .tag');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Actualizar botón activo
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filtrar proyectos
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          
          if (filter === 'all') {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
          } else {
            if (category && category.includes(filter)) {
              card.style.display = 'block';
              card.style.animation = 'fadeIn 0.5s ease';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }
  
  // ===== FORMULARIO DE CONTACTO =====
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Si usas Formspree, esto se maneja automáticamente
      // Pero podemos agregar feedback visual
      
      const button = contactForm.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      
      button.textContent = 'Enviando...';
      button.disabled = true;
      
      // Simular envío (Formspree lo maneja real)
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 2000);
    });
  }
  
  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Ignorar links que solo tienen "#"
      if (href === '#' || !href) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // ===== WHATSAPP FAB - Hide on scroll down =====
  let lastScroll = 0;
  const fab = document.getElementById('waFAB');
  
  if (fab) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Solo ocultar si está scrolleando hacia abajo Y no está en el top
      if (currentScroll > lastScroll && currentScroll > 100) {
        fab.style.opacity = '0';
        fab.style.pointerEvents = 'none';
      } else {
        fab.style.opacity = '1';
        fab.style.pointerEvents = 'auto';
      }
      
      lastScroll = currentScroll;
    });
  }
  
  // ===== INTERSECTION OBSERVER para animaciones =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observar elementos para animación
  document.querySelectorAll('.card, .project-card, .featured-project').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // ===== DETALLES (FAQ) - uno a la vez =====
  const details = document.querySelectorAll('details');
  
  details.forEach(detail => {
    detail.addEventListener('toggle', function() {
      if (this.open) {
        // Cerrar otros detalles abiertos
        details.forEach(otherDetail => {
          if (otherDetail !== this && otherDetail.open) {
            otherDetail.open = false;
          }
        });
      }
    });
  });
  
});

// ===== ANIMACIÓN KEYFRAME (agregar al CSS si falta) =====
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
