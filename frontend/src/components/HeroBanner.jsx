import { motion, easeInOut } from "motion/react"
import Button from './form_elements/Button.jsx'
import HandleBtnClick from './HandleBtnClick.jsx'
import { HeroCarousel } from './HeroCarousel.jsx'

export default function HeroBanner() {
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                when: "beforeChildren",
                ease: "easeInOut"
            }
        }
    }

    const item = {
        hidden: {
            x: -40,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        },
        transition: {
            duration: 5,
            ease: "easeInOut"
        }
    }

    return (
        <div id="home" className="relative h-screen overflow-hidden text-primary pt-20">
            <HeroCarousel className="absolute inset-0 z-0" />

            <article className="relative z-10 flex items-center justify-center h-full max-w-8xl lg:max-w-xl px-4 md:px-8 md:ml-4 lg:ml-10">
                <motion.div
                    className="text-surface max-w-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                >
                    <motion.h1
                        variants={item}
                        transition={{ duration: 0.4 }}
                        className="text-4xl md:text-6xl w-full font-bold">
                        Together <br /> we keep our communities safe
                    </motion.h1>

                    <motion.p
                        variants={item}
                        transition={{ duration: 0.4 }}
                        className="text-lg py-4 text-surface/90">
                        Join our dedicated team of volunteers committed to protecting lives, providing emergency response, and building a safer tomorrow for everyone.
                    </motion.p>

                    <motion.div  className="flex flex-col md:flex-row gap-4 my-4">
                        <motion.div
                            variants={item}
                            transition={{ duration: 0.5 }}
                            className="inline-block">
                            <Button onClick={() => HandleBtnClick("getInvolved")} className="btn-primary bg-accent-secondary text-text-primary hover:bg-accent-primary hover:text-surface text-sm transition duration-700 w-full">Join Volunteers</Button>
                        </motion.div>

                        <motion.div
                            variants={item}
                            transition={{ duration: 0.4 }}
                            className="inline-block">
                            <Button onClick={() => HandleBtnClick("about")} className="btn-secondary font-bold rounded-lg border border-accent-secondary bg-transparent text-sm text-surface hover:border-accent-primary transition duration-700 w-full">Learn More</Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </article>

            <div aria-hidden="true" className="absolute inset-0 z-0 bg-black/65 pointer-events-none" />
        </div>
    )
}