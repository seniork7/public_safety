export default function Card({ children, className = '', imgSrc = '' }) {
    return (
        <div className={`bg-[#F5F5F5] dark:bg-[#E53935]/50 border dark:border-[#E53935] shadow-lg rounded-lg p-4 ${className}`}>
            {imgSrc && <img src={imgSrc} alt="" className="w-full h-auto rounded-lg mb-4" />}
            {children}
        </div>
    )
}
