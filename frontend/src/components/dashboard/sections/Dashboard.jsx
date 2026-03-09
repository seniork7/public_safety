import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminFetch } from '../../../utils/adminFetch'
import { useAuth } from '../../../store/AuthContext'
import Overview from "../Overview"
import VolunteerApplications from '../volunteerApplications'

export default function Dashboard() {
    const [applications, setApplications] = useState(null)
    const navigate = useNavigate()
    const { user, logout, loading } = useAuth()

    useEffect(() => {
        const fetchApplications = async () => {
            // setLoading(true)

            try {
                await new Promise(resolve => setTimeout(resolve, 500))
                const data = await adminFetch('api/admin/dashboard', { cache: 'no-store' })
                console.log('Dashboard data:', data);

                setApplications(data)

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


    return (
        <section>
            <div className="space-y-15">
                <Overview applications={applications} />
                <VolunteerApplications applications={applications} />
            </div>
        </section>
    )
}
