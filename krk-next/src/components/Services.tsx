'use client';

export default function Services() {
  const servicesData = [
    {
      num: '01',
      mode: 'Air',
      title: 'Air Freight',
      desc: 'Time-critical shipments delivered globally with our premium air freight network. We offer full charter, consolidated, and express solutions with real-time tracking and guaranteed transit times.',
      img: 'https://www.krk-logistics.com/new/s-1.webp',
      fallback: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=75&auto=format'
    },
    {
      num: '02',
      mode: 'Ocean',
      title: 'Ocean Freight',
      desc: 'FCL and LCL ocean freight solutions across major global trade lanes. Competitive rates, reliable schedules, and complete visibility from port to door.',
      img: 'https://www.krk-logistics.com/new/s-2.jpg',
      fallback: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75&auto=format'
    },
    {
      num: '03',
      mode: 'Customs',
      title: 'Customs Clearance',
      desc: 'Expert customs brokerage and compliance management. Our seasoned team ensures seamless import/export clearance while minimising delays and duties.',
      img: 'https://www.krk-logistics.com/new/s-3.jpg',
      fallback: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=75&auto=format'
    },
    {
      num: '04',
      mode: 'Inland',
      title: 'Inland Transportation',
      desc: 'Comprehensive road and rail freight solutions across India. We manage first-mile and last-mile connectivity with multi-modal routing for efficient domestic cargo movement.',
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=75&auto=format',
      fallback: ''
    },
    {
      num: '05',
      mode: 'Warehousing',
      title: 'Warehousing & Distribution',
      desc: "State-of-the-art warehousing with pick-and-pack, inventory management, and last-mile distribution services across India's key logistics hubs.",
      img: 'https://www.krk-logistics.com/new/s-4.jpg',
      fallback: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=75&auto=format'
    },
    {
      num: '06',
      mode: 'Project',
      title: 'Project Cargo Handling',
      desc: 'Turnkey solutions for oversized, heavy-lift, and high-value cargo. Specialists in power, energy, and industrial project logistics with dedicated project managers.',
      img: 'https://www.krk-logistics.com/new/s-5.jpg',
      fallback: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=75&auto=format'
    }
  ];

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 72,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services">
      <div className="wrap">
        <div className="svc-head">
          <div>
            <div className="sec-eyebrow rv">Our Services</div>
            <h2 className="sec-title rv d1">
              End-to-End Logistics<br />
              <em>Solutions for Global Trade</em>
            </h2>
          </div>
          <p className="sec-body rv d2" style={{ maxWidth: '360px' }}>
            From the first mile to the last — every mode, every market, managed with expertise.
          </p>
        </div>
        <div className="svc-grid">
          {servicesData.map((svc, i) => {
            const delayClass = i % 3 === 1 ? 'd1' : i % 3 === 2 ? 'd2' : '';
            return (
              <div className={`svc-card rv ${delayClass}`} key={svc.num}>
                <div className="svc-img">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    onError={(e) => {
                      if (svc.fallback) {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src = svc.fallback;
                      }
                    }}
                  />
                  <div className="svc-img-overlay"></div>
                  <span className="svc-num-tag">{svc.num}</span>
                  <span className="svc-mode-tag">{svc.mode}</span>
                </div>
                <div className="svc-body">
                  <div className="svc-title">{svc.title}</div>
                  <p className="svc-desc">{svc.desc}</p>
                  <a href="#contact" className="svc-link" onClick={handleScrollToContact}>
                    Enquire Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
