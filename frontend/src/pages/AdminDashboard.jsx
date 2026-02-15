import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminFetch } from '../utils/adminFetch'
import LoadingOverlay from '../components/LoadingOverlay'
import Button from '../components/form_elements/Button'
import { HiOutlineLogout } from 'react-icons/hi'

export default function AdminDashboard() {
    const navigate = useNavigate()
    const [applications, setApplications] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchApplications = async () => {
            setLoading(true)

            try {
                const data = await adminFetch('api/admin/dashboard', { cache: 'no-store' })

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

    return (
        <>
            {loading && <LoadingOverlay />}
        </>
    )
}