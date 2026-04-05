import Button from '../components/form_elements/Button.jsx'
import HandleBtnClick from '../components/HandleBtnClick.jsx'
import Section from '../components/Section.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import EmergencyImg from '../assets/images/emergency-response.jpg'
import FirstAidImg from '../assets/images/cpr-training.jpg'
import WorkshopImg from '../assets/images/outreach-program.jpg'

const programs = [
    {
        image: EmergencyImg,
        alt: "Emergency response volunteers at a training exercise",
        title: "Emergency Response Training",
        description: "Equip yourself with the skills to respond effectively in crisis situations — from accident scenes to natural disasters.",
    },
    {
        image: FirstAidImg,
        alt: "Volunteer practising CPR during a first aid training session",
        title: "First Aid Training",
        description: "Learn lifesaving techniques including CPR, wound care, and managing medical emergencies that require immediate action.",
    },
    {
        image: WorkshopImg,
        alt: "Community members gathered at a safety workshop",
        title: "Community Safety Workshops",
        description: "Build safer neighbourhoods through hands-on workshops covering crime prevention, disaster preparedness, and community resilience.",
    },
]

export default function Home() {
    return (
        <>
            {/* Mission / Impact */}
            <section className="bg-navy-deep text-surface overflow-hidden" aria-labelledby="mission-title">
                <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">

                    <div className="shrink-0 lg:w-[38%] text-center md:text-left">
                        <p className="font-display font-bold text-surface text-[5.5rem] md:text-[7rem] lg:text-[9rem]">
                            25
                        </p>
                        <p className="font-display text-xl font-semibold text-surface">
                            Years of Service
                        </p>

                        <p className="text-surface text-xs uppercase tracking-[0.2em]">
                            Established 2000
                        </p>
                    </div>

                    <div className="lg:w-[62%] text-center md:text-left">
                        <p className="text-surface font-semibold text-xs uppercase tracking-[0.2em]">
                            The Mission
                        </p>
                        <div className="w-10 h-0.5 bg-accent-secondary mb-4 mx-auto md:mx-0"></div>

                        <h2 id="mission-title" className="text-3xl md:text-4xl font-bold text-surface mb-6 leading-tight">
                            Protecting Lives.<br />Shaping the Future.
                        </h2>
                        <p className="text-surface text-lg leading-relaxed">
                            For 25 years, we have stood at the intersection of community, courage, and care. We believe public safety begins with people - trained, committed, and ready. Today, our work spans 12 active programs supported by more than 500 trained volunteers, each prepared to respond when it matters most.
                        </p>
                        <p className="text-surface text-base leading-relaxed mt-5">
                            From emergency response to youth safety education, our programs are built around one principle: every life is worth protecting, and every community deserves the tools to do it.
                        </p>
                        <a
                            href="#about"
                            className="inline-flex items-center gap-2 text-accent-secondary hover:text-surface font-semibold text-sm mt-10 transition duration-300 uppercase tracking-widest group"
                        >
                            Learn About Us
                            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Top Programs */}
            <Section className="bg-blue-muted" role="region" aria-labelledby="featured-programs-title">
                <div className="max-w-6xl mx-auto px-8 lg:px-16">
                    <SectionHeader
                        tag="Our Programs"
                        title="Top Programs"
                        subtitle="Explore our most impactful programs - designed to equip, protect, and empower your community."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {programs.map((program, index) => (
                            <FeatureCard
                                key={index}
                                image={program.image}
                                alt={program.alt}
                                title={program.title}
                                description={program.description}
                            />
                        ))}
                    </div>

                    <div className="mt-10 flex justify-center lg:justify-start">
                        <Button
                            onClick={() => HandleBtnClick("services")}
                            aria-label="View all programs"
                            className="bg-transparent border border-accent-secondary hover:bg-accent-primary hover:border-accent-primary transition duration-300 text-text-primary hover:text-surface font-semibold py-2 px-8 rounded-lg"
                        >
                            View All Programs
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    )
}
