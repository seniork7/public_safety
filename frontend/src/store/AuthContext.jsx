/* 
    A context for accessing authentication state accross the app
*/

import { createContext, useContext, useEffect, useState } from 'react'
import { adminFetch } from '../utils/adminFetch'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    // Check if the user is already authenticated when the app loads and 
    // set the user state accordingly
    useEffect(() => {
        const checkAuth = async () => {
            setLoading(true)
            try {
                await new Promise(resolve => setTimeout(resolve, 500))
                const response = await adminFetch('api/admin/check-auth', { cache: 'no-store' })
                
                setUser(response?.user)

            } catch (error) {
                console.error('Error checking credentials:', error)
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        checkAuth()
    }, [])

    const login = (userData) => setUser(userData)
    const logout = () => setUser(null)

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)