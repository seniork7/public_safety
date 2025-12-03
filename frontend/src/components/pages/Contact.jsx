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
        phoneIcon: <HiPhone className="text-error" />,
        emailIcon: <HiMiniEnvelope className="text-error" />
    },
    { 
        name: "Training & Education", 
        contact: "training@publicsafety.org",
        text: "For inquiries related to training programs and educational resources",
        call: "(123) 365-8759",
        phoneIcon: <HiPhone className="text-error" />,
        emailIcon: <HiMiniEnvelope className="text-error" />
    },
    { 
        name: "Community Outreach", 
        contact: "outreach@publicsafety.org",
        text: "For questions about community programs and initiatives",
        call: "(123) 754-8798",
        phoneIcon: <HiPhone className="text-error" />,
        emailIcon: <HiMiniEnvelope className="text-error" />
    },
    { 
        name: "General Inquiries", 
        contact: "info@publicsafety.org",
        text: "For general questions and information about our organization",
        call: "(123) 524-3355",
        phoneIcon: <HiPhone className="text-error" />,
        emailIcon: <HiMiniEnvelope className="text-error" />
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
            <section id="contact" className="scroll-mt-15 bg-bg text-primary">
                <div className="flex flex-col items-center justify-center mb-8 p-8">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Get in Touch</h2>
                    <p className="max-w-xl text-center text-secondary">Have questions or need assistance? Our team is here to help. Reach out to us and we'll respond as soon as possible.</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 container mx-auto px-2 lg:px-8 my-15">
                    {contactMethods.map((item, index) => (
                        <Card key={index} className="max-w-sm bg-bg border border-color shadow-lg">
                            <h5 className="flex items-center justify-start gap-2 text-lg font-bold text-primary">
                                <span className="p-2 rounded-full mr-4 inline-block bg-accent-primary text-surface">
                                    {item.icon}
                                </span>
                                {item.title}
                            </h5>
                            <p className="w-[200px] h-10 text-secondary">
                                {item.address || item.phone || item.email || item.hours}
                            </p>
                        </Card>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center items-center mt-8 p-8 gap-8 px-4 md:px-8">
                    <form onSubmit={handleSubmit} className="bg-surface p-6 rounded-lg shadow-md max-w-lg w-md">
                        <h4 className="text-xl font-bold mb-4">Send Us a Message</h4>
                        <p className="mb-5 text-secondary">Fill out the form below and we'll get back to you within 24 hours.</p>
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
                        <Button type="submit" id="submitContact" className="bg-accent-primary hover:bg-accent-secondary text-surface font-bold py-2 px-4 rounded-lg cursor-pointer transition focus:outline-none focus:ring-0 w-full mt-10">Send Message</Button>
                    </form>

                    <div className="flex flex-col justify-center items-center gap-4 max-w-md m-4 p-4">
                        <Card className="flex flex-col justify-center items-center h-60 text-center bg-surface border border-color shadow-lg w-xs md:w-md lg:w-sm">
                            <h5 className="text-lg font-bold text-primary text-center ">Have an Emergency?</h5>
                            <p className="text-sm text-secondary">
                                For immediate life threatening situations,<br /> please call:
                                <br />
                                <span className="text-error text-3xl">911</span>
                            </p>

                            <p className="text-sm text-secondary">
                                For non-emergency support:
                                <br />
                                <span className="text-primary">+1 (555) 123-HELP</span>
                            </p>
                        </Card>
                        <Card className="flex flex-col justify-center items-center h-60 text-center bg-surface border border-color shadow-lg w-xs md:w-md lg:w-sm">
                            <h5 className="text-lg font-bold text-primary">Follow Us</h5>
                            <div className="flex justify-center items-center">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="">
                                    <span className="bg-accent-primary p-2 rounded-full mr-4 inline-block">
                                        <FaFacebookF className="text-surface text-xl" />
                                    </span>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="">
                                    <span className="bg-accent-primary p-2 rounded-full mr-4 inline-block">
                                        <FaXTwitter className="text-xl text-surface" />
                                    </span>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="">
                                    <span className="bg-accent-primary p-2 rounded-full mr-4 inline-block">
                                        <FaInstagram className="text-xl text-surface" />
                                    </span>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="">
                                    <span className="bg-accent-primary p-2 rounded-full mr-4 inline-block">
                                        <FaLinkedinIn className="text-xl text-surface" />
                                    </span>
                                </a>
                            </div>
                            <p className="text-sm text-secondary">Stay connected with us on social media!</p>
                        </Card>
                    </div>
                </div>

                <section className="bg-bg text-primary">
                    <div className="container mx-auto px-2 lg:px-8 py-10 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold mb-4">Contact by Department</h3>
                        <p className="text-center text-secondary">Please reach out to the appropriate department for assistance.</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-2">
                            {departments.map((item, index) => (
                            <Card key={index} className="max-w-sm bg-surface border border-color shadow-lg">
                                <h5 className="text-lg font-bold text-primary">
                                    {item.name}
                                </h5>
                                <p className="w-[300px] text-secondary">
                                    {item.text}
                                </p>
                                <p className="flex items-center gap-2 text-secondary">
                                    {item.phoneIcon} {item.call}
                                </p>
                                <p className="flex items-center gap-2 text-secondary">
                                    <span className="text-error">{item.emailIcon}</span> {item.contact}
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