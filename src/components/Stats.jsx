import Counter from './Counter';

export default function Stats() {
  return (
    <section id="stats">
      <div className="stats-bg-grid"></div>
      <div className="wrap">
        <div className="stats-row">
          <div className="stat-cell rv">
            <div className="stat-n">
              <Counter target={100} suffix="+" />
            </div>
            <div className="stat-lbl">Years of Combined Leadership Experience</div>
            <div className="stat-det">Driving innovation</div>
          </div>
          <div className="stat-cell rv d1">
            <div className="stat-n">
              <Counter target={5000} suffix="+" />
            </div>
            <div className="stat-lbl">Projects Delivered</div>
            <div className="stat-det">Air, Ocean &amp; Project</div>
          </div>
          <div className="stat-cell rv d2">
            <div className="stat-n">
              <Counter target={350} suffix="+" />
            </div>
            <div className="stat-lbl">Global Clients</div>
            <div className="stat-det">Across Industries</div>
          </div>
          <div className="stat-cell rv d3">
            <div className="stat-n">
              <Counter target={175} suffix="+" />
            </div>
            <div className="stat-lbl">Countries Served</div>
            <div className="stat-det">Worldwide Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
}
