// onNavigate lets the "See your weekly briefing" button switch to the dashboard.
function HeroSection({ onNavigate }) {
  return (
    <section className="hero">

      {/* LEFT COLUMN — headline and buttons */}
      <div className="hero__left">
        <span className="hero__badge">For small businesses</span>

        <h1 className="hero__headline">
          Cybersecurity that talks to you like a person —{' '}
          {/* {' '} adds a space character in JSX (spaces between tags are trimmed) */}
          <em className="hero__headline-em">not a dashboard.</em>
        </h1>

        <p className="hero__subtext">
          Vultur Sentinel watches the tools you already use, quietly spots what
          looks wrong, and hands you a short, plain-English plan each week. No
          jargon. No 200-alert inbox. Just what to fix, and why it matters.
        </p>

        <div className="hero__actions">
          {/* onClick receives an arrow function that calls onNavigate */}
          <button className="btn btn--accent" onClick={() => onNavigate('dashboard')}>
            See your weekly briefing
          </button>
          {/* href="#how" scrolls down to the steps section */}
          <a href="#how" className="btn btn--outline">How it works</a>
        </div>

        <p className="hero__trust-line">
          Trusted patterns from NIST CSF 2.0 · MITRE ATT&amp;CK · FTC guidance
          {/* &amp; is how you write & in HTML/JSX — it's called an "HTML entity" */}
        </p>
      </div>

      {/* RIGHT COLUMN — preview card */}
      <div className="hero__right">
        <div className="hero__card">
          <div className="hero__card-header">
            <span>THIS WEEK · MARISOL'S BAKERY</span>
            {/* small green dot to show it's live */}
            <span className="dot dot--green"></span>
          </div>
          <div className="hero__card-score">
            <span className="hero__card-number">78</span>
            <div>
              <p className="hero__card-label">Mostly secure</p>
              <p className="hero__card-change">+6 since last week</p>
            </div>
          </div>
          <p className="hero__card-summary">
            You're in good shape overall. A couple of small gaps are worth
            closing this week to stay ahead of the most common attacks.
          </p>
          <div className="hero__card-task hero__card-task--high">
            <span className="badge badge--high">HIGH</span>
            Turn on two-step sign-in for 2 admins
          </div>
          <div className="hero__card-task hero__card-task--med">
            <span className="badge badge--med">MED</span>
            Close 2 unused employee accounts
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
