import HomeBanner from '../assets/images/HomeBanner.jpg'
import SafetyAlert from './SafetyAlert.jsx'
import { Button } from 'flowbite-react'

function HeroBanner() {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HomeBanner})` }}>
            <div className="absolute inset-0 bg-gray-900/50"></div>
            <article className="relative flex flex-col items-start justify-center gap-2 h-full max-w-xl px-4 md:px-8 z-10">
                <SafetyAlert className="mt-8" />
                <div>
                    <h1 className="text-5xl md:text-6xl text-[#1A1B1F] dark:text-[#E6E7EB] font-bold mt-5">
                    <span className="text-green-500">Together</span> <br /> we keep our community safe
                    </h1>
                    <p className="text-lg text-white">
                    Join our dedicated team of volunteers committed to protecting lives, providing emergency response, and building a safer tomorrow for everyone.
                    </p>
                    <div className="flex flex-col md:flex-row w-full gap-4 my-4">
                        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg cursor-pointer"><a href="#">Join Volunteers</a></Button>
                        <Button className="bg-transparent border border-white text-white hover:bg-blue-600 hover:text-white transition font-bold py-2 px-8 rounded-lg cursor-pointer"><a href="#">Learn More</a></Button>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default HeroBanner