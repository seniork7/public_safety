export default function Card({ children, className = '', imgSrc = '' }) {
    return (
        <div className={`flex flex-col group pl-6 border-l-4 rounded-lg border-accent-primary lg:hover:rotate-y-10 hover:border-accent-secondary shadow-sm shadow-accent-primary/15 hover:shadow-accent-secondary/15 p-4 transition-all duration-700 ${className}`}>
            {imgSrc && <img src={imgSrc} alt="" className="w-full h-auto rounded-lg mb-4" />}
            {children}
        </div>
    )
}
