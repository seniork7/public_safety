import { HiPhone, HiMiniEnvelope, HiMapPin, HiArrowUp } from "react-icons/hi2"
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-nav-bg text-surface">
            {/* Top Border */}
            <div className="h-1 bg-accent-secondary" />

            <div className="container mx-auto px-6 lg:px-10 py-12">
                <div className="flex flex-col lg:flex-row justify-between gap-10">

                    {/* Brand column */}
                    <div className="max-w-xs mx-auto lg:mx-0 text-center lg:text-left">
                        <a href="/" className="text-xl font-bold text-surface hover:text-accent-secondary transition-colors duration-200">
                            Public Safety
                        </a>
                        <p className="mt-3 text-surface/60 text-sm leading-relaxed">
                            Committed to building safer communities through education, training, and volunteer-driven emergency response services.
                        </p>

                        <div className="mt-6 space-y-2">
                            <a href="tel:+15551234567" className="flex items-center justify-center lg:justify-start gap-2 text-surface/60 hover:text-surface text-sm transition-colors duration-200">
                                <HiPhone className="text-base shrink-0" />
                                +1 (555) 123-4567
                            </a>
                            <a href="mailto:info@safetyfirst.org" className="flex items-center justify-center lg:justify-start gap-2 text-surface/60 hover:text-surface text-sm transition-colors duration-200">
                                <HiMiniEnvelope className="text-base shrink-0" />
                                info@safetyfirst.org
                            </a>
                            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="flex items-center justify-center lg:justify-start gap-2 text-surface/60 hover:text-surface text-sm transition-colors duration-200">
                                <HiMapPin className="text-base shrink-0" />
                                123 Safety Street, Community City
                            </a>
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="flex flex-wrap gap-20 justify-center lg:justify-start text-center">
                        <div>
                            <h4 className="font-semibold text-surface text-sm mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {[
                                    { label: 'About Us', href: '#about' },
                                    { label: 'Our Services', href: '#services' },
                                    { label: 'Join Us', href: '#joinUs' },
                                    { label: 'Contact', href: '#contact' },
                                ].map(({ label, href }) => (
                                    <li key={label}>
                                        <a href={href} className="text-surface/60 hover:text-surface text-sm transition-colors duration-200">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-surface text-sm mb-4">Programs</h4>
                            <ul className="space-y-2">
                                {[
                                    'Emergency Response',
                                    'First Aid Training',
                                    'Safety Workshops',
                                    'Youth Programs',
                                ].map(label => (
                                    <li key={label}>
                                        <a href="#services" className="text-surface/60 hover:text-surface text-sm transition-colors duration-200">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-surface text-sm mb-4">Resources</h4>
                            <ul className="space-y-2">
                                {[
                                    'Safety Tips',
                                    'Training Materials',
                                    'News & Updates',
                                    'FAQs',
                                ].map(label => (
                                    <li key={label}>
                                        <a href="#" className="text-surface/60 hover:text-surface text-sm transition-colors duration-200">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-surface/15 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        {/* Back to top */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            aria-label="Back to top"
                            className="flex items-center gap-1.5 text-surface/50 hover:text-surface text-xs transition-colors duration-200"
                        >
                            <HiArrowUp className="w-3.5 h-3.5" />
                            Back to top
                        </button>

                        <span className="text-surface/20 text-xs">|</span>

                        <p className="text-surface/50 text-xs">
                            &copy; {currentYear} Public Safety. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Social links */}
                        <div className="flex items-center gap-3">
                            {[
                                { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
                                { icon: FaXTwitter, href: 'https://twitter.com', label: 'Twitter' },
                                { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
                                { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-surface/50 hover:text-surface transition-colors duration-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>

                        {/* Legal links */}
                        <div className="flex gap-4">
                            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map(label => (
                                <a key={label} href="#" className="text-surface/50 hover:text-surface text-xs transition-colors duration-200">
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}