function TrustSection({ onNavigate }) {
  return (
    <>
      {/* Fragment shorthand — <> </> lets you return two sibling elements
          without wrapping them in an extra <div> */}

      {/* DARK BLOCK */}
      <section className="trust">
        <div className="trust__left">
          <p className="trust__eyebrow">BUILT ON PUBLIC STANDARDS</p>
          <h2 className="trust__headline">
            An advisor, not an autopilot. Every recommendation is explainable —
            and every action is yours to approve.
          </h2>
        </div>
        <div className="trust__right">
          {/* Each row: a short label and a description */}
          <div className="trust__row">
            <span className="trust__standard">NIST CSF</span>
            <span>Govern · Identify · Protect · Detect · Respond · Recover</span>
          </div>
          <div className="trust__row">
            <span className="trust__standard">MITRE</span>
            <span>Each event mapped to a known ATT&amp;CK technique.</span>
          </div>
          <div className="trust__row">
            <span className="trust__standard">FTC</span>
            <span>Collect only what's needed. Your data stays yours.</span>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2 className="cta__headline">
          See exactly what your business looks like to an attacker — in two minutes.
        </h2>
        <button className="btn btn--accent btn--lg" onClick={() => onNavigate('dashboard')}>
          Open the dashboard
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span><strong>Vultur Sentinel</strong> <small>AI</small></span>
        <span>Prototype · Concept by Jeshua Herrera · CYBR 3100</span>
      </footer>
    </>
  )
}

export default TrustSection
