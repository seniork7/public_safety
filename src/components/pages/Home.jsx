import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineTrendingUp, HiShieldCheck } from "react-icons/hi"
import { HiMiniBellAlert, HiHeart, HiMiniArrowRight } from "react-icons/hi2"
import { Card, Button } from "flowbite-react"
import Community from '../../assets/images/image-1.jpg'

const card = [
    { title: "Emergency Response Training", text: "Our Emergency Response Training program equips individuals with the skills and knowledge needed to respond effectively in crisis situations.", icon: <HiMiniBellAlert />, link: "Learn More" },
    { title: "First Aid Training", text: "Comprehensive First Aid Training covering essential lifesaving techniques such as CPR, wound care, and handling medical emergencies.", icon: <HiHeart />, link: "Learn More" },
    { title: "Community Safety Workshops", text: "Engage in our Community Safety Workshops to learn about crime prevention, disaster preparedness, and creating safer neighborhoods.", icon: <HiOutlineShieldCheck />, link: "Learn More" }
] 

function Home() {
    return (
        <>
            <section className="flex flex-col items-center justify-center p-8">


                <article className="flex flex-col md:flex-row items-center justify-center gap-8 my-8 px-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">Protecting Lives. Shaping the Future</h2>
                        <p className="max-w-xl">Be a part of a community dedicated to protecting lives and building a safer future for everyone.</p>
                        
                        <ul className="max-w-lg">
                            <li className="flex justify-start items-start gap-2 my-4">
                                <span className="bg-blue-500 text-white p-2 rounded-full mr-4 inline-block">
                                    <HiOutlineShieldCheck />
                                </span>
                                <article>
                                    <h4 className="text-xl font-semibold">Proven Experience</h4>
                                    <p>25 years of experience providing emergency response and safety education to communities across the region.</p>
                                </article>
                            </li>
                            <li className="flex justify-start items-start gap-2 my-4">
                                <span className="bg-blue-500 text-white p-2 rounded-full mr-4 inline-block">
                                    <HiOutlineClock />
                                </span>
                                <article>
                                    <h4 className="text-xl font-semibold">Always Available</h4>
                                    <p>24/7 emergency response teams and support available whenever you need us most.</p>
                                </article>
                            </li>
                            <li className="flex justify-start items-start gap-2 my-4">
                                <span className="bg-blue-500 text-white p-2 rounded-full mr-4 inline-block">
                                    <HiOutlineTrendingUp />
                                </span>
                                <article>
                                    <h4 className="text-xl font-semibold">Continuous Improvement</h4>
                                    <p>Regular training updates and certifications ensure our volunteers are equipped with the latest lifesaving techniques.</p>
                                </article>
                            </li>
                        </ul>
                    </div>

                    <div className="max-w-lg overflow-hidden shadow-lg dark:shadow-gray-800/35 rounded-lg">
                        <img className="" src={Community} alt="Public Safety Workers" />
                    </div>
                </article>
            </section>

            <section className="flex flex-col items-center justify-center mt-8">
                <h2 className="text-3xl md:text-4xl text-center font-bold">Featured Programs</h2>
                <p className="max-w-lg text-center">Explore our most popular programs designed to protect and empower your community.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 px-4 md:px-8">
                    {card.map((item, index) => (
                        <Card key={index} className="max-w-sm bg-red-200 dark:bg-red-700 text-gray-800 dark:text-gray-100 shadow-lg">
                            <h5 className="flex items-center justify-start gap-2 text-lg font-bold">
                                <span className="bg-red-500 p-2 rounded-full mr-4 inline-block">
                                    {item.icon}
                                </span>
                                {item.title}
                            </h5>
                            <p className="font-normal">
                                {item.text}
                            </p>

                            <a href="#" className="flex items-center gap-2 text-red-500 hover:underline">{item.link} <HiMiniArrowRight /></a>
                        </Card>
                    ))}
                </div>
                <Button className="bg-red-500 hover:bg-red-700 text-white font-bold my-8 py-2 px-8 rounded-lg cursor-pointer"><a href="#">View All Programs</a></Button>
            </section>
        </>
    )
}


export default Home
