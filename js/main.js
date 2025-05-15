// js/main.js

// Flip on click (mobile support)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.querySelector('.card-inner').classList.toggle('flipped');
    });
  });
  
  // Scroll-in animation using Intersection Observer
  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(revealOnScroll, { threshold: 0.2 });
  document.querySelectorAll('.section').forEach(section => observer.observe(section));
  
