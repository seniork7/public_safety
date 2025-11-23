import { Alert } from "flowbite-react"
import { HiEye, HiInformationCircle } from "react-icons/hi"

function SafetyAlert() {
    return (
        <Alert className="bg-[#E53935]/25 dark:bg-[#E53935]/50 text-[#f5f5f5] dark:text-[#f5f5f5] border border-[#E53935] dark:border-[#E53935]" additionalContent={<ExampleAdditionalContent />} icon={HiInformationCircle}>
        <span className="font-medium text-[#f5f5f5] dark:text-[#f5f5f5]">Safety Tip:</span> In case of emergency, do not hesitate to call 911 or contact the local authorities.
        </Alert>
    );
}

function ExampleAdditionalContent() {
    return (
        <>
            <div className="flex">
                <button
                type="button"
                className="mr-2 inline-flex items-center rounded-lg bg-[#E53935] px-3 py-1.5 text-center text-xs font-medium text-[#f5f5f5] hover:bg-[#ff0c21] transition focus:outline-none focus:ring-0 dark:bg-[#ff3243] dark:hover:bg-[#ff0c21] cursor-pointer"
                >
                <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
                View more
                </button>
                <button
                type="button"
                className="rounded-lg border border-[#E53935] bg-transparent px-3 py-1.5 text-center text-xs font-medium text-[#f5f5f5] hover:bg-[#ff0c21] hover:text-white transition focus:outline-none focus:ring-0 dark:border-[#E53935] dark:text-[#f5f5f5] dark:hover:text-white"
                >
                Dismiss
                </button>
            </div>
        </>
    );
}

export default SafetyAlert