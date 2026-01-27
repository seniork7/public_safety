import Card from '../components/Card.jsx'
import Select from '../components/form_elements/Select'
import TextInput from '../components/form_elements/TextInput'
import Textarea from '../components/form_elements/Textarea'
import Submit from '../components/form_elements/Submit'
import Label from '../components/form_elements/Label'
import Checkbox from '../components/form_elements/Checkbox'
import LoadingOverlay from '../components/LoadingOverlay'
import { API_URL } from '../utils/api_url'
import { useState } from 'react'

const getStarted = [
    {
        id: 1,
        title: "Submit Your Application",
        text: "Fill out the form below with your information and interests."
    },
    {
        id: 2,
        title: "Interview",
        text: "We'll schedule a friendly conversation to learn more about you."
    },
    {
        id: 3,
        title: "Training",
        text: "Complete our comprehensive orientation and role-specific training."
    },
    {
        id: 4,
        title: "Get Started",
        text: "Make an impact in your community by volunteering your time and skills."
    }
]

export default function JoinUs() {
    const [loading, setLoading] = useState(false)
    const [invalidFields, setInvalidFields] = useState([])
    const [formSuccess, setformSuccess] = useState('')
    const [formError, setformError] = useState('')
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        gender: '',
        role: '',
        experience: '',
        availability: '',
        whyVolunteer: '',
        checkbox: false
    })

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const emptyFields = Object.keys(formData).filter(key => {
            if (key === 'checkbox') return !formData[key]
            return !formData[key].trim()
        })

        if (emptyFields.length > 0) {
            setformError('Please complete all required fields.')
            setformSuccess('')
            setInvalidFields(emptyFields)
            setLoading(false)

            return
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 3000))
            const response = await fetch(`${API_URL}/api/volunteers`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) throw new Error('Form submission failed')

            setformSuccess('Your application has been submitted successfully!')
            setFormData({
                fName: '',
                lName: '',
                email: '',
                phone: '',
                gender: '',
                role: '',
                experience: '',
                availability: '',
                whyVolunteer: '',
                checkbox: false
            })
            setformError('')
            setInvalidFields([])

        } catch (error) {
            setformError(`There was a problem submitting your application. Please try again later! ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading && <LoadingOverlay />}
            <section id="joinUs" className="scroll-mt-45 lg:scroll-mt-30  bg-bg text-text-primary">
                <div className="flex flex-col items-center justify-center p-8">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Join Our Team</h2>
                    <p className="max-w-xl text-center text-text-secondary">Be part of something meaningful. Whether you want to volunteer, receive training, or stay updated with our initiatives, we'd love to have you join us.</p>
                </div>

                <div className="bg-surface py-15">
                    <div className="container mx-auto px-2 lg:px-8 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold mb-4 text-center">How to Get Started</h3>
                        <p className="text-center md:w-1/2 text-text-secondary">Our simple four-step process gets you from application to active volunteer.</p>
                        <div className="flex flex-col md:grid md:grid-cols-2 justify-center items-center gap-8 my-8 px-4 md:px-8 lg:h-70">
                            {getStarted.map((start, index) => (
                                <Card key={index} className="bg-bg">
                                    <h3 className="text-lg font-bold text-text-primary flex items-center justify-start gap-2 mb-3 group-hover:text-accent-secondary transition duration-300">                                        
                                        <span className="bg-accent-primary grouphover:text-text-primary text-surface w-7 h-7 flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-accent-secondary transition duration-700">{start.id}</span>
                                        {start.title}
                                    </h3>
                                    <p className="text-text-secondary mt-2 w-full lg:w-xs">
                                        {start.text}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="getInvolved" className="bg-surface text-primary scroll-mt-30">
                <div className="container text-text-primary mx-auto px-2 lg:px-8 py-5 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold mb-4">Volunteer Application</h3>
                    <p className="max-w-xl text-center text-text-secondary">Fill out the form below and we'll be in touch within 48 hours.</p>
                    {formError && <p className="text-error">{formError}</p>}
                    {formSuccess && <p className="text-success">{formSuccess}</p>}
                    <div className="px-4 w-full flex justify-center items-center">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-surface flex flex-col gap-4 my-8 px-6 w-full lg:w-[50%] rounded-lg border border-border p-8"
                            aria-labelledby="volunteer-form-title"
                        >
                            <h4 id="volunteer-form-title" className="sr-only">Volunteer application form</h4>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-col w-full">
                                    <Label htmlFor="fName" className="">*First Name</Label>
                                    <TextInput
                                        className="form-input"
                                        id="fName"
                                        name="fName"
                                        value={formData.fName}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="flex-col w-full">
                                    <Label htmlFor="lName" className="">*Last Name</Label>
                                    <TextInput
                                        className="form-input"
                                        id="lName"
                                        name="lName"
                                        value={formData.lName}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-col w-full">
                                    <Label htmlFor="email" className="">*Email</Label>
                                    <TextInput
                                        className="form-input"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="flex-col w-full">
                                    <Label htmlFor="phone" className="">*Phone Number</Label>
                                    <TextInput
                                        className="form-input"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-center md:flex-row gap-4">
                                <div className="w-full">
                                    <Label htmlFor="gender" className="">*Gender</Label>
                                    <Select className="form-input" id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                                        <option value="">-- choose an option --</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="non-binary">Non-binary</option>
                                        <option value="none">Prefer not to say</option>
                                        <option value="other">Other</option>
                                    </Select>
                                </div>
                                <div className="w-full">
                                    <Label htmlFor="role" className="">*Role Interested In</Label>
                                    <Select className="form-input" id="role" name="role" value={formData.role} onChange={handleChange}>
                                        <option>-- choose an option --</option>
                                        <option>First Aid</option>
                                        <option>Community Outreach</option>
                                        <option>Disaster Response</option>
                                        <option>CPR Training</option>
                                        <option>Event Support</option>
                                        <option>Other</option>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-col w-full">
                                    <Label htmlFor="experience" className="">*Experience Level</Label>
                                    <Select className="form-input" id="experience" name="experience" value={formData.experience} onChange={handleChange}>
                                        <option>-- choose an option --</option>
                                        <option>No Experience</option>
                                        <option>Some Experience</option>
                                        <option>Certified Professional</option>
                                    </Select>
                                </div>
                                <div className="flex-col w-full">
                                    <Label htmlFor="availability" className="">*Availability</Label>
                                    <Select className="form-input" id="availability" name="availability" value={formData.availability} onChange={handleChange}>
                                        <option>-- choose an option --</option>
                                        <option>Weekdays</option>
                                        <option>Weekends</option>
                                        <option>Evenings</option>
                                        <option>Flexible</option>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="whyVolunteer" className="">*Why do you want to volunteer?</Label>
                                <Textarea
                                    id="whyVolunteer"
                                    name="whyVolunteer"
                                    value={formData.whyVolunteer}
                                    onChange={handleChange}
                                    className="form-input"
                                    rows={4}
                                    placeholder="Tell us why you want to volunteer..."
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <Checkbox id="checkbox" name="checkbox" checked={formData.checkbox} onChange={handleChange} className="transition focus:outline-none focus:ring-0 cursor-pointer" />
                                <Label htmlFor="checkbox" className="text-text-secondary">*I agree to the terms and conditions and understand that a background check may be required for certain volunteer positions.</Label>
                            </div>
                            <div className="pt-2">
                                <Submit loading={loading} loadingText="Submitting..." buttonText="Submit Application" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}