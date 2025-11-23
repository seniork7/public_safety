import { Dropdown, DropdownItem, TextInput, Textarea, Button, Label, Checkbox } from "flowbite-react"

function JoinUs() {
    return (
        <>          
            <section id="joinUs" className="scroll-mt-15">
                <div className="bg-[#080808] flex flex-col items-center justify-center p-8 text-white">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Join Our Team</h2>
                    <p className="max-w-xl text-center">Be part of something meaningful. Whether you want to volunteer, receive training, or stay updated with our initiatives, we'd love to have you join us.</p>
                </div>

                <div className="bg-[#f5f5f5] dark:bg-[#080808] text-[#080808] dark:text-[#f5f5f5] py-15">
                    <div className="container mx-auto px-2 lg:px-8 flex flex-col justify-center items-center">
                        <h3 className="text-2xl font-bold mb-4 text-center">How to Get Started</h3>
                        <p className="text-center px-4">Our simple four-step process gets you from application to active volunteer.</p>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-wrap justify-center items-center w-full p-4">
                                <div className="flex flex-col justify-center items-start w-xs md:w-2xl bg-[#f5f5f5] dark:bg-[#E53935]/50 shadow-lg border-0 dark:border-[#E53935] lg:w-sm m-4 p-4 rounded-lg">
                                    <h5 className="text-lg font-bold flex items-center justify-start gap-2 mb-3">
                                        <span className="bg-[#E53935] dark:bg-[#E53935] w-7 h-7 flex items-center justify-center  font-bold rounded-full text-white text-lg">1</span>
                                        Submit Your Application
                                    </h5>
                                    <p>Fill out the form below with your information and interests.</p>
                                </div>
                                <div className="flex flex-col justify-center items-start bg-[#f5f5f5] dark:bg-[#E53935]/50 shadow-lg border-0  dark:border-[#E53935] w-xs md:w-2xl lg:w-sm m-4 p-4 rounded-lg">
                                    <h5 className="text-lg font-bold flex items-center justify-start gap-2 mb-3">
                                        <span className="bg-red-500 w-7 h-7 flex items-center justify-center font-bold rounded-full text-white text-lg">2</span>
                                        Interview
                                    </h5>
                                    <p>We'll schedule a friendly conversation to learn more about you.</p>
                                </div>
                                <div className="flex flex-col justify-center items-start w-xs md:w-2xl lg:w-sm m-4 p-4 bg-[#f5f5f5] dark:bg-[#E53935]/50 shadow-lg border-0 dark:border-[#E53935] rounded-lg">
                                    <h5 className="text-lg font-bold flex items-center justify-start gap-2 mb-3">
                                        <span className="bg-red-500 w-7 h-7 flex items-center justify-center font-bold rounded-full text-white text-lg">3</span>
                                        Training
                                    </h5>
                                    <p>Complete our comprehensive orientation and role-specific training.</p>
                                </div>
                                <div className="flex flex-col justify-center items-start w-xs md:w-2xl lg:w-sm m-4 p-4 bg-[#f5f5f5] dark:bg-[#E53935]/50 shadow-lg border-0 dark:border-[#E53935] rounded-lg">
                                    <h5 className="text-lg font-bold flex items-center justify-start gap-2 mb-3">
                                        <span className="bg-[#E53935] dark:bg-[#E53935] w-7 h-7 flex items-center justify-center font-bold rounded-full text-white text-lg">4</span>
                                        Get Started
                                    </h5>
                                    <p>Begin making an impact in your community by volunteering your time and skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="getInvolved" className="bg-[#f5f5f5] dark:bg-[#080808] text-[#080808] dark:text-[#f5f5f5] scroll-mt-15">
                <div className="container mx-auto px-2 lg:px-8 py-15 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold mb-4">Volunteer Application</h3>
                    <p className="max-w-xl text-center">Fill out the form below and we'll be in touch within 48 hours.</p>
                    <div className="px-4 w-full flex justify-center items-center">
                        <form className="bg-[#f5f5f5] dark:bg-[#1e1e1e] flex flex-col gap-4 my-8 px-4 w-full max-w-lg rounded-lg shadow-lg p-8">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-col w-full">
                                    <Label htmlFor="firstName" className="text-gray-900">First Name *</Label>
                                    <TextInput
                                        className=""
                                        id="firstName"
                                        type="text"
                                        placeholder="John"
                                        required={true}
                                    />
                                </div>
                                <div className="flex-col w-full">
                                    <Label htmlFor="lastName" className="text-gray-900">Last Name *</Label>
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
                                    <Label htmlFor="email" className="text-gray-900">Email *</Label>
                                    <TextInput
                                        className=""
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                    required={true}
                                />
                                </div>
                                <div className="flex-col w-full">
                                    <Label htmlFor="phone" className="text-gray-900">Phone Number</Label>
                                    <TextInput
                                        className=""
                                        id="phone"
                                        type="tel"
                                        placeholder="(123) 456-7890"
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between items-center md:flex-row gap-4">
                                <div className="w-full">
                                    <Label htmlFor="gender" className="">Gender *</Label>
                                    <Dropdown label="Select Gender" dismissOnClick={true} className="bg-white text-gray-900 focus:outline-none focus:ring-0 cursor-pointer">
                                        <DropdownItem>Male</DropdownItem>
                                        <DropdownItem>Female</DropdownItem>
                                        <DropdownItem>Non-binary</DropdownItem>
                                        <DropdownItem>Prefer not to say</DropdownItem>
                                        <DropdownItem>Other</DropdownItem>
                                    </Dropdown>
                                </div>
                                <div className="w-full">
                                    <Label htmlFor="interest" className="">Role Interested In *</Label>
                                    <Dropdown label="Areas of Interest" dismissOnClick={true} className="bg-white text-gray-900 focus:outline-none focus:ring-0 cursor-pointer">
                                        <DropdownItem>First Aid</DropdownItem>
                                        <DropdownItem>Community Outreach</DropdownItem>
                                        <DropdownItem>Disaster Response</DropdownItem>
                                        <DropdownItem>CPR Training</DropdownItem>
                                        <DropdownItem>Event Support</DropdownItem>
                                        <DropdownItem>Other</DropdownItem>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-col w-full">
                                    <Label htmlFor="experience" className="">Experience Level</Label>
                                    <Dropdown label="Experience Level" dismissOnClick={true} className="bg-white text-gray-900 focus:outline-none focus:ring-0 cursor-pointer">
                                        <DropdownItem>No Experience</DropdownItem>
                                        <DropdownItem>Some Experience</DropdownItem>
                                        <DropdownItem>Certified Professional</DropdownItem>
                                    </Dropdown>
                                </div>
                                <div className="flex-col w-full">
                                    <Label htmlFor="availability" className="">Availability</Label>
                                    <Dropdown label="Availability" dismissOnClick={true} className="bg-white text-gray-900 focus:outline-none focus:ring-0 cursor-pointer">
                                        <DropdownItem>Weekdays</DropdownItem>
                                        <DropdownItem>Weekends</DropdownItem>
                                        <DropdownItem>Evenings</DropdownItem>
                                        <DropdownItem>Flexible</DropdownItem>
                                    </Dropdown>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="interest" className="">Why do you want to volunteer? *</Label>
                                <Textarea
                                    id="interest"
                                    placeholder="Tell us why you want to volunteer..."
                                    required={true}
                                />
                            </div>
                            <div>
                                <Checkbox id="terms" required={true} className="transition focus:outline-none focus:ring-0 cursor-pointer"/>
                                <Label htmlFor="terms" className="ml-2">I agree to the terms and conditions and understand that a background check may be required for certain volunteer positions. *</Label>
                            </div>
                            <Button type="submit" className="bg-[#E53935] hover:bg-[#ff3243] dark:bg-[#eed202] dark:hover:bg-[#fff312] text-[#f5f5f5] dark:text-[#0f1115] transition focus:outline-none focus:ring-0 cursor-pointer">Submit Application</Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default JoinUs