'use client';

import Counter from './Counter';

export default function Hero() {
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
    <section id="hero">
      <div className="hero-bg-img" id="heroBg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-grid-overlay"></div>
      <div className="hero-deco-line"></div>
      <div className="hero-inner">
        <h1 className="hero-title">
          End-End Logistics,<br />
          Engineered For <span className="blue typing-text">Global Trade.</span>
        </h1>
        <p className="hero-desc">
          KRK Global Logistics delivers <span className="highlight">integrated 4PL</span> and{' '}
          <span className="highlight">end-to-end supply chain solutions</span>,
          covering freight forwarding, transportation, customs clearance,
          warehousing, distribution, and global supply chain coordination
          across 175+ countries.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-navy" onClick={(e) => handleScrollTo(e, 'contact')}>
            Request a Quote <span>→</span>
          </a>
          <a href="#services" className="btn-ghost" onClick={(e) => handleScrollTo(e, 'services')}>
            Our Services
          </a>
        </div>
        <div className="hero-stats-bar">
          <div className="hs">
            <div className="hs-num">
              <Counter target={100} suffix="+" />
            </div>
            <div className="hs-label">Years of Combined Leadership Experience</div>
          </div>
          <div className="hs">
            <div className="hs-num">
              <Counter target={5000} suffix="+" />
            </div>
            <div className="hs-label">Projects Delivered</div>
          </div>
          <div className="hs">
            <div className="hs-num">
              <Counter target={15000} suffix="+" />
            </div>
            <div className="hs-label">TEU's Handled Per Year</div>
          </div>
          <div className="hs">
            <div className="hs-num">
              <Counter target={2500} suffix="+Tonns" />
            </div>
            <div className="hs-label">Air Shipment handled per year</div>
          </div>
          <div className="hs">
            <div className="hs-num">
              <Counter target={175} suffix="+" />
            </div>
            <div className="hs-label">Countries Served</div>
          </div>
          <div className="hs">
            <div className="hs-num">
              <Counter target={350} suffix="+" />
            </div>
            <div className="hs-label">Global Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
