/*
    Volunteer Applications component for admin dashboard. Renders a list of all volunteer applications with options to view details, approve, or reject each application.
*/

import Button from "../form_elements/Button"

const statusStyle = (status) => {
    if (status?.toLowerCase() === 'approved') return 'bg-success/15 text-success'
    if (status?.toLowerCase() === 'rejected') return 'bg-error/15 text-error'
    return 'bg-accent-secondary/25 text-navy-light'
}

export default function VolunteerApplications({
    dashboardData,
    onStatusChange = () => { },
    onViewDetails = () => { }
} = {}) {

    if (!dashboardData || dashboardData.length === 0) {
        return (
            <div>
                <h2 className="text-lg font-semibold text-text-primary mb-4">Volunteer Applications</h2>
                <div className="bg-surface rounded-xl border border-border p-12 text-center">
                    <p className="text-text-secondary text-sm">No applications found.</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2 className="text-lg font-semibold text-text-primary mb-4">Volunteer Applications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {dashboardData.map((app) => (
                    <div
                        key={app._id}
                        className="bg-surface rounded-xl border border-border p-5"
                        aria-labelledby={`app-name-${app._id}`}
                    >
                        <div className="flex items-start justify-between mb-1">
                            <div>
                                <h3 id={`app-name-${app._id}`} className="font-semibold text-text-primary">
                                    {app.fName} {app.lName}
                                </h3>

                                <p className="text-text-secondary text-sm">{app.role}</p>

                                {(app.province || app.city) && (
                                    <p className="text-text-secondary text-sm">
                                        {`${app.city}, ${app.province}`}
                                    </p>
                                )}

                                <p className="text-text-secondary text-xs mt-1">#{app._id?.slice(-6)}</p>
                            </div>

                            <div>
                                <p className="text-text-secondary text-xs mb-1">
                                    Submitted {new Date(app.createdAt).toLocaleDateString()}
                                </p>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyle(app.status)}`}>
                                    {app.status?.charAt(0).toUpperCase() + (app.status?.slice(1) ?? '')}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-border">
                            <div className="flex flex-row items-center justify-center gap-3 w-full">
                                <Button
                                    onClick={() => onViewDetails(app._id)}
                                    aria-label={`View details for ${app.fName} ${app.lName}`}
                                    className="bg-transparent border border-border hover:border-accent-primary hover:text-accent-primary text-text-primary text-sm duration-200 w-full"
                                >
                                    View Details
                                </Button>

                                {app.status !== "approved" && (
                                    <Button
                                        onClick={() => onStatusChange(app._id, "approved")}
                                        aria-label={`Approve application for ${app.fName} ${app.lName}`}
                                        className="bg-success hover:bg-success/90 text-surface text-sm duration-200 w-full"
                                    >
                                        Approve
                                    </Button>
                                )}

                                {app.status !== "rejected" && (
                                    <Button
                                        onClick={() => onStatusChange(app._id, "rejected")}
                                        aria-label={`Reject application for ${app.fName} ${app.lName}`}
                                        className="bg-error hover:bg-error/90 text-surface text-sm duration-200 w-full"
                                    >
                                        Reject
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
