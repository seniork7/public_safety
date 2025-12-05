import { HiPhone, HiMiniEnvelope, HiMapPin } from "react-icons/hi2"
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"

function Footer() {
    return (
        <footer className="bg-nav-bg text-text-primary pt-8">
            <div className="container mx-auto px-10">
                <div className="flex justify-center md:justify-between items-center">
                    <div className="md:flex lg:flex-col md:justify-between md:items-end lg:items-start gap-15 lg:gap-8 mb-6 md:mb-0">
                        <div>
                            <a href="/" className="text-2xl font-bold text-accent-primary hover:text-accent-secondary transition duration-300">Public Safety</a>
                            <p className="mt-2 w-xs text-text-secondary">Committed to building safer communities through education, training, and volunteer-driven emergency response services.</p>
                        </div>
                        <div className="text-text-secondary">
                            <a href="tel:+15551234567" className="flex items-center mt-4">
                                <HiPhone className="mr-2" /> +1 (555) 123-4567
                            </a>
                            <a href="mailto:info@safetyfirst.org" className="flex items-center">
                                <HiMiniEnvelope className="mr-2" /> info@safetyfirst.org
                            </a>
                            <a href="https://www.google.com/maps" target="_blank" className="flex items-center">
                                <HiMapPin className="mr-2" /> 123 Safety Street, Community City
                            </a>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0 hidden lg:block">
                        <h4 className="font-bold mb-2 text-accent-primary">Quick Links</h4>
                        <ul className="text-text-secondary">
                            <li><a href="#about" className="hover:underline hover:text-accent-secondary transition duration-300">About Us</a></li>
                            <li><a href="#services" className="hover:underline hover:text-accent-secondary transition duration-300">Our Services</a></li>
                            <li><a href="#joinUs" className="hover:underline hover:text-accent-secondary transition duration-300">Join Us</a></li>
                            <li><a href="#contact" className="hover:underline hover:text-accent-secondary transition duration-300">Contact</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0 hidden lg:block">
                        <h4 className="font-bold mb-2 text-accent-primary">Programs</h4>
                        <ul className="text-text-secondary">
                            <li><a href="#" className="hover:underline hover:text-accent-secondary transition duration-300">Emergency Response</a></li>
                            <li><a href="#" className="hover:underline hover:text-accent-secondary transition duration-300">First Aid Training</a></li>
                            <li><a href="#" className="hover:underline hover:text-accent-secondary transition duration-300">Safety Workshops</a></li>
                            <li><a href="#" className="hover:underline hover:text-accent-secondary transition duration-300">Youth Programs</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0 hidden lg:block">
                        <h4 className="font-bold mb-2 text-accent-primary">Resources</h4>
                        <ul className="text-text-secondary">
                            <li><a href="#" className="hover:underline hover:text-accent-secondary transition duration-300">Safety Tips</a></li>
                            <li><a href="#" className="hover:underline hover:text-accent-secondary transition duration-300">Training Materials</a></li>
                            <li><a href="#" className="hover:underline hover:text-accent-secondary transition duration-300">News & Updates</a></li>
                            <li><a href="#" className="hover:underline hover:text-accent-secondary transition duration-300">FAQs</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="my-6 border-color" />

                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex justify-center items-center mt-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block transition duration-300 hover:bg-accent-secondary">
                                <FaFacebookF className="text-xl" />
                            </span>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block transition duration-300 hover:bg-accent-secondary">
                                <FaXTwitter className="text-xl" />
                            </span>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block transition duration-300 hover:bg-accent-secondary">
                                <FaInstagram className="text-xl" />
                            </span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                            <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block transition duration-300 hover:bg-accent-secondary">
                                <FaLinkedinIn className="text-xl" />
                            </span>
                        </a>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-error font-bold">Emergency? Call 911 immediately</p>
                        <p className="text-sm text-text-secondary">For non-emergency inquiries, contact us during business hours</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-15 py-4 px-10 bg-primary bg-bg">
                <p> &copy; 2025 Public Safety. All rights reserved.</p>
                <div className="hidden lg:flex gap-4 mt-2 md:mt-0">
                    <p className="hover:underline hover:text-accent-secondary transition duration-300">Privacy Policy</p>
                    <p className="hover:underline hover:text-accent-secondary transition duration-300">Terms of Service</p>
                    <p className="hover:underline hover:text-accent-secondary transition duration-300">Accessibility</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;