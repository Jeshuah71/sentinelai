// score = the score object from mockData: { value, max, label, change, summary }
function SecurityScore({ score }) {

  // The circular gauge is drawn using SVG (Scalable Vector Graphics).
  // A circle's circumference = 2 * π * radius
  const radius = 54
  const circumference = 2 * Math.PI * radius  // ≈ 339

  // strokeDashoffset controls how much of the ring is "filled".
  // 0 = full circle, circumference = empty circle.
  const offset = circumference - (score.value / score.max) * circumference

  return (
    <div className="score-card card">
      <p className="card__label">SECURITY POSTURE</p>

      <div className="score-card__body">
        {/* SVG GAUGE */}
        <div className="score-card__gauge">
          {/* viewBox sets the internal coordinate system of the SVG */}
          <svg viewBox="0 0 120 120" width="120" height="120">
            {/* Background ring (gray) */}
            <circle
              cx="60" cy="60" r={radius}
              fill="none"
              stroke="#e8e0d5"
              strokeWidth="10"
            />
            {/* Foreground ring (terracotta) — rotated so it starts at the top */}
            <circle
              cx="60" cy="60" r={radius}
              fill="none"
              stroke="#b05a3a"
              strokeWidth="10"
              strokeDasharray={circumference}   /* total length of the dashes */
              strokeDashoffset={offset}          /* how much to hide */
              strokeLinecap="round"              /* rounded ends */
              transform="rotate(-90 60 60)"      /* start at 12 o'clock */
            />
            {/* Score number in the center */}
            <text x="60" y="65" textAnchor="middle" fontSize="26" fontFamily="Georgia" fill="#2b2822">
              {score.value}
            </text>
          </svg>
        </div>

        <div className="score-card__info">
          <p className="score-card__label">{score.label}</p>
          {/* The + sign only shows when positive; negative numbers already have - */}
          <p className="score-card__change">
            {score.change > 0 ? `+${score.change}` : score.change} since last week
          </p>
          <p className="score-card__summary">{score.summary}</p>
        </div>
      </div>
    </div>
  )
}

export default SecurityScore
