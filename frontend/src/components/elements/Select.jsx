export default function Select({ children, className = '', ...props }) {
    return (
        <select
        {...props}
        className={`w-full text-[#080808] dark:text-[#f5f5f5] border border-[#080808] dark:border-[#f5f5f5] rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-[#E53935] ${className}`}
        >
            {children}
        </select>
    )
}
