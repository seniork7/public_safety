/*
    This component displays the stat tiles at the top of the Reports page.
*/

export default function ReportsSummaryBar({ totalApplications, totalPending, totalApproved, totalRejected }) {
    const tiles = [
        { label: "Total Applications", value: totalApplications ?? '—', accent: "border-accent-primary" },
        { label: "Pending Reviews", value: totalPending ?? '—', accent: "border-accent-secondary" },
        { label: "Approved", value: totalApproved ?? '—', accent: "border-success" },
        { label: "Rejected", value: totalRejected ?? '—', accent: "border-error" },
    ]

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {tiles.map((tile) => (
                <div
                    key={tile.label}
                    className={`bg-surface rounded-xl p-5 border-l-4 ${tile.accent} shadow-sm`}
                >
                    <p className="text-3xl font-bold text-text-primary">{tile.value}</p>
                    <p className="text-sm text-text-secondary mt-1">{tile.label}</p>
                </div>
            ))}
        </div>
    )
}
