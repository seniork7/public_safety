import EmergencyResponse from '../assets/images/emergency-response.jpg'
import Education from '../assets/images/education.jpg'
import OutReach from '../assets/images/outreach.jpg'
import Leadership from '../assets/images/leadership.jpg'
import Disaster from '../assets/images/disaster.jpg'
import Medical from '../assets/images/medical.jpg'
import SectionHeader from '../components/SectionHeader.jsx'

const values = [
    {
        title: "Safety First",
        text: "We prioritize the safety and well-being of every community member in everything we do. Our rigorous training and protocols ensure the highest standards of care.",
    },
    {
        title: "Compassion",
        text: "Our volunteers serve with empathy, understanding, and genuine care for those in need. We believe in treating everyone with dignity and respect.",
    },
    {
        title: "Community",
        text: "We believe in the power of unity and collaboration to create lasting positive change. Together, we are stronger and more effective.",
    },
    {
        title: "Excellence",
        text: "We continuously strive for the highest quality in our training, response, and service delivery. Mediocrity has no place in emergency services.",
    },
]

const team = [
    {
        name: "First Aid Team",
        role: "First aiders trained in basic life support, ready to respond",
        image: EmergencyResponse,
    },
    {
        name: "Training & Education",
        role: "Certified instructors providing safety education and training",
        image: Education,
    },
    {
        name: "Community Outreach",
        role: "Building connections through community engagement and support",
        image: OutReach,
    },
    {
        name: "Management Team",
        role: "Experienced leaders guiding our mission and vision",
        image: Leadership,
    },
    {
        name: "Disaster Preparedness",
        role: "Planning and coordinating emergency response strategies",
        image: Disaster,
    },
    {
        name: "Medical Services",
        role: "Healthcare professionals providing on-site medical support",
        image: Medical,
    },
]

export default function About() {
    return (
        <>
            <section
                id="about"
                className="scroll-mt-45 lg:scroll-mt-30"
                role="region"
                aria-labelledby="about-title"
            >
                <div className="bg-linear-to-r from-navy-deep to-navy-deep/85 text-surface py-20 md:py-28 px-8">
                    <div className="max-w-6xl mx-auto lg:px-8 text-center lg:text-left">
                        <p className="inline-block text-accent-secondary font-semibold text-xs uppercase tracking-[0.2em]">
                            About Us
                        </p>
                        <div className="w-10 h-0.5 bg-accent-secondary mb-4 mx-auto lg:mx-0"></div>

                        <h2
                            id="about-title"
                            className="text-3xl md:text-4xl font-bold text-surface leading-tight mb-4"
                        >
                            Who We Are
                        </h2>
                        <p className="text-surface text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                            For 25 years, we've been dedicated to building safer and stronger communities through volunteer service, emergency response, and comprehensive safety education.
                        </p>
                    </div>
                </div>

                <div className="bg-surface">
                    <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:divide-x lg:divide-border">
                            <div className="lg:pr-12 text-center lg:text-left">
                                <h3 className="text-xl font-bold text-text-primary mb-3">
                                    Our Mission
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    Public Safety is dedicated to enhancing community safety through training, resources, and support. Our mission is to empower communities through comprehensive safety education, rapid emergency response, and volunteer-driven initiatives that protect lives, prevent crises, and build long-term resilience in the face of challenges.
                                </p>
                            </div>

                            <div className="lg:pl-12 text-center lg:text-left">
                                <h3 className="text-xl font-bold text-text-primary mb-3">
                                    Our Vision
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    A world where every community member has the knowledge, skills, and support to protect themselves and others in emergencies — creating a network of prepared and compassionate citizens ready to make a difference when it matters most.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-bg" role="region" aria-labelledby="core-values-title">
                <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
                    <SectionHeader
                        tag="Our Values"
                        title="Core Values"
                        subtitle="These principles guide everything we do and shape how we serve our community."
                    />

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                        role="list"
                        aria-label="Core values"
                        aria-labelledby="core-values-title"
                    >
                        {values.map((value, index) => (
                            <div
                                key={index}
                                role="listitem"
                                aria-labelledby={`value-${index}-title`}
                                className="text-center sm:text-left"
                            >
                                <h4 id={`value-${index}-title`} className="font-semibold text-text-primary mb-1">
                                    {value.title}
                                </h4>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {value.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface" role="region" aria-labelledby="meet-team-title">
                <div className="max-w-6xl mx-auto px-8 lg:px-16 py-20">
                    <SectionHeader
                        tag="Our Team"
                        title="The People Behind the Mission"
                        subtitle="Our dedicated volunteers are the backbone of everything we do - trained, committed, and ready to serve."
                    />

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        role="list"
                        aria-label="Team groups"
                    >
                        {team.map((member, index) => (
                            <article
                                key={index}
                                role="listitem"
                                aria-labelledby={`team-${index}-title`}
                                className="group relative aspect-3/4 rounded-xl overflow-hidden bg-bg"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                                {/* Overlay — always visible on mobile, slides up on desktop hover */}
                                <div className="absolute inset-x-0 bottom-0 translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 ease-out bg-navy-deep/90 px-5 py-4">
                                    <h5 id={`team-${index}-title`} className="font-semibold text-surface text-base leading-snug">
                                        {member.name}
                                    </h5>
                                    <p className="text-surface/65 text-sm mt-1 leading-relaxed">
                                        {member.role}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
