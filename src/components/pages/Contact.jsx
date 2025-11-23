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
        text: "For general questions and information about our organization",
        call: "(123) 524-3355",
        phoneIcon: <HiPhone className="text-red-700 dark:text-red-400" />,
        emailIcon: <HiMiniEnvelope className="text-red-700 dark:text-red-400" />
    },
];

function Contact() {
    return (
        <>
            <section id="contact" className="scroll-mt-15 bg-[#f5f5f5] dark:bg-[#080808] text-[#080808] dark:text-[#f5f5f5]">
                <div className="bg-[#080808] flex flex-col items-center justify-center mb-8 p-8 text-white">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Get in Touch</h2>
                    <p className="max-w-xl text-center">Have questions or need assistance? Our team is here to help. Reach out to us and we'll respond as soon as possible.</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 container mx-auto px-2 lg:px-8 my-15">
                    {contactMethods.map((item, index) => (
                        <Card key={index} className="max-w-sm bg-[#f5f5f5] dark:bg-[#E53935]/50  border-0 border-[#E53935] dark:border-[#E53935] shadow-lg">
                            <h5 className="flex items-center justify-start gap-2 text-lg font-bold text-gray-900 dark:text-white">
                                <span className="p-2 rounded-full mr-4 inline-block bg-[#E53935] dark:bg-[#E53935]">
                                    {item.icon}
                                </span>
                                {item.title}
                            </h5>
                            <p className="w-[200px] h-10">
                                {item.address || item.phone || item.email || item.hours}
                            </p>
                        </Card>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center items-center mt-8 p-8 gap-8 px-4 md:px-8">
                    <form className="bbg-[#f5f5f5] dark:bg-[#1e1e1e] p-6 rounded-lg shadow-md max-w-lg w-md">
                        <h4 className="text-xl font-bold mb-4">Send Us a Message</h4>
                        <p className="mb-5">Fill out the form below and we'll get back to you within 24 hours.</p>
                        <div className="mb-4">
                            <Label htmlFor="name" className="block mb-2">Name</Label>
                            <TextInput id="name" type="text" placeholder="Your Name" required />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="email" className="block mb-2">Email</Label>
                            <TextInput id="email" type="email" placeholder="Your Email" required />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="message" className="block mb-2">Message</Label>
                            <Textarea id="message" placeholder="Leave us a message..." rows={4} required />
                        </div>
                        <Button type="submit" className="bg-[#E53935] hover:bg-[#ff3243] text-[#f5f5f5] dark:bg-[#eed202] dark:hover:bg-[#fff312] dark:text-[#0f1115] font-bold py-2 px-4 rounded-lg cursor-pointer transition focus:outline-none focus:ring-0 w-full mt-10">Send Message</Button>
                    </form>

                    <div className="flex flex-col justify-center items-center gap-4 max-w-md m-4 p-4">
                        <Card className="flex flex-col justify-center items-center h-60 text-center bg-[#f5f5f5] dark:bg-[#E53935]/50  border-0 border-[#E53935] dark:border-[#E53935] shadow-lg w-xs md:w-md lg:w-sm">
                            <h5 className="text-lg font-bold text-center ">Have an Emergency?</h5>
                            <p className="text-sm">
                                For immediate life threatening situations,<br /> please call:
                                <br />
                                <span className="text-[#E53935] dark:text-[#eed202] text-3xl">911</span>
                            </p>

                            <p className="text-sm">
                                For non-emergency support:
                                <br />
                                <span className="">+1 (555) 123-HELP</span>
                            </p>
                        </Card>
                        <Card className="flex flex-col justify-center items-center h-60 text-center bg-[#f5f5f5] dark:bg-[#E53935]/50  border-0 border-[#E53935] dark:border-[#E53935] shadow-lg w-xs md:w-md lg:w-sm">
                            <h5 className="text-lg font-bold">Follow Us</h5>
                            <div className="flex justify-center items-center">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="">
                                    <span className="bg-[#E53935] p-2 rounded-full mr-4 inline-block">
                                        <FaFacebookF className="text-[#f5f5f5] text-xl" />
                                    </span>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="">
                                    <span className="bg-[#E53935] p-2 rounded-full mr-4 inline-block">
                                        <FaXTwitter className="text-xl text-[#f5f5f5]" />
                                    </span>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="">
                                    <span className="bg-[#E53935] p-2 rounded-full mr-4 inline-block">
                                        <FaInstagram className="text-xl text-[#f5f5f5]" />
                                    </span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="">
                                    <span className="bg-[#E53935] p-2 rounded-full mr-4 inline-block">
                                        <FaLinkedinIn className="text-xl text-[#f5f5f5]" />
                                    </span>
                                </a>
                            </div>
                            <p className="text-sm">Stay connected with us on social media!</p>
                        </Card>
                    </div>
                </div>

                <section className="bg-[#f5f5f5] dark:bg-[#080808] text-[#080808] dark:text-[#f5f5f5]">
                    <div className="container mx-auto px-2 lg:px-8 py-10 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold mb-4">Contact by Department</h3>
                        <p className="text-center">Please reach out to the appropriate department for assistance.</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-2">
                            {departments.map((item, index) => (
                            <Card key={index} className="max-w-sm bg-[#f5f5f5] dark:bg-[#E53935]/50  border-0 border-[#E53935] dark:border-[#E53935] shadow-lg">
                                <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {item.name}
                                </h5>
                                <p className="w-[300px]">
                                    {item.text}
                                </p>
                                <p className="flex items-center gap-2">
                                    {item.phoneIcon} {item.call}
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="text-[#080808]">{item.emailIcon}</span> {item.contact}
                                </p>
                            </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Contact;