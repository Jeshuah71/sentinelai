// "import" pulls code in from another file so we can use it here.
import { useState } from 'react'          // useState lets us track which page is showing
import HomePage from './pages/HomePage'   // our home page component (we'll build this next)
import DashboardPage from './pages/DashboardPage' // the dashboard component
import './styles/global.css'              // loads our global colors/fonts for the whole app

// A React component is just a function that returns HTML-like code (JSX).
// This one is the "root" — it wraps everything else.
function App() {

  // useState returns two things in an array:
  //   1. "page" — the current value ('home' or 'dashboard')
  //   2. "setPage" — a function to change that value
  // 'home' is the starting value (called the "initial state").
  const [page, setPage] = useState('home')

  // We pass "setPage" down to child components so a button in the
  // header can switch pages even though it's not inside App directly.
  return (
    <div>
      {/* This is a conditional render:
          if page equals 'home', show <HomePage />
          otherwise show <DashboardPage />
          The ? and : work like an if/else on one line. */}
      {page === 'home'
        ? <HomePage onNavigate={setPage} />
        : <DashboardPage onNavigate={setPage} />
      }
    </div>
  )
}

// "export default" means this is the main thing this file exports.
// main.jsx imports it and mounts it to the HTML page.
export default App
