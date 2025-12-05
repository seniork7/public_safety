export default function Card({ children, className = '', imgSrc = '' }) {
    return (
        <div className={`shadow-sm shadow-text-primary/15 rounded-lg p-4 ${className}`}>
            {imgSrc && <img src={imgSrc} alt="" className="w-full h-auto rounded-lg mb-4" />}
            {children}
        </div>
    )
}
