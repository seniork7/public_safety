export default function Button({ children, className = '', ...props }) {
    return (
        <button
        {...props}
        className={`inline-flex items-center justify-center font-bold rounded-lg px-4 py-2 transition ${className}`}
        >
            {children}
        </button>
    )
}
