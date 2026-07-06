function Header({ onNavigate, page, onDownload }) {
  return (
    <header className="header">

      <button className="header__logo" onClick={() => onNavigate('home')} aria-label="Go to home page">
        <div className="header__logo-icon">
          <div className="header__logo-dot"></div>
        </div>
        <div className="header__logo-text">
          <span className="header__logo-name">Vultur Sentinel</span>
          <span className="header__logo-sub">AI · RISK ADVISOR</span>
        </div>
      </button>

      {page === 'home'
        ? (
          <button className="btn btn--accent" onClick={() => onNavigate('dashboard')}>
            Open dashboard
          </button>
        )
        : (
          <button className="btn btn--accent" onClick={onDownload}>
            Weekly briefing
          </button>
        )
      }
    </header>
  )
}

export default Header
