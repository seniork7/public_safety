import { useState } from 'react'
import HandleBtnClick from '../HandleBtnClick.jsx'
import Button from '../form_elements/Button.jsx'
import NavLink from '../header/NavLink.jsx'
import NavMenu from './NavMenu.jsx'
import Pulse from '../dashboard/Pulse.jsx'
import { HiMenu, HiX, HiUser, HiOutlineLogout, HiBell } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

const Nav_Items = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Services', to: '#services' },
  { label: 'Join Us', to: '#joinUs' },
  { label: 'Contact', to: '#contact' }
]

export default function Header({
  page = 'home',
  adminInfo = null,
  mode = null,
  sessionLabel = null,
  onLogout = null
}) {
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    if (onLogout) return onLogout()
    navigate('/admin/login')
  }

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
              <div className="bg-success/15 flex items-center gap-2 px-3 py-1 rounded-lg text-sm text-text-primary">
                <Pulse /> {sessionLabel}
              </div>
            )}

            <button className="relative p-2" aria-label="Notifications">
              <HiBell className="text-xl" />
            </button>

            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-surface/5"
                aria-haspopup="true"
                aria-expanded={menuOpen}
              >
                <HiUser className="text-xl" />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-5 w-40 bg-bg shadow-md rounded-md overflow-hidden z-50">
                  <h3 className="font-medium px-4 py-2 bg-nav-bg text-surface">
                    {adminInfo ? `${adminInfo.fName} ${adminInfo.lName}` : 'Admin User'}
                    {adminInfo && <p className="text-xs text-text-muted">{adminInfo.role}</p>}
                  </h3>
                  {/* <Link to="/admin/profile" className="block px-4 py-2 hover:bg-surface/5">View Profile</Link> */}
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-surface/5">
                    <HiOutlineLogout className='inline-block ml-2' /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    )
  }

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