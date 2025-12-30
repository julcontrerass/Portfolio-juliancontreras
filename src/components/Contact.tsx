import React, { useState, FormEvent } from 'react';
import { useTranslation } from '../context/TranslationContext';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const { t, currentLanguage } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{title: string; message: string; type: 'success'|'error'} | null>(null);

  const showToast = (title: string, message: string, type: 'success'|'error') => {
    setToast({title, message, type});
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    if (!formData.get('name') || !formData.get('email') || !formData.get('subject') || !formData.get('message')) {
      showToast('Error', 'Por favor, completa todos los campos.', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      emailjs.init('BzMoWWhuLs2W61pPb');
      await emailjs.send('service_jjahjcf', 'template_j1sxoa3', {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        to_name: 'Julian Contreras'
      });
      showToast('Éxito', 'Mensaje enviado correctamente.', 'success');
      form.reset();
    } catch (error) {
      showToast('Error', 'Hubo un problema al enviar el mensaje.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact" id="contacto">
        <div className="container">
          <h2 className="section-title fade-in">{t('contact.title')}</h2>
          <p className="contact-subtitle fade-in">
            {currentLanguage === 'es'
              ? '¿Tienes un proyecto en mente? ¡Hablemos!'
              : 'Have a project in mind? Let\'s talk!'}
          </p>

          <div className="contact-wrapper">
            {/* Contact Info */}
            <div className="contact-info fade-in">
              <h3 className="contact-info-title">
                {currentLanguage === 'es' ? 'Información de Contacto' : 'Contact Information'}
              </h3>
              <p className="contact-info-subtitle">
                {currentLanguage === 'es'
                  ? 'Estoy disponible para nuevos proyectos y oportunidades'
                  : 'I\'m available for new projects and opportunities'}
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:julian.contreraslucero@gmail.com">julian.contreraslucero@gmail.com</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4>{currentLanguage === 'es' ? 'Ubicación' : 'Location'}</h4>
                    <p>Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/juliancontreraslucero" target="_blank" rel="noopener noreferrer">
                      juliancontreraslucero
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="contact-form fade-in" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {t('contact.name')}
                  </label>
                  <input type="text" id="name" name="name" placeholder={t('contact.name')} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    {t('contact.email')}
                  </label>
                  <input type="email" id="email" name="email" placeholder={t('contact.email')} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  {t('contact.subject')}
                </label>
                <input type="text" id="subject" name="subject" placeholder={t('contact.subject')} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  {t('contact.message')}
                </label>
                <textarea id="message" name="message" placeholder={t('contact.message')} required />
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    {currentLanguage === 'es' ? 'Enviando...' : 'Sending...'}
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    {t('contact.send')}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      {toast && (
        <div className={`toast-notification ${toast.type}`}>
          <div className="toast-icon">
            {toast.type === 'success' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            )}
          </div>
          <div className="toast-content">
            <strong>{toast.title}</strong>
            <p>{toast.message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
