import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observar todos los elementos con clase fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Observador especial para skill logos
    const skillLogoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillLogos = entry.target.querySelectorAll('.skill-logo');
          skillLogos.forEach((logo, index) => {
            setTimeout(() => {
              (logo as HTMLElement).style.transform = 'scale(1.1)';
              setTimeout(() => {
                (logo as HTMLElement).style.transform = 'scale(1)';
              }, 200);
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observar skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => skillLogoObserver.observe(card));

    // Cleanup
    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
      skillCards.forEach(card => skillLogoObserver.unobserve(card));
    };
  }, []);
};
