import HomeBanner from '../assets/images/HomeBanner.jpg'
import SafetyAlert from './SafetyAlert.jsx'
import Button from './elements/Button.jsx'
import HandleBtnClick from './HandleBtnClick.jsx'

function HeroBanner() {
    return (
        <div className="h-screen bg-cover bg-center text-primary mt-10 pt-10" style={{ backgroundImage: `url(${HomeBanner})` }}>
            <article className="flex flex-col items-start justify-center gap-2 h-full max-w-8xl lg:max-w-xl px-4 md:px-8 md:ml-4 lg:ml-10">
                <SafetyAlert className="" />
                <div className="text-[#E5E7EB]">
                    <h1 className="text-5xl md:text-6xl font-bold mt-5">
                    <span className="text-accent-primary">Together</span> <br /> we keep our communities safe
                    </h1>
                    <p className="text-lg py-2">
                    Join our dedicated team of volunteers committed to protecting lives, providing emergency response, and building a safer tomorrow for everyone.
                    </p>
                    <div className="flex flex-col md:flex-row w-full gap-4 my-4 mb-5 lg:mb-10">
                        <Button onClick={() => HandleBtnClick("joinUs")} className="bg-accent-primary hover:bg-accent-secondary text-white dark:text-primary font-bold py-2 px-8 rounded-lg cursor-pointer transition focus:ring-0">Join Volunteers</Button>
                        <Button onClick={() => HandleBtnClick("about")} className="bg-transparent border border-color hover:border-accent-primary hover:text-accent-primary transition font-bold py-2 px-8 rounded-lg cursor-pointer focus:ring-0">Learn More</Button>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default HeroBanner