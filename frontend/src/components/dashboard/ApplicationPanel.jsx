import { HiX } from 'react-icons/hi'
import { HiPhone, HiMiniEnvelope, HiMapPin } from 'react-icons/hi2'
import Button from '../form_elements/Button'

export default function ApplicationPanel({
    app,
    open = false,
    onClose = () => { },
    onStatusChange = () => { },
} = {}) {

    if (!app) return null

    const formattedDate = new Date(app?.createdAt).toLocaleString(undefined, {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })

    const statusStyle = app.status?.toLowerCase() === 'approved'
        ? 'bg-success/15 text-success'
        : app.status?.toLowerCase() === 'rejected'
            ? 'bg-error/15 text-error'
            : 'bg-accent-secondary/25 text-navy-light'

    return (
        <section className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>

            <div
                className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            <aside
                onClick={(e) => e.stopPropagation()}
                className={`absolute right-0 top-0 h-full w-[350px] md:w-xl bg-surface border-l border-border shadow-xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
                role="dialog"
                aria-label={`Application details for ${app.fName} ${app.lName}`}
            >
                <div className="flex flex-col h-full">

                    <header className="flex items-center justify-between p-4 border-b border-border">
                        <div>
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-semibold text-text-primary">
                                    {app.fName} {app.lName}
                                </h2>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyle}`}>
                                    {app.status?.charAt(0).toUpperCase() + (app.status?.slice(1) ?? '')}
                                </span>
                            </div>
                            <p className="text-xs text-text-secondary mt-0.5">#{app._id?.slice(-6)}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg transition-colors duration-200"
                            aria-label="Close panel"
                        >
                            <HiX className="w-5 h-5" />
                        </button>
                    </header>

                    <div className="flex-1 overflow-auto p-4 space-y-4">
                        <dl className="space-y-3 text-text-primary">

                            <div className="bg-bg rounded-lg p-4 space-y-2">
                                <dt className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-3">Contact</dt>

                                <dd className="flex items-center gap-2 text-sm hover:text-accent-primary transition-colors duration-200">
                                    <HiMiniEnvelope className="w-4 h-4 shrink-0 text-text-secondary" aria-hidden="true" />
                                    <a href={`mailto:${app.email}`}>{app.email}</a>
                                </dd>

                                <dd className="flex items-center gap-2 text-sm hover:text-accent-primary transition-colors duration-200">
                                    <HiPhone className="w-4 h-4 shrink-0 text-text-secondary" aria-hidden="true" />
                                    <a href={`tel:${app.phone}`}>{app.phone}</a>
                                </dd>

                                {(app.province || app.city) && (
                                    <dd className="flex items-center gap-2 text-sm text-text-secondary">
                                        <HiMapPin className="w-4 h-4 shrink-0 text-text-secondary" aria-hidden="true" />
                                        {[app.city, app.province].filter(Boolean).join(', ')}
                                    </dd>
                                )}

                                <dd className="text-xs text-text-secondary pt-1">Submitted {formattedDate}</dd>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: "Gender",       value: app.gender },
                                    { label: "Role",         value: app.role },
                                    { label: "Experience",   value: app.experience },
                                    { label: "Availability", value: app.availability },
                                ].map(({ label, value }) => (
                                    <div key={label} className="bg-bg rounded-lg p-3">
                                        <dt className="text-xs text-text-secondary uppercase tracking-wide mb-1">{label}</dt>
                                        <dd className="text-sm text-text-primary font-medium">{value}</dd>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <dt className="text-sm font-medium text-text-primary mb-2">Reason for Volunteering</dt>
                                <dd className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap bg-bg rounded-lg p-3">
                                    {app.whyVolunteer}
                                </dd>
                            </div>
                        </dl>

                        {/* Admin notes are not yet saved to the database */}
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Admin Notes</label>
                            <textarea
                                placeholder="Add context, review notes, follow up items..."
                                className="w-full min-h-[100px] resize-y rounded-lg border border-border px-3 py-2 text-sm bg-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
                            />
                            <div className="flex justify-end mt-2">
                                <Button className="bg-accent-primary text-surface hover:bg-accent-primary/90 text-sm duration-200">
                                    Save Notes
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 border-t border-border bg-bg">
                        <div className="flex gap-2 w-full">
                            {app.status !== "approved" && (
                                <Button
                                    onClick={() => onStatusChange(app._id, "approved")}
                                    aria-label={`Approve application for ${app.fName} ${app.lName}`}
                                    className="flex-1 bg-success hover:bg-success/90 text-surface duration-200"
                                >
                                    Approve
                                </Button>
                            )}
                            {app.status !== "rejected" && (
                                <Button
                                    onClick={() => onStatusChange(app._id, "rejected")}
                                    aria-label={`Reject application for ${app.fName} ${app.lName}`}
                                    className="flex-1 bg-error hover:bg-error/90 text-surface duration-200"
                                >
                                    Reject
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </aside>
        </section>
    )
}
