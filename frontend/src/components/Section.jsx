export default function Section({ id, children, className = '' }) {
    return (
        <section id={id} className={`py-16 text-text-primary ${className}`}>
            {children}
        </section>
    )
}