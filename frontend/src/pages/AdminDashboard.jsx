/* 
    Admin Dashboard - uses an <Outlet /> for nested routes to display the different dashboard sections/components.
*/

import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../store/AuthContext'
import LoadingOverlay from '../components/LoadingOverlay'
import Header from '../components/header/Header'
import ControlPanel from '../components/dashboard/ControlPanel'
import { HiChevronRight } from 'react-icons/hi'

const sectionTitleMap = {
    '/admin/dashboard': 'Dashboard',
    '/admin/dashboard/safety-alerts': 'Safety Alerts',
    '/admin/dashboard/reports': 'Reports',
    '/admin/dashboard/settings': 'Settings',
}

export default function AdminDashboard() {
    const { user, loading } = useAuth()
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()
    const sectionTitle = sectionTitleMap[location.pathname] || 'Dashboard'

    const handleCollapse = () => {
        setIsCollapsed(prev => {
            const next = !prev
            localStorage.setItem('adminPanelCollapsed', JSON.stringify(next))
            return next
        })
    }

    useEffect(() => {
        alert('The dashboard is under development. Please check back later!')

        const collapsedState = localStorage.getItem('adminPanelCollapsed')
        if (collapsedState) {
            setIsCollapsed(JSON.parse(collapsedState))
        }
    }, [])

    // Close mobile panel on route change
    useEffect(() => {
        setMobileOpen(false)
    }, [location.pathname])

    return (
        <>
            {loading && <LoadingOverlay />}
            <main>
                <section className={`min-h-screen grid grid-cols-1 ${isCollapsed ? 'md:grid-cols-[1fr]' : 'md:grid-cols-[230px_1fr]'}`}>

                    <div className={isCollapsed ? "hidden" : "hidden md:block"} aria-label="Admin control panel">
                        <ControlPanel onCollapse={handleCollapse} />
                    </div>

                    {/* On mobile, the sidebar slides in from the left as a drawer overlay.
                        translate-x-0 = visible, -translate-x-full = hidden off-screen */}
                    <>
                        {mobileOpen && (
                            <div
                                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                                onClick={() => setMobileOpen(false)}
                                aria-hidden="true"
                            />
                        )}
                        <div
                            className={`fixed inset-y-0 left-0 z-50 md:hidden transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
                        >
                            <ControlPanel
                                onCollapse={() => setMobileOpen(false)}
                                mobileClose={() => setMobileOpen(false)}
                            />
                        </div>
                    </>

                    <div className="bg-bg relative">
                        {isCollapsed && (
                            <button
                                onClick={handleCollapse}
                                aria-label="Open control panel"
                                title="Open control panel"
                                className="left-0 top-1/2 -translate-y-1/2 -ml-6 fixed z-99 hidden md:flex items-center justify-end h-10 w-10 rounded-r-md bg-nav-bg text-surface shadow-md hover:bg-nav-bg/80 transition duration-300 cursor-pointer"
                            >
                                <HiChevronRight className="text-xl" />
                            </button>
                        )}
                        <Header
                            page="admin"
                            sectionTitle={sectionTitle}
                            sessionLabel="Active Session"
                            onMobileMenuOpen={() => setMobileOpen(true)}
                        />

                        <div className="p-6 md:p-8">
                            <Outlet />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}