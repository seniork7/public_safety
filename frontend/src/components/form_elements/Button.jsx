export default function Button({ children, className = '', ...props } = {}) {
    return (
        <button
        className={`inline-flex items-center justify-center rounded-lg px-4 py-2 cursor-pointer transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 ${className}`}
        {...props}
        >
            {children}
        </button>
    )
}
