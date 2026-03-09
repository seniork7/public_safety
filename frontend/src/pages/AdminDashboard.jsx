/* 
    Admin Dashboard - uses an <Outlet /> for nested routes to display the different dashboard sections/components.
*/

import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../store/AuthContext'
import LoadingOverlay from '../components/LoadingOverlay'
import Header from '../components/header/Header'
import ControlPanel from '../components/dashboard/ControlPanel'
import { HiChevronRight } from 'react-icons/hi'

export default function AdminDashboard() {
    const { user, loading } = useAuth()
    const [isCollapsed, setIsCollapsed] = useState(false)


    // useEffect(() => {
    //     alert('The dashboard is under development. Please check back later!')
    // }, [])

    const handleMode = () => {
        if (user) {
            return user.role === 'Admin' ? 'Admin Mode' : 'Demo Mode'
        }
    }

    return (
        <>
            {loading && <LoadingOverlay />}
            <main>
                <section className={`min-h-screen grid grid-cols-1 md:grid-cols-${isCollapsed ? '[1fr]' : '[230px_1fr]'}`}>
                    {/* Control Panel */}
                    <div className={isCollapsed ? "hidden" : "block"} aria-label="Admin control panel with navigation links">
                        <ControlPanel handleCallapse={() => setIsCollapsed(!isCollapsed)} />
                    </div>

                    {/* Main Display Area */}
                    <div className="bg-bg relative">
                        {isCollapsed && (
                            <button
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                aria-label="Open control panel"
                                title="Open control panel"
                                className="left-0 top-1/2 -translate-y-1/2 -ml-6 z-99 fixed flex items-center justify-end h-10 w-10 rounded-r-md bg-nav-bg text-surface shadow-md hover:bg-nav-bg/80 transition duration-300 cursor-pointer"
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