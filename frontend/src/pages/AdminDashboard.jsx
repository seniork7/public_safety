/* 
    Admin Dashboard - uses an <Outlet /> for nested routes to display the different dashboard sections/components.
*/

import { use, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { adminFetch } from '../utils/adminFetch'
import { useAuth } from '../store/AuthContext'
import LoadingOverlay from '../components/LoadingOverlay'
import Button from '../components/form_elements/Button'
import Header from '../components/header/Header'
import ControlPanel from '../components/dashboard/ControlPanel'
import { HiChevronRight } from 'react-icons/hi'

export default function AdminDashboard() {
    const navigate = useNavigate()
    const [applications, setApplications] = useState(null)
    const { user, logout, loading } = useAuth()
    const [isCollapsed, setIsCollapsed] = useState(false)


    useEffect(() => {
        alert('The dashboard is under development. Please check back later!')
    }, [])


    /*     useEffect(() => {
            const fetchApplications = async () => {
                setLoading(true)
    
                try {
                    const data = await adminFetch('api/admin/dashboard', { cache: 'no-store' })
                    // console.log('Dashboard data:', data);
                    
                    setApplications(data)
    
                } catch (error) {
                    if (error.message === 'Unauthorized!') {
                        navigate('/admin/login')
                        return
                    }
                    console.error(error)
                } finally {
                    setLoading(false)
                }
            }
    
            fetchApplications()
        }, [navigate]) */



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
                    <div className={isCollapsed ? "hidden" : "block"}>
                        <ControlPanel handleCallapse={() => setIsCollapsed(!isCollapsed)} />
                    </div>

                    {/* Main Display Area */}
                    <div className="bg-bg relative">
                        {isCollapsed && (
                            <button
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                aria-label="Open control panel"
                                title="Open control panel"
                                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-99 flex items-center justify-end h-10 w-10 rounded-r-md bg-nav-bg text-surface shadow-md hover:bg-nav-bg/80 transition duration-300 cursor-pointer"
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