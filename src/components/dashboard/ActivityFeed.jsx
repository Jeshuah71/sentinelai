// events = array from mockData, totalEvents = number
function ActivityFeed({ events, totalEvents }) {
  return (
    <div className="feed card">
      <div className="feed__header">
        <h2 className="feed__title">What changed</h2>
        <span className="feed__count">{totalEvents} EVENTS REVIEWED</span>
      </div>

      <div className="feed__items">
        {events.map((event) => (
          <div key={event.id} className="feed__item">
            <div className="feed__item-header">
              {/* Dot color: CLEAR uses green, HIGH uses red, MED uses yellow */}
              <span className={`dot dot--${
                event.severity === 'CLEAR' ? 'green'
                : event.severity === 'HIGH' ? 'red'
                : 'yellow'
              }`}></span>
              <span className="feed__item-title">{event.title}</span>
              {event.severity !== 'CLEAR' && (
                <span className={`badge badge--${event.severity.toLowerCase()}`}>
                  {event.severity}
                </span>
              )}
              {event.severity === 'CLEAR' && (
                <span className="badge badge--clear">CLEAR</span>
              )}
            </div>
            <p className="feed__item-meta">{event.meta}</p>
            {/* Only render the detail paragraph if it exists (not null) */}
            {event.detail && <p className="feed__item-detail">{event.detail}</p>}
            {/* Only render the MITRE tag if it exists */}
            {event.mitre && (
              <div className="feed__item-mitre">
                <span className="feed__item-mitre-tag">{event.mitre}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
