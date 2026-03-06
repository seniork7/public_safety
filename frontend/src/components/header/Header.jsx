/* 
    Header component - displays the nav menu and admin controls based on the current page and user session
*/

import { useState } from 'react'
import HandleBtnClick from '../HandleBtnClick.jsx'
import Button from '../form_elements/Button.jsx'
import NavMenu from './NavMenu.jsx'
import DropdownMenu from '../dashboard/DropdownMenu.jsx'
import Pulse from '../dashboard/Pulse.jsx'
import { HiMenu, HiX, HiUser, HiBell } from 'react-icons/hi'
import { Link } from 'react-router-dom'

// Array of nav items for the public site
const Nav_Items = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Services', to: '#services' },
  { label: 'Join Us', to: '#joinUs' },
  { label: 'Contact', to: '#contact' }
]

// Header component that conditionally renders different 
// nav options based on the current page and user session
export default function Header({
  page = 'home',
  mode = null,
  sessionLabel = null,
}) {
  const [open, setOpen] = useState(false)

  if (page === 'admin') {
    return (
      <header className="text-text-secondary py-3 shadow-sm bg-surface">
        <div className="mx-auto px-4 lg:px-8 flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard" className="text-lg text-text-primary">
              Dashboard
            </Link>
            {mode && (
              <div className="px-3 py-1 rounded-lg bg-alert-bg/15 text-accent-secondary text-sm">
                {mode}
              </div>
            )}
          </div>

          <div className="flex items-center gap-6">
            {sessionLabel && (
              <div className="bg-success/15 hidden md:flex items-center gap-2 px-3 py-1 rounded-lg text-sm text-text-primary">
                <Pulse /> {sessionLabel}
              </div>
            )}

            <button className="relative p-2" aria-label="Notifications">
              <HiBell className="text-xl" />
            </button>
            <DropdownMenu>
              {sessionLabel && (
                <div className="bg-success/15 flex md:hidden items-center gap-2 px-3 py-1 text-sm text-text-primary">
                  <Pulse /> {sessionLabel}
                </div>
              )}
            </DropdownMenu>
          </div>
        </div>
      </header>
    )
  }

  // Default header for public site
  return (
    <header>
      <nav className="bg-nav-bg/80 text-surface py-3">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold">Public Safety</a>
          <div className="hidden lg:flex items-center gap-10">
            <NavMenu Nav_Items={Nav_Items} className="py-2 text-center gap-6" page={page} />
          </div>

          <Link to="/admin/login">
            <Button id="admin-login" type="button" className="hidden lg:flex gap-2 bg-transparent hover:text-accent-secondary ml-10 cursor-pointer transition duration-700">
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
            <NavMenu Nav_Items={Nav_Items} className="py-2 text-center h-screen flex-col" page={page}>
              <Link to="#services">
                <Button onClick={() => HandleBtnClick('getInvolved')} className="bg-accent-secondary text-bg mt-4">
                  Get Involved
                </Button>
              </Link>

              <Link to="/admin/login">
                <div className="mt-8 flex items-center justify-center">
                  <Button id="admin-login" type="button" className="flex lg:hidden gap-2 text-lg bg-transparent cursor-pointer transition duration-700">
                    <HiUser className="flex lg:hidden text-2xl" />
                    <span className="flex lg:hidden">Admin</span>
                  </Button>
                </div>
              </Link>
            </NavMenu>
          </div>
        )}
      </nav>
    </header>
  )
}