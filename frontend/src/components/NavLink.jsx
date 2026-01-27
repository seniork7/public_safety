import { Link } from 'react-router-dom'

export default function NavLink({ to, children, className = '' }) {
    return (
        <Link to={to} className={`hover:text-accent-secondary transition ${className}`}>
            {children}
        </Link>
    )
}