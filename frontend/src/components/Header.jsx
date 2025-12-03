import { useState } from 'react'
import HeroBanner from './HeroBanner.jsx'
import HandleBtnClick from './HandleBtnClick.jsx'
import Button from './elements/Button.jsx'
import { HiMenu, HiX } from 'react-icons/hi'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav className="bg-surface text-primary fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md py-4">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <a href="./" className="text-xl font-semibold text-accent-primary">Public Safety</a>

          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-primary hover:text-accent-primary hover:underline">Home</a>
            <a href="#about" className="text-primary hover:text-accent-primary hover:underline">About</a>
            <a href="#services" className="text-primary hover:text-accent-primary hover:underline">Services</a>
            <a href="#joinUs" className="text-primary hover:text-accent-primary hover:underline">Join Us</a>
            <a href="#contact" className="text-primary hover:text-accent-primary hover:underline">Contact</a>
            <Button onClick={() => HandleBtnClick('getInvolved')} className="bg-accent-primary hover:bg-accent-secondary text-surface md:ml-10 py-2 px-4 rounded-lg cursor-pointer">Get Involved</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md text-primary">
              {open ? <HiX className="w-full h-6" /> : <HiMenu className="w-full h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-surface px-4 pb-4">
            <a href="/" className="block py-2 text-primary hover:text-accent-primary">Home</a>
            <a href="#about" className="block py-2 text-primary hover:text-accent-primary">About</a>
            <a href="#services" className="block py-2 text-primary hover:text-accent-primary">Services</a>
            <a href="#joinUs" className="block py-2 text-primary hover:text-accent-primary">Join Us</a>
            <a href="#contact" className="block py-2 text-primary hover:text-accent-primary">Contact</a>
            <Button onClick={() => HandleBtnClick('getInvolved')} className="bg-accent-primary hover:bg-accent-secondary text-surface mt-4 w-full">Get Involved</Button>
          </div>
        )}
      </nav>

        <HeroBanner />
    </header>
  )
}

export default Header
 