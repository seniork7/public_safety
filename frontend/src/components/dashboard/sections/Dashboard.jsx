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

export default function Dashboard() {
    const [isAdmin, setIsAdmin] = useState(null)
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

                return {
                    ...prev,
                    applications: updatedApplications,
                    totalApplications: updatedApplications.length,
                    totalPending: updatedApplications.filter(app => app.stats === "Pending").length,
                    totalApproved: updatedApplications.filter(app => app.stats === "approved").length,
                    totalRejected: updatedApplications.filter(app => app.stats === "rejected").length
                }
            })
        } catch (error) {
            console.error("Error changing application status:", error)
        }
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
                <VolunteerApplications dashboardData={dashboardData.applications} onStatusChange={handleStatusChange} />
            </div>
        </section>
    )
}
