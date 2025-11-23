import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineTrendingUp, HiShieldCheck } from "react-icons/hi"
import { HiMiniBellAlert, HiHeart, HiMiniArrowRight } from "react-icons/hi2"
import { Card, Button } from "flowbite-react"
import Community from '../../assets/images/image-1.jpg'
import HandleBtnClick from '../../components/HandleBtnClick.jsx'

const card = [
    { title: "Emergency Response Training", text: "Our Emergency Response Training program equips individuals with the skills and knowledge needed to respond effectively in crisis situations.", icon: <HiMiniBellAlert />, link: "Learn More" },
    { title: "First Aid Training", text: "Comprehensive First Aid Training covering essential lifesaving techniques such as CPR, wound care, and handling medical emergencies.", icon: <HiHeart />, link: "Learn More" },
    { title: "Community Safety Workshops", text: "Engage in our Community Safety Workshops to learn about crime prevention, disaster preparedness, and creating safer neighborhoods.", icon: <HiOutlineShieldCheck />, link: "Learn More" }
] 

function Home() {
    return (
        <>
            <section className="text-[#080808] dark:text-[#f5f5f5]">
                <section className="flex flex-col items-center justify-center px-4 py-20 bg-[#f5f5f5] dark:bg-[#080808]">
                    <article className="flex flex-col lg:flex-row items-center justify-center gap-20">
                        <div className="max-w-md md:w-full">
                            <h2 className="text-3xl md:text-4xl mb-2 font-bold">Protecting Lives. Shaping the Future</h2>
                            <p className="max-w-xl">Be a part of a community dedicated to protecting lives and building a safer future for everyone.</p>
                
                            <ul className="max-w-lg">
                                <li className="flex justify-start items-start gap-2 my-4">
                                    <span className="bg-[#E53935] dark:bg-[#E53935] p-2 rounded-full mr-4 inline-block">
                                        <HiOutlineShieldCheck />
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold">Proven Experience</h4>
                                        <p>25 years of experience providing emergency response and safety education to communities across the region.</p>
                                    </article>
                                </li>
                                <li className="flex justify-start items-start gap-2 my-4">
                                    <span className="bg-[#E53935] dark:bg-[#E53935] text-[#080808] dark:text-[#f5f5f5] p-2 rounded-full mr-4 inline-block">
                                        <HiOutlineClock className=""/>
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold">Always Available</h4>
                                        <p>24/7 emergency response teams and support available whenever you need us most.</p>
                                    </article>
                                </li>
                                <li className="flex justify-start items-start gap-2 my-4">
                                    <span className="bg-[#E53935] dark:bg-[#E53935] text-[#080808] dark:text-[#f5f5f5] p-2 rounded-full mr-4 inline-block">
                                        <HiOutlineTrendingUp className=""/>
                                    </span>
                                    <article>
                                        <h4 className="text-xl font-semibold">Continuous Improvement</h4>
                                        <p>Regular training updates and certifications ensure our volunteers are equipped with the latest lifesaving techniques.</p>
                                    </article>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-lg overflow-hidden shadow-lg dark:shadow-lg rounded-lg">
                            <img className="" src={Community} alt="Public Safety Workers" />
                        </div>
                    </article>
                </section>
                <section className="flex flex-col items-center justify-center py-20 bg-[#f5f5f5] dark:bg-[#080808]">
                    <h2 className="text-3xl md:text-4xl text-center font-bold">Featured Programs</h2>
                    <p className="max-w-lg text-center">Explore our most popular programs designed to protect and empower your community.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 my-8 px-4 md:px-8">
                        {card.map((item, index) => (
                            <Card key={index} className="w-xs md:w-2xl lg:w-sm bg-[#f5f5f5] dark:bg-[#E53935]/50  border-0 border-[#E53935] dark:border-[#E53935] shadow-lg">
                                <h5 className="flex items-center justify-start gap-2 text-lg font-bold">
                                    <span className="bg-[#E53935] dark:bg-[#E53935] p-2 rounded-full mr-4 inline-block">
                                        {item.icon}
                                    </span>
                                    {item.title}
                                </h5>
                                <p className="font-normal">
                                    {item.text}
                                </p>
                                <a href="#" className="flex items-center gap-2 text-[#E53935] hover:text-[#ff3243] dark:text-[#eed202] dark:hover:text-[#fff312] hover:underline">{item.link} <HiMiniArrowRight /></a>
                            </Card>
                        ))}
                    </div>
                    <Button onClick={() => HandleBtnClick("services")} className="bg-[#E53935] hover:bg-[#ff3243] text-[#f5f5f5] dark:bg-[#eed202] dark:hover:bg-[#fff312] dark:text-[#0f1115] font-bold my-8 py-2 px-8 rounded-lg cursor-pointer transition focus:outline-none focus:ring-0">View All Programs</Button>
                </section>
            </section>
        </>
    )
}


export default Home
