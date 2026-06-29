// "props" are values passed INTO a component from its parent.
// Here we receive:
//   onNavigate — the setPage function from App.jsx
//   page       — which page we're on ('home' or 'dashboard')
function Header({ onNavigate, page }) {
  return (
    /* <header> is a semantic HTML tag — tells the browser "this is the top nav" */
    <header className="header">

      {/* Logo — clicking it always goes back to home */}
      <button className="header__logo" onClick={() => onNavigate('home')}>
        <div className="header__logo-icon">
          <div className="header__logo-dot"></div>
        </div>
        <div className="header__logo-text">
          <span className="header__logo-name">Vultur Sentinel</span>
          <span className="header__logo-sub">AI · RISK ADVISOR</span>
        </div>
      </button>

      {/* Right side button — label changes depending on which page we're on */}
      {page === 'home'
        ? (
          <button className="btn btn--accent" onClick={() => onNavigate('dashboard')}>
            Open dashboard
          </button>
        )
        : (
          <button className="btn btn--accent">
            Weekly briefing
          </button>
        )
      }
    </header>
  )
}

export default Header
