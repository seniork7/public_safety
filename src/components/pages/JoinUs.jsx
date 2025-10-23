import { Dropdown, DropdownItem, TextInput, Textarea, Button, Label, Checkbox } from "flowbite-react"

function JoinUs() {
    return (
        <>          
            <section className="my-8">
                <div className="bg-gray-800 flex flex-col items-center justify-center mb-8 p-8 text-white">
                    <h2 className="text-4xl text-center font-bold mb-4">Join Our Team</h2>
                    <p className="max-w-xl text-center">Be part of something meaningful. Whether you want to volunteer, receive training, or stay updated with our initiatives, we'd love to have you join us.</p>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center">How to Get Started</h3>
                <p className="text-center px-4">Our simple four-step process gets you from application to active volunteer.</p>

                <div className="flex justify-center items-center">
                    <div className="flex flex-wrap max-w-4xl p-8">
                        <div className="flex flex-col justify-center items-start max-w-sm m-4 p-4 border border-gray-300 rounded-lg">
                            <span className="bg-red-500 w-10 h-10 flex items-center justify-center my-2 font-bold rounded-full text-white text-2xl">1</span>
                            <h5 className="text-lg font-bold">Submit Your Application</h5>
                            <p>Fill out the form below with your information and interests.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start max-w-sm m-4 p-4 border border-gray-300 rounded-lg">
                            <span className="bg-red-500 w-10 h-10 flex items-center justify-center my-2 font-bold rounded-full text-white text-2xl">2</span>
                            <h5 className="text-lg font-bold">Interview</h5>
                            <p>We'll schedule a friendly conversation to learn more about you.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start max-w-sm m-4 p-4 border border-gray-300 rounded-lg">
                            <span className="bg-red-500 w-10 h-10 flex items-center justify-center my-2 font-bold rounded-full text-white text-2xl">3</span>
                            <h5 className="text-lg font-bold">Training</h5>
                            <p>Complete our comprehensive orientation and role-specific training.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start max-w-sm m-4 p-4 border border-gray-300 rounded-lg">
                            <span className="bg-red-500 w-10 h-10 flex items-center justify-center my-2 font-bold rounded-full text-white text-2xl">4</span>
                            <h5 className="text-lg font-bold">Get Started</h5>
                            <p>Begin making an impact in your community by volunteering your time and skills.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-gray-300 flex flex-col justify-center items-center py-8">
                <h3 className="text-2xl font-bold mb-4">Volunteer Application</h3>
                <p className="max-w-xl text-center">Fill out the form below and we'll be in touch within 48 hours.</p>

                <div className="px-4 w-full flex justify-center items-center">
                    <form className="bg-white flex flex-col gap-4 my-8 px-4 w-full max-w-lg rounded-lg p-8 shadow-lg">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-col w-full">
                                <Label htmlFor="firstName" className="dark:text-blue-900">First Name *</Label>
                                <TextInput
                                    className=""
                                    id="firstName"
                                    type="text"
                                    placeholder="John"
                                    required={true}
                                />
                            </div>
                            <div className="flex-col w-full">
                                <Label htmlFor="lastName" className="dark:text-blue-900">Last Name *</Label>
                                <TextInput
                                    className=""
                                    id="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-col w-full">
                                <Label htmlFor="email" className="dark:text-blue-900">Email *</Label>
                                <TextInput
                                    className=""
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                required={true}
                            />
                            </div>
                            <div className="flex-col w-full">
                                <Label htmlFor="phone" className="dark:text-blue-900">Phone Number</Label>
                                <TextInput
                                    className=""
                                    id="phone"
                                    type="tel"
                                    placeholder="(123) 456-7890"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="interest" className="dark:text-blue-900">Role Interested In *</Label>
                            <Dropdown label="Areas of Interest" dismissOnClick={true}>
                                <DropdownItem>First Aid</DropdownItem>
                                <DropdownItem>Community Outreach</DropdownItem>
                                <DropdownItem>Disaster Response</DropdownItem>
                                <DropdownItem>CPR Training</DropdownItem>
                                <DropdownItem>Event Support</DropdownItem>
                                <DropdownItem>Other</DropdownItem>
                            </Dropdown>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-col w-full">
                                <Label htmlFor="experience" className="dark:text-blue-900">Experience Level</Label>
                                <Dropdown label="Experience Level" dismissOnClick={true}>
                                    <DropdownItem>No Experience</DropdownItem>
                                    <DropdownItem>Some Experience</DropdownItem>
                                    <DropdownItem>Certified Professional</DropdownItem>
                                </Dropdown>
                            </div>
                            <div className="flex-col w-full">
                                <Label htmlFor="availability" className="dark:text-blue-900">Availability</Label>
                                <Dropdown label="Availability" dismissOnClick={true}>
                                    <DropdownItem>Weekdays</DropdownItem>
                                    <DropdownItem>Weekends</DropdownItem>
                                    <DropdownItem>Evenings</DropdownItem>
                                    <DropdownItem>Flexible</DropdownItem>
                                </Dropdown>
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="interest" className="dark:text-blue-900">Why do you want to volunteer? *</Label>
                            <Textarea
                                id="interest"
                                placeholder="Tell us why you want to volunteer..."
                                required={true}
                            />
                        </div>
                        <div>
                            <Checkbox id="terms" required={true}/>
                            <Label htmlFor="terms" className="ml-2 dark:text-blue-900">I agree to the terms and conditions and understand that a background check may be required for certain volunteer positions. *</Label>
                        </div>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Submit Application</Button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default JoinUs