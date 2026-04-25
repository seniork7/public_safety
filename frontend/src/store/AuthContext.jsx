/* 
    A context for accessing authentication state accross the app
*/

import { createContext, useContext, useEffect, useState } from 'react'
import { API_URL } from '../utils/api_url'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Check if the user is already authenticated when the app loads and 
    // set the user state accordingly
    useEffect(() => {
        const checkAuth = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API_URL}/api/admin/check-auth`, {
                    credentials: 'include',
                    cache: 'no-store',
                })

                if (response.ok) {
                    const data = await response.json()
                    setUser(data?.user)
                } else {
                    setUser(null)
                }
            } catch {
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