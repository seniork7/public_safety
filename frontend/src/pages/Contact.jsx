import { useState } from 'react'
import { HiMapPin, HiPhone, HiMiniEnvelope, HiClock } from "react-icons/hi2"
import TextInput from '../components/form_elements/TextInput'
import Label from '../components/form_elements/Label'
import Textarea from '../components/form_elements/Textarea'
import Submit from '../components/form_elements/Submit'
import LoadingOverlay from '../components/LoadingOverlay'
import { API_URL } from '../utils/api_url'

const contactInfo = [
    { icon: HiMapPin, label: "Address", value: "123 Main St, Ottawa, ON K1A 0B1" },
    { icon: HiPhone, label: "Phone", value: "(123) 456-7890" },
    { icon: HiMiniEnvelope, label: "Email", value: "info@publicsafety.org" },
    { icon: HiClock, label: "Office Hours", value: "Mon – Fri: 9 AM – 5 PM" },
]

const departments = [
    {
        name: "Emergency Services",
        text: "For urgent matters requiring immediate attention",
        call: "(123) 548-7890",
        email: "emergency@publicsafety.org",
    },
    {
        name: "Training & Education",
        text: "For inquiries about training programs and resources",
        call: "(123) 365-8759",
        email: "training@publicsafety.org",
    },
    {
        name: "Community Outreach",
        text: "For questions about community programs and initiatives",
        call: "(123) 754-8798",
        email: "outreach@publicsafety.org",
    },
    {
        name: "General Inquiries",
        text: "For general questions about our organization",
        call: "(123) 524-3355",
        email: "info@publicsafety.org",
    },
]

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const [formSuccess, setformSuccess] = useState('')
    const [formError, setformError] = useState('')
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const errors = []
        if (!formData.name.trim()) errors.push('Full Name is required.')
        if (!formData.email.trim()) errors.push('Email Address is required.')
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.push('Please enter a valid email address.')
        if (!formData.message.trim()) errors.push('Message is required.')

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
                headers: { 'Content-Type': 'application/json' }
            })

            if (!response.ok) throw new Error('Form submission failed')

            setformSuccess('Your message has been sent successfully!')
            setFormData({ name: '', email: '', message: '' })
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

            <section
                id="contact"
                className="scroll-mt-45 lg:scroll-mt-30"
                role="region"
                aria-labelledby="contact-title"
            >
                <div className="bg-linear-to-r from-navy-deep to-navy-deep/85 text-surface py-20 md:py-28 px-8">
                    <div className="max-w-6xl mx-auto lg:px-8 text-center lg:text-left">
                        <p className="inline-block text-accent-secondary font-semibold text-xs uppercase tracking-[0.2em]">
                            Contact Us
                        </p>
                        <div className="w-10 h-0.5 bg-accent-secondary mb-4 mx-auto lg:mx-0"></div>
                        <h2
                            id="contact-title"
                            className="text-3xl md:text-4xl font-bold text-surface leading-tight mb-3"
                        >
                            Get In Touch
                        </h2>
                        <p className="text-surface text-base leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0">
                            Have a question, need assistance, or want to learn more about our programs? We're here to help.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <div key={index} className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-2 md:gap-3">
                                        <div className="shrink-0 text-accent-secondary md:mt-0.5" aria-hidden="true">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-surface text-xs uppercase tracking-widest font-medium mb-0.5">
                                                {item.label}
                                            </p>
                                            <p className="text-surface text-sm">{item.value}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="bg-surface py-16 md:py-20 px-8" aria-label="Contact form">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-text-primary mb-1 text-center lg:text-left">Send Us a Message</h3>
                        <p className="text-text-secondary text-base leading-relaxed mb-8 text-center lg:text-left">
                            Fill out the form and we'll get back to you within 24 hours.
                        </p>

                        {formError && (
                            <p className="text-error text-sm mb-4" role="alert">{formError}</p>
                        )}
                        {formSuccess && (
                            <p className="text-success text-sm mb-4" role="status">{formSuccess}</p>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5"
                            aria-labelledby="contact-title"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <Label htmlFor="name">*Full Name</Label>
                                    <TextInput
                                        id="name" name="name"
                                        value={formData.name} onChange={handleChange}
                                        type="text" placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email">*Email Address</Label>
                                    <TextInput
                                        id="email" name="email"
                                        value={formData.email} onChange={handleChange}
                                        type="email" placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="message">*Message</Label>
                                <Textarea
                                    id="message" name="message"
                                    value={formData.message} onChange={handleChange}
                                    placeholder="How can we help you?"
                                    rows={5}
                                />
                            </div>
                            <div className="pt-1">
                                <Submit loading={loading} loadingText="Sending..." buttonText="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="bg-bg py-16 md:py-20 px-8" aria-label="Contact by department">
                    <div className="max-w-6xl mx-auto lg:px-8 text-center lg:text-left">
                        <p className="inline-block text-accent-primary font-semibold text-xs uppercase tracking-[0.2em]">
                            Contact by Department
                        </p>
                        <div className="w-10 h-0.5 bg-accent-primary mb-4 mx-auto lg:mx-0"></div>

                        <h3 className="text-2xl font-bold text-text-primary mb-8">
                            Reach the Right Team
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {departments.map((dept, index) => (
                                <div
                                    key={index}
                                    className="bg-surface border border-border rounded-xl p-5 border-l-4 border-l-accent-primary"
                                >
                                    <p className="font-semibold text-text-primary text-sm leading-snug mb-1">
                                        {dept.name}
                                    </p>
                                    <p className="text-text-secondary text-xs mb-4 leading-relaxed">
                                        {dept.text}
                                    </p>
                                    <div className="flex flex-col gap-1.5">
                                        <a
                                            href={`tel:${dept.call}`}
                                            className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent-primary text-xs transition-colors duration-200"
                                        >
                                            <HiPhone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                                            {dept.call}
                                        </a>
                                        <a
                                            href={`mailto:${dept.email}`}
                                            className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent-primary text-xs transition-colors duration-200"
                                        >
                                            <HiMiniEnvelope className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                                            {dept.email}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
