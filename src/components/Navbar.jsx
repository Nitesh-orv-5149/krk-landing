import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial scroll check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileNavOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 72,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* MOBILE NAV */}
      <div id="mob-nav" className={mobileNavOpen ? 'open' : ''}>
        <button className="mob-close" onClick={() => setMobileNavOpen(false)}>✕</button>
        <a className="mob-link" href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Home</a>
        <a className="mob-link" href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
        <a className="mob-link" href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
        <a className="mob-link" href="#clients" onClick={(e) => scrollToSection(e, 'clients')}>Clients</a>
        <a className="mob-link" href="#sustainability" onClick={(e) => scrollToSection(e, 'sustainability')}>Sustainability</a>
        <a className="mob-link" href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
      </div>

      {/* NAVIGATION */}
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo" onClick={(e) => scrollToSection(e, 'hero')}>
          <div className="nav-mark">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D0BAQGHOU1TUmdexQ/company-logo_200_200/company-logo_200_200/0/1713866722801?e=2147483647&v=beta&t=e106DVqmQ4fXqTxQdB6XvCn8XMykAbj4ES9ToUoir4E"
              alt="KRK Logistics Logo"
            />
          </div>
          <div className="nav-wordmark">
            <div className="nav-name">KRK Logistics</div>
            <div className="nav-sub">End-End Logistics Service Provider</div>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
          <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
          <li><a href="#certifications" onClick={(e) => scrollToSection(e, 'certifications')}>Certifications</a></li>
          <li><a href="#clients" onClick={(e) => scrollToSection(e, 'clients')}>Clients</a></li>
          <li><a href="#sustainability" onClick={(e) => scrollToSection(e, 'sustainability')}>Sustainability</a></li>
          <li className="nav-cta"><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Get a Quote</a></li>
        </ul>
        <button className="hamburger" onClick={() => setMobileNavOpen(true)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
    </>
  );
}
