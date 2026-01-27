export default function Label({ children, className = '', ...props }) {
    return (
        <label {...props} className={`block text-sm font-medium text-text-primary py-2 ${className}`}>
            {children}
        </label>
    )
}
