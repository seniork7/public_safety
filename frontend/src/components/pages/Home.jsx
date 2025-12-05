import { HiClock, HiOutlineTrendingUp, HiShieldCheck } from "react-icons/hi"
import { HiMiniBellAlert, HiHeart, HiMiniArrowRight } from "react-icons/hi2"
import Card from '../elements/Card.jsx'
import Button from '../elements/Button.jsx'
import Community from '../../assets/images/image-1.jpg'
import HandleBtnClick from '../../components/HandleBtnClick.jsx'

const card = [
    { title: "Emergency Response Training", text: "Our Emergency Response Training program equips individuals with the skills and knowledge needed to respond effectively in crisis situations.", icon: <HiMiniBellAlert />, link: "Learn More" },
    { title: "First Aid Training", text: "Comprehensive First Aid Training covering essential lifesaving techniques such as CPR, wound care, and handling medical emergencies that require immediate intervention.", icon: <HiHeart />, link: "Learn More" },
    { title: "Community Safety Workshops", text: "Engage in our Community Safety Workshops to learn about crime prevention, disaster preparedness, and creating safer neighborhoods.", icon: <HiShieldCheck />, link: "Learn More" }
] 

function Home() {
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
                                    <span className="bg-success text-surface p-2 rounded-full mr-4 inline-block">
                                        <HiShieldCheck />
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold text-text-primary">Proven Experience</h4>
                                        <p className="text-text-secondary">25 years of experience providing emergency response and safety education to communities across the region.</p>
                                    </article>
                                </li>
                                <li className="flex justify-start items-start gap-2 my-4">
                                    <span className="bg-success text-surface p-2 rounded-full mr-4 inline-block">
                                        <HiClock />
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold text-text-primary">Always Available</h4>
                                        <p className="text-text-secondary">24/7 emergency response teams and support available whenever you need us most.</p>
                                    </article>
                                </li>
                                <li className="flex justify-start items-start gap-2 my-4">
                                    <span className="bg-success text-surface p-2 rounded-full mr-4 inline-block">
                                        <HiOutlineTrendingUp />
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold text-text-primary">Continuous Improvement</h4>
                                        <p className="text-text-secondary">Regular training updates and certifications ensure our volunteers are equipped with the latest lifesaving techniques.</p>
                                    </article>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-lg overflow-hidden shadow-lg rounded-lg">
                            <img className="" src={Community} alt="Public Safety Workers" />
                        </div>
                    </article>
                </section>
                <section className="flex flex-col items-center justify-center py-20 bg-surface">
                    <h2 className="text-3xl md:text-4xl text-center font-bold text-text-primary">Featured Programs</h2>
                    <p className="max-w-lg text-center text-text-secondary">Explore our most popular programs designed to protect and empower your community.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8 lg:h-50">
                        {card.map((item, index) => (
                            <Card key={index} className="w-xs md:w-2xl lg:w-sm bg-bg hover:border-l-4 rounded-lg hover:border-b-accent-primary transition-all lg:hover:rotate-y-20 duration-700">
                                <h5 className="flex items-center justify-start gap-2 text-lg font-bold text-text-primary">
                                    <span className="bg-success text-surface p-2 rounded-full mr-4 inline-block transition duration-700 card-icon">
                                        {item.icon}
                                    </span>
                                    {item.title}
                                </h5>
                                <p className="font-normal text-text-secondary">
                                    {item.text}
                                </p>
                                <a href="#services" className="flex items-center gap-2 text-accent-secondary hover:text-accent-secondary hover:scale-95 transition duration-700">{item.link} <HiMiniArrowRight /></a>
                            </Card>
                        ))}
                    </div>
                    <Button onClick={() => HandleBtnClick("services")} className="bg-transparent border border-accent-secondary hover:bg-accent-primary hover:border-accent-primary transition  duration-700 text-text-primary hover:scale-95 font-bold my-8 py-2 px-8 rounded-lg cursor-pointer">View All Programs</Button>
                </section>
            </section>
        </>
    )
}

export default Home
