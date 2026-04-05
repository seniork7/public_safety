import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { motion } from "motion/react"
import Alerts from "../alerts.json"
import { HiArrowLeft } from "react-icons/hi2"
import Footer from "../components/Footer"
import SafetyTipSidebar from "../components/SafetyTipSidebar"

export default function SafetyTip() {
    const { id } = useParams()
    const alert = Alerts.find((a) => a.id === id)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (alert) document.title = `Public Safety | ${alert.title}`
        return () => { document.title = "Public Safety" }
    }, [alert])

    const handleCopy = async () => {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleShare = async () => {
        await navigator.share({
            title: "Community Safety Tip",
            text: `Check out this safety tip: ${alert.title}`,
            url: window.location.href,
        })
    }

    if (!alert) {
        return (
            <>
                <main className="min-h-[60vh] flex flex-col items-center justify-center px-8 text-center">
                    <p className="text-text-primary text-xl font-semibold mb-4">Safety tip not found.</p>
                    <Link to="/" className="text-accent-primary hover:underline text-sm font-medium">
                        Back to Home
                    </Link>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <main role="main" aria-labelledby="tip-title">
                <div className="bg-linear-to-r from-navy-deep to-navy-deep/85 text-surface py-20 md:py-28 px-8">
                    <div className="max-w-6xl mx-auto lg:px-8 text-center lg:text-left">

                        <nav className="mb-4" aria-label="Breadcrumb">
                            <ol className="flex items-center justify-center lg:justify-start gap-0.5 text-surface/50 text-xs">
                                <li>
                                    <Link to="/" className="hover:text-surface transition-colors duration-200">
                                        Home
                                    </Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li className="text-surface/50">Safety Tips</li>
                                <li aria-hidden="true">/</li>
                                <li className="text-surface truncate max-w-[200px]">{alert.title}</li>
                            </ol>
                        </nav>

                        <p className="inline-block text-accent-secondary font-semibold text-xs uppercase tracking-[0.2em]">
                            Safety Alert
                        </p>

                        <div className="w-10 h-0.5 bg-accent-secondary mb-4 mx-auto lg:mx-0"></div>

                        <h1
                            id="tip-title"
                            className="text-3xl md:text-4xl font-bold text-surface leading-tight mb-3"
                        >
                            {alert.title}
                        </h1>

                        <p className="text-surface text-base leading-relaxed max-w-xl mt-3 mx-auto lg:mx-0">
                            {alert.summary}
                        </p>

                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-surface hover:text-surface text-sm font-medium mt-6 transition-colors duration-200"
                        >
                            <HiArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                    </div>
                </div>

                <div className="bg-bg py-16 md:py-20 px-8">
                    <div className="max-w-6xl mx-auto lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-12">

                            <article className="lg:w-[65%] space-y-10" aria-labelledby="tip-title">

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-xl font-bold text-text-primary mb-3">Introduction</h2>
                                    <p className="text-text-secondary leading-relaxed">
                                        {alert.content.introduction}
                                    </p>
                                </motion.div>

                                <div className="space-y-10" aria-label="Safety tip sections">
                                    {alert.content.sections.map((section, i) => (
                                        <div key={i} id={`section-${i}`}>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span
                                                    className="flex items-center justify-center w-7 h-7 rounded-full bg-accent-primary text-surface text-xs font-bold shrink-0"
                                                    aria-hidden="true"
                                                >
                                                    {i + 1}
                                                </span>
                                                <h3 className="text-lg font-semibold text-text-primary">
                                                    {section.heading}
                                                </h3>
                                            </div>
                                            <p className="text-text-secondary leading-relaxed pl-10">
                                                {section.body}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <motion.div
                                    id="conclusion"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.15 }}
                                >
                                    <h2 className="text-xl font-bold text-text-primary mb-3">Conclusion</h2>
                                    <p className="text-text-secondary leading-relaxed">
                                        {alert.content.conclusion}
                                    </p>
                                </motion.div>
                            </article>

                            <SafetyTipSidebar
                                alert={alert}
                                copied={copied}
                                onCopy={handleCopy}
                                onShare={handleShare}
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
