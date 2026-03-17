/* 
    Admin Dashboard - uses an <Outlet /> for nested routes to display the different dashboard sections/components.
*/

import { useState, useEffect, use } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../store/AuthContext'
import LoadingOverlay from '../components/LoadingOverlay'
import Header from '../components/header/Header'
import ControlPanel from '../components/dashboard/ControlPanel'
import { HiChevronRight } from 'react-icons/hi'

export default function AdminDashboard() {
    const { user, loading } = useAuth()
    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleCollapse = () => {
        // update state and persist the new value (use functional update so we can compute next)
        setIsCollapsed(prev => {
            const next = !prev
            localStorage.setItem('adminPanelCollapsed', JSON.stringify(next))
            return next
        })
    }

    useEffect(() => {
        // alert('The dashboard is under development. Please check back later!')

        const collapsedState = localStorage.getItem('adminPanelCollapsed')
        if (collapsedState) {
            setIsCollapsed(JSON.parse(collapsedState))
        }

    }, [])

    const handleMode = () => {
        if (user) {
            return user.role === 'Admin' ? 'Admin Mode' : 'Demo Mode'
        }
    }

    return (
        <>
            {loading && <LoadingOverlay />}
            <main>
                {/* use a stable md class to avoid producing invalid class names */}
                {/*
                  md:grid-cols-[230px_1fr] => 230px 1fr
                  md:grid-cols-[1fr]       => 1fr
                */}
                {(() => { })()}
                <section className={`min-h-screen grid grid-cols-1 ${isCollapsed ? 'md:grid-cols-[1fr]' : 'md:grid-cols-[230px_1fr]'}`}>
                    {/* Control Panel */}
                    <div className={isCollapsed ? "hidden" : "block"} aria-label="Admin control panel with navigation links">
                        <ControlPanel onCollapse={handleCollapse} />
                    </div>

                    {/* Main Display Area */}
                    <div className="bg-bg relative">
                        {isCollapsed && (
                            <button
                                onClick={handleCollapse}
                                aria-label="Open control panel"
                                title="Open control panel"
                                className="left-0 top-1/2 -translate-y-1/2 -ml-6 fixed z-99 flex items-center justify-end h-10 w-10 rounded-r-md bg-nav-bg text-surface shadow-md hover:bg-nav-bg/80 transition duration-300 cursor-pointer"
                            >
                                <HiChevronRight className="text-xl" />
                            </button>
                        )}
                        <Header
                            page="admin"
                            adminInfo={user}
                            mode={handleMode()}
                            sessionLabel="Active Session"
                        />

                        <div className="p-8">
                            <Outlet />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}