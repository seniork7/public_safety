import { Link, useLocation } from 'react-router-dom'

export default function NavLink({ to, children, className = '', onClick } = {}) {
    const { hash } = useLocation()
    const isActive = hash === to

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent-secondary after:transition-all after:duration-200 hover:after:w-full ${isActive ? 'after:w-full' : 'after:w-0'} transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary focus-visible:ring-offset-2 focus-visible:rounded-sm ${className}`}
        >
            {children}
        </Link>
    )
}
