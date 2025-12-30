import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import '../styles/Social.css';

const Social: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="social" id="redes">
      <div className="container">
        <h2 className="section-title fade-in">{t('social.title')}</h2>
        <div className="social-links fade-in">
          <a href="https://www.linkedin.com/in/juliancontreraslucero" className="social-link" target="_blank" rel="noopener noreferrer">
            <img width="32" height="32" src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/julcontrerass" className="social-link" target="_blank" rel="noopener noreferrer">
            <img width="32" height="32" src="https://img.icons8.com/color/48/github--v1.png" alt="GitHub" />
          </a>
          <a href="mailto:jjulian.contrerass@gmail.com" className="social-link">
            <img width="32" height="32" src="https://img.icons8.com/color/48/gmail-new.png" alt="Email" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
