import HomeBanner from '../assets/images/HomeBanner.jpg'
import SafetyAlert from './SafetyAlert.jsx'
import { Button } from 'flowbite-react'
import HandleBtnClick from './HandleBtnClick.jsx'

function HeroBanner() {
    return (
        <div className="relative h-screen bg-cover bg-center text-[#f5f5f5] dark:text-[#ccc]" style={{ backgroundImage: `url(${HomeBanner})` }}>
            <div className="absolute inset-0 bg-gray-900/50"></div>
            <article className="relative flex flex-col items-start justify-end gap-2 h-full max-w-8xl lg:max-w-xl px-4 md:px-8 py-2 z-10">
                <SafetyAlert className="mt-8" />
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold mt-5">
                    <span className="">Together</span> <br /> we keep our community safe
                    </h1>
                    <p className="text-lg text-white py-2">
                    Join our dedicated team of volunteers committed to protecting lives, providing emergency response, and building a safer tomorrow for everyone.
                    </p>
                    <div className="flex flex-col md:flex-row w-full gap-4 my-4">
                        <Button onClick={() => HandleBtnClick("joinUs")} className="bg-[#E53935] hover:bg-[#ff0c21] font-bold py-2 px-8 rounded-lg cursor-pointer transition focus:ring-0">Join Volunteers</Button>
                        <Button onClick={() => HandleBtnClick("about")} className="bg-transparent border border-[#E53935] hover:border-[#ff0c21] hover:text-[#ff0c21] transition font-bold py-2 px-8 rounded-lg cursor-pointer focus:ring-0">Learn More</Button>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default HeroBanner