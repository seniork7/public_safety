import Card from "../Card"

export default function Overview({ applications } = {}) {

    const overviewCards = [
        {
            title: "Total Applications",
            description: "applications received",
            value: applications ? applications.stats.totalApplications : "Loading..."
        },
        {
            title: "Pending Reviews",
            description: "applications pending review",
            value: applications ? applications.stats.totalPending : "Loading..."
        },
        {
            title: "Approved Volunteers",
            description: "volunteers approved",
            value: applications ? applications.stats.totalApproved : "Loading..."
        },
        {
            title: "Rejected Applications",
            description: "applications rejected",
            value: applications ? applications.stats.totalRejected : "Loading..."
        }
    ]

    return (
        <div>
            <h1 className="text-2xl mb-4">Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {overviewCards.map((card) => (
                    <Card key={card.title} className="w-full bg-surface" aria-labelledby={card.title}>
                        <h2 className="text-lg">{card.title}</h2>
                        <p className={card.value === "Loading..." ? "text-sm font-semibold" : "text-xl font-semibold"}>{card.value}</p>
                        <p className="text-sm text-text-muted">{card.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}