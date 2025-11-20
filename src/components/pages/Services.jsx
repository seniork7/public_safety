import { Card, TextInput, Button } from "flowbite-react"
import { HiMiniUserGroup, HiMiniBookOpen, HiFire, HiMiniBellAlert, HiHeart, HiExclamationTriangle, HiChatBubbleBottomCenterText, HiMiniCheckBadge, HiHome, HiCheckCircle, HiMiniArrowRight, HiAcademicCap } from "react-icons/hi2"
import FirstAid from '../../assets/images/FirstAid.jpg'
import CPRTraing from '../../assets/images/cpr-training.jpg'
import FireTraining from '../../assets/images/fire-training.jpg'
import OutReachProgram from '../../assets/images/outreach-program.jpg'
import YouthSafety from '../../assets/images/youth-safety.jpg'
import AwarenessCampaigns from '../../assets/images/awareness-campaigns.jpg'
import DisasterPreparedness from '../../assets/images/disaster-preparedness.jpg'
import HomeSafety from '../../assets/images/home-safety.jpg'
import BabySitting from '../../assets/images/baby-sitting.jpg'
import HandleBtnClick from '../../components/HandleBtnClick.jsx';


const programs = [
    { 
        title: "Emergency Response", 
        text: "Rapid response teams available around the clock for emergency situations, providing critical support when every second counts.", 
        icon: <HiMiniBellAlert />, 
        image: FirstAid, 
        features: [
                "Immediate dispatch and response", 
                "Trained emergency medical technicians", 
                "Crisis management support", 
                "Coordination with local authorities", 
                "Post-incident care and follow-up"
        ] 
    },
    { 
        title: "First Aid & CPR Training", 
        text: "Comprehensive CPR and first aid certification courses designed for all skill levels, from complete beginners to advanced caregivers.", 
        icon: <HiHeart />, 
        image: CPRTraing, 
        features: [
                "AHA/Red Cross certified courses", 
                "Hands-on practice with equipment", 
                "Adult, child, and infant CPR",
                "AED training and certification",
                "Certification valid for 2 years"
        ] 
    },
    { 
        title: "Fire Safety Workshops", 
        text: "Hands-on training sessions focused on fire prevention, safety protocols, and emergency response techniques.", 
        icon: <HiFire />, 
        image: FireTraining, 
        features: [
                "Fire extinguisher training", 
                "Evacuation planning", 
                "Smoke detector installation",
                "Community fire drills",
                "Collaboration with local fire departments"
        ] 
    },
    { 
        title: "Community Outreach Programs", 
        text: "Building stronger, safer neighborhoods through education programs, safety audits, and community engagement events.", 
        icon: <HiMiniUserGroup />, 
        image: OutReachProgram, 
        features: [
                "Neighborhood safety assessments", 
                "Community emergency preparedness", 
                "Senior citizen safety programs",
                "Block watch organization",
                "Monthly community safety events"
        ] 
    },
    { 
        title: "Youth Safety Education", 
        text: "Engaging educational programs that teach young people essential safety skills and develop future community leaders.", 
        icon: <HiMiniBookOpen />, 
        image: YouthSafety, 
        features: [
                "Age-appropriate safety curriculum", 
                "Bullying prevention and response", 
                "Internet and social media safety",
                "Stranger danger awareness",
                "Leadership development activities"
        ] 
    },
    { 
        title: "Public Awareness Campaigns", 
        text: "Campaigns and initiatives to spread awareness about safety practices, emergency preparedness, and accident prevention.", 
        icon: <HiChatBubbleBottomCenterText />, 
        image: AwarenessCampaigns, 
        features: [
                "Seasonal safety campaigns", 
                "Social media safety tips", 
                "Community safety newsletters",
                "Public service announcements",
                "Safety awareness materials distribution"
        ] 
    },
    { 
        title: "Disaster Preparedness Training", 
        text: "Comprehensive training on preparing for natural disasters, creating emergency plans, and building resilient communities.", 
        icon: <HiExclamationTriangle />, 
        image: DisasterPreparedness, 
        features: [
                "Emergency kit preparation", 
                "Evacuation planning", 
                "Natural disaster response",
                "Communication during crises", 
                "Family reunification strategies"
        ] 
    },
    { 
        title: "Home Safety Assessments", 
        text: "Free home safety evaluations to identify hazards and provide recommendations for a safer living environment.", 
        icon: <HiHome />, 
        image: HomeSafety, 
        features: [
                "Comprehensive safety inspection", 
                "Fall prevention assessment", 
                "Carbon monoxide detector check",
                "Electrical safety evaluation",
                "Personalized safety recommendations"
        ] 
    },
    { 
        title: "Babysitter Safety Certification", 
        text: "Comprehensive training for young babysitters covering childcare, safety, and emergency response procedures.", 
        icon: <HiMiniCheckBadge />, 
        image: BabySitting, 
        features: [
                "Child development basics", 
                "Infant and child CPR", 
                "Emergency response protocols",
                "Professional babysitting practices", 
                "Injury prevention"
        ] 
    }
]

