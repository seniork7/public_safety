import { motion } from "motion/react"
import { HiClock, HiOutlineTrendingUp, HiShieldCheck, HiOutlineArrowRight } from "react-icons/hi"
import Card from '../components/Card.jsx'
import Button from '../components/form_elements/Button.jsx'
import Community from '../assets/images/checking_pressure.jpg'
import HandleBtnClick from '../components/HandleBtnClick.jsx'
import Section from '../components/Section.jsx'

const card = [
    { title: "Emergency Response Training", text: "Our Emergency Response Training program equips individuals with the skills and knowledge needed to respond effectively in crisis situations.", link: "Learn More" },
    { title: "First Aid Training", text: "Comprehensive First Aid Training covering essential lifesaving techniques such as CPR, wound care, and handling medical emergencies that require immediate intervention.", link: "Learn More" },
    { title: "Community Safety Workshops", text: "Engage in our Community Safety Workshops to learn about crime prevention, disaster preparedness, and creating safer neighborhoods.", link: "Learn More" }
]

export default function Home() {
    return (
        <>
            <Section id="home" className="bg-bg" aria-labelledby="home-title" aria-describedby="home-desc">
                <div className="flex flex-col items-center justify-center px-4 py-5">
                    <article className="flex flex-col lg:flex-row items-center justify-center gap-20">
                        <motion.div
                            className="max-w-md md:w-full"
                            initial={{ x: -15, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 id="home-title" className="text-3xl md:text-4xl mb-2 font-bold text-text-primary">Protecting Lives. Shaping the Future</h2>
                            <p id="home-desc" className="max-w-xl text-text-secondary">Be a part of a community dedicated to protecting lives and building a safer future for everyone.</p>
                            <ul className="max-w-lg" role="list" aria-label="Key program highlights">
                                <li className="flex justify-start items-start gap-2 my-4">
                                    <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block" aria-hidden="true">
                                        <HiShieldCheck aria-hidden="true" focusable="false" />
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold text-text-primary">Proven Experience</h4>
                                        <p className="text-text-secondary">25 years of experience providing emergency response and safety education to communities across the region.</p>
                                    </article>
                                </li>
                                <li className="flex justify-start items-start gap-2 my-4">
                                    <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block" aria-hidden="true">
                                        <HiClock aria-hidden="true" focusable="false" />
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold text-text-primary">Always Available</h4>
                                        <p className="text-text-secondary">24/7 emergency response teams and support available whenever you need us most.</p>
                                    </article>
                                </li>
                                <li className="flex justify-start items-start gap-2 my-4">
                                    <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block" aria-hidden="true">
                                        <HiOutlineTrendingUp aria-hidden="true" focusable="false" />
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold text-text-primary">Continuous Improvement</h4>
                                        <p className="text-text-secondary">Regular training updates and certifications ensure our volunteers are equipped with the latest lifesaving techniques.</p>
                                    </article>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="max-w-xl overflow-hidden rounded-lg"
                            initial={{ x: 15, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img className="w-full h-auto block" src={Community} role="img" alt="Public safety worker in checking a patient's vitals" />
                        </motion.div>
                    </article>
                </div>
            </Section>

            <Section className="bg-surface" role="region" aria-labelledby="featured-programs-title">
                <div className="flex flex-col items-center justify-center py-6">
                    <h2 className="text-3xl md:text-4xl text-center font-bold text-text-primary" id="featured-programs-title">Featured Programs</h2>
                    <p className="max-w-lg text-center text-text-secondary mb-6">Explore our most popular programs designed to protect and empower your community.</p>

                    <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                        {card.map((card, index) => (
                            <Card key={index} className="w-xs md:w-2xl lg:w-lg bg-bg hover:border-l-4 rounded-lg hover:border-b-accent-primary" aria-labelledby={`program-${index}-title`}>
                                <h3 id={`program-${index}-title`} className="text-lg font-bold text-text-primary group-hover:text-accent-secondary transition duration-700">
                                    {card.title}
                                </h3>
                                <p className="font-normal text-text-secondary">
                                    {card.text}
                                </p>
                                <a href="#services" aria-label={`Learn more about ${card.title}`} className="flex items-center gap-2 text-accent-primary group-hover:text-accent-secondary hover:scale-95 mt-3 transition duration-700">{card.link} <HiOutlineArrowRight aria-hidden="true" focusable="false" /></a>
                            </Card>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 0.98 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button onClick={() => HandleBtnClick("services")} aria-label="View all programs" className="bg-transparent border border-accent-secondary hover:bg-accent-primary hover:border-accent-primary transition duration-700 text-text-primary hover:text-surface font-bold mt-8 py-2 px-8 rounded-lg cursor-pointer">
                            View All Programs
                        </Button>
                    </motion.div>
                </div>
            </Section>
        </>
    )
}