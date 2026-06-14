'use client';

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 72,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="foot-logo">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D0BAQGHOU1TUmdexQ/company-logo_200_200/company-logo_200_200/0/1713866722801?e=2147483647&v=beta&t=e106DVqmQ4fXqTxQdB6XvCn8XMykAbj4ES9ToUoir4E"
                alt="KRK Logistics"
                className="footer-logo"
              />
            </div>
            <div className="footer-brand-text">
              <div className="footer-brand-name">KRK GLOBAL LOGISTICS</div>
            </div>
            <p className="foot-tagline">
              KRK Logistics delivers reliable, end to end logistics solutions with over 40 years of expertise in global
              supply chain management.
            </p>
          </div>
          <div>
            <div className="foot-col-title">Services</div>
            <ul className="foot-links">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Air Freight</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Ocean Freight</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Inland Transportation</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Customs Clearance</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Warehousing</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Project Cargo</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="foot-col-title">Company</div>
            <ul className="foot-links">
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About KRK</a>
              </li>
              <li>
                <a href="#certifications" onClick={(e) => handleScrollTo(e, 'certifications')}>Certifications</a>
              </li>
              <li>
                <a href="#clients" onClick={(e) => handleScrollTo(e, 'clients')}>Our Clients</a>
              </li>
              <li>
                <a href="#sustainability" onClick={(e) => handleScrollTo(e, 'sustainability')}>Sustainability</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="foot-col-title">Contact</div>
            <ul className="foot-links">
              <li>
                <a href="tel:+919840789426">+91 9840789426</a>
              </li>
              <li>
                <a href="mailto:enquiry@krk-logistics.com">enquiry@krk-logistics.com</a>
              </li>
              <li style={{ color: 'rgba(255,255,255,.3)', fontSize: '12px', lineHeight: 1.7, marginTop: '4px' }}>
                Wavoo Mansion Annex, 4th Floor,
                <br />
                No. 58, Rajaji Salai,
                <br />
                Chennai — 600001
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-btm">
          <div className="foot-copy">© 2026 KRK Global Logistics. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
