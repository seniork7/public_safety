import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineTrendingUp } from "react-icons/hi";
import Community from '../../assets/images/community.png'

function Home() {
    return (
            <section className="flex flex-col md:flex-row items-center justify-center gap-8 my-8 px-4 md:px-8">
                <article className="">
                    <h2 className="text-xl font-bold">Protecting Lives. Shaping the Future</h2>
                    <p className="max-w-lg">Be a part of a community dedicated to protecting lives and building a safer future for everyone.</p>
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
                </article>
                <div className="max-w-lg overflow-hidden shadow-xl dark:shadow-gray-800 rounded-lg">
                    <img className="" src={Community} alt="Public Safety Workers" />
                </div>
            </section>
    )
}


export default Home
