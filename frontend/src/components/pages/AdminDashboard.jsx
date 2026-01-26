import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminFetch } from '../../utils/adminFetch'
import LoadingOverlay from '../elements/LoadingOverlay'

function AdminDashboard() {
    const navigate = useNavigate()
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const data = await adminFetch('api/admin/dashboard')

                setApplications(data)
                setLoading(false)

                alert('The dashboard is under development. Please check back later!')

            } catch (error) {
                if (error.message === 'Unauthorized!') {
                    navigate('/admin/login')
                    return
                }
                console.error(error)
            }
        }

        fetchApplications()
    }, [navigate])

    return (
        <>
            {loading && <LoadingOverlay />}

            <div>
                <h1 className="text-2xl font-bold text-accent-secondary">Welcome, {applications.fName} {applications.lName}!</h1>
                {loading && <p>Loadind Data....</p>}
            </div>
        </>
    )
}
export default AdminDashboard