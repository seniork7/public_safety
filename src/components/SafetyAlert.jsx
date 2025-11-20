import { Alert } from "flowbite-react"
import { HiEye, HiInformationCircle } from "react-icons/hi"

function SafetyAlert() {
    return (
        <Alert className="bg-[#F9F871] dark:bg-[#FFF990] text-[#FF4E5B] dark:text-[#FF4E5B]" additionalContent={<ExampleAdditionalContent />} color="warning" icon={HiInformationCircle}>
        <span className="font-medium text-[#FF4E5B] dark:text-[#FF4E5B]">Safety Tip:</span> In case of emergency, do not hesitate to call 911 or contact the local authorities.
        </Alert>
    );
}

function ExampleAdditionalContent() {
    return (
        <>
            <div className="flex">
                <button
                type="button"
                className="mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
                >
                <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
                View more
                </button>
                <button
                type="button"
                className="rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
                >
                Dismiss
                </button>
            </div>
        </>
    );
}

export default SafetyAlert