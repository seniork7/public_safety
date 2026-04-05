import NavLink from './NavLink'

export default function NavMenu({ Nav_Items = [], className = '', page = 'home', mobile = false, onLinkClick, children } = {}) {
    const adminHover = page === 'admin'
        ? 'hover:bg-accent-secondary hover:text-text-primary hover:font-semibold px-2 py-1 rounded-md'
        : ''

    const mobileLink = mobile
        ? 'text-surface text-xl font-semibold w-full text-center py-3 hover:text-accent-secondary'
        : ''

    return (
        <div className={`flex ${className}`}>
            {Nav_Items.map(link => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={onLinkClick}
                    className={`px-4 py-2 ${adminHover} ${mobileLink}`}
                >
                    {link.label}
                </NavLink>
            ))}
            {children}
        </div>
    )
}
