import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from '../context/TranslationContext';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const { t, currentLanguage } = useTranslation();
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [titleComplete, setTitleComplete] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Efecto de escritura para el título
  useEffect(() => {
    setTitleText('');
    setSubtitleText('');
    setTitleComplete(false);

    const title = 'Julian Contreras';
    let titleIndex = 0;

    const titleInterval = setInterval(() => {
      if (titleIndex < title.length) {
        setTitleText(title.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        setTitleComplete(true);
      }
    }, 100);

    return () => clearInterval(titleInterval);
  }, [currentLanguage]);

  // Efecto de escritura para el subtítulo
  useEffect(() => {
    if (!titleComplete) return;

    const subtitle = currentLanguage === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer';
    let subtitleIndex = 0;

    const subtitleTimeout = setTimeout(() => {
      const subtitleInterval = setInterval(() => {
        if (subtitleIndex < subtitle.length) {
          setSubtitleText(subtitle.slice(0, subtitleIndex + 1));
          subtitleIndex++;
        } else {
          clearInterval(subtitleInterval);
        }
      }, 50);
    }, 100);

    return () => clearTimeout(subtitleTimeout);
  }, [titleComplete, currentLanguage]);

  // Efecto para crear partículas
  useEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;
    const particleCount = 50;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Generar valores aleatorios
      const animationDuration = 5 + Math.random() * 10;
      const leftPosition = Math.random() * 100;
      const topPosition = Math.random() * 100;
      const animationDelay = Math.random() * 10;

      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: float-particle ${animationDuration}s linear infinite;
        left: ${leftPosition}%;
        top: ${topPosition}%;
        animation-delay: ${animationDelay}s;
        z-index: 0;
      `;

      hero.appendChild(particle);
      particles.push(particle);
    }

    // Cleanup: eliminar partículas cuando el componente se desmonte
    return () => {
      particles.forEach(particle => {
        if (particle.parentNode === hero) {
          hero.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <section className="hero" id="inicio" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-photo">
          <img src="/images/avatar.png" className="avatar-image" alt="Julian Contreras" />
        </div>
        <h1>{titleText}</h1>
        <p>{subtitleText}</p>
        <a href="#sobre-mi" className="cta-button">{t('hero.cta')}</a>
      </div>
    </section>
  );
};

export default Hero;
