'use client';

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          service,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send enquiry. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-eyebrow rv">Get in Touch</div>
        <h2 className="sec-title rv d1">
          Request a Quote or<br />
          <em>Speak to Our Team</em>
        </h2>
        <div className="contact-grid">
          <div className="contact-info rv d1">
            <div className="ci-item">
              <div className="ci-icon">📍</div>
              <div>
                <div className="ci-label">Office Address</div>
                <div className="ci-val">
                  Wavoo Mansion Annex, 4th Floor,
                  <br />
                  No. 58, Rajaji Salai,
                  <br />
                  Chennai — 600001, India
                </div>
              </div>
            </div>
            <div className="ci-item">
              <div className="ci-icon">📞</div>
              <div>
                <div className="ci-label">Phone</div>
                <div className="ci-val">
                  <a href="tel:+919840789426">+91 9840789426</a>
                </div>
              </div>
            </div>
            <div className="ci-item">
              <div className="ci-icon">✉️</div>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-val">
                  <a href="mailto:enquiry@krk-logistics.com">enquiry@krk-logistics.com</a>
                </div>
              </div>
            </div>
            <div className="ci-item" style={{ borderBottom: 'none' }}>
              <div className="ci-icon">🌐</div>
              <div>
                <div className="ci-label">Website</div>
                <div className="ci-val">
                  <a href="https://www.krk-logistics.com" target="_blank" rel="noopener noreferrer">
                    www.krk-logistics.com
                  </a>
                </div>
              </div>
            </div>
            <div className="ci-hours">
              <div className="ci-hours-title">🕐 Business Hours</div>
              <p>Monday – Saturday: 9:30 AM – 6:30 PM IST</p>
            </div>
          </div>
          <div className="cform rv d2">
            <div className="cf-title">Request a Freight Quote</div>
            <div className="cf-sub">Tell us about your shipment and we'll get back to you promptly.</div>
            <form onSubmit={handleSubmit}>
              {error && (
                <div style={{
                  color: '#ef4444',
                  backgroundColor: '#fee2e2',
                  border: '1px solid #fecaca',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  marginBottom: '16px',
                  fontWeight: 500
                }}>
                  ⚠️ {error}
                </div>
              )}
              <div className="frow2">
                <div>
                  <label className="flabel">Full Name</label>
                  <input
                    className="finput"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={submitted || submitting}
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="flabel">Company</label>
                  <input
                    className="finput"
                    type="text"
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    disabled={submitted || submitting}
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <div className="frow2">
                <div>
                  <label className="flabel">Email</label>
                  <input
                    className="finput"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={submitted || submitting}
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="flabel">Phone</label>
                  <input
                    className="finput"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={submitted || submitting}
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <div className="frow">
                <label className="flabel">Service Required</label>
                <select
                  className="fselect"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  disabled={submitted || submitting}
                  suppressHydrationWarning
                >
                  <option value="">Select a service</option>
                  <option value="Air Freight">Air Freight</option>
                  <option value="Ocean Freight — FCL">Ocean Freight — FCL</option>
                  <option value="Ocean Freight — LCL">Ocean Freight — LCL</option>
                  <option value="Inland Transportation">Inland Transportation</option>
                  <option value="Customs Clearance">Customs Clearance</option>
                  <option value="Warehousing &amp; Distribution">Warehousing &amp; Distribution</option>
                  <option value="Project Cargo Handling">Project Cargo Handling</option>
                  <option value="Green Freight / Carbon Reporting">Green Freight / Carbon Reporting</option>
                </select>
              </div>
              <div className="frow">
                <label className="flabel">Shipment Details / Message</label>
                <textarea
                  className="ftextarea"
                  placeholder="Origin, destination, commodity, weight, timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={submitted || submitting}
                  suppressHydrationWarning
                ></textarea>
              </div>
              <button
                type="submit"
                className="fsubmit"
                style={submitted ? { background: 'var(--green)' } : submitting ? { background: 'var(--navy-500)' } : {}}
                disabled={submitted || submitting}
                suppressHydrationWarning
              >
                {submitted
                  ? "✓ Enquiry received — we'll be in touch within 2 hours"
                  : submitting
                  ? "Sending..."
                  : 'Send Enquiry →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
