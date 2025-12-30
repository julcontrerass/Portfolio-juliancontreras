import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import '../styles/About.css';

const About: React.FC = () => {
  const { t } = useTranslation();

  const openCvModal = () => {
    const event = new CustomEvent('openCvModal');
    window.dispatchEvent(event);
  };

  return (
    <section className="about" id="sobre-mi">
      <div className="container">
        <h2 className="section-title fade-in">{t('about.title')}</h2>
        <div className="about-content fade-in">
          <div className="about-image">
            <video
              src="/images/AvatarSaludando.mp4"
              className="about-avatar-image"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="about-text">
            <p>{t('about.text1')}</p>
            <br />
            <p>{t('about.text2')}</p>
            <br />
            <p>{t('about.text3')}</p>
            <button className="cv-button" onClick={openCvModal}>
              {t('about.viewCV')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
