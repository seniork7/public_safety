import NavLink from './NavLink'

export default function NavMenu({ Nav_Items = [], className = '', label = '', page = 'home', children, ...props } = {}) {
    const hoverBg = page === 'admin'
        ? 'hover:bg-accent-secondary hover:text-text-primary px-2 py-1 rounded-md'
        : 'hover:text-accent-secondary'
    return (
        <div className={`flex ${className}`} {...props}>
            {Nav_Items.map(link => <NavLink key={link.to} to={link.to} icon={link.icon} className={`block py-2 hover:scale-105 transition duration-300 ${hoverBg}`} >{link.label}</NavLink>)}
            {children}
        </div>
    )
}
