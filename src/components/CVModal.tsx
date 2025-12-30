import React, { useEffect, useState } from 'react';
import '../styles/Modals.css';

const CVModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('openCvModal', handleOpenModal);
    return () => window.removeEventListener('openCvModal', handleOpenModal);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`cv-modal ${isOpen ? 'active' : ''}`} onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}>
      <div className="cv-modal-content">
        <span className="cv-modal-close" onClick={() => setIsOpen(false)}>&times;</span>
        <div className="cv-modal-body">
          <iframe src="/CV/resume.html" style={{ width: '100%', height: '85vh', border: 'none' }} />
        </div>
      </div>
    </div>
  );
};

export default CVModal;
