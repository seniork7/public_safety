import { Card } from "flowbite-react"
import { HiMiniUserGroup, HiHeart, HiExclamationTriangle, HiMiniRocketLaunch } from "react-icons/hi2"
import FirstAid from '../../assets/images/FirstAid.jpg'
import EmergencyResponse from '../../assets/images/emergency-response.jpg'
import Education from '../../assets/images/education.jpg'
import OutReach from '../../assets/images/outreach.jpg'
import Leadership from '../../assets/images/leadership.jpg'
import Disaster from '../../assets/images/disaster.jpg'
import Medical from '../../assets/images/medical.jpg'

const values = [
    { title: "Safety First", text: "We prioritize the safety and well-being of every community member in everything we do. Our rigorous training and protocols ensure the highest standards of care.", icon: <HiExclamationTriangle /> },
    { title: "Compassion", text: "Our volunteers serve with empathy, understanding, and genuine care for those in need. We believe in treating everyone with dignity and respect.", icon: <HiHeart /> },
    { title: "Community", text: "We believe in the power of unity and collaboration to create lasting positive change. Together, we are stronger and more effective.", icon: <HiMiniUserGroup /> },
    { title: "Excellence", text: "We continuously strive for the highest quality in our training, response, and service delivery. Mediocrity has no place in emergency services.", icon: <HiMiniRocketLaunch /> }
]

const team = [
    { name: "First Aid Team", role: "First aiders trained in basic life support ready to respond", image: EmergencyResponse },
    { name: "Training & Education", role: "Certified instructors providing safety education and training", image: Education },
    { name: "Community Outreach", role: "Building connections through engagement and support", image: OutReach },
    { name: "Management Team", role: "Experienced leaders guiding our mission and vision", image: Leadership },
    { name: "Disaster Preparedness", role: "Planning for emergency situations and response strategies", image: Disaster },
    { name: "Medical Services", role: "Healthcare professionals on standby to provide immediate care", image: Medical }
]

function About() {
    return (
        <>
            <section id="about" className="scroll-mt-15 text-[#080808] dark:text-[#f5f5f5]">
                <div className="bg-[#080808] flex flex-col items-center justify-center p-4 text-white">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">About Us</h2>
                    <p className="max-w-xl text-center">For 25 years, we've been dedicated to building safer & stronger communities through volunteer service, emergency response, and comprehensive safety education.</p>
                </div>

                <div className="">
                    <article className="flex flex-col md:flex-row items-start justify-center gap-8 py-15 px-8 bg-[#f5f5f5] dark:bg-[#080808]">
                        <div className="max-w-lg">
                            <h3 className="text-2xl font-bold mb-4">Our Missions</h3>
                            <p className="">
                                Public Safety is dedicated to enhancing community safety through training, resources, and support. Our mission is to empower communities through comprehensive safety education, rapid emergency response, and volunteer-driven initiatives that protect lives, prevent crises, and build long-term resilience in the face of challenges.
                            </p>
                        </div>
                        <div className="max-w-lg">
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p>
                                A world where every community member has the knowledge, skills, and support to protect themselves and others in emergencies, creating a network of prepared and compassionate citizens ready to make a difference.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="text-[#080808] dark:text-[#f5f5f5] bg-[#f5f5f5] dark:bg-[#080808] py-8">
                <div className="container mx-auto px-2 lg:px-8 my-15 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                    <p className="text-center md:w-1/2">These principles guide everything we do and shape how we serve our community.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                        {values.map((item, index) => (
                            <Card key={index} className="w-xs md:w-2xl lg:w-lg bg-[#f5f5f5] dark:bg-[#E53935]/50  border-0 border-[#E53935] dark:border-[#E53935] shadow-lg">
                                <h5 className="flex items-center justify-start gap-2 text-lg font-bold">
                                    <span className="bg-[#E53935] dark:bg-[#E53935] text-[#080808] dark:text-[#f5f5f5] p-2 rounded-full mr-4 inline-block">
                                    {item.icon}
                                    </span>
                                    {item.title}
                                </h5>
                                <p className="">
                                    {item.text}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="text-[#080808] dark:text-[#f5f5f5] bg-[#f5f5f5] dark:bg-[#080808]">
                <div className="container mx-auto px-2 lg:px-8 flex flex-col justify-center items-center py-8">
                    <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
                    <p className="text-center max-w-lg px-4">Our dedicated team of volunteers is the backbone of our organization, working tirelessly to keep our community safe.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                        {team.map((item, index) => (
                            <div key={index} className="w-xs md:w-lg bg-[#f5f5f5] dark:bg-[#E53935]/50 overflow-hidden shadow-lg rounded-lg">
                                <img src={item.image} alt={item.name} className="w-full h-80 object-cover" />
                                <div className="p-4">
                                    <h5 className="text-lg font-bold">
                                        {item.name}
                                    </h5>
                                    <p className="">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default About