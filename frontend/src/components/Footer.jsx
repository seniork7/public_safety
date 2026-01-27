import { HiPhone, HiMiniEnvelope, HiMapPin } from "react-icons/hi2"
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-surface text-text-primary pt-10 border-t border-border">
            <div className="container mx-auto px-6 lg:px-10 py-8">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <div className="max-w-lg">
                        <a href="/" className="text-2xl font-bold text-accent-primary hover:text-accent-secondary transition duration-200">Public Safety</a>
                        <p className="mt-3 text-text-secondary">Committed to building safer communities through education, training, and volunteer-driven emergency response services.</p>

                        <div className="mt-6 text-text-primary space-y-2">
                            <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-accent-primary">
                                <HiPhone className="text-xl" /> <span className="text-text-secondary">+1 (555) 123-4567</span>
                            </a>
                            <a href="mailto:info@safetyfirst.org" className="flex items-center gap-2 hover:text-accent-primary">
                                <HiMiniEnvelope className="text-xl" /> <span className="text-text-secondary">info@safetyfirst.org</span>
                            </a>
                            <a href="https://www.google.com/maps" target="_blank" className="flex items-center gap-2 hover:text-accent-primary" rel="noreferrer">
                                <HiMapPin className="text-xl" /> <span className="text-text-secondary">123 Safety Street, Community City</span>
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:flex gap-12">
                        <div>
                            <h4 className="font-semibold mb-3 text-accent-primary">Quick Links</h4>
                            <ul className="text-text-secondary space-y-2">
                                <li><a href="#about" className="hover:underline hover:text-accent-primary transition">About Us</a></li>
                                <li><a href="#services" className="hover:underline hover:text-accent-primary transition">Our Services</a></li>
                                <li><a href="#joinUs" className="hover:underline hover:text-accent-primary transition">Join Us</a></li>
                                <li><a href="#contact" className="hover:underline hover:text-accent-primary transition">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3 text-accent-primary">Programs</h4>
                            <ul className="text-text-secondary space-y-2">
                                <li><a href="#" className="hover:underline hover:text-accent-primary transition">Emergency Response</a></li>
                                <li><a href="#" className="hover:underline hover:text-accent-primary transition">First Aid Training</a></li>
                                <li><a href="#" className="hover:underline hover:text-accent-primary transition">Safety Workshops</a></li>
                                <li><a href="#" className="hover:underline hover:text-accent-primary transition">Youth Programs</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3 text-accent-primary">Resources</h4>
                            <ul className="text-text-secondary space-y-2">
                                <li><a href="#" className="hover:underline hover:text-accent-primary transition">Safety Tips</a></li>
                                <li><a href="#" className="hover:underline hover:text-accent-primary transition">Training Materials</a></li>
                                <li><a href="#" className="hover:underline hover:text-accent-primary transition">News & Updates</a></li>
                                <li><a href="#" className="hover:underline hover:text-accent-primary transition">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-border" />

                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-90 transition duration-700">
                            <span className="bg-accent-primary text-surface p-2 rounded-full inline-flex transition-colors hover:bg-accent-secondary hover:text-text-primary duration-700" aria-hidden="true">
                                <FaFacebookF className="text-lg" />
                            </span>
                            <span className="sr-only">Facebook</span>
                        </a>

                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-90 transition duration-700">
                            <span className="bg-accent-primary text-surface p-2 rounded-full inline-flex transition-colors hover:bg-accent-secondary hover:text-text-primary duration-700" aria-hidden="true">
                                <FaXTwitter className="text-lg" />
                            </span>
                            <span className="sr-only">Twitter</span>
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-90 transition duration-700">
                            <span className="bg-accent-primary text-surface p-2 rounded-full inline-flex transition-colors hover:bg-accent-secondary hover:text-text-primary duration-700" aria-hidden="true">
                                <FaInstagram className="text-lg" />
                            </span>
                            <span className="sr-only">Instagram</span>
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-90 transition duration-700">
                            <span className="bg-accent-primary text-surface p-2 rounded-full inline-flex transition-colors hover:bg-accent-secondary hover:text-text-primary duration-700" aria-hidden="true">
                                <FaLinkedinIn className="text-lg" />
                            </span>
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>

                    <div className="text-center">
                        <p className="text-error font-semibold">Emergency? Call <span className="font-bold">911</span> immediately</p>
                        <p className="text-sm text-text-secondary mt-1">For non-emergency inquiries, contact us during business hours</p>
                    </div>
                </div>
            </div>

            <div className="border-t border-border bg-bg">
                <div className="container mx-auto px-6 lg:px-10 py-4 flex flex-col md:flex-row justify-between items-center text-text-muted">
                    <p className="text-sm">&copy; {currentYear} Public Safety. All rights reserved.</p>
                    <div className="flex gap-4 mt-3 md:mt-0">
                        <a href="#" className="text-sm hover:underline hover:text-accent-primary">Privacy Policy</a>
                        <a href="#" className="text-sm hover:underline hover:text-accent-primary">Terms of Service</a>
                        <a href="#" className="text-sm hover:underline hover:text-accent-primary">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;