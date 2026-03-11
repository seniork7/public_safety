/* 
    Dashboard component for admin panel. Fetches volunteer application data and admin info on mount, and renders the Overview and VolunteerApplications components. Also handles status changes for volunteer applications.
*/

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminFetch } from '../../../utils/adminFetch'
import { useAuth } from '../../../store/AuthContext'
import Overview from "../Overview"
import VolunteerApplications from '../volunteerApplications'
import updateApplicationStatus from '../../../utils/updateApplicationStatus'

export default function Dashboard() {
    const [isAdmin, setIsAdmin] = useState(false)
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
        const fetchApplications = async () => {
            // setLoading(true)

            try {
                await new Promise(resolve => setTimeout(resolve, 500))
                const response = await adminFetch('api/admin/dashboard', { cache: 'no-store' })

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

        fetchApplications()
    }, [navigate])

    const handleStatusChange = async (id, status) => {
        setIsAdmin(user?.role === "Admin")

        if (!isAdmin) {
            alert("Unauthorized! Action can only be performed by an admin.")
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
            <div className="space-y-15">
                <Overview dashboardData={dashboardData} />
                <VolunteerApplications dashboardData={dashboardData.applications} onStatusChange={handleStatusChange} />
            </div>
        </section>
    )
}
