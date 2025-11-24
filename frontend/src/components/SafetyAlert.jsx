import { HiEye, HiInformationCircle } from "react-icons/hi"

function SafetyAlert() {
    return (
        <div className="flex items-start gap-3 bg-[#E53935]/25 dark:bg-[#E53935]/50 text-[#f5f5f5] dark:text-[#f5f5f5] border border-[#E53935] dark:border-[#E53935] p-3 rounded-md">
            <HiInformationCircle className="w-6 h-6 mt-1" />
            <div>
                <div className="font-medium">Safety Tip:</div>
                <div>In case of emergency, do not hesitate to call 911 or contact the local authorities.</div>
                <div className="mt-2 flex">
                    <button type="button" className="mr-2 inline-flex items-center rounded-lg bg-[#E53935] px-3 py-1.5 text-xs font-medium text-[#f5f5f5] hover:bg-[#ff0c21] transition"> 
                        <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
                        View more
                    </button>
                    <button type="button" className="rounded-lg border border-[#E53935] bg-transparent px-3 py-1.5 text-xs font-medium text-[#f5f5f5] hover:bg-[#ff0c21] hover:text-white transition">Dismiss</button>
                </div>
            </div>
        </div>
    )
}

export default SafetyAlert