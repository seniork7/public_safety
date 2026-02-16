export default function Button({ children, className = '', ...props } = {}) {
    return (
        <button
        className={`inline-flex items-center justify-center font-bold rounded-lg px-4 py-2 cursor-pointer transition ${className}`}
        {...props}
        >
            {children}
        </button>
    )
}
