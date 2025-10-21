import HomeBanner from '../assets/images/HomeBanner.jpg'
import SafetyAlert from './SafetyAlert.jsx'
import { Button } from 'flowbite-react'

function HeroBanner() {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HomeBanner})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl h-full">
                <SafetyAlert />
                <article className="flex flex-col items-start justify-center gap-2 h-full max-w-xl px-4 md:px-8">
                    <h1 className="text-5xl md:text-6xl text-white font-bold">
                    <span className="text-green-500">Together</span> <br /> we keep our community safe
                    </h1>
                    <p className="text-lg text-white">
                    Join our dedicated team of volunteers committed to protecting lives, providing emergency response, and building a safer tomorrow for everyone.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 my-4">
                        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg cursor-pointer"><a href="#">Join Volunteers</a></Button>
                        <Button className="bg-transparent border border-white text-white hover:bg-blue-600 hover:text-white transition font-bold py-2 px-8 rounded-lg cursor-pointer"><a href="#">Get Involved</a></Button>
                    </div>
                </article>
            </div>
        </div>

    )
}
export default HeroBanner