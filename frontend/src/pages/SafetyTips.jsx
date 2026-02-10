import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { motion } from "motion/react"
import Alerts from "../alerts.json"
import Footer from "../components/Footer"
import { HiClipboardCopy, HiOutlineDotsVertical, HiX, HiShare, HiOutlineArrowLeft } from "react-icons/hi"
import SafetyTipBanner from '../assets/images/safety_tip_banner.jpg'

export default function SafetyTip() {
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
            <a href="#main-content" className="sr-only focus:not-sr-only" aria-label="Skip to main content">Skip to main content</a>

            <main tabIndex={-1} role="main" aria-labelledby="tip-title">
                <section className="relative bg-surface/60 border-b border-border bg-cover bg-top" aria-labelledby="tip-title" style={{ backgroundImage: `url(${SafetyTipBanner})` }}>
                    <div className="container mx-auto px-6 lg:px-12 py-12">
                        <div className="text-surface max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            <div className="lg:col-span-2">
                                <div className="flex flex-col items-start gap-4 mb-4">
                                    <motion.h1
                                        id="tip-title"
                                        className="text-2xl lg:text-4xl font-bold"
                                        initial={{ x: -60, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {alert.title}
                                    </motion.h1>
                                    <motion.p
                                        className="mt-1"
                                        initial={{ x: -40, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.55, delay: 0.05 }}
                                    >
                                        {alert.alertText}
                                    </motion.p>
                                </div>

                                <motion.p
                                    className="max-w-3xl mb-6"
                                    initial={{ x: -60, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.08 }}
                                >
                                    {alert.summary}
                                </motion.p>

                                <nav className="mb-6" aria-label="Contents list">
                                    <motion.h4
                                        className="text-sm font-semibold mb-2"
                                        initial={{ x: -60, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.20 }}
                                    >
                                        Contents
                                    </motion.h4>
                                    <ul className="flex flex-wrap gap-3">
                                        {alert.content.sections.map((section, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ x: -60, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.6, delay: 0.30 + i * 0.06 }}
                                            >
                                                <a href={`#section-${i}`} className="hover:text-accent-secondary transition">{section.heading}</a>
                                            </motion.li>
                                        ))}
                                        <motion.li
                                            initial={{ x: -60, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.6, delay: 0.30 + alert.content.sections.length * 0.06 }}
                                        >
                                            <a href="#conclusion" className="hover:text-accent-secondary transition">Conclusion</a>
                                        </motion.li>
                                    </ul>
                                </nav>

                                <motion.div
                                    initial={{ x: -40, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.12 }}
                                >
                                    <Link to="/" className="flex items-center gap-2 mt-10 font-semibold text-accent-secondary hover:text-surface  cursor-pointer transition duration-700 hover:scale-98">
                                        <HiOutlineArrowLeft />
                                        back to Home
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 lg:px-12 py-10" role="region" aria-labelledby="introduction-title">
                    <div id="main-content" className="max-w-4xl">
                        <div className="lg:col-span-2 space-y-8">
                            <motion.div
                                className="bg-surface border border-border rounded-lg p-6 shadow-sm"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55 }}
                            >
                                <h2 id="introduction-title" className="text-2xl font-bold text-text-primary mb-2">Introduction</h2>
                                <p className="text-text-secondary max-w-3xl">{alert.content.introduction}</p>
                            </motion.div>

                            <ol className="relative border-l border-border ml-2" aria-label="Safety tip steps">
                                {alert.content.sections.map((section, i) => (
                                    <li key={i} className="mb-10 ml-6">
                                        <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-accent-primary text-surface shadow">
                                            {i + 1}
                                        </span>

                                        <motion.div
                                            id={`section-${i}`}
                                            className="bg-surface border border-border rounded-lg p-4 shadow-sm"
                                            initial={{ opacity: 0, y: 60 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.55, delay: i * 0.06 }}
                                        >
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="text-xl font-semibold text-text-primary max-w-[80%]">{section.heading}</h3>
                                                <span className="text-text-secondary text-sm">Step {i + 1}</span>
                                            </div>
                                            <p className="text-text-secondary mt-3">{section.body}</p>
                                        </motion.div>
                                    </li>
                                ))}
                            </ol>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    id="conclusion"
                                    className="bg-surface border border-border rounded-lg p-6 shadow-sm"
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.55, delay: 0.06 }}
                                >
                                    <h3 className="text-xl font-semibold text-text-primary mb-2">Conclusion</h3>
                                    <p className="text-text-secondary">{alert.content.conclusion}</p>
                                </motion.div>

                                <motion.div
                                    id="key-takeaway"
                                    className="bg-bg border border-border rounded-lg p-6 shadow-sm"
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.55, delay: 0.09 }}
                                >
                                    <h3 className="text-lg font-semibold text-text-primary mb-3">Key Takeaway</h3>
                                    <p className="text-text-secondary">Follow the steps above to improve safety in your area.</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                <motion.button
                    aria-expanded={widgetOpen}
                    aria-controls="resources-widget"
                    onClick={() => setWidgetOpen((open) => !open)}
                    className="fixed right-6 bottom-12 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition hover:scale-95 duration-700 cursor-pointer bg-accent-secondary text-text-primary hover:bg-accent-primary hover:text-surface"
                    title={widgetOpen ? "Close resources" : "Open resources"}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.45 }}
                >
                    {widgetOpen ? <HiX className="w-6 h-6" /> : <HiOutlineDotsVertical className="w-6 h-6" />}
                </motion.button>

                <aside
                    id="resources-widget"
                    className={`fixed right-0 top-20 z-40 h-[75vh] w-80 sm:w-96 transform transition-transform duration-300 ${widgetOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    aria-hidden={!widgetOpen}
                >
                    <div className="flex flex-col bg-surface border-l-4 border-border shadow-xl rounded-l-lg">
                        <div className="p-4 border-b border-border flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-text-primary">Resources & Actions</h4>
                            <button onClick={() => setWidgetOpen(false)} className="p-2 rounded-md text-text-secondary hover:text-accent-primary" aria-label="Close resources">
                                <HiX />
                            </button>
                        </div>

                        <div className="p-4 space-y-4 flex-1">
                            <p className="text-text-secondary text-sm">Quick links and helpful resources.</p>

                            <div className="flex flex-col gap-3">
                                <Link to="/#services" className="block w-full text-center bg-accent-secondary hover:text-surface hover:bg-accent-primary text-text-primary font-semibold py-2 rounded-lg hover:scale-95 transition duration-700">View Programs</Link>
                                <a href="/#getInvolved" className="block w-full text-center border border-border bg-bg hover:bg-surface text-text-primary hover:text-accent-primary py-2 rounded-lg hover:scale-95 transition duration-700">Join as Volunteer</a>
                                <Link to="/#contact" className="block w-full text-center bg-transparent hover:bg-accent-primary text-text-primary hover:text-surface border border-border py-2 rounded-lg hover:scale-95 transition duration-700">Contact Us</Link>
                            </div>

                            <hr className="my-4 border-border" />

                            <div>
                                <h5 className="text-sm font-medium text-text-primary mb-2">Share this tip</h5>
                                <div className="flex gap-2">
                                    <button onClick={handleCopy} title="Copy link" className="flex-1 bg-bg border border-border text-text-primary py-2 rounded-lg hover:bg-surface hover:text-accent-primary hover:scale-95 transition duration-700 cursor-pointer" aria-label="Copy link to tip">
                                        <HiClipboardCopy className="inline-block mr-2" />
                                        {copied ? "Copied!" : "Copy Link"}
                                    </button>
                                    <button onClick={handleShare} title="Share tip" className="flex-1 bg-accent-primary text-surface hover:text-text-primary hover:scale-95 py-2 rounded-lg hover:bg-accent-secondary transition duration-700 cursor-pointer" aria-label="Share tip">
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