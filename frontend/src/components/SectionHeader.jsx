export default function SectionHeader({ tag, title, subtitle, align = "left" }) {
    const isCenter = align === "center"

    return (
        <div className={`mb-10 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl text-center lg:text-left"}`}>
            {tag && (
                <p className="inline-block text-accent-primary font-semibold text-xs uppercase tracking-[0.2em]">
                    {tag}
                </p>
            )}
            <div className={`w-10 h-0.5 bg-accent-primary mb-4 mx-auto ${isCenter ? '' : 'lg:mx-0'}`}></div>

            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-text-secondary text-base leading-relaxed mt-3">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
