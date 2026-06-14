'use client';

import { useState } from 'react';

export default function Sustainability() {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
  });

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const expandAll = () => {
    setOpenSections({
      0: true,
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true
    });
  };

  return (
    <section id="sustainability">
      <div className="wrap">
        <div className="sust-header">
          <div className="sust-card rv">
            <div className="sust-card-bg"></div>
            <div className="sust-card-img"></div>
            <div className="sust-badge">
              <span>🌿 Green Freight Initiative</span>
            </div>
            <div className="sust-card-title">
              India's Most Trusted<br />
              Green Freight Partner
            </div>
            <div className="sust-card-body">
              Committed to Moving Commerce Responsibly — KRK Sustainable Procurement Policy v1.0, Effective June 2026
            </div>
            <div className="sust-kpis">
              <div className="kpi">
                <div className="kpi-label">2026–27 Target</div>
                <div className="kpi-val">60%</div>
                <div className="kpi-unit">Shipments with Carbon Report</div>
              </div>
              <div className="kpi">
                <div className="kpi-label">Fleet Standard</div>
                <div className="kpi-val">BS-VI</div>
                <div className="kpi-unit">Minimum Road Carrier Norm</div>
              </div>
              <div className="kpi">
                <div className="kpi-label">Framework</div>
                <div className="kpi-val">GLEC</div>
                <div className="kpi-unit">v3.0 Emission Methodology</div>
              </div>
              <div className="kpi">
                <div className="kpi-label">Documentation</div>
                <div className="kpi-val">70%</div>
                <div className="kpi-unit">Digital-First by 2027</div>
              </div>
            </div>
          </div>
          <div className="sust-right rv d1">
            <div className="sec-eyebrow">Sustainability</div>
            <h2 className="sec-title">
              Logistics That<br />
              <em>Cares for the Planet</em>
            </h2>
            <p className="sec-body">
              KRK Logistics recognises that freight forwarding sits at the intersection of global trade, environmental
              impact, and social accountability. Our Sustainable Procurement Policy formalises our commitment to building a
              responsible logistics operation.
            </p>
            <div className="obj-list">
              <div className="obj">
                <span className="obj-code">O-1</span>
                <div className="obj-text">
                  <strong>Reduce Scope 3 Emissions</strong> — Track and reduce GHG emissions using the GLEC Framework across
                  our carrier network.
                </div>
              </div>
              <div className="obj">
                <span className="obj-code">O-2</span>
                <div className="obj-text">
                  <strong>Prefer Low-Emission Carriers</strong> — Priority to BS-VI compliant fleets, EVs for last-mile, and
                  energy-efficient vessels.
                </div>
              </div>
              <div className="obj">
                <span className="obj-code">O-3</span>
                <div className="obj-text">
                  <strong>Client Carbon Transparency</strong> — Per-shipment carbon footprint estimates to support CBAM and
                  ESG reporting.
                </div>
              </div>
              <div className="obj">
                <span className="obj-code">O-4</span>
                <div className="obj-text">
                  <strong>Ethical Supply Chains</strong> — Zero tolerance for forced or child labour across all carrier and
                  supplier relationships.
                </div>
              </div>
              <div className="obj">
                <span className="obj-code">O-5</span>
                <div className="obj-text">
                  <strong>Measurable Green Network</strong> — Annually reviewed, vetted panel of green logistics partners.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FULL POLICY */}
        <div className="policy-box rv">
          <div className="policy-head">
            <div>
              <div className="ph-title">Sustainable Procurement Policy — Full Document</div>
              <div className="ph-meta">
                <span className="ph-tag green">Version 1.0</span>
                <span className="ph-tag default">KRK-SPP-2026-001</span>
                <span className="ph-tag default">Effective June 2026</span>
                <span className="ph-tag default">Review June 2027</span>
              </div>
            </div>
            <button className="ph-expand" onClick={expandAll} suppressHydrationWarning>
              📄 Expand All Sections
            </button>
          </div>

          {/* Section 01 */}
          <div className="pol-row">
            <button className={`pol-toggle ${openSections[0] ? 'open' : ''}`} onClick={() => toggleSection(0)} suppressHydrationWarning>
              <div className="pol-toggle-left">
                <span className="pol-num">01</span>
                <span className="pol-name">Statement of Intent</span>
              </div>
              <span className="pol-arrow">▾</span>
            </button>
            <div className={`pol-body ${openSections[0] ? 'open' : ''}`}>
              <p>
                KRK Logistics is an Indian freight forwarding company committed to building a logistics operation that
                creates value not only for our clients and business partners, but for the communities and ecosystems within
                which we operate. We recognise that freight forwarding — by its nature — sits at the intersection of global
                trade, environmental impact, and social accountability.
              </p>
              <p>
                This Sustainable Procurement Policy (SPP) formalises our commitment to selecting, evaluating, and developing
                supplier and carrier relationships through the lens of environmental stewardship, social responsibility, and
                long-term commercial integrity. It is not a compliance exercise. It is a strategic commitment that underpins
                KRK's long-term vision to become India's most trusted green freight forwarding partner.
              </p>
            </div>
          </div>

          {/* Section 02 */}
          <div className="pol-row">
            <button className={`pol-toggle ${openSections[1] ? 'open' : ''}`} onClick={() => toggleSection(1)} suppressHydrationWarning>
              <div className="pol-toggle-left">
                <span className="pol-num">02</span>
                <span className="pol-name">Scope &amp; Applicability</span>
              </div>
              <span className="pol-arrow">▾</span>
            </button>
            <div className={`pol-body ${openSections[1] ? 'open' : ''}`}>
              <p>This policy applies to all procurement and sourcing activities undertaken by KRK Logistics, including:</p>
              <ul>
                <li>
                  <strong>Carrier Selection:</strong> Road, rail, ocean, and air carriers
                </li>
                <li>
                  <strong>Third-Party Services:</strong> Customs brokerage, warehousing, and ancillary logistics services
                </li>
                <li>
                  <strong>Internal Procurement:</strong> Office consumables, digital tools, and operational equipment
                </li>
                <li>
                  <strong>Subcontractors:</strong> Last-mile and intermodal subcontracting arrangements
                </li>
              </ul>
            </div>
          </div>

          {/* Section 03 */}
          <div className="pol-row">
            <button className={`pol-toggle ${openSections[2] ? 'open' : ''}`} onClick={() => toggleSection(2)} suppressHydrationWarning>
              <div className="pol-toggle-left">
                <span className="pol-num">03</span>
                <span className="pol-name">Policy Objectives</span>
              </div>
              <span className="pol-arrow">▾</span>
            </button>
            <div className={`pol-body ${openSections[2] ? 'open' : ''}`}>
              <table className="pol-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Objective</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>O-1</td>
                    <td>
                      <strong>Reduce Scope 3 Emissions</strong>
                    </td>
                    <td>Track and reduce GHG emissions across our carrier network, aligned with the GLEC Framework v3.0.</td>
                  </tr>
                  <tr>
                    <td>O-2</td>
                    <td>
                      <strong>Prefer Low-Emission Carriers</strong>
                    </td>
                    <td>Priority to BS-VI compliant fleets, EVs for last-mile, or vessels in recognised efficiency programmes.</td>
                  </tr>
                  <tr>
                    <td>O-3</td>
                    <td>
                      <strong>Client Carbon Transparency</strong>
                    </td>
                    <td>Per-shipment carbon footprint estimates supporting Scope 3 reporting and EU CBAM compliance.</td>
                  </tr>
                  <tr>
                    <td>O-4</td>
                    <td>
                      <strong>Ethical Supply Chains</strong>
                    </td>
                    <td>Zero tolerance for forced or child labour; full compliance with Indian and international labour standards.</td>
                  </tr>
                  <tr>
                    <td>O-5</td>
                    <td>
                      <strong>Measurable Green Network</strong>
                    </td>
                    <td>Curated panel of vetted green logistics partners reviewed annually.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 04 */}
          <div className="pol-row">
            <button className={`pol-toggle ${openSections[3] ? 'open' : ''}`} onClick={() => toggleSection(3)} suppressHydrationWarning>
              <div className="pol-toggle-left">
                <span className="pol-num">04</span>
                <span className="pol-name">Environmental Standards</span>
              </div>
              <span className="pol-arrow">▾</span>
            </button>
            <div className={`pol-body ${openSections[3] ? 'open' : ''}`}>
              <p>
                <strong>4.1 Fleet &amp; Emissions:</strong> Road carriers must meet BS-VI emission norms (from January 2026).
                Ocean freight: preference for lines with IMO DCS/CII verified carbon ratings. Air freight used only when
                surface modes cannot meet transit time requirements.
              </p>
              <p>
                <strong>4.2 Modal Shift:</strong> KRK will actively recommend rail and coastal shipping over road for
                long-haul domestic lanes. Route proposals will include carbon comparisons between modes.
              </p>
              <p>
                <strong>4.3 Digital-First Documentation:</strong> E-BL, digital customs filings, and electronic PODs will be
                the default. Paper-based processes maintained only where legally mandated.
              </p>
              <p>
                <strong>4.4 Premises:</strong> Segregated waste disposal, energy-efficient equipment, and zero single-use
                plastics across all KRK office and operational contexts.
              </p>
            </div>
          </div>

          {/* Section 05 */}
          <div className="pol-row">
            <button className={`pol-toggle ${openSections[4] ? 'open' : ''}`} onClick={() => toggleSection(4)} suppressHydrationWarning>
              <div className="pol-toggle-left">
                <span className="pol-num">05</span>
                <span className="pol-name">Social &amp; Ethical Standards</span>
              </div>
              <span className="pol-arrow">▾</span>
            </button>
            <div className={`pol-body ${openSections[4] ? 'open' : ''}`}>
              <p>
                <strong>5.1 Labour Rights:</strong> KRK will not engage carriers or suppliers relying on forced labour, bonded
                labour, or child labour. All new carriers must confirm compliance with the Factories Act 1948, Contract
                Labour Act 1970, and applicable state labour laws.
              </p>
              <p>
                <strong>5.2 Safety:</strong> Road carriers must hold valid PUC certificates, insurance, and fitness
                certificates for all vehicles on KRK freight.
              </p>
              <p>
                <strong>5.3 Anti-Corruption:</strong> All procurement conducted on merit and fair dealing. No KRK employee
                may accept gifts or kickbacks from suppliers. Suppliers offering inducements will be immediately disqualified.
              </p>
            </div>
          </div>

          {/* Section 06 */}
          <div className="pol-row">
            <button className={`pol-toggle ${openSections[5] ? 'open' : ''}`} onClick={() => toggleSection(5)} suppressHydrationWarning>
              <div className="pol-toggle-left">
                <span className="pol-num">06</span>
                <span className="pol-name">Supplier Onboarding &amp; Evaluation</span>
              </div>
              <span className="pol-arrow">▾</span>
            </button>
            <div className={`pol-body ${openSections[5] ? 'open' : ''}`}>
              <p>
                <strong>6.1 Onboarding:</strong> All new carriers complete the KRK Supplier Sustainability Questionnaire (SSQ)
                capturing fleet age, fuel type, BS compliance, labour declarations, GST registration, insurance, and any
                environmental certifications (ISO 14001, Green Freight Asia, etc.).
              </p>
              <p>
                <strong>6.2 Annual Scorecard:</strong>
              </p>
              <table className="pol-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Weight</th>
                    <th>Minimum Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Carbon Efficiency (emissions per tonne-km)</td>
                    <td>30%</td>
                    <td>50 / 100</td>
                  </tr>
                  <tr>
                    <td>Regulatory Compliance Record</td>
                    <td>25%</td>
                    <td>70 / 100</td>
                  </tr>
                  <tr>
                    <td>Labour &amp; Safety Standards</td>
                    <td>25%</td>
                    <td>70 / 100</td>
                  </tr>
                  <tr>
                    <td>Digital Capability &amp; Documentation</td>
                    <td>10%</td>
                    <td>40 / 100</td>
                  </tr>
                  <tr>
                    <td>Continuous Improvement Initiatives</td>
                    <td>10%</td>
                    <td>40 / 100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 07 */}
          <div className="pol-row">
            <button className={`pol-toggle ${openSections[6] ? 'open' : ''}`} onClick={() => toggleSection(6)} suppressHydrationWarning>
              <div className="pol-toggle-left">
                <span className="pol-num">07</span>
                <span className="pol-name">Carbon Tracking &amp; Reporting</span>
              </div>
              <span className="pol-arrow">▾</span>
            </button>
            <div className={`pol-body ${openSections[6] ? 'open' : ''}`}>
              <p>
                <strong>7.1 Methodology:</strong> KRK uses the Global Logistics Emissions Council (GLEC) Framework v3.0 for
                per-shipment GHG calculations:
              </p>
              <div className="formula-box">
                GHG Emissions (kg CO₂e) = Distance (km) × Weight (tonnes) × Emission Factor (kg CO₂e / tonne-km)
              </div>
              <p>
                <strong>7.2 Per-Shipment Carbon Report</strong> attached to every client invoice: shipment reference, modes
                used, carrier name, gross weight, distance per leg, emission factor, total kg CO₂e, and optional offset
                recommendation.
              </p>
              <p>
                <strong>7.3 Annual Inventory:</strong> Scope 3 logistics emissions inventory published in KRK's Annual
                Sustainability Update. First inventory covers July 2025 – June 2026.
              </p>
            </div>
          </div>

          {/* Section 08 */}
          <div className="pol-row">
            <button className={`pol-toggle ${openSections[7] ? 'open' : ''}`} onClick={() => toggleSection(7)} suppressHydrationWarning>
              <div className="pol-toggle-left">
                <span className="pol-num">08</span>
                <span className="pol-name">Continuous Improvement Targets (2026–2028)</span>
              </div>
              <span className="pol-arrow">▾</span>
            </button>
            <div className={`pol-body ${openSections[7] ? 'open' : ''}`}>
              <table className="pol-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Target</th>
                    <th>2026–27</th>
                    <th>2027–28</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>T-1</td>
                    <td>% of shipments with carbon report</td>
                    <td>60%</td>
                    <td>95%</td>
                  </tr>
                  <tr>
                    <td>T-2</td>
                    <td>% of road carriers BS-VI compliant</td>
                    <td>50%</td>
                    <td>80%</td>
                  </tr>
                  <tr>
                    <td>T-3</td>
                    <td>% of documentation fully digital</td>
                    <td>70%</td>
                    <td>95%</td>
                  </tr>
                  <tr>
                    <td>T-4</td>
                    <td>Supplier SSQ completion rate</td>
                    <td>80% of panel</td>
                    <td>100% of panel</td>
                  </tr>
                  <tr>
                    <td>T-5</td>
                    <td>Modal shift: rail/coastal % of long-haul</td>
                    <td>10%</td>
                    <td>20%</td>
                  </tr>
                  <tr>
                    <td>T-6</td>
                    <td>Client carbon report satisfaction score</td>
                    <td>Baseline set</td>
                    <td>4.0 / 5.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 09 */}
          <div className="pol-row">
            <button className={`pol-toggle ${openSections[8] ? 'open' : ''}`} onClick={() => toggleSection(8)} suppressHydrationWarning>
              <div className="pol-toggle-left">
                <span className="pol-num">09–12</span>
                <span className="pol-name">Governance, Compliance &amp; Acknowledgement</span>
              </div>
              <span className="pol-arrow">▾</span>
            </button>
            <div className={`pol-body ${openSections[8] ? 'open' : ''}`}>
              <p>
                <strong>Roles:</strong> Managing Director — policy approval and resource authorisation. Sustainability Owner/CEO
                — day-to-day implementation, carbon tracking, annual inventory. Procurement Team — carrier selection
                criteria and SSQ completion. Sales Team — client carbon reporting and sustainability communication. All
                Employees — compliance and non-compliance escalation.
              </p>
              <p>
                <strong>Compliance:</strong> Graduated supplier response: Stage 1 — written notice (30-day rectification); State
                2 — suspension from new bookings; Stage 3 — removal from approved panel. Immediate termination for forced/child
                labour, serious safety violations, or criminal activity.
              </p>
              <p>
                <strong>Review:</strong> Annual review by Sustainability Owner. Out-of-cycle review triggered by regulatory
                changes, updated GLEC Framework, or material implementation failures. All revisions published within 30 days of
                approval.
              </p>
              <p style={{ fontSize: '11.5px', color: 'var(--t3)', borderTop: '1px solid var(--border)', paddingTop: '12px', marginTop: '8px' }}>
                Document Reference: KRK-SPP-2026-001 · Version 1.0 · Approved By: Managing Director, KRK Logistics · Policy
                Owner: Sustainability Lead / CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
