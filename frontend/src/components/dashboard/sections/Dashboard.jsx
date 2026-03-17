/* 
    Dashboard component for admin panel. Fetches volunteer application data and admin info on mount, and renders the Overview and VolunteerApplications components. Also handles status changes for volunteer applications.
*/

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiExclamation } from 'react-icons/hi'
import { adminFetch } from '../../../utils/adminFetch'
import { useAuth } from '../../../store/AuthContext'
import Overview from "../Overview"
import VolunteerApplications from '../volunteerApplications'
import updateApplicationStatus from '../../../utils/updateApplicationStatus'
import PopUpOverlay from '../PopUpOverlay'
import Button from '../../form_elements/Button'
import ApplicationPanel from '../ApplicationPanel'

export default function Dashboard() {
    const [isAdmin, setIsAdmin] = useState(null)
    const [selectedApp, setSelectedApp] = useState(null)
    const [detailsOpen, setDetailsOpen] = useState(false)
    const navigate = useNavigate()
    const { user, logout, loading } = useAuth()

    const [dashboardData, setDashboardData] = useState({
        applications: [],
        admin: {
            fullName: "",
            role: "",
            id: ""
        },
        stats: {
            totalApplications: 0,
            totalPending: 0,
            totalApproved: 0,
            totalRejected: 0
        }
    })

    useEffect(() => {
        const fetchDashboardData = async () => {
            // setLoading(true)

            try {
                await new Promise(resolve => setTimeout(resolve, 500))
                const response = await adminFetch('api/admin/dashboard_data', { cache: 'no-store' })

                setDashboardData(response)

            } catch (error) {
                if (error.message === 'Unauthorized!') {
                    navigate('/admin/login')
                    return
                }
                console.error(error)
            } finally {
                // setLoading(false)
            }
        }

        fetchDashboardData()
    }, [navigate])

    const handleStatusChange = async (id, status) => {
        const isAdminUser = (user?.role ?? "").toLowerCase() === "admin"
        if (!isAdminUser) {
            setIsAdmin(isAdminUser)
            return
        }

        try {
            const response = await updateApplicationStatus(id, status)

            setDashboardData((prev) => {
                const updatedApplications = prev.applications.map((app) =>
                    app._id === id ? response.application : app
                )

                const total = updatedApplications.length
                const pending = updatedApplications.filter(app => app.status === "Pending").length
                const approved = updatedApplications.filter(app => app.status === "approved").length
                const rejected = updatedApplications.filter(app => app.status === "rejected").length

                return {
                    ...prev,
                    applications: updatedApplications,
                    stats: {
                        totalApplications: total,
                        totalPending: pending,
                        totalApproved: approved,
                        totalRejected: rejected
                    }
                }
            })

            setSelectedApp(prev => (prev && prev._id === id) ? response.application : prev)

        } catch (error) {
            console.error("Error changing application status:", error)
        }
    }

    const handleViewDetails = (id) => {
        const currentApp = dashboardData.applications.find(app => app._id === id)
        setSelectedApp(currentApp)

        setDetailsOpen(true)
    }

    const handleCloseDetails = () => {
        setDetailsOpen(false)
    }

    return (
        <section>
            {isAdmin === false && (
                <PopUpOverlay className="text-6xl text-error" icon={<HiExclamation />}>
                    <h1 className="text-4xl font-bold">Unauthorized!</h1>
                    <p className="text-lg">You do not have permission to perform this action.</p>
                    <Button className="mt-2 bg-error hover:bg-accent-secondary hover:text-text-primary text-surface duration-700 hover:scale-98" onClick={() => setIsAdmin(null)}>Close</Button>
                </PopUpOverlay>
            )}

            <div className="space-y-15">
                <Overview dashboardData={dashboardData} />
                <VolunteerApplications
                    dashboardData={dashboardData.applications}
                    onStatusChange={handleStatusChange}
                    onViewDetails={handleViewDetails}
                />
            </div>

            <ApplicationPanel
                app={selectedApp}
                open={detailsOpen}
                onClose={handleCloseDetails}
                onStatusChange={handleStatusChange}
            />
        </section>
    )
}
