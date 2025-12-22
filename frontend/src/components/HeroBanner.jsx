import HomeBanner from '../assets/images/HomeBanner.jpg'
import Button from './elements/Button.jsx'
import HandleBtnClick from './HandleBtnClick.jsx'

function HeroBanner() {
    return (
        <div className="h-screen bg-cover bg-center text-primary pt-20" style={{ backgroundImage: `url(${HomeBanner})` }}>
            <article className="flex flex-col items-start justify-center gap-2 h-full max-w-8xl lg:max-w-xl px-4 md:px-8 md:ml-4 lg:ml-10">
                <div className="text-text-primary mt-30">
                    <h1 className="text-4xl md:text-6xl w-full md:w-2xl font-bold mt-5">
                    <span className="text-accent-primary">Together</span> <br /> we keep our communities safe
                    </h1>
                    <p className="text-lg py-2">
                    Join our dedicated team of volunteers committed to protecting lives, providing emergency response, and building a safer tomorrow for everyone.
                    </p>
                    <div className="flex flex-col md:flex-row w-full gap-4 my-4 mb-5 lg:mb-10">
                        <Button onClick={() => HandleBtnClick("getInvolved")} className="bg-accent-secondary hover:bg-accent-primary text-surface hover:text-text-primary font-bold py-2 px-8 rounded-lg cursor-pointer transition hover:scale-95 duration-700">Join Volunteers</Button>
                        <Button onClick={() => HandleBtnClick("about")} className="bg-transparent border border-accent-secondary hover:bg-accent-primary hover:border-accent-primary transition  duration-700 hover:scale-95 font-bold py-2 px-8 rounded-lg cursor-pointer">Learn More</Button>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default HeroBanner