import TextInput from '../components/form_elements/TextInput.jsx'
import Button from '../components/form_elements/Button.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { useState, useEffect } from "react"
import EmergencyResponseImg from '../assets/images/emergency-response.jpg'
import FirstAidImg from '../assets/images/cpr-training.jpg'
import FireSafetyImg from '../assets/images/fire-training.jpg'
import OutreachImg from '../assets/images/outreach-program.jpg'
import YouthSafetyImg from '../assets/images/youth-safety.jpg'
import AwarenessImg from '../assets/images/awareness-campaigns.jpg'
import DisasterImg from '../assets/images/disaster-preparedness.jpg'
import HomeSafetyImg from '../assets/images/home-safety.jpg'
import BabysitterImg from '../assets/images/baby-sitting.jpg'

const programs = [
    {
        title: "Emergency Response",
        image: EmergencyResponseImg,
        text: "Rapid response teams available around the clock for emergency situations, providing critical support.",
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
        image: FirstAidImg,
        text: "Comprehensive CPR and first aid certification courses designed for all skill levels, from complete beginners to advanced caregivers.",
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
        image: FireSafetyImg,
        text: "Hands-on training sessions focused on fire prevention, safety protocols, and emergency response techniques.",
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
        image: OutreachImg,
        text: "Building stronger, safer neighborhoods through education programs, and community engagement events.",
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
        image: YouthSafetyImg,
        text: "Engaging educational programs that teach young people essential safety skills and develop future community leaders.",
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
        image: AwarenessImg,
        text: "Campaigns to spread awareness about safety practices, emergency preparedness, and accident prevention.",
        features: [
            "Seasonal safety campaigns",
            "Social media safety tips",
            "Community safety newsletters",
            "Public service announcements",
            "Safety materials distribution"
        ]
    },
    {
        title: "Disaster Preparedness Training",
        image: DisasterImg,
        text: "Comprehensive training on preparing for natural disasters, creating emergency plans, and building resilient communities.",
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
        image: HomeSafetyImg,
        text: "Free home safety evaluations to identify hazards and provide recommendations for a safer living environment.",
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
        image: BabysitterImg,
        text: "Comprehensive training for young babysitters covering childcare, safety, and emergency response procedures.",
        features: [
            "Child development basics",
            "Infant and child CPR",
            "Emergency response protocols",
            "Professional babysitting practices",
            "Injury prevention"
        ]
    }
]

const whyChoose = [
    {
        title: "Certified Instructors",
        text: "All our trainers are certified professionals with years of real-world experience in emergency services and safety education."
    },
    {
        title: "Recognized Certification",
        text: "Receive nationally recognized certifications that are accepted by employers and organizations nationwide."
    },
    {
        title: "Small Class Sizes",
        text: "We maintain small class sizes to ensure personalized attention and hands-on practice for every participant."
    }
]

export default function Services() {
    const [searchItem, setSearchItem] = useState("")
    const [filteredPrograms, setFilteredPrograms] = useState(programs)

    useEffect(() => {
        const result = programs.filter(program =>
            program.title.toLowerCase().includes(searchItem.toLowerCase())
        )
        setFilteredPrograms(result)
    }, [searchItem])

    return (
        <>
            <section
                id="services"
                className="scroll-mt-45 lg:scroll-mt-30"
                role="region"
                aria-labelledby="services-title"
                aria-describedby="services-desc"
            >
                <div className="bg-linear-to-r from-navy-deep to-navy-deep/85 text-surface py-20 md:py-28 px-8">
                    <div className="max-w-6xl mx-auto lg:px-8 text-center lg:text-left">
                        <p className="inline-block text-accent-secondary font-semibold text-xs uppercase tracking-[0.2em]">
                            Our Programs
                        </p>
                        <div className="w-10 h-0.5 bg-accent-secondary mb-4 mx-auto lg:mx-0"></div>
                        <h2
                            id="services-title"
                            className="text-3xl md:text-4xl font-bold text-surface leading-tight mb-4"
                        >
                            Programs & Services
                        </h2>
                        <p
                            id="services-desc"
                            className="text-surface text-base leading-relaxed max-w-xl mb-6 mx-auto lg:mx-0"
                        >
                            Comprehensive safety programs designed to protect, educate, and empower every member of our community through expert training and support.
                        </p>
                        <div className="flex items-center gap-3 max-w-sm mx-auto lg:mx-0">
                            <TextInput
                                onChange={(e) => setSearchItem(e.target.value)}
                                id="search"
                                value={searchItem}
                                type="text"
                                placeholder="Search programs..."
                                className="flex-1 bg-surface/10 border-surface/30 text-surface text-center lg:text-left placeholder:text-surface placeholder:text-center lg:placeholder:text-left focus:ring-surface/50"
                            />
                            {searchItem && (
                                <Button
                                    className="text-sm font-semibold text-surface hover:text-surface transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-surface/10"
                                    onClick={() => setSearchItem("")}
                                >
                                    Clear
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-bg py-16">
                    <div className="max-w-6xl mx-auto px-8 lg:px-16">
                        {filteredPrograms.length === 0 ? (
                            <p className="text-text-secondary text-sm">No programs found matching &ldquo;{searchItem}&rdquo;.</p>
                        ) : (
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                role="list"
                                aria-label="Programs list"
                            >
                                {filteredPrograms.map((program, index) => (
                                    <div key={index} role="listitem">
                                        <ServiceCard
                                            title={program.title}
                                            description={program.text}
                                            features={program.features}
                                            image={program.image}
                                            index={index}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="bg-surface text-text-primary" aria-label="Why choose our programs">
                <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
                    <SectionHeader
                        tag="Why Choose Us"
                        title="What Sets Us Apart"
                        subtitle="We're committed to providing the highest quality safety education and emergency services."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyChoose.map((item, index) => (
                            <div key={index} className="text-center md:text-left">
                                <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                                <p className="text-text-secondary text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-bg text-text-primary" aria-labelledby="volunteer-video-title">
                <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
                    <SectionHeader
                        tag="Our Volunteers"
                        title="Day in the Life of a Volunteer"
                        subtitle="Our volunteers play a crucial role in our community, dedicating their time and skills to ensure safety and preparedness."
                    />

                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
                        <iframe
                            id="volunteer-video-title"
                            className="w-full h-full"
                            src="https://www.youtube-nocookie.com/embed/RA4uZJz9BeI?si=u2D2Tj6bdmJ_FTQr"
                            title="Day in the Life of a Volunteer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
