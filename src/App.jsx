import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import './styles/global.css'

function getPageFromPath() {
  return window.location.pathname === '/dashboard' ? 'dashboard' : 'home'
}

function App() {
  const [page, setPage] = useState(getPageFromPath)

  useEffect(() => {
    function handlePopState() {
      setPage(getPageFromPath())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(nextPage) {
    const path = nextPage === 'dashboard' ? '/dashboard' : '/'

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
    }

    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      {page === 'home'
        ? <HomePage onNavigate={navigate} />
        : <DashboardPage onNavigate={navigate} />
      }
    </div>
  )
}

export default App
