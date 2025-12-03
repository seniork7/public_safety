import Card from '../elements/Card'
import { HiMiniUserGroup, HiHeart, HiExclamationTriangle, HiMiniRocketLaunch } from "react-icons/hi2"
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
    { name: "Medical Services", role: "Healthcare professionals on standby", image: Medical }
]

function About() {
    return (
        <>
            <section id="about" className="scroll-mt-15 text-primary bg-bg">
                <div className="flex flex-col items-center justify-center p-4">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">About Us</h2>
                    <p className="max-w-xl text-center">For 25 years, we've been dedicated to building safer & stronger communities through volunteer service, emergency response, and comprehensive safety education.</p>
                </div>

                <div className="">
                    <article className="flex flex-col md:flex-row items-start justify-center gap-8 py-15 px-8 bg-surface">
                        <div className="max-w-lg">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Our Missions</h3>
                            <p className="text-secondary">
                                Public Safety is dedicated to enhancing community safety through training, resources, and support. Our mission is to empower communities through comprehensive safety education, rapid emergency response, and volunteer-driven initiatives that protect lives, prevent crises, and build long-term resilience in the face of challenges.
                            </p>
                        </div>
                        <div className="max-w-lg">
                            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                            <p className="text-secondary">
                                A world where every community member has the knowledge, skills, and support to protect themselves and others in emergencies, creating a network of prepared and compassionate citizens ready to make a difference.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="text-primary bg-bg py-8">
                <div className="container mx-auto px-2 lg:px-8 my-15 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                    <p className="text-center md:w-1/2 text-secondary">These principles guide everything we do and shape how we serve our community.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                        {values.map((item, index) => (
                            <Card key={index} className="w-xs md:w-2xl lg:w-lg bg-surface border border-color">
                                <h5 className="flex items-center justify-start gap-2 text-lg font-bold text-primary">
                                    <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block">
                                    {item.icon}
                                    </span>
                                    {item.title}
                                </h5>
                                <p className="text-secondary">
                                    {item.text}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="text-primary bg-surface">
                <div className="container mx-auto px-2 lg:px-8 flex flex-col justify-center items-center py-8">
                    <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
                    <p className="text-center max-w-lg px-4 text-secondary">Our dedicated team of volunteers is the backbone of our organization, working tirelessly to keep our community safe.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                        {team.map((item, index) => (
                            <Card key={index} className="w-xs md:w-lg bg-bg border border-color overflow-hidden shadow-lg rounded-lg">
                                <img src={item.image} alt={item.name} className="w-full h-80 object-cover rounded-lg" />
                                <div className="p-4">
                                    <h5 className="text-lg font-bold text-primary">
                                        {item.name}
                                    </h5>
                                    <p className="text-secondary">
                                        {item.role}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default About