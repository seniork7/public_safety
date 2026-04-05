/* 
    Dropdown menu component for the admin profile area in the header. Displays admin info and a logout option
*/

import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiUser, HiOutlineLogout } from 'react-icons/hi'
import { useAuth } from '../../store/AuthContext'
import { adminFetch } from '../../utils/adminFetch'

export default function DropdownMenu({ adminInfo = null, children }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const dropdownRef = useRef(null)
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    adminInfo = user ? user : null

    // This function calls the backend to destroy the session and 
    // then clears the user state and redirects to login page
    const handleLogout = async () => {
        try {
            await adminFetch('api/admin/logout', { method: 'POST' })
            logout()
            navigate('/admin/login')
            console.log('Logout successful');

        } catch (error) {
            console.error('Logout failed', error)
            navigate('/admin/login')
        } finally {
            // setLoading(false)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-surface/5"
                aria-expanded={menuOpen}
                aria-label="Admin menu"
                title="Admin Menu"
            >
                <HiUser className="text-xl" />
            </button>

            {menuOpen && (
                <div className="absolute right-0 mt-5 w-40 bg-bg shadow-md rounded-md overflow-hidden z-50">
                    <h3 className="font-medium px-4 py-2 bg-nav-bg text-surface">
                        {adminInfo ? `${adminInfo?.fName} ${adminInfo?.lName}` : 'Admin User'}
                        {adminInfo && <p className="text-xs text-surface/80">{adminInfo?.role}</p>}
                    </h3>

                    {children}

                    {/* <Link to="/admin/profile" className="block px-4 py-2 hover:bg-surface/5">View Profile</Link> */}
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-surface/5">
                        <HiOutlineLogout className='inline-block ml-2' /> Logout
                    </button>
                </div>
            )}
        </div>
    )
}
