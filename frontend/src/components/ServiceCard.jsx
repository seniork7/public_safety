import { HiCheckCircle, HiMiniArrowRight } from "react-icons/hi2"
import Button from './form_elements/Button.jsx'
import HandleBtnClick from './HandleBtnClick.jsx'

export default function ServiceCard({ title, description, features, image, index }) {
    return (
        <article
            className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            aria-labelledby={`service-${index}-title`}
        >
            <div className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-navy-deep/25" aria-hidden="true" />
            </div>

            <div className="flex flex-col flex-1 p-6">
                <h3
                    id={`service-${index}-title`}
                    className="font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-200 mb-2"
                >
                    {title}
                </h3>

                <p className="text-text-secondary text-sm mb-4">
                    {description}
                </p>

                <ul className="space-y-1.5 mb-6 flex-1" aria-label={`${title} features`}>
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <HiCheckCircle className="shrink-0 mt-0.5 text-success" aria-hidden="true" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <Button
                    onClick={() => HandleBtnClick("getInvolved")}
                    aria-label={`Enroll in ${title}`}
                    className="inline-flex items-center gap-2 bg-accent-secondary hover:bg-accent-primary hover:text-surface text-text-primary font-semibold text-sm rounded-lg px-4 py-2 transition-colors duration-200 w-fit"
                >
                    Enroll Now
                    <HiMiniArrowRight aria-hidden="true" />
                </Button>
            </div>
        </article>
    )
}
