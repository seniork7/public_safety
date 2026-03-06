/* 
    This component checks if a user is authenticated before allowing access to a protected route
*/

import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/AuthContext'
import LoadingOverlay from './LoadingOverlay'

export const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <>
            <LoadingOverlay /> <p className='font-bold text-error'>Authenticating...</p>
        </>
    }

    if (!user) {
        return <Navigate to="/admin/login" />
    }

    return children
}