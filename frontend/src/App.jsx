import Header from './components/Header.jsx'
import SafetyAlert from './components/SafetyAlert.jsx'
import HeroBanner from './components/HeroBanner.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import JoinUs from './pages/JoinUs.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'
import { useLocation, Link } from "react-router-dom"

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const hashElement = document.querySelector(location.hash)

    if (hashElement) {
      hashElement.scrollIntoView({ behavior: "smooth" })
    }
  }, [location.hash])

  return (
    <>
      <div className="w-screen fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md">
        <Link to="#main-content" className="sr-only focus:not-sr-only text-surface" aria-label="Skip to main content">Skip to main content</Link>
        <SafetyAlert />
        <Header />
      </div>
      <HeroBanner />
      <main id="main-content" role="main">
        <Home />
        <About />
        <Services />
        <JoinUs />
        <Contact />
        <Footer />
      </main>
    </>
  )
}