import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/images/avatar-acostado.png" alt="Julian Contreras" className="nav-logo-img" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
