import { useState } from 'react'
import HeroBanner from './HeroBanner.jsx'
import HandleBtnClick from './HandleBtnClick.jsx'
import Button from './elements/Button.jsx'
import { HiMenu, HiX } from 'react-icons/hi'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav className="bg-[#f5f5f5] dark:bg-black fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md py-4">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <a href="./" className="text-xl font-semibold text-[#E53935] dark:text-[#E53935]">Public Safety</a>

          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935] dark:hover:text-[#eed202]">Home</a>
            <a href="#about" className="text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935] dark:hover:text-[#eed202]">About</a>
            <a href="#services" className="text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935] dark:hover:text-[#eed202]">Services</a>
            <a href="#joinUs" className="text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935] dark:hover:text-[#eed202]">Join Us</a>
            <a href="#contact" className="text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935] dark:hover:text-[#eed202]">Contact</a>
            <Button onClick={() => HandleBtnClick('getInvolved')} className="bg-[#E53935] hover:bg-[#ff3243] text-[#f5f5f5] dark:bg-[#eed202] dark:hover:bg-[#fff312] dark:text-[#0f1115] md:ml-10 py-2 px-4 rounded-lg">Get Involved</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md text-[#0f1115] dark:text-[#f5f5f5]">
              {open ? <HiX className="w-full h-6" /> : <HiMenu className="w-full h-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-[#f5f5f5] dark:bg-black px-4 pb-4">
            <a href="/" className="block py-2 text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935]">Home</a>
            <a href="#about" className="block py-2 text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935]">About</a>
            <a href="#services" className="block py-2 text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935]">Services</a>
            <a href="#joinUs" className="block py-2 text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935]">Join Us</a>
            <a href="#contact" className="block py-2 text-[#0f1115] dark:text-[#f5f5f5] hover:text-[#E53935]">Contact</a>
            <Button onClick={() => HandleBtnClick('getInvolved')} className="bg-[#E53935] hover:bg-[#ff3243] text-[#f5f5f5] dark:bg-[#eed202] dark:hover:bg-[#fff312] dark:text-[#0f1115] mt-4 w-full">Get Involved</Button>
          </div>
        )}
      </nav>

        <HeroBanner />
    </header>
  )
}

export default Header
 