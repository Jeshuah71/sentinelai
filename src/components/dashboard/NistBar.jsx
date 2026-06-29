// nist = array of { id, name, status, label } from mockData
function NistBar({ nist }) {
  return (
    <div className="nist card">
      <p className="card__label">COVERAGE · NIST CYBERSECURITY FRAMEWORK 2.0</p>
      <div className="nist__grid">
        {/* Map over each category and render a tile */}
        {nist.map((item) => (
          <div key={item.id} className="nist__tile">
            {/* The dot color class is built dynamically: "dot dot--green", etc. */}
            <span className={`dot dot--${item.status}`}></span>
            <span className="nist__name">{item.name}</span>
            <span className="nist__label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NistBar
