import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import HandleBtnClick from '../HandleBtnClick.jsx'
import Button from '../form_elements/Button.jsx'
import NavMenu from './NavMenu.jsx'
import DropdownMenu from '../dashboard/DropdownMenu.jsx'
import Pulse from '../dashboard/Pulse.jsx'
import { HiMenu, HiX, HiUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Nav_Items = [
    { label: 'Home', to: '#home' },
    { label: 'About', to: '#about' },
    { label: 'Services', to: '#services' },
    { label: 'Join Us', to: '#joinUs' },
    { label: 'Contact', to: '#contact' },
]

export default function Header({ page = 'home', sessionLabel = null, sectionTitle = null, onMobileMenuOpen = () => { } }) {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 1024) setOpen(false) }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    if (page === 'admin') {
        return (
            <header className="py-3 border-b border-border bg-surface">
                <div className="mx-auto px-4 lg:px-8 flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onMobileMenuOpen}
                            className="md:hidden p-1.5 -ml-1.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg transition-colors duration-200"
                            aria-label="Open navigation menu"
                        >
                            <HiMenu className="w-5 h-5" />
                        </button>
                        <h1 className="text-base font-semibold text-text-primary">
                            {sectionTitle || 'Dashboard'}
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        {sessionLabel && (
                            <div className="hidden md:flex items-center gap-2 bg-success/10 text-success text-xs font-medium px-2.5 py-1 rounded-full">
                                <Pulse /> {sessionLabel}
                            </div>
                        )}
                        <DropdownMenu>
                            {sessionLabel && (
                                <div className="bg-success/10 flex md:hidden items-center gap-2 px-3 py-1 text-sm text-success">
                                    <Pulse /> {sessionLabel}
                                </div>
                            )}
                        </DropdownMenu>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <header>
            <nav
                className={`text-surface py-3 transition-all duration-300 ${scrolled ? 'bg-nav-bg shadow-md' : 'bg-linear-to-b from-black/75 to-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
                    <a href="/" className="text-xl font-semibold text-surface">
                        Public Safety
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        <NavMenu Nav_Items={Nav_Items} className="gap-2" page={page} />
                    </div>

                    <div className="hidden lg:flex items-center">
                        <Link to="/admin/login">
                            <Button
                                id="admin-login"
                                type="button"
                                className="flex items-center gap-2 bg-transparent hover:text-accent-secondary transition duration-200 cursor-pointer"
                            >
                                <HiUser className="text-lg" />
                                <span>Admin</span>
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            className="p-2 rounded-md text-surface"
                        >
                            {open ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="lg:hidden fixed inset-0 z-40 bg-nav-bg flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                            className="absolute top-4 right-4 p-2 text-surface"
                        >
                            <HiX className="w-6 h-6" />
                        </button>

                        <NavMenu
                            Nav_Items={Nav_Items}
                            className="flex-col items-center gap-2"
                            page={page}
                            mobile
                            onLinkClick={() => setOpen(false)}
                        >
                            <div className="mt-8 flex flex-col items-center gap-10">
                                <Button
                                    onClick={() => { HandleBtnClick('getInvolved'); setOpen(false) }}
                                    className="bg-accent-secondary text-text-primary font-semibold px-8 py-3 rounded-lg"
                                >
                                    Get Involved
                                </Button>

                                <Link to="/admin/login" onClick={() => setOpen(false)}>
                                    <Button
                                        type="button"
                                        className="flex items-center gap-2 bg-transparent text-surface hover:text-accent-secondary transition duration-200"
                                    >
                                        <HiUser className="text-xl" />
                                        <span>Admin</span>
                                    </Button>
                                </Link>
                            </div>
                        </NavMenu>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
