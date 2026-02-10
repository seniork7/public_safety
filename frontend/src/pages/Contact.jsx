import { motion, easeInOut } from 'motion/react'
import Card from '../components/Card'
import TextInput from '../components/form_elements/TextInput'
import Label from '../components/form_elements/Label'
import Textarea from '../components/form_elements/Textarea'
import Submit from '../components/form_elements/Submit'
import LoadingOverlay from '../components/LoadingOverlay'
import { HiMapPin, HiPhone, HiMiniEnvelope, HiClock } from "react-icons/hi2"
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { useState } from 'react'
import { API_URL } from '../utils/api_url'

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
        phoneIcon: <HiPhone />,
        emailIcon: <HiMiniEnvelope />
    },
    {
        name: "Training & Education",
        contact: "training@publicsafety.org",
        text: "For inquiries related to training programs and educational resources",
        call: "(123) 365-8759",
        phoneIcon: <HiPhone />,
        emailIcon: <HiMiniEnvelope />
    },
    {
        name: "Community Outreach",
        contact: "outreach@publicsafety.org",
        text: "For questions about community programs and initiatives",
        call: "(123) 754-8798",
        phoneIcon: <HiPhone />,
        emailIcon: <HiMiniEnvelope />
    },
    {
        name: "General Inquiries",
        contact: "info@publicsafety.org",
        text: "For general questions and information about our organization",
        call: "(123) 524-3355",
        phoneIcon: <HiPhone />,
        emailIcon: <HiMiniEnvelope />
    },
];

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const [formSuccess, setformSuccess] = useState('')
    const [formError, setformError] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const errors = []

        if (!formData.name.trim()) {
            errors.push('Full Name is required.')
        }

        if (!formData.email.trim()) {
            errors.push('Email Address is required.');
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.push('Please enter a valid email address.');
        }

        if (!formData.message.trim()) {
            errors.push('Message is required.');
        }

        if (errors.length > 0) {
            setformError(errors.join(' '))
            setformSuccess('')
            setLoading(false)

            return
        }
        try {
            await new Promise(resolve => setTimeout(resolve, 3000))
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });


            if (!response.ok) throw new Error('Form submission failed')

            setformSuccess('Your message has been sent successfully!')
            setFormData({
                name: '',
                email: '',
                message: ''
            })
            setformError('')

        } catch (error) {
            setformError(`There was a problem submitting your message. Please try again later! ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading && <LoadingOverlay />}
            <section id="contact" className="scroll-mt-45 lg:scroll-mt-30 bg-surface text-text-primary" role="region" aria-labelledby="contact-title" aria-describedby="contact-desc">
                <div className="flex flex-col items-center justify-center mb-8 p-8 bg-bg">
                    <h2 id="contact-title" className="text-3xl md:text-4xl text-center font-bold mb-4">Get in Touch</h2>
                    <p id="contact-desc" className="max-w-xl text-center text-text-secondary">Have questions or need assistance? Our team is here to help. Reach out to us and we'll respond as soon as possible.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-start mt-10 gap-7 px-4 md:px-8" role="list" aria-label="Contact methods">
                        {contactMethods.map((contactMethods, index) => (
                            <Card key={index} className="justify-center items-center w-xs bg-bg" aria-labelledby={`contact-method-${index}-title`}>
                                <h5 id={`contact-method-${index}-title`} className="text-lg font-bold flex items-center justify-start gap-4 mb-3 group-hover:text-accent-secondary transition duration-700">
                                    <span className="bg-accent-primary group-hover:text-text-primary text-surface w-7 h-7 flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-accent-secondary transition duration-700" aria-hidden="true">
                                        {contactMethods.icon}
                                    </span>
                                    {contactMethods.title}
                                </h5>
                                <p className="text-text-secondary mt-1 pr-2  max-w-xs overflow-hidden transition-all duration-700">
                                    {contactMethods.address || contactMethods.phone || contactMethods.email || contactMethods.hours}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="mt-20 p-8 gap-8 px-4 md:px-8">
                    <h4 className="text-xl font-bold text-center">Send Us a Message</h4>
                    <p className="mb-10 text-text-secondary text-center">Fill out the form below and we'll get back to you within 24 hours.</p>
                    <div className="flex flex-col lg:flex-row justify-center items-center m-4 p-4">
                        <motion.form
                            onSubmit={handleSubmit}
                            className="bg-bg p-6 rounded-lg border border-border max-w-lg w-full md:w-md" aria-labelledby="contact-form-title"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h4 id="contact-form-title" className="sr-only">Contact form</h4>
                            {formError && <p className="text-error">{formError}</p>}
                            {formSuccess && <p className="text-success">{formSuccess}</p>}
                            <div className="mb-4">
                                <Label htmlFor="name" className="block mb-2 text-text-primary">*Name</Label>
                                <TextInput
                                    className="form-input"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="email" className="block mb-2">*Email</Label>
                                <TextInput
                                    className="form-input"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="message" className="block mb-2">*Message</Label>
                                <Textarea
                                    className="form-input"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Leave us a message..."
                                    rows={4}
                                />
                            </div>
                            <div className="pt-2">
                                <Submit loading={loading} loadingText="Submitting..." buttonText="Send Message" />
                            </div>
                        </motion.form>
                        <div className="flex flex-col justify-center items-center gap-4 max-w-md m-4 p-4">
                            <motion.div
                                className="flex flex-col justify-center items-center group md:w-sm pl-6 border-l-4 rounded-lg border-accent-primary bg-bg p-4"
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h5 className="text-lg font-bold text-primary text-center group-hover:text-accent-secondary transition duration-700">Have an Emergency?</h5>
                                <a href="tel:+911" className="text-sm text-center text-text-secondary">
                                    For immediate life threatening situations,<br /> please call:
                                    <br />
                                    <span className="text-accent-primary text-3xl group-hover:text-accent-secondary transition duration-700">911</span>
                                </a>

                                <a href="tel:+1555123456" className="text-sm text-text-secondary text-center">
                                    For non-emergency support:
                                    <br />
                                    <span className="text-accent-primary font-bold group-hover:text-accent-secondary transition duration-700">+1 (555) 123-HELP</span>
                                </a>
                            </motion.div>
                            <motion.div
                                className="group md:w-sm pl-6 border-l-4 bg-bg text-text-primary rounded-lg p-4 border-accent-primary"
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.9 }}
                            >
                                <h5 className="text-lg font-bold text-text-primary text-center mb-2 group-hover:text-accent-secondary transition duration-700">Follow Us</h5>
                                <div className="flex justify-center items-center text-surface group-hover:text-text-primary">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-90 transition duration-700">
                                        <span className="bg-accent-primary group-hover:bg-accent-secondary transition duration-700 p-2 rounded-full mr-4 inline-block" aria-hidden="true">
                                            <FaFacebookF className="text-xl" />
                                        </span>
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:scale-90 transition duration-700">
                                        <span className="bg-accent-primary group-hover:bg-accent-secondary transition duration-700 p-2 rounded-full mr-4 inline-block" aria-hidden="true">
                                            <FaXTwitter className="text-xl" />
                                        </span>
                                        <span className="sr-only">X</span>
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-90 transition duration-700">
                                        <span className="bg-accent-primary group-hover:bg-accent-secondary transition duration-700 p-2 rounded-full mr-4 inline-block" aria-hidden="true">
                                            <FaInstagram className="text-xl" />
                                        </span>
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-90 transition duration-700">
                                        <span className="bg-accent-primary group-hover:bg-accent-secondary transition duration-700 p-2 rounded-full mr-4 inline-block" aria-hidden="true">
                                            <FaLinkedinIn className="text-xl" />
                                        </span>
                                        <span className="sr-only">LinkedIn</span>
                                    </a>
                                </div>
                                <p className="text-sm text-center text-text-secondary mt-2">Stay connected with us on social media!</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <section className="bg-bg text-text-primary">
                    <div className="container mx-auto px-2 lg:px-8 py-10 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold mb-4">Contact by Department</h3>
                        <p className="text-center text-text-secondary">Please reach out to the appropriate department for assistance.</p>
                        <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-start my-10 gap-7 px-4 md:px-8" role="list" aria-label="Department contacts">
                            {departments.map((department, index) => (
                                <Card key={index} className="bg-surface" aria-labelledby={`department-${index}-title`}>
                                    <h5 id={`department-${index}-title`} className="text-lg font-bold text-text-primary group-hover:text-accent-secondary transition duration-700">
                                        {department.name}
                                    </h5>
                                    <p className="w-[300px] text-text-secondary">
                                        {department.text}
                                    </p>
                                    <a href={`tel:${department.call}`} className="flex items-center gap-2 text-text-secondary hover:scale-90 transition duration-700">
                                        <span className="text-accent-primary group-hover:text-accent-secondary transition duration-700" aria-hidden="true">{department.phoneIcon}</span> <span className="hover:text-accent-secondary group-hover:underline transition duration-700">{department.call}</span>
                                    </a>
                                    <a href={`mailto:${department.contact}`} className="flex items-center gap-2 text-text-secondary hover:scale-90 transition duration-700">
                                        <span className="text-accent-primary group-hover:text-accent-secondary transition duration-700" aria-hidden="true">{department.emailIcon}</span> <span className="hover:text-accent-secondary group-hover:underline transition duration-700">{department.contact}</span>
                                    </a>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}