import { HiOutlineArrowRight } from "react-icons/hi"

export default function FeatureCard({ image, alt, title, description, href = "#services" }) {
    return (
        <article className="group bg-surface rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col">
            <div className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-navy-deep/25" aria-hidden="true" />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">
                    {title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    {description}
                </p>
                <a
                    href={href}
                    aria-label={`Learn more about ${title}`}
                    className="inline-flex items-center gap-1.5 text-accent-primary hover:text-accent-hover font-semibold text-sm mt-5 transition-colors duration-200"
                >
                    Learn More
                    <HiOutlineArrowRight aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
            </div>
        </article>
    )
}
