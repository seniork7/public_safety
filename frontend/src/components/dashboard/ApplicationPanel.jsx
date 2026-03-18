import { useEffect, useState } from 'react'
import { HiX } from 'react-icons/hi'
import { HiPhone, HiMiniEnvelope } from 'react-icons/hi2'
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

  return (
    <section className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>

      <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />

      <aside
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 top-0 h-full w-[350px] md:w-xl bg-surface border-l border-border shadow-xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
      >
        <div className="flex flex-col h-full">
          <header className="flex items-start justify-between p-4 border-b border-border">
            <div>
              <h2 className="text-lg font-semibold flex items-center gap-14">
                {app.fName} {app.lName}
                <span className={`ml-12 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${app.status?.toLowerCase() === 'approved' ? 'bg-success/15 text-success' : app.status?.toLowerCase() === 'rejected' ? 'bg-error/15 text-error' : 'bg-accent-secondary/15 text-accent-secondary'}`}>
                  {app.status?.charAt(0).toUpperCase() + (app.status?.slice(1) ?? '')}
                </span>
              </h2>

              <p className="text-sm text-text-muted">{`ID: ${app._id}`}</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-md hover:bg-surface/5"><HiX className="w-5 h-5" /></button>
          </header>
          <div className="flex-1 overflow-auto p-4 space-y-4">
            <dl className="space-y-3 text-text-primary">
              <div className="space-y-2 bg-bg p-3 rounded-lg">
                <dt className="">Contact Info:</dt>

                <dd className="hover:text-accent-primary">
                  <HiMiniEnvelope className="inline-block mr-1 " />
                  <a href={`mailto:${app.email}`}>{app.email}</a>
                </dd>

                <dd className="hover:text-accent-primary">
                  <HiPhone className="inline-block mr-1" />
                  <a href={`tel:${app.phone}`}>{app.phone}</a>
                </dd>

                <dd>{`Submitted on ${formattedDate}`}</dd>
              </div>

              <div>
                <dt className="font-medium">Gender</dt>
                <dd>{app.gender}</dd>
              </div>

              <div>
                <dt className="font-medium">Role</dt>
                <dd>{app.role}</dd>
              </div>

              <div>
                <dt className="font-medium">Experience</dt>
                <dd>{app.experience}</dd>
              </div>

              <div>
                <dt className="font-medium">Availability</dt>
                <dd>{app.availability}</dd>
              </div>

              <div>
                <dt className="font-medium">Reason for Volunteering</dt>
                <dd className="whitespace-pre-wrap">{app.whyVolunteer}</dd>
              </div>
            </dl>

            <div className="mt-2">
              <label className="block text-sm font-medium text-text-primary mb-2">Admin notes</label>
              <textarea
                value=""
                placeholder="Add context, review notes, follow up items..."
                className="w-full min-h-[100px] resize-y rounded-md border border-border px-3 py-2 text-sm bg-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
              />
              <div className="flex items-center justify-end mt-2">
                <Button
                  className="bg-accent-primary text-surface hover:bg-accent-primary/90 duration-700 hover:scale-95"
                >
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
                  className="flex-1 bg-success hover:bg-success/90 duration-700 text-surface hover:scale-95"
                >
                  Approve
                </Button>
              )}

              {app.status !== "rejected" && (
                <Button
                  onClick={() => onStatusChange(app._id, "rejected")}
                  aria-label={`Reject application for ${app.fName} ${app.lName}`}
                  className="flex-1 bg-error hover:bg-error/90 duration-700 text-surface hover:scale-95"
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