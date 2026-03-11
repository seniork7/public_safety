/* 
    Overview component for admin dashboard. Displays the total number of volunteer applications, pending reviews, approved volunteers, and rejected applications. The data is passed down from the Dashboard component as props.
*/

import Card from "../Card"

export default function Overview({ dashboardData } = {}) {
    const { totalApplications, totalPending, totalApproved, totalRejected } = dashboardData?.stats || {}

    const overviewCards = [
        {
            title: "Total Applications",
            description: "applications received",
            value: totalApplications ? totalApplications : "Loading..."
        },
        {
            title: "Pending Reviews",
            description: "applications pending review",
            value: totalPending ? totalPending : "Loading..."
        },
        {
            title: "Approved Volunteers",
            description: "volunteers approved",
            value: totalApproved ? totalApproved : "Loading..."
        },
        {
            title: "Rejected Applications",
            description: "applications rejected",
            value: totalRejected ? totalRejected : "Loading..."
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