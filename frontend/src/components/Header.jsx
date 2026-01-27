import { useState } from 'react'
import HandleBtnClick from './HandleBtnClick.jsx'
import Button from './form_elements/Button.jsx'
import NavLink from './NavLink'
import { HiMenu, HiX, HiUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Nav_Items = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Services', to: '#services' },
  { label: 'Join Us', to: '#joinUs' },
  { label: 'Contact', to: '#contact' }
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className="">
        <nav className="bg-nav-bg/80 text-surface py-3">
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
            <a href="./" className="text-xl font-semibold">Public Safety</a>
            <div className="hidden lg:flex items-center gap-10">
              {Nav_Items.map(link => <NavLink key={link.to} className={'duration-700 hover:scale-107'} to={link.to}>{link.label}</NavLink>)}
              {/* <Button onClick={() => HandleBtnClick('getInvolved')} className="bg-accent-secondary hover:bg-accent-primary hover:text-text-primary text-bg md:ml-10 py-2 px-4 rounded-lg cursor-pointer transition  duration-700 hover:scale-105">Get Involved</Button> */}
            </div>

            <Link to="/admin/login">
              <Button id="admin-login" type="button" className="hidden lg:flex gap-2 bg-transparent hover:text-accent-secondary ml-10 cursor-pointer transition  duration-700">
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
            <div className="lg:hidden bg-nav-bg/80 px-4 pt-10 md:pt-40 h-screen flex flex-col items-center">
              {Nav_Items.map(link => <NavLink key={link.to} className={'block py-2 text-center'} to={link.to}>{link.label}</NavLink>)}
              <Link to="#services">
                <Button onClick={() => HandleBtnClick('getInvolved')} className="bg-accent-secondary text-bg mt-4">
                  Get Involved
                </Button>
              </Link>

              <Link to="/admin/login">
                <div className="mt-8 flex items-center justify-center">
                  <Button id="admin-login" type="button" className="flex lg:hidden gap-2 text-lg bg-transparent cursor-pointer transition  duration-700">
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