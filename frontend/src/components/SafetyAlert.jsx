import { HiEye, HiInformationCircle } from "react-icons/hi"
import { Link } from "react-router-dom"
import Alerts from "../alerts.json"
import { useState, useEffect } from "react"

function SafetyAlert() {
    const [currentAlert, setCurrentAlert] = useState()

    useEffect(() => {
        const randomAlert = Alerts[Math.floor(Math.random() * Alerts.length)];
        setCurrentAlert(randomAlert);
        console.log(randomAlert);
        
    }, [])

    const HandleDismissBtn = () => {
        const alertElement = document.getElementById('dismiss-alert')
        if (alertElement) {
            alertElement.style.display = 'none'
        }
    }

    return (
        <div id="dismiss-alert" className="flex items-center justify-center gap-3 text-accent-secondary bg-alert-bg alert-text border border-accent-primary p-3 text-sm md:text-base">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-10">
                <div className="font-medium flex items-start lg:items-center justify-center gap-2">
                    <HiInformationCircle className="w-6 h-6 mt-1 " />
                    <p><span className="">Safety Alert:</span> {currentAlert?.alertText}</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <a href={`/safety-tip/${currentAlert?.id}`}>
                        <button type="button" className="mr-2 inline-flex items-center rounded-lg bg-accent-secondary hover:bg-accent-primary hover:text-text-primary px-3 py-1.5 text-xs font-medium text-surface transition  duration-700 cursor-pointer">
                            <HiEye className="ml-0.5 mr-2 h-4 w-4" />
                            View more
                        </button>
                    </a>
                    <button onClick={() => HandleDismissBtn()} type="button" className="rounded-lg border border-accent-secondary bg-transparent px-3 py-1.5 text-xs font-medium hover:bg-accent-primary text-text-primary hover:border-accent-primary transition duration-700 cursor-pointer">Dismiss</button>
                </div>
            </div>
        </div>
    )
}

export default SafetyAlert