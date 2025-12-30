import React from 'react';
import { useTranslation } from '../context/TranslationContext';
import '../styles/Timeline.css';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="experience" id="experiencia">
      <div className="container">
        <h2 className="section-title fade-in">{t('experience.title')}</h2>
        <div className="timeline">
          <div className="timeline-item fade-in">
            <div className="timeline-content">
              <div className="timeline-date">{t('experience.tukicode.date')}</div>
              <h3 className="timeline-title">{t('experience.tukicode.title')}</h3>
              <div className="timeline-company">
                <a href="https://tukicode.vercel.app/" target="_blank" rel="noopener noreferrer">
                  {t('experience.tukicode.company')}
                </a>
              </div>
              <div className="timeline-description">
                <p>{t('experience.tukicode.description')}</p>
                <ul>
                  <li>{t('experience.tukicode.task1')}</li>
                  <li>{t('experience.tukicode.task2')}</li>
                  <li>{t('experience.tukicode.task3')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-item fade-in">
            <div className="timeline-content">
              <div className="timeline-date">{t('experience.frontend.date')}</div>
              <h3 className="timeline-title">{t('experience.frontend.title')}</h3>
              <div className="timeline-company">{t('experience.frontend.company')}</div>
              <div className="timeline-description">
                <p>{t('experience.frontend.description')}</p>
                <ul>
                  <li>{t('experience.frontend.task1')}</li>
                  <li>{t('experience.frontend.task2')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
