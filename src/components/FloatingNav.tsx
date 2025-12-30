import React, { useEffect, useState } from 'react';
import { useTranslation } from '../context/TranslationContext';
import '../styles/FloatingNav.css';

const FloatingNav: React.FC = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation();
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'inicio');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
  };

  return (
    <nav className="floating-nav" id="floating-nav">
      {/* Inicio */}
      <a
        href="#inicio"
        className={`nav-icon ${activeSection === 'inicio' ? 'active' : ''}`}
        data-section="inicio"
        title={t('nav.inicio')}
        onClick={(e) => handleNavClick(e, 'inicio')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span className="nav-label">{t('nav.inicio')}</span>
      </a>

      {/* Sobre Mí */}
      <a
        href="#sobre-mi"
        className={`nav-icon ${activeSection === 'sobre-mi' ? 'active' : ''}`}
        data-section="sobre-mi"
        title={t('nav.sobre-mi')}
        onClick={(e) => handleNavClick(e, 'sobre-mi')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span className="nav-label">{t('nav.sobre-mi')}</span>
      </a>

      {/* Conocimientos */}
      <a
        href="#conocimientos"
        className={`nav-icon ${activeSection === 'conocimientos' ? 'active' : ''}`}
        data-section="conocimientos"
        title={t('nav.conocimientos')}
        onClick={(e) => handleNavClick(e, 'conocimientos')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <span className="nav-label">{t('nav.conocimientos')}</span>
      </a>

      {/* Educación */}
      <a
        href="#educacion"
        className={`nav-icon ${activeSection === 'educacion' ? 'active' : ''}`}
        data-section="educacion"
        title={t('nav.educacion')}
        onClick={(e) => handleNavClick(e, 'educacion')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
        <span className="nav-label">{t('nav.educacion')}</span>
      </a>

      {/* Experiencia */}
      <a
        href="#experiencia"
        className={`nav-icon ${activeSection === 'experiencia' ? 'active' : ''}`}
        data-section="experiencia"
        title={t('nav.experiencia')}
        onClick={(e) => handleNavClick(e, 'experiencia')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        <span className="nav-label">{t('nav.experiencia')}</span>
      </a>

      {/* Proyectos */}
      <a
        href="#proyectos"
        className={`nav-icon ${activeSection === 'proyectos' ? 'active' : ''}`}
        data-section="proyectos"
        title={t('nav.proyectos')}
        onClick={(e) => handleNavClick(e, 'proyectos')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
        <span className="nav-label">{t('nav.proyectos')}</span>
      </a>

      {/* Redes */}
      <a
        href="#redes"
        className={`nav-icon ${activeSection === 'redes' ? 'active' : ''}`}
        data-section="redes"
        title={t('nav.redes')}
        onClick={(e) => handleNavClick(e, 'redes')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
        <span className="nav-label">{t('nav.redes')}</span>
      </a>

      {/* Contacto */}
      <a
        href="#contacto"
        className={`nav-icon ${activeSection === 'contacto' ? 'active' : ''}`}
        data-section="contacto"
        title={t('nav.contacto')}
        onClick={(e) => handleNavClick(e, 'contacto')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span className="nav-label">{t('nav.contacto')}</span>
      </a>

      {/* Cambio de idioma */}
      <button
        className="nav-icon nav-lang-toggle"
        id="floating-lang-toggle"
        title="Cambiar idioma"
        onClick={toggleLanguage}
      >
        <img
          src={currentLanguage === 'es' ? 'https://img.icons8.com/color/24/usa.png' : 'https://img.icons8.com/fluency/24/argentina-circular.png'}
          alt="Change Language"
          className="lang-flag"
        />
        <span className="nav-label">Language</span>
      </button>
    </nav>
  );
};

export default FloatingNav;
