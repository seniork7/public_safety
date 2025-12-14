import Card from '../elements/Card.jsx'
import TextInput from '../elements/TextInput.jsx'
import Button from '../elements/Button.jsx'
import { HiMiniUserGroup, HiCheckCircle, HiMiniArrowRight, HiAcademicCap, HiChevronRight } from "react-icons/hi2"
import FirstAid from '../../assets/images/FirstAid.jpg'
import CPRTraing from '../../assets/images/cpr-training.jpg'
import FireTraining from '../../assets/images/fire-training.jpg'
import OutReachProgram from '../../assets/images/outreach-program.jpg'
import YouthSafety from '../../assets/images/youth-safety.jpg'
import AwarenessCampaigns from '../../assets/images/awareness-campaigns.jpg'
import DisasterPreparedness from '../../assets/images/disaster-preparedness.jpg'
import HomeSafety from '../../assets/images/home-safety.jpg'
import BabySitting from '../../assets/images/baby-sitting.jpg'
import HandleBtnClick from '../../components/HandleBtnClick.jsx'
import { useState, useEffect } from "react"

const programs = [
    { 
        title: "Emergency Response", 
        text: "Rapid response teams available around the clock for emergency situations, providing critical support when every second counts.",  
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
    { 
        title: "Certified Instructors", 
        text: "All our trainers are certified professionals with years of real-world experience in emergency services and safety education.", 
        icon: <HiAcademicCap /> },
    { 
        title: "Recognized Certification", 
        text: "Receive nationally recognized certifications that are accepted by employers and organizations nationwide.", 
        icon: <HiCheckCircle /> },
    { 
        title: "Small Class Sizes", 
        text: "We maintain small class sizes to ensure personalized attention and hands-on practice for every participant.", 
        icon: <HiMiniUserGroup /> }
]

function Services() {
    const [active, setActive] = useState(null)
    const [searchItem, setSearchItem] = useState("")
    const [filteredPrograms, setFilteredPrograms] = useState(programs)

    useEffect(() => {
        const searchProgram = programs.filter(program =>
            program.title.toLowerCase().includes(searchItem.toLowerCase())
        )
        setFilteredPrograms(searchProgram)
    }, [searchItem])

    return (
        <>          
            <section id="services" className="scroll-mt-30 text-primary">
                <div className="flex flex-col items-center justify-center p-8 text-text-primary bg-bg">
                    <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Our Programs & Services</h2>
                    <p className="max-w-xl text-center text-text-secondary">Comprehensive safety programs designed to protect, educate, and empower every member of our community through expert training and support.</p>
                    <div className="flex justify-center items-center w-full">
                        <div className="flex flex-col md:flex-row gap-2 w-full  max-w-md mt-8 mx-4">
                            <TextInput
                                onChange={(e) => setSearchItem(e.target.value)}
                                id="search"
                                value={searchItem}
                                type="text"
                                placeholder="Search Programs..."
                                className="w-full"
                            />

                            <Button className="bg-accent-secondary hover:bg-accent-primary text-surface hover:text-text-primary font-bold py-2 px-8 rounded-lg cursor-pointer transition hover:scale-95 duration-700"
                            onClick={() => setSearchItem("")}
                            value={setSearchItem}>
                                Clear
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="py-15  bg-surface">
                    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-start gap-8 container mx-auto px-2 lg:px-8">
                        {filteredPrograms.length === 0 ? (
                            <p className="text-accent-primary">No program found matching your search.</p>
                        ) : (
                            filteredPrograms.map((item, i) => (
                                <div 
                                    key={i}
                                    className="group border border-border rounded-lg lg:max-w-[30%] bg-surface lg:hover:border-accent-primary transition-all duration-700 cursor-pointer"
                                    onClick={() => setActive(active === i ? null : i)}
                                >
                                    <div className="flex justify-between items-center p-4">
                                        <h3 className="text-text-primary font-semibold tracking-wide group-hover:text-accent-primary transition">
                                            {item.title}
                                        </h3>

                                        <span className={`text-accent-primary font-bold text-xl transition-transform duration-300
                                        ${active === i ? "rotate-90" : ""}`}>
                                        <HiChevronRight />
                                        </span>
                                    </div>

                                    <div className={`${active === i ? "max-h-full" : "max-h-0"} overflow-hidden transition-all duration-500`}>
                                        <img src={item.image} alt="" className="w-50px h-auto"/>
                                        <p className="p-2 text-text-secondary">
                                        {item.text}
                                        </p>
                                        <ul className="mb-2 p-2">
                                            {item.features.map((feature, Index) => (
                                                <li key={Index} className="text-text-secondary">
                                                    <HiCheckCircle className="inline-block mr-2 text-success" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Button onClick={() => HandleBtnClick("getInvolved")} className="flex justify-center items-center gap-2 bg-accent-secondary hover:bg-accent-primary text-surface hover:text-text-primary hover:underline rounded-lg mt-2 transition-all duration-700 cursor-pointer w-full">
                                            Enroll Now
                                            <HiMiniArrowRight />
                                        </Button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            <section className="bg-bg text-text-primary">
                <div className="container mx-auto px-2 lg:px-8 py-10 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Our Programs?</h3>
                    <p className="text-center max-w-lg px-4 text-text-secondary">We're committed to providing the highest quality safety education and emergency services.</p>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 my-8 px-4 md:px-8 lg:h-50">
                        {whyChoosePrograms.map((item, index) => (
                            <Card
                                key={index}
                                className="group relative p-6 bg-surface hover:border-b-5 rounded-lg hover:border-b-accent-primary lg:hover:rotate-y-20 transition-all duration-700"
                                >
                                <h3 className="flex items-center justify-start gap-2 text-lg font-bold text-text-primary transition-colors duration-300">
                                    <span className="bg-success text-surface p-2 rounded-full mr-4 inline-block transition duration-700 card-icon">
                                        {item.icon}
                                    </span>
                                    {item.title}
                                </h3>
                                <p className="text-text-secondary mt-2 w-full lg:w-xs">
                                    {item.text}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>  
            </section>

            <section className=" bg-surface text-text-primary">
                <article className="flex flex-col justify-center items-center py-15">
                    <h3 className="text-2xl font-bold mb-4">Day in the Life of a Volunteer</h3>
                    <p className="text-center max-w-lg px-4 text-text-secondary">Our volunteers play a crucial role in our community, dedicating their time and skills to ensure safety and preparedness.</p>

                    <iframe className="rounded-lg my-8" width="80%" height="500" src="https://www.youtube-nocookie.com/embed/RA4uZJz9BeI?si=u2D2Tj6bdmJ_FTQr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
            </section>
        </>
    )
}
export default Services