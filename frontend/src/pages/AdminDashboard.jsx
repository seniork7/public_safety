import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { adminFetch } from '../utils/adminFetch'
import LoadingOverlay from '../components/LoadingOverlay'
import Button from '../components/form_elements/Button'
import Header from '../components/header/Header'
import ControlPanel from '../components/dashboard/ControlPanel'

export default function AdminDashboard() {
    const navigate = useNavigate()
    const [applications, setApplications] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchApplications = async () => {
            setLoading(true)

            try {
                const data = await adminFetch('api/admin/dashboard', { cache: 'no-store' })
                // console.log('Dashboard data:', data);
                
                setApplications(data)

                alert('The dashboard is under development. Please check back later!')

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
    }, [navigate])

    const handleLogout = async () => {
        setLoading(true)
        try {
            await adminFetch('api/admin/logout', { method: 'POST' })
            navigate('/admin/login')
        } catch (error) {
            console.error('Logout failed', error)
            navigate('/admin/login')
        } finally {
            setLoading(false)
        }
    }

    const handleMode = () => {
        if (applications) {
            return applications.role === 'Admin' ? 'Admin Mode' : 'Demo Mode'
        } 
    }

    return (
        <>
            {loading && <LoadingOverlay />}
            <main>
                <section className="min-h-screen grid grid-cols-1 md:grid-cols-[230px_1fr]">
                    {/* Control Panel */}
                    <ControlPanel />

                    {/* Main Display Area */}
                    <div className="bg-bg">
                        <Header
                            page="admin"
                            adminInfo={applications}
                            mode={handleMode()}
                            sessionLabel="Active Session"
                            onLogout={handleLogout}
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