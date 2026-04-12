/*
    This component renders an alert message 
*/

import { useEffect } from 'react'
import { motion } from 'motion/react'

export default function SettingsFeedback({ type, message, onDismiss }) {
    useEffect(() => {
        const timer = setTimeout(onDismiss, 4000)
        return () => clearTimeout(timer)
    }, [onDismiss])

    const styles = type === 'success'
        ? 'bg-success/10 text-success border border-success/30'
        : 'bg-error/10 text-error border border-error/30'

    return (
        <motion.p
            className={`text-sm px-3 py-2 rounded-lg ${styles}`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            {message}
        </motion.p>
    )
}
