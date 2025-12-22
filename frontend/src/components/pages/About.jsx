import Card from '../elements/Card'
import { HiMiniUserGroup, HiHeart, HiExclamationTriangle, HiMiniRocketLaunch } from "react-icons/hi2"
import EmergencyResponse from '../../assets/images/emergency-response.jpg'
import Education from '../../assets/images/education.jpg'
import OutReach from '../../assets/images/outreach.jpg'
import Leadership from '../../assets/images/leadership.jpg'
import Disaster from '../../assets/images/disaster.jpg'
import Medical from '../../assets/images/medical.jpg'

const values = [
    { 
        title: "Safety First", 
        text: "We prioritize the safety and well-being of every community member in everything we do. Our rigorous training and protocols ensure the highest standards of care.",
    },
    { 
        title: "Compassion", 
        text: "Our volunteers serve with empathy, understanding, and genuine care for those in need. We believe in treating everyone with dignity and respect."
    },
    { 
        title: "Community", 
        text: "We believe in the power of unity and collaboration to create lasting positive change. Together, we are stronger and more effective."
    },
    { 
        title: "Excellence", 
        text: "We continuously strive for the highest quality in our training, response, and service delivery. Mediocrity has no place in emergency services."
    }
]

const team = [
    { 
        name: "First Aid Team", 
        role: "First aiders trained in basic life support ready to respond", 
        image: EmergencyResponse 
    },
    { 
        name: "Training & Education", 
        role: "Certified instructors providing safety education and training", 
        image: Education 
    },
    { 
        name: "Community Outreach", 
        role: "Building connections through engagement and support", 
        image: OutReach 
    },
    { 
        name: "Management Team", 
        role: "Experienced leaders guiding our mission and vision", 
        image: Leadership 
    },
    { 
        name: "Disaster Preparedness", 
        role: "Planning for emergency situations and response strategies", 
        image: Disaster 
    },
    { 
        name: "Medical Services", 
        role: "Healthcare professionals on standby", 
        image: Medical 
    }
]

function About() {
    return (
        <>
            <section id="about" className="scroll-mt-45 lg:scroll-mt-30 text-text-primary bg-bg">
                <div className="flex flex-col items-center justify-center p-4">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">About Us</h2>
                    <p className="max-w-xl text-center text-text-secondary">For 25 years, we've been dedicated to building safer & stronger communities through volunteer service, emergency response, and comprehensive safety education.</p>
                </div>

                <div className="">
                    <article className="flex flex-col md:flex-row items-start justify-center gap-8 py-15 px-8 bg-surface">
                        <div className="max-w-lg">
                            <h3 className="text-2xl font-bold mb-4 text-text-primary">Our Missions</h3>
                            <p className="text-text-secondary">
                                Public Safety is dedicated to enhancing community safety through training, resources, and support. Our mission is to empower communities through comprehensive safety education, rapid emergency response, and volunteer-driven initiatives that protect lives, prevent crises, and build long-term resilience in the face of challenges.
                            </p>
                        </div>
                        <div className="max-w-lg">
                            <h3 className="text-2xl font-bold mb-4 text-text-primary">Our Vision</h3>
                            <p className="text-text-secondary">
                                A world where every community member has the knowledge, skills, and support to protect themselves and others in emergencies, creating a network of prepared and compassionate citizens ready to make a difference.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="text-text-primary bg-bg py-8">
                <div className="container mx-auto px-2 lg:px-8 my-15 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                    <p className="text-center md:w-1/2 text-text-secondary">These principles guide everything we do and shape how we serve our community.</p>
                    <div className="flex flex-wrap justify-center items-center gap-7 my-10 px-4 md:px-8">
                        {values.map((item, index) => (
                        <div className="group pl-6 border-l-4 border-accent-primary  hover:border-accent-secondary transition-all duration-700">
                            <h3 className="text-2xl font-semibold text-text-primary group-hover:text-accent-secondary transition duration-700">
                                {item.title}
                            </h3>
                            <p className="text-text-secondary mt-1  max-w-lg overflow-hidden transition-all duration-700">
                                {item.text}
                            </p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="text-text-primary bg-surface">
                <div className="container mx-auto px-2 lg:px-8 flex flex-col justify-center items-center py-8">
                    <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
                    <p className="text-center max-w-lg px-4 text-text-secondary">Our dedicated team of volunteers is the backbone of our organization, working tirelessly to keep our community safe.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                        {team.map((item, index) => (
                            <Card key={index} className="relative group w-64 h-80 bg-bg rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-700 lg:hover:rotate-y-20">
                                <img src={item.image} alt={item.name} className="object-cover w-full h-full rounded-lg" />
                                <div className="absolute inset-0 text-text-primary flex flex-col items-center justify-end lg:justify-center opacity-100 lg:opacity-0 lg:translate-y-4 group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-700">
                                    <span className="bg-bg/90 text-center p-5">
                                        <h5 className="text-lg font-semibold text-text-primary">
                                            {item.name}
                                        </h5>
                                        <p className="text-sm max-w-xs opacity-80">
                                            {item.role}
                                        </p>
                                    </span>
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