import { Link } from 'react-router-dom'

export default function NavLink({ to, children, className = '', icon: Icon } = {}) {

    return (
        <Link to={to} className={`transition ${className}`}>
            {Icon && <Icon className="inline-block mr-2" />}
            {children}
        </Link>
    )
}