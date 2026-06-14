import Counter from './Counter';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-visual rv">
            <div className="about-img">
              <img
                src="https://www.krk-logistics.com/new/a-1.webp"
                alt="KRK Logistics Operations"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=75&auto=format';
                }}
              />
            </div>
            <div className="about-badge">
              <div className="ab-num">
                <Counter target={40} suffix="+" />
              </div>
              <div className="ab-txt">Years of Excellence</div>
            </div>
          </div>
          <div>
            <div className="sec-eyebrow rv">Who We Are</div>
            <h2 className="sec-title rv d1">
              India's Trusted<br />
              <em>Supply Chain Orchestrator</em>
            </h2>
            <p className="sec-body rv d2">
              KRK Logistics is a dynamic, customer-centric freight forwarding company headquartered in Chennai, India.
              Since decades, we have specialised in delivering end-to-end logistics solutions that simplify the
              complexities of international trade.
            </p>
            <div className="about-features">
              <div className="af rv d1">
                <div className="af-icon">🌍</div>
                <div>
                  <div className="af-title">Global Network of Partners</div>
                  <p className="af-desc">
                    Extensive partnerships and alliances worldwide with access to a vast network of
                    trusted agents, ensuring smooth operations across every border.
                  </p>
                </div>
              </div>
              <div className="af rv d2">
                <div className="af-icon">🤝</div>
                <div>
                  <div className="af-title">Customer-Centric Approach</div>
                  <p className="af-desc">
                    Dedicated support teams with the flexibility to adapt to evolving client needs. Every
                    shipment is treated with individualised attention and care.
                  </p>
                </div>
              </div>
              <div className="af rv d3">
                <div className="af-icon">🛡️</div>
                <div>
                  <div className="af-title">Compliance &amp; Risk Management</div>
                  <p className="af-desc">
                    Proactive adherence to international trade regulations with robust risk management
                    strategies to safeguard your shipments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
