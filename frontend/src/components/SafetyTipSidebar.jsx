import { Link } from "react-router-dom"
import { HiClipboardCopy, HiShare } from "react-icons/hi"

export default function SafetyTipSidebar({ alert, copied, onCopy, onShare }) {
    return (
        <aside
            className="lg:w-[35%] lg:sticky lg:top-8 self-start"
            aria-label="Resources and actions"
        >
            <div className="bg-surface border border-border rounded-xl overflow-hidden">

                <div className="p-6">
                    <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-4">
                        Explore Resources
                    </p>
                    <div className="flex flex-col gap-3">
                        <Link
                            to="/#services"
                            className="block w-full text-center bg-accent-primary text-surface font-semibold text-sm py-2.5 rounded-lg hover:bg-accent-primary/90 transition-colors duration-200"
                        >
                            View Programs
                        </Link>
                        <Link
                            to="/#getInvolved"
                            className="block w-full text-center border border-border bg-bg text-text-primary font-semibold text-sm py-2.5 rounded-lg hover:bg-surface hover:border-accent-primary hover:text-accent-primary transition-colors duration-200"
                        >
                            Join as Volunteer
                        </Link>
                        <Link
                            to="/#contact"
                            className="block w-full text-center border border-border bg-bg text-text-primary font-semibold text-sm py-2.5 rounded-lg hover:bg-surface hover:border-accent-primary hover:text-accent-primary transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="border-t border-border p-6">
                    <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-4">
                        Share This Tip
                    </p>
                    <div className="flex gap-2">
                        <button
                            onClick={onCopy}
                            className="flex-1 flex items-center justify-center gap-1.5 bg-bg border border-border text-text-primary text-sm font-medium py-2.5 rounded-lg hover:bg-surface hover:text-accent-primary hover:border-accent-primary transition-colors duration-200 cursor-pointer"
                            aria-label="Copy link to this tip"
                        >
                            <HiClipboardCopy className="w-4 h-4 flex-shrink-0" />
                            {copied ? "Copied!" : "Copy Link"}
                        </button>
                        <button
                            onClick={onShare}
                            className="flex-1 flex items-center justify-center gap-1.5 bg-accent-primary text-surface text-sm font-medium py-2.5 rounded-lg hover:bg-accent-primary/90 transition-colors duration-200 cursor-pointer"
                            aria-label="Share this tip"
                        >
                            <HiShare className="w-4 h-4 flex-shrink-0" />
                            Share
                        </button>
                    </div>
                </div>

                <div className="border-t border-border p-6 bg-bg rounded-b-xl">
                    <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-3">
                        Emergency?
                    </p>
                    <p className="text-error font-bold text-lg leading-none mb-2">Call 911</p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        For non-emergency inquiries, reach us through the{' '}
                        <Link to="/#contact" className="text-accent-primary hover:underline">
                            contact page
                        </Link>.
                    </p>
                </div>
            </div>
        </aside>
    )
}
