import { Card } from "flowbite-react"
import { HiMiniUserGroup, HiHeart, HiExclamationTriangle, HiMiniRocketLaunch } from "react-icons/hi2"
import FirstAid from '../../assets/images/FirstAid.jpg'

const values = [
    { title: "Safety First", text: "We prioritize the safety and well-being of every community member in everything we do. Our rigorous training and protocols ensure the highest standards of care.", icon: <HiExclamationTriangle /> },
    { title: "Compassion", text: "Our volunteers serve with empathy, understanding, and genuine care for those in need. We believe in treating everyone with dignity and respect.", icon: <HiHeart /> },
    { title: "Community", text: "We believe in the power of unity and collaboration to create lasting positive change. Together, we are stronger and more effective.", icon: <HiMiniUserGroup /> },
    { title: "Excellence", text: "We continuously strive for the highest quality in our training, response, and service delivery. Mediocrity has no place in emergency services.", icon: <HiMiniRocketLaunch /> }
]

const team = [
    { name: "Emergency Response Team", role: "First responders trained in medical emergencies", image: FirstAid },
    { name: "Training & Education", role: "Certified instructors providing safety education", image: FirstAid },
    { name: "Community Outreach", role: "Building connections through engagement and support", image: FirstAid },
    { name: "Leadership Team", role: "Experienced leaders guiding our mission", image: FirstAid },
    { name: "Disaster Preparedness", role: "Planning for emergency situations", image: FirstAid },
    { name: "Medical Services", role: "Healthcare professionals on standby", image: FirstAid }
]

function About() {
    return (
        <>
            <section className="mt-8">
                <div className="bg-gray-800 flex flex-col items-center justify-center p-8 text-white">
                    <h2 className="text-4xl text-center font-bold mb-4">About Us</h2>
                    <p className="max-w-xl text-center">For 25 years, we've been dedicated to building safer & stronger communities through volunteer service, emergency response, and comprehensive safety education.</p>
                </div>

                <article className="flex flex-col md:flex-row items-start justify-center gap-8 my-8 px-4">
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
            </section>

            <section className="bg-gray-300 flex flex-col justify-center items-center py-8">
                <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                <p className="text-center">These principles guide everything we do and shape how we serve our community.</p>

                <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                    {values.map((item, index) => (
                        <Card key={index} className="max-w-sm">
                            <h5 className="flex items-center justify-start gap-2 text-lg font-bold text-gray-900 dark:text-white">
                                <span className="bg-red-500 text-white p-2 rounded-full mr-4 inline-block">
                                {item.icon}
                                </span>
                                {item.title}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {item.text}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="bg-gray-100 flex flex-col justify-center items-center py-8">
                <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
                <p className="text-center max-w-lg px-4">Our dedicated team of volunteers is the backbone of our organization, working tirelessly to keep our community safe.</p>

                <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                    {team.map((item, index) => (
                        <Card key={index} className="max-w-sm" imgSrc={item.image}>
                            <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                                {item.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {item.role}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    )
}
export default About