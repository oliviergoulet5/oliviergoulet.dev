import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('[data-animate-post]');
  if (posts.length) {
    gsap.from(posts, {
      y: 48,
      autoAlpha: 0,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.15,
      delay: 0.2,
    });
  }
});
