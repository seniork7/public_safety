import Header from './components/Header.jsx'
import HeroBanner from './components/HeroBanner.jsx'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Services from './components/pages/Services.jsx'
import JoinUs from './components/pages/JoinUs.jsx'
import Contact from './components/pages/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header />
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
