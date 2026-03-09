import Card from "../Card"
import Button from "../form_elements/Button"

export default function volunteerApplications({ applications } = {}) {
    const applicationList = applications?.applications

    return (
        <div>
            <h1 className="text-2xl mb-4">Volunteer Applications</h1>
            {applicationList ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {applicationList.map((app) => (
                        <Card key={app._id} className="w-full bg-surface" aria-labelledby={`application-${app._id}`}>
                            <div className="flex items-start justify-between">
                                <div className="text-sm">
                                    <h2 className="text-lg flex items-center gap-2">
                                        {`${app.fName} ${app.lName}`}
                                        <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full` + (app.status === 'Pending' ? ' bg-accent-secondary/15 text-accent-secondary' : app.status === 'Approved' ? ' bg-success/15 text-success' : ' bg-error/15 text-error')}>
                                            {app.status}
                                        </span>
                                    </h2>

                                    <p>{app.role}</p>
                                    <p>Application ID: {app._id}</p>
                                </div>
                                <div className="text-sm italic text-text-muted">
                                    <p className="">Submitted</p>
                                    <p className="">{new Date(app.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 mt-4">
                                <Button onClick={() => handleViewDetails()} aria-label={`View details for ${app.fName} ${app.lName}`} className="w-full bg-transparent border border-accent-secondary hover:bg-accent-primary hover:border-accent-primary duration-700 text-text-primary hover:text-surface hover:scale-95">
                                    View Details
                                </Button>

                                {app.status !== 'Approved' ? (
                                    <div className="flex flex-col md:flex-row gap-2">
                                        <Button onClick={() => handleApprove(app._id)} aria-label={`Approve application for ${app.fName} ${app.lName}`} className="w-[1/2] bg-success hover:bg-success/90 duration-700 text-surface hover:scale-95">
                                            Approve
                                        </Button>
                                        <Button onClick={() => handleReject(app._id)} aria-label={`Reject application for ${app.fName} ${app.lName}`} className="w-[1/2] bg-error hover:bg-error/90 duration-700 text-surface hover:scale-95">
                                            Reject
                                        </Button>
                                    </div>
                                ) : ''}
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <p>Loading applications...</p>
            )}
        </div>
    )
}
