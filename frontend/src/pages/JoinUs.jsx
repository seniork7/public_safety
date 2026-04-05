import { useState } from 'react'
import { API_URL } from '../utils/api_url'
import { HiCheckCircle } from 'react-icons/hi2'
import Select from '../components/form_elements/Select'
import TextInput from '../components/form_elements/TextInput'
import Textarea from '../components/form_elements/Textarea'
import Submit from '../components/form_elements/Submit'
import Label from '../components/form_elements/Label'
import Checkbox from '../components/form_elements/Checkbox'
import LoadingOverlay from '../components/LoadingOverlay'
import { locations } from '../utils/location.js'

const benefits = [
    "Make a real difference in your community",
    "Gain certified training and hands-on experience",
    "Join a network of 500+ trained volunteers",
]

const steps = [
    { id: 1, title: "Submit Your Application", text: "Fill out the form with your information and areas of interest." },
    { id: 2, title: "Interview", text: "We'll schedule a friendly conversation to learn more about you." },
    { id: 3, title: "Training", text: "Complete our comprehensive orientation and role-specific training." },
    { id: 4, title: "Get Started", text: "Make an impact in your community by volunteering your time and skills." },
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
        province: '',
        city: '',
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
                headers: { 'Content-Type': 'application/json' }
            })

            if (!response.ok) throw new Error('Form submission failed')

            setformSuccess('Your application has been submitted successfully!')
            setFormData({
                fName: '', lName: '', email: '', phone: '',
                gender: '', role: '', experience: '', availability: '',
                whyVolunteer: '', checkbox: false
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

            <section
                id="joinUs"
                className="scroll-mt-45 lg:scroll-mt-30"
                role="region"
                aria-labelledby="joinus-title"
            >
                <div className="bg-linear-to-r from-navy-deep to-navy-deep/85 text-surface py-20 md:py-28 px-8">
                    <div className="max-w-6xl mx-auto lg:px-8 text-center lg:text-left">
                        <p className="inline-block text-accent-secondary font-semibold text-xs uppercase tracking-[0.2em]">
                            Join Our Team
                        </p>
                        <div className="w-10 h-0.5 bg-accent-secondary mb-4 mx-auto lg:mx-0"></div>

                        <h2 id="joinus-title" className="text-3xl md:text-4xl font-bold text-surface leading-tight mb-6">
                            Make a Difference<br />in Your Community
                        </h2>
                        <ul className="space-y-3 flex flex-col items-center text-left" aria-label="Volunteer benefits">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex gap-3 text-surface text-base">
                                    <HiCheckCircle className="shrink-0 mt-0.5 text-accent-secondary w-5 h-5" aria-hidden="true" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section
                id="getInvolved"
                className="bg-bg text-text-primary scroll-mt-30"
                role="region"
                aria-labelledby="volunteer-form-title"
                aria-describedby="joinus-desc"
            >
                <div className="max-w-6xl mx-auto px-8 lg:px-16 py-16 flex flex-col lg:flex-row items-center lg:items-start gap-12">
                    <aside
                        className="order-first lg:order-last lg:w-[35%]"
                        aria-label="What to expect after you apply"
                    >
                        <div>
                            <p className="inline-block text-accent-primary font-semibold text-xs uppercase tracking-[0.2em]">
                                What to Expect
                            </p>
                            <div className="w-10 h-0.5 bg-accent-primary mb-4"></div>

                            <h3 className="font-bold text-text-primary text-lg mb-6">
                                Your path to volunteering
                            </h3>

                            <ol className="space-y-6" aria-label="Application steps">
                                {steps.map((step) => (
                                    <li key={step.id}>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-surface border-2 border-border text-xs font-bold text-text-secondary shrink-0">
                                                {step.id}
                                            </span>
                                            <h4 className="font-semibold text-text-primary text-sm">
                                                {step.title}
                                            </h4>
                                        </div>
                                        <p className="text-text-secondary text-sm leading-relaxed pl-10">
                                            {step.text}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </aside>

                    <div className="lg:w-[65%]">
                        <h3
                            id="volunteer-form-title"
                            className="font-bold text-text-primary text-xl mb-1 text-center lg:text-left"
                        >
                            Volunteer Application
                        </h3>
                        <p id="joinus-desc" className="text-text-secondary text-sm mb-6 text-center lg:text-left">
                            Fill out the form below and we'll be in touch within 48 hours.
                        </p>

                        {formError && (
                            <p className="text-error text-sm mb-4" role="alert">{formError}</p>
                        )}
                        {formSuccess && (
                            <p className="text-success text-sm mb-4" role="status">{formSuccess}</p>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="bg-surface flex flex-col gap-4 rounded-xl border border-border p-6 md:p-8"
                            aria-labelledby="volunteer-form-title"
                        >
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-col w-full">
                                    <Label htmlFor="fName">*First Name</Label>
                                    <TextInput
                                        id="fName" name="fName"
                                        value={formData.fName} onChange={handleChange}
                                        type="text" placeholder="John"
                                    />
                                </div>
                                <div className="flex-col w-full">
                                    <Label htmlFor="lName">*Last Name</Label>
                                    <TextInput
                                        id="lName" name="lName"
                                        value={formData.lName} onChange={handleChange}
                                        type="text" placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full">
                                    <Label htmlFor="gender">*Gender</Label>
                                    <Select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                                        <option value="">-- choose an option --</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="non-binary">Non-binary</option>
                                        <option value="none">Prefer not to say</option>
                                        <option value="other">Other</option>
                                    </Select>
                                </div>
                                <div className="flex-col w-full">
                                    <Label htmlFor="phone">*Phone Number</Label>
                                    <TextInput
                                        id="phone" name="phone"
                                        value={formData.phone} onChange={handleChange}
                                        type="tel" placeholder="(123) 456-7890"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-col w-full">
                                    <Label htmlFor="province">*Province</Label>
                                    <Select id="province" name="province" value={formData.province} onChange={handleChange}>
                                        <option value="">-- choose a province --</option>
                                        {locations.map(location => (
                                            <option key={location.name} value={location.name}>{location.name}</option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="w-full">
                                    <Label htmlFor="city">*City / Region</Label>
                                    <Select id="city" name="city" value={formData.city} onChange={handleChange}>
                                        <option value="">-- choose a city --</option>
                                        {(locations.find(location => location.name === formData.province)?.regions || []).map(region => (
                                            <option key={region} value={region}>{region}</option>
                                        ))}
                                    </Select>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-col w-full">
                                    <Label htmlFor="email">*Email</Label>
                                    <TextInput
                                        id="email" name="email"
                                        value={formData.email} onChange={handleChange}
                                        type="email" placeholder="john@example.com"
                                    />
                                </div>
                                <div className="w-full">
                                    <Label htmlFor="role">*Role Interested In</Label>
                                    <Select id="role" name="role" value={formData.role} onChange={handleChange}>
                                        <option value="">-- choose an option --</option>
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
                                    <Label htmlFor="experience">*Experience Level</Label>
                                    <Select id="experience" name="experience" value={formData.experience} onChange={handleChange}>
                                        <option value="">-- choose an option --</option>
                                        <option>No Experience</option>
                                        <option>Some Experience</option>
                                        <option>Certified Professional</option>
                                    </Select>
                                </div>
                                <div className="flex-col w-full">
                                    <Label htmlFor="availability">*Availability</Label>
                                    <Select id="availability" name="availability" value={formData.availability} onChange={handleChange}>
                                        <option value="">-- choose an option --</option>
                                        <option>Weekdays</option>
                                        <option>Weekends</option>
                                        <option>Evenings</option>
                                        <option>Flexible</option>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="whyVolunteer">*Why do you want to volunteer?</Label>
                                <Textarea
                                    id="whyVolunteer" name="whyVolunteer"
                                    value={formData.whyVolunteer} onChange={handleChange}
                                    rows={4} placeholder="Tell us why you want to volunteer..."
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <Checkbox
                                    id="checkbox" name="checkbox"
                                    checked={formData.checkbox} onChange={handleChange}
                                    className="transition focus:outline-none focus:ring-0 cursor-pointer mt-0.5"
                                />
                                <Label htmlFor="checkbox" className="text-text-secondary text-sm">
                                    *I agree to the terms and conditions and understand that a background check may be required for certain volunteer positions.
                                </Label>
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
