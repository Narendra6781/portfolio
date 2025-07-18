document.addEventListener('DOMContentLoaded', () => {
  // Scroll animations
  document.querySelectorAll('.animate-slide-up').forEach(el => {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slide-up 0.8s ease-out forwards';
          // trigger skill bars
          if (entry.target.id === 'skills') {
            document.querySelectorAll('.skill-bar').forEach(bar => {
              bar.style.width = bar.dataset.width;
            });
          }
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    obs.observe(el);
  });

  // Contact form feedback
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('form-message').textContent = "Thank you! I'll get back to you soon.";
    document.getElementById('form-message').classList.remove('hidden');
    form.reset();
    setTimeout(() => document.getElementById('form-message').classList.add('hidden'), 5000);
  });
});
