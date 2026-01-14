import { useState } from 'react'
import HandleBtnClick from './HandleBtnClick.jsx'
import Button from './elements/Button.jsx'
import { HiMenu, HiX, HiUser } from 'react-icons/hi'
import { Link } from "react-router-dom"

function Header() {
  const [open, setOpen] = useState(false)
  
  return (
    <header>
      <div className="">
        <nav className="bg-nav-bg text-text-primary py-3">
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
            <a href="./" className="text-xl font-semibold text-accent-primary">Public Safety</a>
            <div className="hidden lg:flex items-center gap-10">
              <a href="/" className="text-text-primary hover:text-accent-primary transition  duration-700 hover:scale-107">Home</a>
              <Link to="#about" className="text-text-primary hover:text-accent-primary transition  duration-700 hover:scale-107">About</Link>
              <Link to="#services" className="text-text-primary hover:text-accent-primary transition  duration-700 hover:scale-107">Services</Link>
              <Link to="#joinUs" className="text-text-primary hover:text-accent-primary transition  duration-700 hover:scale-107">Join Us</Link>
              <Link to="#contact" className="text-text-primary hover:text-accent-primary transition  duration-700 hover:scale-107">Contact</Link>
              {/* <Button onClick={() => HandleBtnClick('getInvolved')} className="bg-accent-secondary hover:bg-accent-primary hover:text-text-primary text-bg md:ml-10 py-2 px-4 rounded-lg cursor-pointer transition  duration-700 hover:scale-105">Get Involved</Button> */}
            </div>

              <Link to="/admin/login">
                <Button id="admin-login" type="button" className="hidden lg:flex gap-2 bg-transparent text-text-secondary hover:text-accent-primary ml-10 cursor-pointer transition  duration-700">
                  <HiUser className="hidden lg:flex text-lg" />
                  <span className="hidden lg:flex">Admin</span>
                </Button>
              </Link>

            <div className="lg:hidden">
              <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md text-primary">
                {open ? <HiX className="w-full h-6" /> : <HiMenu className="w-full h-6" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="lg:hidden bg-nav-bg px-4 pb-4">
              <a href="/" className="block py-2 text-text-primary">Home</a>
              <hr />
              <Link to="#about" className="block py-2 text-text-primary">About</Link>
              <hr />
              <Link to="#services" className="block py-2 text-text-primary">Services</Link>
              <hr />
              <Link to="#joinUs" className="block py-2 text-text-primary">Join Us</Link>
              <hr />
              <Link to="#contact" className="block py-2 text-text-primary">Contact</Link>
              <hr />
              <Link to="#services">
                <Button onClick={() => HandleBtnClick('getInvolved')} className="bg-accent-secondary text-bg mt-4 w-full">
                  Get Involved
                </Button>
              </Link>

              <Link to="/admin/login">
                <div className="mt-8 flex items-center justify-center">
                  <Button id="admin-login" type="button" className="flex lg:hidden gap-2 text-lg bg-transparent text-text-secondary hover:text-accent-primary cursor-pointer transition  duration-700">
                    <HiUser className="flex lg:hidden text-2xl" />
                    <span className="flex lg:hidden">Admin</span>
                  </Button>
                </div>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
 