document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu toggle (works on all pages)
  const toggles = document.querySelectorAll('.mobile-toggle');
  toggles.forEach(t => {
    t.addEventListener('click', () => {
      const nav = t.closest('.nav').querySelector('.nav-list');
      if (!nav) return;
      nav.style.display = (nav.style.display === 'flex' ? 'none' : 'flex');
      nav.style.flexDirection = 'column';
    });
  });

  // Set year placeholders (yr, yr2... yr7)
  const y = new Date().getFullYear();
  document.querySelectorAll('[id^="yr"]').forEach(el => el.textContent = y);

  // Fade-in on scroll for layered effect
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        // ensure fade animation plays (works even when class present earlier)
        e.target.style.animation = e.target.style.animation || '';
      }
    });
  }, {threshold: 0.08});

  document.querySelectorAll('.fade').forEach(el => {
    // respect inline animation-delay if provided
    const delay = el.style.animationDelay || '';
    el.style.animation = `fadeIn .6s ease ${delay} forwards`;
    observer.observe(el);
  });
});