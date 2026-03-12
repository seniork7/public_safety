export default function PopUpOverlay({ children, icon, className }) {
    return (
        <div className="overlay p-8">
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto text-center p-8 bg-surface rounded-lg shadow-lg text-text-secondary">
                {icon && <div className={className}>{icon}</div>}
                {children}
            </div>
        </div>
    )
}
