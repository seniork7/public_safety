import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { adminFetch } from '../utils/adminFetch'
import { useAuth } from '../store/AuthContext'
import AdminBg from '../assets/images/admin-bg.jpg'
import Submit from '../components/form_elements/Submit'
import LoadingOverlay from '../components/LoadingOverlay'
import TextInput from '../components/form_elements/TextInput'
import Label from '../components/form_elements/Label'

export default function AdminLogin() {
    const [loading, setLoading] = useState(false)
    const [formError, setFormError] = useState('')
    const [adminAccess, setAdminAccess] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleChange = (e) => {
        setAdminAccess({ ...adminAccess, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const errors = []
        if (!adminAccess.email.trim()) {
            errors.push('Email Address is required.')
        } else if (!/^\S+@\S+\.\S+$/.test(adminAccess.email)) {
            errors.push('Please enter a valid email address.')
        }
        if (!adminAccess.password.trim()) {
            errors.push('Password is required.')
        }

        if (errors.length > 0) {
            setFormError(errors.join(' '))
            setLoading(false)
            return
        }

        try {
            const response = await adminFetch('api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(adminAccess),
            })

            login(response)
            setAdminAccess({ email: '', password: '' })
            navigate('/admin/dashboard')
        } catch (error) {
            setFormError('Invalid email or password. Please try again.')
            console.error(`Login error: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading && <LoadingOverlay />}

            <div className="min-h-screen flex flex-col lg:flex-row">

                <div
                    className="hidden lg:block lg:w-[45%] relative"
                    style={{ backgroundImage: `url(${AdminBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-navy-deep/55" aria-hidden="true" />
                </div>

                <div className="flex-1 lg:w-[55%] bg-blue-muted flex items-center justify-center px-8 md:px-16 lg:px-20 py-16">
                    <div className="w-full max-w-md">

                        <div className="mb-10">
                            <p className="inline-block text-text-primary text-2xl font-bold tracking-tight">
                                Public Safety
                            </p>
                            <div className="w-10 h-0.5 bg-accent-primary mb-4"></div>
                        </div>

                        <h2 className="text-3xl font-bold text-text-primary mb-1">Welcome Back</h2>
                        <p className="text-text-secondary text-sm mb-8">Sign in to your admin account</p>

                        {formError && (
                            <p className="text-error text-sm mb-4" role="alert">{formError}</p>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <Label htmlFor="username">*Email</Label>
                                <TextInput
                                    id="username"
                                    type="email"
                                    name="email"
                                    placeholder="admin@example.com"
                                    value={adminAccess.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Label htmlFor="password">*Password</Label>
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={adminAccess.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="pt-1">
                                <Submit loading={loading} loadingText="Signing in..." buttonText="Sign In" />
                            </div>
                        </form>

                        <p className="text-text-secondary text-xs mt-6 leading-relaxed">
                            Demo access (read-only): demo@publicsafety.com / demoAccess000
                        </p>

                        <Link
                            to="/"
                            className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent-primary text-sm mt-4 transition-colors duration-200"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
