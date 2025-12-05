import Card from '../elements/Card'
import TextInput from '../elements/TextInput'
import Button from '../elements/Button'
import Label from '../elements/Label'
import Textarea from '../elements/Textarea'
import { HiMapPin, HiPhone, HiMiniEnvelope, HiClock } from "react-icons/hi2"
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { useState } from 'react' 
import { FORMSPREE_URL } from '../../utils'

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

function Contact() {
    const [formSuccess, setformSuccess] = useState('')
    const [formError, setformError] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})      
        
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

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
            return
        } else {
            try {
                const response = await fetch(FORMSPREE_URL, {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    setformSuccess('Your message has been sent successfully!')
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    })
                    setformError('')
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                setformError('There was a problem submitting your message. Please try again later!')
            }
        }
    }

    return (
        <>
            <section id="contact" className="scroll-mt-30 bg-surface text-text-primary">
                <div className="flex flex-col items-center justify-center mb-8 p-8 bg-bg">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Get in Touch</h2>
                    <p className="max-w-xl text-center text-text-secondary">Have questions or need assistance? Our team is here to help. Reach out to us and we'll respond as soon as possible.</p>
                </div>
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-start mt-10 gap-7 px-4 md:px-8">
                            {contactMethods.map((item, index) => (
                                <div key={index} className="flex flex-col justify-center items-center group max-w-xs pl-6 border-l-4 rounded-lg border-accent-primary lg:hover:rotate-y-20 hover:border-accent-secondary shadow-sm shadow-accent-primary/15 hover:shadow-accent-secondary/15 p-4  transition-all duration-700">
                                    <h5 className="text-lg font-bold flex items-center justify-start gap-4 mb-3 group-hover:text-accent-secondary transition duration-700">
                                        <span className="bg-accent-primary text-text-primary group-hover:text-surface w-7 h-7 flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-accent-secondary transition duration-700">
                                            {item.icon}
                                        </span>
                                        {item.title}
                                    </h5>
                                    <p className="text-text-secondary mt-1 pr-2  max-w-xs overflow-hidden transition-all duration-700">
                                        {item.address || item.phone || item.email || item.hours}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                <div className="mt-20 p-8 gap-8 px-4 md:px-8">
                        <h4 className="text-xl font-bold text-center">Send Us a Message</h4>
                        <p className="mb-10 text-text-secondary text-center">Fill out the form below and we'll get back to you within 24 hours.</p>
                    <div className="flex flex-col lg:flex-row justify-center items-center m-4 p-4">
                        <form onSubmit={handleSubmit} className="bg-bg p-6 rounded-lg shadow-md max-w-lg w-full md:w-md">
                            {formError && <p className="text-error">{formError}</p>}
                            {formSuccess && <p className="text-success">{formSuccess}</p>}
                            <div className="mb-4">
                                <Label htmlFor="name" className="block mb-2">*Name</Label>
                                <TextInput
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
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Leave us a message..."
                                    rows={4}
                                />
                            </div>
                            <Button type="submit" id="submitContact" className="w-full p-2 mt-5 rounded-lg font-semibold bg-accent-secondary hover:bg-accent-primary hover:text-text-primary text-bg cursor-pointer transition duration-700 hover:scale-98">Send Message</Button>
                        </form>
                        <div className="flex flex-col justify-center items-center gap-4 max-w-md m-4 p-4">
                            <div className="flex flex-col justify-center items-center group max-w-xs pl-6 border-l-4 rounded-lg border-accent-primary lg:hover:rotate-y-20 hover:border-accent-secondary shadow-sm shadow-accent-primary/15 hover:shadow-accent-secondary/15 p-4  transition-all duration-700">
                                <h5 className="text-lg font-bold text-primary text-center group-hover:text-accent-secondary transition duration-700">Have an Emergency?</h5>
                                <a href="tel:+911" className="text-sm text-center text-text-secondary">
                                    For immediate life threatening situations,<br /> please call:
                                    <br />
                                    <span className="text-accent-primary text-3xl group-hover:text-accent-secondary transition duration-700">911</span>
                                </a>

                                <a href="tel:+1555123456" className="text-sm text-text-secondary text-center">
                                    For non-emergency support:
                                    <br />
                                    <span className="text-accent-primary group-hover:text-accent-secondary transition duration-700">+1 (555) 123-HELP</span>
                                </a>
                            </div>
                            <div className="group max-w-xs pl-6 border-l-4 text-text-primary shadow-sm shadow-accent-primary/15 hover:shadow-accent-secondary/15 rounded-lg p-4  border-accent-primary  hover:border-accent-secondary transition-all lg:hover:rotate-y-20 duration-700">
                                <h5 className="text-lg font-bold text-text-primary text-center mb-2 group-hover:text-accent-secondary transition duration-700">Follow Us</h5>
                                <div className="flex justify-center items-center">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="">
                                        <span className="bg-accent-primary group-hover:bg-accent-secondary transition duration-700 p-2 rounded-full mr-4 lg:hover:scale-90 inline-block">
                                            <FaFacebookF className="text-xl group-hover:text-surface transition duration-700" />
                                        </span>
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="">
                                        <span className="bg-accent-primary group-hover:bg-accent-secondary transition duration-700 p-2 rounded-full mr-4 lg:hover:scale-90 inline-block">
                                            <FaXTwitter className="text-xl group-hover:text-surface transition duration-700" />
                                        </span>
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="">
                                        <span className="bg-accent-primary group-hover:bg-accent-secondary transition duration-700 p-2 rounded-full mr-4 inline-block lg:hover:scale-90">
                                            <FaInstagram className="text-xl group-hover:text-surface transition duration-700" />
                                        </span>
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="">
                                        <span className="bg-accent-primary group-hover:bg-accent-secondary transition duration-700 p-2 rounded-full mr-4 inline-block lg:hover:scale-90">
                                            <FaLinkedinIn className="text-xl group-hover:text-surface transition duration-700" />
                                        </span>
                                    </a>
                                </div>
                                <p className="text-sm text-text-secondary mt-2">Stay connected with us on social media!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-bg text-text-primary">
                    <div className="container mx-auto px-2 lg:px-8 py-10 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold mb-4">Contact by Department</h3>
                        <p className="text-center text-text-secondary">Please reach out to the appropriate department for assistance.</p>
                        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-start m-10 gap-7 px-4 md:px-8">
                            {departments.map((item, index) => (
                            <div key={index} className="flex flex-col group w-xs md:w-sm pl-6 border-l-4 rounded-lg border-accent-primary lg:hover:rotate-y-20 hover:border-accent-secondary shadow-sm shadow-accent-primary/15 hover:shadow-accent-secondary/15 p-4  transition-all duration-700">
                                <h5 className="text-lg font-bold text-text-primary group-hover:text-accent-secondary transition duration-700">
                                    {item.name}
                                </h5>
                                <p className="w-[300px] text-text-secondary">
                                    {item.text}
                                </p>
                                <a href={`tel:${item.call}`} className="flex items-center gap-2 text-text-secondary hover:scale-90 transition duration-700">
                                    <span className="text-accent-primary group-hover:text-accent-secondary transition duration-700">{item.phoneIcon}</span> <span className="hover:text-accent-secondary group-hover:underline transition duration-700">{item.call}</span>
                                </a>
                                <a href={`mailto:${item.contact}`} className="flex items-center gap-2 text-text-secondary hover:scale-90 transition duration-700">
                                    <span className="text-accent-primary group-hover:text-accent-secondary transition duration-700">{item.emailIcon}</span> <span className="hover:text-accent-secondary group-hover:underline transition duration-700">{item.contact}</span>
                                </a>
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Contact