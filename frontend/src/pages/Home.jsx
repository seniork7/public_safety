import { HiClock, HiOutlineTrendingUp, HiShieldCheck, HiOutlineArrowRight } from "react-icons/hi"
import Card from '../components/Card.jsx'
import Button from '../components/form_elements/Button.jsx'
import Community from '../assets/images/checking_pressure.jpg'
import HandleBtnClick from '../components/HandleBtnClick.jsx'

const card = [
    { title: "Emergency Response Training", text: "Our Emergency Response Training program equips individuals with the skills and knowledge needed to respond effectively in crisis situations.", link: "Learn More" },
    { title: "First Aid Training", text: "Comprehensive First Aid Training covering essential lifesaving techniques such as CPR, wound care, and handling medical emergencies that require immediate intervention.", link: "Learn More" },
    { title: "Community Safety Workshops", text: "Engage in our Community Safety Workshops to learn about crime prevention, disaster preparedness, and creating safer neighborhoods.", link: "Learn More" }
]

export default function Home() {
    return (
        <>
            <section className="text-text-primary bg-bg">
                <section className="flex flex-col items-center justify-center px-4 py-20">
                    <article className="flex flex-col lg:flex-row items-center justify-center gap-20">
                        <div className="max-w-md md:w-full">
                            <h2 className="text-3xl md:text-4xl mb-2 font-bold text-text-primary">Protecting Lives. Shaping the Future</h2>
                            <p className="max-w-xl text-text-secondary">Be a part of a community dedicated to protecting lives and building a safer future for everyone.</p>
                            <ul className="max-w-lg">
                                <li className="flex justify-start items-start gap-2 my-4">
                                    <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block">
                                        <HiShieldCheck />
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold text-text-primary">Proven Experience</h4>
                                        <p className="text-text-secondary">25 years of experience providing emergency response and safety education to communities across the region.</p>
                                    </article>
                                </li>
                                <li className="flex justify-start items-start gap-2 my-4">
                                    <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block">
                                        <HiClock />
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold text-text-primary">Always Available</h4>
                                        <p className="text-text-secondary">24/7 emergency response teams and support available whenever you need us most.</p>
                                    </article>
                                </li>
                                <li className="flex justify-start items-start gap-2 my-4">
                                    <span className="bg-accent-primary text-surface p-2 rounded-full mr-4 inline-block">
                                        <HiOutlineTrendingUp />
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold text-text-primary">Continuous Improvement</h4>
                                        <p className="text-text-secondary">Regular training updates and certifications ensure our volunteers are equipped with the latest lifesaving techniques.</p>
                                    </article>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-xl overflow-hidden rounded-lg">
                            <img className="" src={Community} alt="Public Safety Workers" />
                        </div>
                    </article>
                </section>
                <section className="flex flex-col items-center justify-center py-20 bg-surface">
                    <h2 className="text-3xl md:text-4xl text-center font-bold text-text-primary">Featured Programs</h2>
                    <p className="max-w-lg text-center text-text-secondary">Explore our most popular programs designed to protect and empower your community.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                        {card.map((card, index) => (
                            <Card key={index} className="w-xs md:w-2xl lg:w-lg bg-bg hover:border-l-4 rounded-lg hover:border-b-accent-primary">
                                <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-secondary transition duration-700">
                                    {card.title}
                                </h3>
                                <p className="font-normal text-text-secondary">
                                    {card.text}
                                </p>
                                <a href="#services" className="flex items-center gap-2 text-accent-primary group-hover:text-accent-secondary hover:scale-95 mt-3 transition duration-700">{card.link} <HiOutlineArrowRight /></a>
                            </Card>
                        ))}
                    </div>
                    <Button onClick={() => HandleBtnClick("services")} className="bg-transparent border border-accent-secondary hover:bg-accent-primary hover:border-accent-primary transition  duration-700 text-text-primary hover:scale-95 hover:text-surface font-bold mt-8 py-2 px-8 rounded-lg cursor-pointer">View All Programs</Button>
                </section>
            </section>
        </>
    )
}