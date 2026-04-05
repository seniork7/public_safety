import { motion } from "motion/react"
import Button from './form_elements/Button.jsx'
import HandleBtnClick from './HandleBtnClick.jsx'
import HeroImage from '../assets/images/firefighter-service-at-work.jpg'

export default function HeroBanner() {
    const cloudName = "dqgjrw057"

    return (
        <div id="home" className="relative h-[90vh] overflow-hidden">
            {/* <img
                src={HeroImage}
                alt="Firefighter in full gear responding to an emergency"
                className="absolute inset-0 w-full h-full object-cover object-center"
                fetchpriority="high"
            /> */}
            <img
                src={`https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_1200,dpr_auto/v1769492247/firefighter-service-at-work_hfljqj.jpg`}
                srcSet={`
                    https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_480,dpr_auto/v1769492247/firefighter-service-at-work_hfljqj.jpg 480w,
                    https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_768,dpr_auto/v1769492247/firefighter-service-at-work_hfljqj.jpg 768w,
                    https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_1200,dpr_auto/v1769492247/firefighter-service-at-work_hfljqj.jpg 1200w
                `}
                sizes="(max-width: 768px) 100vw, 1200px"
                alt="Two volunteer firefighters walking towards a scene."
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Overlay */}
            <div aria-hidden="true" className="absolute inset-0 z-1 bg-linear-to-r md:bg-linear-to-t lg:bg-linear-to-r from-black/80 to-black/60 pointer-events-none" />

            <article className="relative z-10 flex items-center md:items-end h-full px-8 md:px-16 lg:px-24 pt-48 md:pt-0 pb-6">
                <div className="w-full text-center md:text-left">
                    <motion.div
                        className="text-surface max-w-xl mx-auto md:mx-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h1 className="text-3xl md:text-6xl font-bold mb-4">
                            Together <br /> we keep our communities safe
                        </h1>
                        <p className="text-lg text-surface/80 mb-8 max-w-lg">
                            Join our dedicated team of volunteers committed to protecting lives, providing emergency response, and building a safer tomorrow for everyone.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 items-center md:items-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    >
                        <Button
                            onClick={() => HandleBtnClick("getInvolved")}
                            className="font-semibold bg-accent-secondary text-text-primary hover:bg-accent-primary hover:text-surface text-sm transition duration-300 rounded-lg px-6 py-3"
                        >
                            Join Volunteers
                        </Button>
                        <Button
                            onClick={() => HandleBtnClick("about")}
                            className="font-semibold rounded-lg border border-surface/60 bg-transparent text-sm text-surface hover:border-surface hover:bg-surface/10 transition duration-300 px-6 py-3"
                        >
                            Learn More
                        </Button>
                    </motion.div>
                </div>
            </article>
        </div>
    )
}
