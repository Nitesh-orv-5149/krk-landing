'use client';

import { useState } from 'react';

interface ClientLogoProps {
  src: string;
  name: string;
}

function ClientLogo({ src, name }: ClientLogoProps) {
  const [error, setError] = useState(false);

  return (
    <div className="cl-box">
      {!error ? (
        <img
          src={src}
          alt={name}
          onError={() => setError(true)}
        />
      ) : (
        <span className="cl-fb">{name}</span>
      )}
    </div>
  );
}

export default function Clients() {
  const clientsData = [
    { name: 'RIKUN', src: 'https://www.krk-logistics.com/clients/RIKUN.png' },
    { name: 'TATA', src: 'https://www.krk-logistics.com/clients/TATA E.webp' },
    { name: 'Johnson Controls', src: 'https://www.krk-logistics.com/clients/johnson controls tyco.jpg' },
    { name: 'Enexio', src: 'https://www.krk-logistics.com/clients/enexio.png' },
    { name: 'Heidelberg', src: 'https://www.krk-logistics.com/clients/heidelberg.png' },
    { name: 'Toyo', src: 'https://www.krk-logistics.com/clients/toyo.png' },
    { name: 'Thaai Casting', src: 'https://www.krk-logistics.com/clients/ThaaiCastingLtd.png' },
    { name: 'Canadian Solar', src: 'https://www.krk-logistics.com/clients/canadian solar.webp' },
    { name: 'American School', src: 'https://www.krk-logistics.com/clients/american school.jpg' },
    { name: 'Yamazen', src: 'https://www.krk-logistics.com/clients/yamazen.png' },
    { name: 'Egger', src: 'https://www.krk-logistics.com/clients/Egger.png' },
    { name: 'Adwaith Lakshmi', src: 'https://www.krk-logistics.com/clients/adwaith lakshmi.jfif' },
    { name: 'PV', src: 'https://www.krk-logistics.com/clients/PV.png' },
    { name: 'ProSUN', src: 'https://www.krk-logistics.com/clients/ProSUN.webp' },
    { name: 'PROGEN', src: 'https://www.krk-logistics.com/clients/PROGEN.jfif' },
    { name: 'SSPL', src: 'https://www.krk-logistics.com/clients/SSPL.png' },
    { name: 'Luxshare ICT', src: 'https://www.krk-logistics.com/clients/LUXSHAREICT.jpg' },
    { name: 'Fluidtherm', src: 'https://www.krk-logistics.com/clients/FLUIDTHERM.jpg' }
  ];

  // Duplicate the list to ensure a seamless looping marquee
  const doubleClients = [...clientsData, ...clientsData];

  return (
    <section id="clients">
      <div className="wrap" style={{ marginBottom: '40px' }}>
        <div className="clients-hd rv">
          <div className="sec-eyebrow" style={{ justifyContent: 'center' }}>
            Our Clients
          </div>
          <h2 className="sec-title" style={{ marginTop: '8px' }}>
            Trusted by <em>Industry Leaders</em>
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--t3)', marginTop: '12px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            From global multinationals to Indian manufacturers — our clients trust us with their most critical supply chains.
          </p>
        </div>
      </div>
      <div className="mq-wrap rv">
        <div className="mq-track">
          {doubleClients.map((client, index) => (
            <ClientLogo src={client.src} name={client.name} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
