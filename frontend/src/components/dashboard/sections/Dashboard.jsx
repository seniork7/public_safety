/*
    Dashboard component for admin panel. Fetches volunteer application data on mount, and renders the Overview and VolunteerApplications components. Also handles status changes for volunteer applications.
*/

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiExclamation } from 'react-icons/hi'
import { adminFetch } from '../../../utils/adminFetch'
import { useAuth } from '../../../store/AuthContext'
import Overview from "../Overview"
import VolunteerApplications from '../volunteerApplications'
import updateApplicationStatus from '../../../utils/updateApplicationStatus'
import LoadingOverlay from '../../LoadingOverlay'
import PopUpOverlay from '../PopUpOverlay'
import ApplicationPanel from '../ApplicationPanel'

export default function Dashboard() {
    const [fetchLoading, setFetchLoading] = useState(false)
    const [isAdmin, setIsAdmin] = useState(null)
    const [selectedApp, setSelectedApp] = useState(null)
    const [detailsOpen, setDetailsOpen] = useState(false)
    const navigate = useNavigate()
    const { user } = useAuth()

    const [dashboardData, setDashboardData] = useState({
        applications: [],
        stats: {
            totalApplications: 0,
            totalPending: 0,
            totalApproved: 0,
            totalRejected: 0
        }
    })

    useEffect(() => {
        const fetchDashboardData = async () => {
            setFetchLoading(true)
            try {
                const response = await adminFetch('api/admin/dashboard_data', { cache: 'no-store' })
                setDashboardData(response)
            } catch (error) {
                if (error.message === 'Unauthorized!') {
                    navigate('/admin/login')
                    return
                }
                console.error(error)
            } finally {
                setFetchLoading(false)
            }
        }

        fetchDashboardData()
    }, [navigate])

    const handleStatusChange = async (id, status) => {
        const isAdminUser = (user?.role ?? "").toLowerCase() === "admin"
        if (!isAdminUser) {
            setIsAdmin(false)
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
                    stats: { totalApplications: total, totalPending: pending, totalApproved: approved, totalRejected: rejected }
                }
            })

            setSelectedApp(prev => (prev && prev._id === id) ? response.application : prev)

        } catch (error) {
            console.error("Error changing application status:", error)
        }
    }

    const handleViewDetails = (id) => {
        setSelectedApp(dashboardData.applications.find(app => app._id === id))
        setDetailsOpen(true)
    }

    return (
        <section>
            {fetchLoading && <LoadingOverlay />}

            {/* isAdmin === false means a non-admin tried to approve/reject — null means no action has been taken yet */}
            {isAdmin === false && (
                <PopUpOverlay
                    icon={HiExclamation}
                    iconClassName="text-error"
                    title="Unauthorized!"
                    message="You do not have permission to perform this action."
                    onClose={() => setIsAdmin(null)}
                />
            )}

            <div className="space-y-10">
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
                onClose={() => setDetailsOpen(false)}
                onStatusChange={handleStatusChange}
            />
        </section>
    )
}
