import { useState, useEffect } from "react"
import { HiX } from "react-icons/hi"
import { HiBellAlert } from "react-icons/hi2"
import { Link } from "react-router-dom"
import Alerts from "../alerts.json"

export default function SafetyAlert() {
    const [currentAlert, setCurrentAlert] = useState(null)
    const [dismissed, setDismissed] = useState(false)

    useEffect(() => {
        const random = Alerts[Math.floor(Math.random() * Alerts.length)]
        setCurrentAlert(random)
    }, [])

    if (dismissed || !currentAlert) return null

    return (
        <div
            role="region"
            aria-label="Safety alert"
            className="bg-alert-bg border-l-4 border-alert-border text-surface"
        >
            <div className="container mx-auto px-4 lg:px-8 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">

                {/* Label + message */}
                <div className="flex items-start sm:items-center gap-3 min-w-0">
                    <HiBellAlert className="shrink-0 text-surface w-4 h-4" aria-hidden="true" />
                    <p className="text-surface/90 text-sm leading-snug line-clamp-2 sm:line-clamp-1">
                        <span className="font-semibold text-surface">{currentAlert.title}: </span>
                        {currentAlert.alertText}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 shrink-0 pl-0 sm:pl-2">
                    <Link
                        to={`/safety-tip/${currentAlert.id}`}
                        aria-label={`View details about ${currentAlert.title}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-surface border border-surface/30 hover:border-surface/60 hover:bg-surface/10 rounded px-3 py-1.5 transition-colors duration-200"
                    >
                        View Details
                    </Link>

                    <button
                        onClick={() => setDismissed(true)}
                        type="button"
                        aria-label="Dismiss safety alert"
                        className="text-surface/50 hover:text-surface transition-colors duration-200 p-1 rounded"
                    >
                        <HiX className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
