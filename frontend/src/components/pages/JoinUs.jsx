import Select from '../elements/Select'
import TextInput from '../elements/TextInput'
import Textarea from '../elements/Textarea'
import Button from '../elements/Button'
import Label from '../elements/Label'
import Checkbox from '../elements/Checkbox'
// import InputMask from "react-input-mask"
import { API_URL } from '../../utils'
import { useState } from 'react'

function JoinUs() {
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

        const emptyFields = Object.keys(formData).filter(key => {
        if (key === 'checkbox') return !formData[key]
            return !formData[key].trim()
        })

        if (emptyFields.length > 0) {
            setformError('Please complete all required fields.')
            setformSuccess('')

            setInvalidFields(emptyFields)

            return
        }

        try {
            const response = await fetch(`${API_URL}/api/volunteers`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
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
            } else {
                throw new Error('Form submission failed')
            }
        } catch (error) {
            setformError('There was a problem submitting your application. Please try again later!')
        }
    }

    return (
        <>          
            <section id="joinUs" className="scroll-mt-45 lg:scroll-mt-30  bg-bg text-text-primary">
                <div className="flex flex-col items-center justify-center p-8">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Join Our Team</h2>
                    <p className="max-w-xl text-center text-text-secondary">Be part of something meaningful. Whether you want to volunteer, receive training, or stay updated with our initiatives, we'd love to have you join us.</p>
                </div>

                <div className="bg-surface py-15">
                    <div className="container mx-auto px-2 lg:px-8 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold mb-4 text-center">How to Get Started</h3>
                        <p className="text-center md:w-1/2 text-text-secondary">Our simple four-step process gets you from application to active volunteer.</p>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-wrap justify-center items-center gap-7 my-10 px-4 md:px-8">
                                <div className="group w-xs md:w-lg pl-6 border-l-4 border-accent-primary  hover:border-accent-secondary transition-all duration-700">
                                    <h5 className="text-lg font-bold flex items-center justify-start gap-2 mb-3 group-hover:text-accent-secondary transition duration-700">
                                        <span className="bg-accent-primary text-text-primary group-hover:text-surface w-7 h-7 flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-accent-secondary transition duration-700">1</span>
                                        Submit Your Application
                                    </h5>
                                    <p className="text-text-secondary mt-1  max-w-lg overflow-hidden transition-all duration-700">Fill out the form below with your information and interests.</p>
                                </div>
                                <div className="group w-xs md:w-lg pl-6 border-l-4 border-accent-primary  hover:border-accent-secondary transition-all duration-700">
                                    <h5 className="text-lg font-bold flex items-center justify-start gap-2 mb-3 group-hover:text-accent-secondary transition duration-700">
                                        <span className="bg-accent-primary text-text-primary group-hover:text-surface w-7 h-7 flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-accent-secondary transition duration-700">2</span>
                                        Interview
                                    </h5>
                                    <p className="text-text-secondary mt-1  max-w-lg overflow-hidden transition-all duration-700">We'll schedule a friendly conversation to learn more about you.</p>
                                </div>
                                <div className="group w-xs md:w-lg pl-6 border-l-4 border-accent-primary  hover:border-accent-secondary transition-all duration-700">
                                    <h5 className="text-lg font-bold flex items-center justify-start gap-2 mb-3 group-hover:text-accent-secondary transition duration-700">
                                        <span className="bg-accent-primary text-text-primary group-hover:text-surface w-7 h-7 flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-accent-secondary transition duration-700">3</span>
                                        Training
                                    </h5>
                                    <p className="text-text-secondary mt-1  max-w-lg overflow-hidden transition-all duration-700">Complete our comprehensive orientation and role-specific training.</p>
                                </div>
                                <div className="group w-xs md:w-lg pl-6 border-l-4 border-accent-primary  hover:border-accent-secondary transition-all duration-700">
                                    <h5 className="text-lg font-bold flex items-center justify-start gap-2 mb-3 group-hover:text-accent-secondary transition duration-700">
                                        <span className="bg-accent-primary text-text-primary group-hover:text-surface w-7 h-7 flex items-center justify-center font-bold rounded-full text-lg group-hover:bg-accent-secondary transition duration-700">4</span>
                                        Get Started
                                    </h5>
                                    <p className="text-text-secondary mt-1  max-w-lg overflow-hidden transition-all duration-700">Begin making an impact in your community by volunteering your time and skills.</p>
                                </div>
                            </div>
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
                        <form onSubmit={handleSubmit} className="bg-bg flex flex-col gap-4 my-8 px-4 w-full max-w-lg rounded-lg shadow-lg p-8">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-col w-full">
                                    <Label htmlFor="fName" className="">*First Name</Label>
                                    <TextInput
                                        className=""
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
                                        className=""
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
                                        className=""
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
                                    {/* <InputMask
                                        mask="999-999-9999"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="123-456-7890"
                                    >
                                        {(inputProps) => <input type="tel" {...inputProps} />}
                                    </InputMask> */}
                                    <TextInput
                                        className=""
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
                                    <Select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
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
                                    <Select id="role" name="role" value={formData.role} onChange={handleChange}>
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
                                    <Select id="experience" name="experience" value={formData.experience} onChange={handleChange}>
                                        <option>-- choose an option --</option>
                                        <option>No Experience</option>
                                        <option>Some Experience</option>
                                        <option>Certified Professional</option>
                                    </Select>
                                </div>
                                <div className="flex-col w-full">
                                    <Label htmlFor="availability" className="">*Availability</Label>
                                    <Select id="availability" name="availability" value={formData.availability} onChange={handleChange}>
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
                                    className=""
                                    rows={4}
                                    placeholder="Tell us why you want to volunteer..."
                                />
                            </div>
                            <div className="flex items-center">
                                <Checkbox id="checkbox" name="checkbox" checked={formData.checkbox} onChange={handleChange} className="transition focus:outline-none focus:ring-0 cursor-pointer"/>
                                <Label htmlFor="checkbox" className="ml-2 text-secondary">*I agree to the terms and conditions and understand that a background check may be required for certain volunteer positions.</Label>
                            </div>
                            <Button type="submit" id="submitVolunteer" className="w-full p-2 mt-5 rounded-lg font-semibold bg-accent-secondary hover:bg-accent-primary hover:text-text-primary text-bg cursor-pointer transition duration-700 hover:scale-98">Submit Application</Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default JoinUs