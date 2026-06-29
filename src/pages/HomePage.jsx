// Import every component this page needs.
import Header from '../components/layout/Header'
import HeroSection from '../components/home/HeroSection'
import StepsSection from '../components/home/StepsSection'
import TrustSection from '../components/home/TrustSection'
import '../styles/home.css'

// onNavigate comes from App.jsx — we pass it down to any child that needs
// to trigger a page change (Header and HeroSection both have nav buttons).
function HomePage({ onNavigate }) {
  return (
    <div className="home">
      <Header onNavigate={onNavigate} page="home" />
      <main>
        <HeroSection onNavigate={onNavigate} />
        <StepsSection />
        <TrustSection onNavigate={onNavigate} />
      </main>
    </div>
  )
}

export default HomePage
