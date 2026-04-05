import { motion } from 'motion/react'

export default function PopUpOverlay({
    icon: Icon,
    iconClassName = '',
    title,
    message,
    onClose = () => { },
}) {
    return (
        <motion.div
            className="fixed inset-0 bg-overlay-bg grid place-items-center z-[9999] p-8"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
        >
            <div
                className="relative flex flex-col items-center gap-4 max-w-md w-full text-center p-8 bg-surface rounded-xl shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                {Icon && <Icon className={`w-12 h-12 ${iconClassName}`} aria-hidden="true" />}

                {title && (
                    <h2 id="popup-title" className="text-2xl font-bold text-text-primary">
                        {title}
                    </h2>
                )}
                {message && (
                    <p className="text-text-secondary text-sm leading-relaxed">{message}</p>
                )}

                <button
                    onClick={onClose}
                    className="mt-2 px-6 py-2 bg-error hover:bg-error/90 text-surface text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
                >
                    Close
                </button>
            </div>
        </motion.div>
    )
}
