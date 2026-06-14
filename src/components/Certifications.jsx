export default function Certifications() {
  const certificationsData = [
    {
      img: 'https://www.krk-logistics.com/Certification/MTO.jfif',
      name: 'MTO Certified',
      sub: 'Multimodal Transport Operator'
    },
    {
      img: 'https://www.krk-logistics.com/Certification/MSME.png',
      name: 'MSME Registered',
      sub: 'Government of India'
    },
    {
      img: 'https://www.krk-logistics.com/Certification/jctrans.png',
      name: 'JCTrans Member',
      sub: '18,000+ Global Forwarders'
    },
    {
      img: 'https://www.krk-logistics.com/Certification/CCBA.jfif',
      name: 'CCBA Member',
      sub: 'Chennai Customs Brokers Assn.'
    },
    {
      img: 'https://www.krk-logistics.com/Certification/ISO.jfif',
      name: 'ISO Certified',
      sub: 'Quality Management System'
    },
    {
      img: 'https://www.krk-logistics.com/Certification/AEO.jpg',
      name: 'AEO Approved',
      sub: 'Authorised Economic Operator'
    },
    {
      img: 'https://www.wcainterglobal.com/Assets/images/logo_WCAworld.jpg',
      name: 'WCA Membership',
      sub: 'World Cargo Alliance Network'
    }
  ];

  return (
    <section id="certifications">
      <div className="wrap">
        <div className="cert-hd rv">
          <div className="sec-eyebrow" style={{ justifyContent: 'center' }}>
            Accreditations
          </div>
          <h2 className="sec-title" style={{ marginTop: '8px' }}>
            Recognised. <em>Accredited. Trusted.</em>
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--t3)', marginTop: '12px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Our memberships and certifications reflect our commitment to quality, compliance, and international trade standards.
          </p>
        </div>
        <div className="cert-tiles rv">
          {certificationsData.map((cert, index) => (
            <div className="cert-tile" key={index}>
              <div className="cert-tile-img">
                <img
                  src={cert.img}
                  alt={cert.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="cert-tile-txt">
                <div className="ct-name">{cert.name}</div>
                <div className="ct-sub">{cert.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
