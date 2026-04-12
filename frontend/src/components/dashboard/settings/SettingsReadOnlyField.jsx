/*
    This component renders fields that are Read-Only
*/

export default function SettingsReadOnlyField({ label, value, badge = false }) {
    return (
        <div>
            <p className="block text-sm font-medium text-text-primary py-2">{label}</p>
            {badge ? (
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-accent-primary/10 text-accent-primary">
                    {value}
                </span>
            ) : (
                <p className="w-full px-3 py-2 rounded-md bg-bg text-text-secondary text-sm border border-border">
                    {value}
                </p>
            )}
        </div>
    )
}
