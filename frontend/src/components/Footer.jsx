import { HiPhone, HiMiniEnvelope, HiMapPin } from "react-icons/hi2"
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"

function Footer() {
    return (
        <footer className="bg-surface text-primary pt-8">
            <div className="container mx-auto px-10">
                <div className="flex justify-center md:justify-between items-center">
                    <div className="md:flex lg:flex-col md:justify-between md:items-end lg:items-start gap-15 lg:gap-8 mb-6 md:mb-0">
                        <div>
                            <a href="/" className="text-2xl font-bold text-accent-primary">Public Safety</a>
                            <p className="mt-2 w-xs text-secondary">Committed to building safer communities through education, training, and volunteer-driven emergency response services.</p>
                        </div>
                        <div className="text-secondary">
                            <p className="flex items-center mt-4">
                                <HiPhone className="mr-2" /> +1 (555) 123-4567
                            </p>
                            <p className="flex items-center">
                                <HiMiniEnvelope className="mr-2" /> info@safetyfirst.org
                            </p>
                            <p className="flex items-center">
                                <HiMapPin className="mr-2" /> 123 Safety Street, Community City
                            </p>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0 hidden lg:block">
                        <h4 className="font-bold mb-2 text-accent-primary">Quick Links</h4>
                        <ul className="text-secondary">
                            <li><a href="#about" className="hover:underline">About Us</a></li>
                            <li><a href="#services" className="hover:underline">Our Services</a></li>
                            <li><a href="#joinUs" className="hover:underline">Join Us</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0 hidden lg:block">
                        <h4 className="font-bold mb-2 text-accent-primary">Programs</h4>
                        <ul className="text-secondary">
                            <li><a href="#" className="hover:underline">Emergency Response</a></li>
                            <li><a href="#" className="hover:underline">First Aid Training</a></li>
                            <li><a href="#" className="hover:underline">Safety Workshops</a></li>
                            <li><a href="#" className="hover:underline">Youth Programs</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0 hidden lg:block">
                        <h4 className="font-bold mb-2 text-accent-primary">Resources</h4>
                        <ul className="text-secondary">
                            <li><a href="#" className="hover:underline">Safety Tips</a></li>
                            <li><a href="#" className="hover:underline">Training Materials</a></li>
                            <li><a href="#" className="hover:underline">News & Updates</a></li>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="my-6 border-color" />

                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex justify-center items-center mt-6">
                        <a href="https://facebook.com" target="_blank" className="mx-2">
                            <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block">
                                <FaFacebookF className="text-xl" />
                            </span>
                        </a>
                        <a href="https://twitter.com" target="_blank" className="mx-2">
                            <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block">
                                <FaXTwitter className="text-xl" />
                            </span>
                        </a>
                        <a href="https://instagram.com" target="_blank" className="mx-2">
                            <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block">
                                <FaInstagram className="text-xl" />
                            </span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="mx-2">
                            <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block">
                                <FaLinkedinIn className="text-xl" />
                            </span>
                        </a>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-error font-bold">Emergency? Call 911 immediately</p>
                        <p className="text-sm text-secondary">For non-emergency inquiries, contact us during business hours</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-15 py-4 px-10 bg-primary text-surface">
                <p> &copy; 2025 Public Safety. All rights reserved.</p>
                <div className="hidden lg:flex gap-4 mt-2 md:mt-0">
                    <p className="hover:underline">Privacy Policy</p>
                    <p className="hover:underline">Terms of Service</p>
                    <p className="hover:underline">Accessibility</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;