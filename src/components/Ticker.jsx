export default function Ticker() {
  const items = [
    'Air Freight',
    'Ocean Freight FCL & LCL',
    'Inland Transportation',
    'Customs Clearance',
    'Warehousing & Distribution',
    'Project Cargo Handling',
    '175+ Countries',
    'Green Freight Solutions'
  ];

  // Double the items for a seamless loop, matching the original HTML
  const tickerItems = [...items, ...items];

  return (
    <div id="ticker">
      <div className="ticker-track" id="tickerTrack">
        {tickerItems.map((item, index) => (
          <div className="ticker-item" key={index}>
            <div className="ticker-dot"></div>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
