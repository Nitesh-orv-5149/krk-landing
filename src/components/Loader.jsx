import { useEffect, useState } from 'react';

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, 2100);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div id="loader">
      <div className="ld-logo">
        <div className="ld-mark">
          <div className="ld-mark-bg"></div>
          <span className="ld-mark-text">KRK</span>
        </div>
        <div className="ld-name">KRK</div>
        <div className="ld-sub">Global Logistics</div>
      </div>
      <div className="ld-bar"></div>
    </div>
  );
}
