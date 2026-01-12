import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Alerts from "../../alerts.json"
import Footer from "../Footer"
import { HiClipboardCopy, HiOutlineDotsVertical, HiX, HiShare } from "react-icons/hi"
import SafetyTipBanner from '../../assets/images/safety_tip_banner.jpg'

function SafetyTip() {
    const { id } = useParams()
    const alert = Alerts.find((alert) => alert.id === id)
    const [widgetOpen, setWidgetOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (alert) document.title = `Public Safety | ${alert.title}`
        return () => { document.title = "Public Safety" }
    }, [alert])

    const handleShare = async () => {
        const url = window.location.href

        await navigator.share({
            title: "Community Safety Tip",
            text: `Check out this safety tip: ${alert.title}`,
            url,
        })
    }

    const handleCopy = async () => {
        const url = window.location.href

        await navigator.clipboard.writeText(url)
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); 
    }

    return (
        <>
        <main className="bg-bg text-text-primary min-h-screen">
            <section className="relative bg-surface/60 border-b border-border bg-cover bg-top" aria-labelledby="tip-title" style={{ backgroundImage: `url(${SafetyTipBanner})` }}>
                <div className="container mx-auto px-6 lg:px-12 py-12">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-4 mb-4">
                                <div>
                                    <h1 id="tip-title" className="text-2xl lg:text-4xl font-bold">
                                        {alert.title}
                                    </h1>
                                    <p className="text-text-primary mt-1">{alert.alertText}</p>
                                </div>
                            </div>

                            <p className="text-text-primary max-w-3xl mb-6">{alert.summary}</p>

                            <nav className="mb-6">
                                <h4 className="text-sm font-semibold text-text-primary mb-2">Contents</h4>
                                <ul className="flex flex-wrap gap-3">
                                    <li>
                                        <a href="#introduction" className="text-accent-primary hover:text-accent-secondary">Introduction</a>
                                    </li>
                                    {alert.content.sections.map((section, i) => (
                                        <li key={i}>
                                            <a href={`#section-${i}`} className="text-text-primary hover:text-accent-primary transition">{section.heading}</a>
                                        </li>
                                    ))}
                                    <li>
                                        <a href="#conclusion" className="text-text-primary hover:text-accent-primary transition">Conclusion</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 lg:px-12 py-10">
                <div className="max-w-4xl">
                    <main className="lg:col-span-2 space-y-8">
                        <div className="bg-surface border border-border rounded-lg p-6 shadow-sm">
                            <h2 className="text-2xl font-bold text-text-primary mb-2">Introduction</h2>
                            <p className="text-text-secondary max-w-3xl">{alert.content.introduction}</p>
                        </div>

                        <ol className="relative border-l border-border ml-2">
                            {alert.content.sections.map((section, i) => (
                                <li key={i} className="mb-10 ml-6">
                                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-accent-primary text-surface shadow">
                                        {i + 1}
                                    </span>

                                    <div id={`section-${i}`} className="bg-surface border border-border rounded-lg p-4 shadow-sm">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="text-xl font-semibold text-text-primary max-w-[80%]">{section.heading}</h3>
                                            <span className="text-text-secondary text-sm">Step {i + 1}</span>
                                        </div>
                                        <p className="text-text-secondary mt-3">{section.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div id="conclusion" className="bg-surface border border-border rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-semibold text-text-primary mb-2">Conclusion</h3>
                                <p className="text-text-secondary">{alert.content.conclusion}</p>
                            </div>

                            <div id="key-takeaway" className="bg-bg border border-border rounded-lg p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-text-primary mb-3">Key Takeaway</h3>
                                <p className="text-text-secondary">Follow the steps above to improve safety in your area.</p>
                            </div>
                        </div>
                    </main>
                </div>
            </section>

            <button
                aria-expanded={widgetOpen}
                aria-controls="resources-widget"
                onClick={() => setWidgetOpen((open) => !open)}
                className="fixed right-6 bottom-12 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition hover:scale-95 duration-700 cursor-pointer bg-accent-secondary text-surface hover:bg-accent-primary hover:text-text-primary"
                title={widgetOpen ? "Close resources" : "Open resources"}
            >
                {widgetOpen ? <HiX className="w-6 h-6" /> : <HiOutlineDotsVertical className="w-6 h-6" />}
            </button>

            <aside
                id="resources-widget"
                className={`fixed right-0 top-20 z-40 h-[75vh] w-80 sm:w-96 transform transition-transform duration-300 ${widgetOpen ? 'translate-x-0' : 'translate-x-full'}`}
                aria-hidden={!widgetOpen}
            >
                <div className="flex flex-col bg-surface border-l-4 border-border shadow-xl rounded-l-lg">
                    <div className="p-4 border-b border-border flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-text-primary">Resources & Actions</h4>
                        <button onClick={() => setWidgetOpen(false)} className="p-2 rounded-md text-text-secondary hover:text-accent-primary">
                            <HiX />
                        </button>
                    </div>

                    <div className="p-4 space-y-4 flex-1">
                        <p className="text-text-secondary text-sm">Quick links and helpful resources.</p>

                        <div className="flex flex-col gap-3">
                            <Link to="/#services" className="block w-full text-center bg-accent-secondary hover:text-text-primary hover:bg-accent-primary text-surface font-semibold py-2 rounded-lg hover:scale-95 transition duration-700">View Programs</Link>
                            <a href="/#getInvolved" className="block w-full text-center border border-border bg-bg hover:bg-surface text-text-primary hover:text-accent-primary py-2 rounded-lg hover:scale-95 transition duration-700">Join as Volunteer</a>
                            <Link to="/#contact" className="block w-full text-center bg-transparent hover:bg-accent-primary text-text-primary border border-border py-2 rounded-lg hover:scale-95 transition duration-700">Contact Us</Link>
                        </div>

                        <hr className="my-4 border-border" />

                        <div>
                            <h5 className="text-sm font-medium text-text-primary mb-2">Share this tip</h5>
                            <div className="flex gap-2">
                                <button onClick={handleCopy} title="Copy link" className="flex-1 bg-bg border border-border text-text-primary py-2 rounded-lg hover:bg-surface hover:scale-95 hover:text-accent-secondary transition duration-700 cursor-pointer">
                                    <HiClipboardCopy className="inline-block mr-2" /> 
                                    {copied ? "Copied!" : "Copy Link"}
                                </button>
                                <button onClick={handleShare} title="Share tip" className="flex-1 bg-accent-primary text-text-primary hover:text-surface hover:scale-95 py-2 rounded-lg hover:bg-accent-secondary transition duration-700 cursor-pointer">
                                    <HiShare className="inline-block mr-2" /> Share
                                </button>
                            </div>
                        </div>

                        <hr className="my-4 border-border" />

                        <div className="text-text-secondary text-sm">
                            <p className="font-medium text-text-primary mb-2">Emergency?</p>
                            <p className="text-error font-bold">Call 911 immediately</p>
                            <p className="mt-2">For non-emergency inquiries, contact us via the contact page.</p>
                        </div>
                    </div>
                </div>
            </aside>
        </main>
        <Footer />
        </>
    )
}

export default SafetyTip