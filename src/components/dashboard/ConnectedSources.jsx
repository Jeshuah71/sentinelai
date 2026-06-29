// sources = array from mockData, activeSources and totalSources = numbers
function ConnectedSources({ sources, activeSources, totalSources }) {
  return (
    <div className="sources card">
      <div className="sources__header">
        <h2 className="sources__title">Connected sources</h2>
        <span className="sources__count">{activeSources}/{totalSources} ACTIVE</span>
      </div>

      <ul className="sources__list">
        {sources.map((source) => (
          <li key={source.id} className="sources__item">
            <span className={`dot dot--${source.status}`}></span>
            <span className="sources__name">{source.name}</span>
            {/* Yellow status gets a different color to signal action needed */}
            <span className={`sources__label ${source.status === 'yellow' ? 'sources__label--warn' : ''}`}>
              {source.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ConnectedSources