const whyChoosePrograms = [
    { title: "Certified Instructors", text: "All our trainers are certified professionals with years of real-world experience in emergency services and safety education.", icon: <HiAcademicCap /> },
    { title: "Recognized Certification", text: "Receive nationally recognized certifications that are accepted by employers and organizations nationwide.", icon: <HiCheckCircle /> },
    { title: "Small Class Sizes", text: "We maintain small class sizes to ensure personalized attention and hands-on practice for every participant.", icon: <HiMiniUserGroup /> }
]

function Services() {
    return (
        <>          
            <section id="services" className="scroll-mt-15">
                <div className="bg-gray-800 flex flex-col items-center justify-center p-8 text-white">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Our Programs & Services</h2>
                    <p className="max-w-xl text-center">Comprehensive safety programs designed to protect, educate, and empower every member of our community through expert training and support.</p>
                </div>

                <div className="flex justify-center items-center">
                    <form className="flex w-full  max-w-md my-8 mx-4">
                        <TextInput
                            id="search"
                            type="text"
                            placeholder="Search Programs..."
                            className="w-full"
                        />
                        <Button 
                            type="submit" 
                            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
                                Search
                        </Button>
                    </form>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                    {programs.map((item, index) => (
                        <Card key={index} className="max-w-sm" imgSrc={item.image}>
                            <h5 className="flex items-center justify-start gap-2 text-2lg font-bold text-gray-900 dark:text-white">
                                <span className="bg-red-500 text-white p-2 rounded-full mr-4 inline-block">
                                    {item.icon}
                                </span>
                                {item.title}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {item.text}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">What's included:</p>
                            <ul className="mb-2">
                                {item.features.map((feature, Index) => (
                                    <li key={Index} className="font-normal text-gray-700 dark:text-gray-400">
                                        <HiCheckCircle className="inline-block mr-2 text-red-500" /> 
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button onClick={() => HandleBtnClick("getInvolved")} className="flex justify-center items-center gap-2 bg-red-500 hover:bg-red-700 text-white hover:underline rounded-lg px-4 py-2 mt-2">
                                Enroll Now
                                <HiMiniArrowRight />
                            </Button>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="bg-gray-100 flex flex-col justify-center items-center py-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our Programs?</h3>
                <p className="text-center max-w-lg px-4">We're committed to providing the highest quality safety education and emergency services.</p>

                <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                    {whyChoosePrograms.map((item, index) => (
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

            <section>
                <article className="flex flex-col justify-center items-center py-8">
                    <h3 className="text-2xl font-bold mb-4">Day in the Life of a Volunteer</h3>
                    <p className="text-center max-w-lg px-4">Our volunteers play a crucial role in our community, dedicating their time and skills to ensure safety and preparedness.</p>

                    <iframe className="rounded-lg my-8" width="80%" height="500" src="https://www.youtube-nocookie.com/embed/RA4uZJz9BeI?si=u2D2Tj6bdmJ_FTQr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
            </section>
        </>
    )
}
export default Services