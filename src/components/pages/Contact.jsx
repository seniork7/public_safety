import { Card, TextInput, Button, Label, Textarea } from "flowbite-react"
import { HiMapPin, HiPhone, HiMiniEnvelope, HiClock } from "react-icons/hi2"
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"

const contactMethods = [
    { 
        title: "Visit Us", 
        address: "123 Main St, Ottawa, ON K1A 0B1", 
        icon: <HiMapPin /> 
    },
    { 
        title: "Call Us", 
        phone: "(123) 456-7890", 
        icon: <HiPhone /> 
    },
    { 
        title: "Email Us", 
        email: "info@publicsafety.org", 
        icon: <HiMiniEnvelope /> 
    },
    { 
        title: "Office Hours", 
        hours: "Mon-Fri: 9 AM - 5 PM", 
        icon: <HiClock /> 
    },
];

const departments = [
    { 
        name: "Emergency Services", 
        contact: "emergency@publicsafety.org",
        text: "For urgent matters requiring immediate attention",
        call: "(123) 548-7890",
        phoneIcon: <HiPhone className="text-red-700 dark:text-red-400" />,
        emailIcon: <HiMiniEnvelope className="text-red-700 dark:text-red-400" />
    },
    { 
        name: "Training & Education", 
        contact: "training@publicsafety.org",
        text: "For inquiries related to training programs and educational resources",
        call: "(123) 365-8759",
        phoneIcon: <HiPhone className="text-red-700 dark:text-red-400" />,
        emailIcon: <HiMiniEnvelope className="text-red-700 dark:text-red-400" />
    },
    { 
        name: "Community Outreach", 
        contact: "outreach@publicsafety.org",
        text: "For questions about community programs and initiatives",
        call: "(123) 754-8798",
        phoneIcon: <HiPhone className="text-red-700 dark:text-red-400" />,
        emailIcon: <HiMiniEnvelope className="text-red-700 dark:text-red-400" />
    },
    { 
        name: "General Inquiries", 
        contact: "info@publicsafety.org",
        text: "For general questions and information",
        call: "(123) 524-3355",
        phoneIcon: <HiPhone className="text-red-700 dark:text-red-400" />,
        emailIcon: <HiMiniEnvelope className="text-red-700 dark:text-red-400" />
    },
];

function Contact() {
    return (
        <>
            <section className="">
                <div className="bg-gray-800 flex flex-col items-center justify-center mb-8 p-8 text-white">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Get in Touch</h2>
                    <p className="max-w-xl text-center">Have questions or need assistance? Our team is here to help. Reach out to us and we'll respond as soon as possible.</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                    {contactMethods.map((item, index) => (
                        <Card key={index} className="max-w-sm">
                            <h5 className="flex items-center justify-start gap-2 text-lg font-bold text-gray-900 dark:text-white">
                                <span className="bg-red-500 text-white p-2 rounded-full mr-4 inline-block">
                                    {item.icon}
                                </span>
                                {item.title}
                            </h5>
                            <p className="text-gray-700 dark:text-gray-400 w-[200px] h-10">
                                {item.address || item.phone || item.email || item.hours}
                            </p>
                        </Card>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center items-center mt-8 bg-gray-100 dark:bg-gray-200 p-8 gap-8 px-4 md:px-8">
                    <form className="bg-white p-6 rounded-lg shadow-md max-w-lg w-md">
                        <h4 className="text-xl font-bold mb-4">Send Us a Message</h4>
                        <p className="text-gray-700 dark:text-gray-400 mb-5">Fill out the form below and we'll get back to you within 24 hours.</p>
                        <div className="mb-4">
                            <Label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-400">Name</Label>
                            <TextInput id="name" type="text" placeholder="Your Name" required />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-400">Email</Label>
                            <TextInput id="email" type="email" placeholder="Your Email" required />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-400">Message</Label>
                            <Textarea id="message" placeholder="Leave us a message..." rows={4} required />
                        </div>
                        <Button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer w-full mt-10">Send Message</Button>
                    </form>

                    <div className="flex flex-col justify-center items-center gap-4 max-w-md m-4 p-4">
                        {/* Social Contacts Card */}
                        <Card className="flex flex-col justify-center items-center h-60 text-center bg-white border border-none dark:bg-white shadow-md">
                            <h5 className="text-lg font-bold text-gray-900 dark:text-gray-900">Follow Us</h5>
                            <div className="flex justify-center items-center">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-red-500">
                                    <span className="bg-red-200/50 text-red-900 p-2 rounded-full mr-4 inline-block">
                                        <FaFacebookF className="text-xl" />
                                    </span>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-red-500">
                                    <span className="bg-red-200/50 text-red-900 p-2 rounded-full mr-4 inline-block">
                                        <FaXTwitter className="text-xl" />
                                    </span>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-red-500">
                                    <span className="bg-red-200/50 text-red-900 p-2 rounded-full mr-4 inline-block">
                                        <FaInstagram className="text-xl" />
                                    </span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-red-500">
                                    <span className="bg-red-200/50 text-red-900 p-2 rounded-full mr-4 inline-block">
                                        <FaLinkedinIn className="text-xl" />
                                    </span>
                                </a>
                            </div>
                            <p className="text-gray-700 dark:text-gray-400 text-sm">Stay connected with us on social media!</p>
                        </Card>

                        {/* Emergency Card */}
                        <Card className="flex flex-col justify-center items-center h-60 text-center bg-white border border-none dark:bg-white shadow-md">
                            <h5 className="text-lg font-bold text-gray-900 dark:text-gray-900 text-center ">Have an Emergency?</h5>
                            <p className="text-gray-700 dark:text-gray-400 text-sm">
                                For immediate life threatening situations,<br /> please call:
                                <br />
                                <span className="text-red-500 text-3xl">911</span>
                            </p>

                            <p className="text-gray-700 dark:text-gray-400 text-sm">
                                For non-emergency support:
                                <br />
                                <span className="text-gray-700 dark:text-gray-400">+1 (555) 123-HELP</span>
                            </p>
                        </Card>
                    </div>
                </div>

                <section className="bg-gray-300 flex flex-col justify-center items-center py-8">
                    <h3 className="text-2xl font-bold mb-4">Contact by Department</h3>
                    <p className="text-gray-700 dark:text-gray-900 text-center">Please reach out to the appropriate department for assistance.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                        {departments.map((item, index) => (
                        <Card key={index} className="max-w-sm">
                            <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                                {item.name}
                            </h5>
                            <p className="text-gray-700 dark:text-gray-400 w-[300px]">
                                {item.text}
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 flex items-center gap-2">
                                {item.phoneIcon} {item.call}
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 flex items-center gap-2">
                                {item.emailIcon} {item.contact}
                            </p>
                        </Card>
                        ))}
                    </div>
                </section>
            </section>
        </>
    );
}

export default Contact;