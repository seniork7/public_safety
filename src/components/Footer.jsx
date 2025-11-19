import { HiPhone, HiMiniEnvelope, HiMapPin } from "react-icons/hi2";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"

function Footer() {
    return (
        <footer className="bg-gray-800 text-white pt-8">
            <div className="container mx-auto px-10">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:justify-start">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold text-red-900 dark:text-red-400">Public Safety</h3>
                        <p className="mt-2 w-xs">Committed to building safer communities through education, training, and volunteer-driven emergency response services.</p>
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

                    <div className="mb-6 md:mb-0">
                        <h4 className="font-bold mb-2 text-red-900 dark:text-red-400">Quick Links</h4>
                        <ul>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Our Services</a></li>
                            <li><a href="#" className="hover:underline">Join Us</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h4 className="font-bold mb-2 text-red-900 dark:text-red-400">Programs</h4>
                        <ul>
                            <li><a href="#" className="hover:underline">Emergency Response</a></li>
                            <li><a href="#" className="hover:underline">First Aid Training</a></li>
                            <li><a href="#" className="hover:underline">Safety Workshops</a></li>
                            <li><a href="#" className="hover:underline">Youth Programs</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h4 className="font-bold mb-2 text-red-900 dark:text-red-400">Resources</h4>
                        <ul>
                            <li><a href="#" className="hover:underline">Safety Tips</a></li>
                            <li><a href="#" className="hover:underline">Training Materials</a></li>
                            <li><a href="#" className="hover:underline">News & Updates</a></li>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="my-6" />

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex justify-center items-center mt-6">
                        <a href="#" className="mx-2 text-gray-400 hover:text-white">
                            <span className="bg-white/50 text-red-900 p-2 rounded-full mr-4 inline-block">
                                <FaFacebookF className="text-xl" />
                            </span>
                        </a>
                        <a href="#" className="mx-2 text-gray-400 hover:text-white">
                            <span className="bg-white/50 text-red-900 p-2 rounded-full mr-4 inline-block">
                                <FaXTwitter className="text-xl" />
                            </span>
                        </a>
                        <a href="#" className="mx-2 text-gray-400 hover:text-white">
                            <span className="bg-white/50 text-red-900 p-2 rounded-full mr-4 inline-block">
                                <FaInstagram className="text-xl" />
                            </span>
                        </a>
                        <a href="#" className="mx-2 text-gray-400 hover:text-white">
                            <span className="bg-white/50 text-red-900 p-2 rounded-full mr-4 inline-block">
                                <FaLinkedinIn className="text-xl" />
                            </span>
                        </a>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-yellow-300 font-bold">Emergency? Call 911 immediately</p>
                        <p className="text-sm">For non-emergency inquiries, contact us during business hours</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-15 py-4 px-10 bg-black">
                <p> &copy; 2025 Public Safety. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <p className="hover:underline">Privacy Policy</p>
                    <p className="hover:underline">Terms of Service</p>
                    <p className="hover:underline">Accessibility</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;