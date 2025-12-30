import React, { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';
import '../styles/Timeline.css';
import '../styles/Modals.css';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificatePath: string;
  type: 'image' | 'pdf';
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, certificatePath, type }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="modal-body">
          {type === 'image' ? (
            <img src={certificatePath} alt="Certificado" />
          ) : (
            <iframe src={certificatePath} title="Certificado" />
          )}
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState({ path: '', type: 'image' as 'image' | 'pdf' });

  const openCertificate = (path: string, type: 'image' | 'pdf') => {
    setCurrentCertificate({ path, type });
    setModalOpen(true);
  };

  return (
    <>
      <section className="education" id="educacion">
        <div className="container">
          <h2 className="section-title fade-in">{t('education.title')}</h2>
          <div className="timeline">
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">{t('education.utn.date')}</div>
                <h3 className="timeline-title">{t('education.utn.title')}</h3>
                <div className="timeline-company">{t('education.utn.company')}</div>
                <div className="timeline-description">
                  <p>{t('education.utn.description')}</p>
                </div>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">{t('education.java.date')}</div>
                <h3 className="timeline-title">{t('education.java.title')}</h3>
                <div className="timeline-company">{t('education.java.company')}</div>
                <div className="timeline-description">
                  <p>{t('education.java.description')}</p>
                </div>
                <button className="certificate-btn" onClick={() => openCertificate('/images/Certificados/JAVA_-_Certificacin.pdf.png', 'image')}>
                  {t('education.certificate')}
                </button>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">{t('education.analytics.date')}</div>
                <h3 className="timeline-title">{t('education.analytics.title')}</h3>
                <div className="timeline-company">{t('education.analytics.company')}</div>
                <div className="timeline-description">
                  <p>{t('education.analytics.description')}</p>
                </div>
                <button className="certificate-btn" onClick={() => openCertificate('/images/Certificados/certificadoGoogleAnalytics.png', 'image')}>
                  {t('education.certificate')}
                </button>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">{t('education.python.date')}</div>
                <h3 className="timeline-title">{t('education.python.title')}</h3>
                <div className="timeline-company">{t('education.python.company')}</div>
                <div className="timeline-description">
                  <p>{t('education.python.description')}</p>
                </div>
                <button className="certificate-btn" onClick={() => openCertificate('/images/Certificados/certificadoPython.png', 'image')}>
                  {t('education.certificate')}
                </button>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">{t('education.js.date')}</div>
                <h3 className="timeline-title">{t('education.js.title')}</h3>
                <div className="timeline-company">{t('education.js.company')}</div>
                <div className="timeline-description">
                  <p>{t('education.js.description')}</p>
                </div>
                <button className="certificate-btn" onClick={() => openCertificate('/images/Certificados/certificadoJs.png', 'image')}>
                  {t('education.certificate')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        certificatePath={currentCertificate.path}
        type={currentCertificate.type}
      />
    </>
  );
};

export default Education;
