import Button from './form_elements/Button.jsx'
import HandleBtnClick from './HandleBtnClick.jsx'
import { HeroCarousel } from './HeroCarousel.jsx'

export default function HeroBanner() {
    return (
        <div id="home" className="relative h-screen overflow-hidden text-primary pt-20">
            <HeroCarousel className="absolute inset-0 z-0" />

            <article className="relative z-10 flex items-center justify-center h-full max-w-8xl lg:max-w-xl px-4 md:px-8 md:ml-4 lg:ml-10">
                <div className="text-surface max-w-2xl">
                    <h1 className="text-4xl md:text-6xl w-full font-bold">
                        <span className="text-accent-primary">Together</span> <br /> we keep our communities safe
                    </h1>
                    <p className="text-lg py-4 text-surface/90">
                        Join our dedicated team of volunteers committed to protecting lives, providing emergency response, and building a safer tomorrow for everyone.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 my-4">
                        <Button onClick={() => HandleBtnClick("getInvolved")} className="btn-primary bg-accent-secondary text-text-primary hover:bg-accent-primary hover:text-surface text-sm transition duration-700">Join Volunteers</Button>
                        <Button onClick={() => HandleBtnClick("about")} className="btn-secondary font-bold rounded-lg border border-accent-secondary bg-transparent text-sm text-surface hover:border-accent-primary transition duration-700">Learn More</Button>
                    </div>
                </div>
            </article>

            <div aria-hidden="true" className="absolute inset-0 z-0 bg-black/65 pointer-events-none" />
        </div>
    )
}