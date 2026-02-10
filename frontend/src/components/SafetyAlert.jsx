import { HiEye, HiInformationCircle } from "react-icons/hi"
import { Link } from "react-router-dom"
import Alerts from "../alerts.json"
import { useState, useEffect } from "react"

export default function SafetyAlert() {
    const [currentAlert, setCurrentAlert] = useState()

    useEffect(() => {
        const randomAlert = Alerts[Math.floor(Math.random() * Alerts.length)];
        setCurrentAlert(randomAlert);
    }, [])

    const HandleDismissBtn = () => {
        const alertElement = document.getElementById('dismiss-alert')
        if (alertElement) {
            alertElement.style.display = 'none'
        }
    }

    return (
        <div id="dismiss-alert" className="flex items-center justify-center gap-3 text-surface bg-alert-bg border border-alert-border p-3 text-sm md:text-base" role="region" aria-label="Safety alert">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-10">
                <div className="font-medium flex items-start lg:items-center justify-center gap-2">
                    <HiInformationCircle className="w-6 h-6 mt-1 " aria-hidden="true" focusable="false" />
                    <p><span className="">Safety Alert:</span> {currentAlert?.alertText}</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Link to={`/safety-tip/${currentAlert?.id}`} aria-label="View safety alert details" className="mr-2 inline-flex items-center rounded-lg text-text-primary hover:bg-accent-primary bg-accent-secondary px-3 py-1.5 text-xs font-medium hover:text-surface transition duration-700 cursor-pointer">
                        <HiEye className="ml-0.5 mr-2 h-4 w-4" aria-hidden="true" focusable="false" />
                        View more
                    </Link>
                    <button onClick={() => HandleDismissBtn()} type="button" aria-label="Dismiss safety alert" className="rounded-lg border border-accent-secondary bg-transparent px-3 py-1.5 text-xs font-medium text-surface hover:border-accent-primary transition duration-700 cursor-pointer">Dismiss</button>
                </div>
            </div>
        </div>
    )
}