import AdminBg from '../../assets/images/admin-bg.png'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { adminFetch } from '../../utils/adminFetch'
import { HiOutlineArrowLeft } from 'react-icons/hi'


function AdminLogin() {
    const [formError, setformError] = useState('')
    const [adminAccess, setAdminAccess] = useState({ email: '', password: '' })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setAdminAccess({ ...adminAccess, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const errors = []

        if (!adminAccess.email.trim()) {
            errors.push('Email Address is required.');
        } else if (!/^\S+@\S+\.\S+$/.test(adminAccess.email)) {
            errors.push('Please enter a valid email address.');
        }

        if (!adminAccess.password.trim()) {
            errors.push('Password is required.');
        }

        if (errors.length > 0) {
            setformError(errors.join(' '));
            return;
        }
        try {
            await adminFetch('api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(adminAccess),
            })

            setAdminAccess({ email: '', password: '' })
            navigate('/admin/dashboard')

        } catch (error) {
            console.error(`There was an error during login. ${error.message}`)
        }
    }

    return (
        <section className="flex items-center justify-center h-screen bg-bg bg-cover bg-center text-text-primary px-4"
            style={{ backgroundImage: `url(${AdminBg})` }}
        >
            <div className="w-full max-w-md bg-cover bg-center bg-no-repeat backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/8">
                <header className="mb-8 text-center space-y-2">
                    <h2 className="text-3xl text-accent-primary">Admin Login</h2>
                    <p className="text-sm">
                        For Demo Admin access (Read-Only), use the following credentials: <br />
                        Email: demo@publicsafety.com <br />
                        Password: demoAccess000
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    {formError && <p className="text-error">{formError}</p>}
                    <div className="">
                        <label htmlFor="username" className="font-medium text-text-primary text-sm">Email*</label>
                        <input
                            id="username"
                            type="email"
                            name="email"
                            placeholder="admin@example.com"
                            className="w-full p-2 rounded-lg bg-input-bg border border-input-border text-input-text placeholder-input-placeholder focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300"
                            value={adminAccess.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="font-medium text-text-primary text-sm">Password*</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full p-2 rounded-lg bg-input-bg border border-input-border text-input-text placeholder-input-placeholder focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-300"
                            value={adminAccess.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 mt-5 rounded-lg font-semibold bg-accent-secondary hover:bg-accent-primary hover:text-text-primary text-bg cursor-pointer transition duration-700 hover:scale-98"
                    >
                        Login
                    </button>
                    <Link to="/"
                    className="flex items-center justify-center gap-1 text-center mt-5 rounded-lg font-semibold text-accent-primary hover:text-accent-secondary  cursor-pointer transition duration-700 hover:scale-98"
                    >< HiOutlineArrowLeft />back to Home</Link>
                </form>
            </div>
        </section>
    )
}

export default AdminLogin