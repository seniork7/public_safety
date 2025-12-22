import Header from './components/Header.jsx'
import SafetyAlert from './components/SafetyAlert.jsx'
import HeroBanner from './components/HeroBanner.jsx'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Services from './components/pages/Services.jsx'
import JoinUs from './components/pages/JoinUs.jsx'
import Contact from './components/pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom"

function App() {
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
      <div className="w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md">
        <SafetyAlert />
        <Header />
      </div>
      <HeroBanner />
      <main>
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

export default App
