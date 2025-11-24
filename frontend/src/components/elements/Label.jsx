export default function Label({ children, className = '', ...props }) {
    return (
        <label {...props} className={`block text-sm font-medium text-[#080808] dark:text-[#f5f5f5] py-2 ${className}`}>
            {children}
        </label>
    )
}
