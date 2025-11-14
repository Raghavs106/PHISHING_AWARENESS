// script.js - lightweight interactions

// set footer year in all pages
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  const ids = ['year','year-what','year-types','year-prevent'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });

  // simple scroll-in animation using IntersectionObserver
  const animTargets = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  animTargets.forEach(t => observer.observe(t));

  // feedback form client-side handling (no server)
  const form = document.getElementById('feedbackForm');
  if (form) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      // lightweight validation
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const msg = form.elements['message'].value.trim();
      if (!name || !email || !msg) {
        alert('Please fill all fields.');
        return;
      }
      // If you want real submissions, replace below with Formspree or Netlify Forms
      alert('Thanks — your feedback is received. (Demo submit)');
      form.reset();
    });
  }
});
