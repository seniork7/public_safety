import { motion, easeInOut } from "motion/react"

export default function Card({ children, className = '', imgSrc = '' }) {
    return (
        <motion.div
            className={`flex flex-col pl-6 border-l-4 rounded-lg border-accent-primary p-4 shadow-sm ${className}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: easeInOut }}
        >
            {imgSrc && <img src={imgSrc} alt="" className="w-full h-auto rounded-lg mb-4" />}
            {children}
        </motion.div>
    )
}
