/*
    This component renders the filter controls for the Reports page.
*/

const STATUS = [
    { label: 'All', value: 'all' },
    { label: 'Pending', value: 'pending' },
    { label: 'Approved', value: 'approved' },
    { label: 'Rejected', value: 'rejected' },
]

export default function ReportsFilters({
    statusFilter, onStatusChange,
    dateFrom, onDateFromChange,
    dateTo, onDateToChange,
    onClearAll
}) {
    const hasActiveFilters = statusFilter !== 'all' || dateFrom || dateTo

    return (
        <div className="bg-surface rounded-xl p-4 shadow-sm border border-border">
            <div className="flex flex-wrap items-center justify-between gap-8">
                {/* Status */}
                <div className="flex flex-wrap gap-2">
                    {STATUS.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => onStatusChange(value)}
                            className={
                                statusFilter === value
                                    ? 'bg-nav-bg text-white rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 cursor-pointer'
                                    : 'border border-border text-text-secondary rounded-full px-4 py-1.5 text-sm hover:border-accent-primary hover:text-accent-primary transition-colors duration-200 cursor-pointer'
                            }
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Date range */}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-text-muted">From</span>
                    <input
                        type="date"
                        value={dateFrom}
                        onChange={e => onDateFromChange(e.target.value)}
                        className="rounded-lg border border-border bg-bg px-3 py-1.5 text-sm text-text-primary focus:ring-2 focus:ring-accent-primary focus:outline-none transition-colors duration-200"
                    />
                    <span className="text-text-muted">To</span>
                    <input
                        type="date"
                        value={dateTo}
                        onChange={e => onDateToChange(e.target.value)}
                        className="rounded-lg border border-border bg-bg px-3 py-1.5 text-sm text-text-primary focus:ring-2 focus:ring-accent-primary focus:outline-none transition-colors duration-200"
                    />
                </div>

                {/* Clear All */}
                {hasActiveFilters && (
                    <button
                        onClick={onClearAll}
                        className="ml-auto text-xs text-text-muted hover:text-error transition-colors duration-200 cursor-pointer"
                    >
                        Clear all
                    </button>
                )}
            </div>
        </div>
    )
}
