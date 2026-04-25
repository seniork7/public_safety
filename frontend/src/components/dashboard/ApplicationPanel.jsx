import { useState, useEffect } from 'react'
import { HiX } from 'react-icons/hi'
import { HiPhone, HiMiniEnvelope, HiMapPin, HiPencilSquare, HiTrash, HiCheck, HiXMark } from 'react-icons/hi2'
import Button from '../form_elements/Button'

export default function ApplicationPanel({
    app,
    open = false,
    onClose = () => { },
    onStatusChange = () => { },
    onAddNote = () => { },
    onDeleteNote = () => { },
    onEditNote = () => { },
} = {}) {

    const [newNoteText, setNewNoteText] = useState('')
    const [editingNoteId, setEditingNoteId] = useState(null)
    const [editNoteText, setEditNoteText] = useState('')
    const [noteLoading, setNoteLoading] = useState(false)

    // Reset note state whenever a different application is opened
    useEffect(() => {
        setNewNoteText('')
        setEditingNoteId(null)
        setEditNoteText('')
        setNoteLoading(false)
    }, [app?._id])

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
            : 'bg-accent-secondary/25 text-text-secondary'

    const formatNoteDate = (date) => new Date(date).toLocaleDateString(undefined, {
        month: 'short', day: 'numeric', year: 'numeric'
    })

    const handleSaveNewNote = async () => {
        if (!newNoteText.trim()) return
        setNoteLoading(true)
        try {
            await onAddNote(app._id, newNoteText)
            setNewNoteText('')
        } finally {
            setNoteLoading(false)
        }
    }

    const handleStartEdit = (note) => {
        setEditingNoteId(note._id)
        setEditNoteText(note.text)
    }

    const handleSaveEdit = async (noteId) => {
        if (!editNoteText.trim()) return
        setNoteLoading(true)
        try {
            await onEditNote(app._id, noteId, editNoteText)
            setEditingNoteId(null)
            setEditNoteText('')
        } finally {
            setNoteLoading(false)
        }
    }

    const handleCancelEdit = () => {
        setEditingNoteId(null)
        setEditNoteText('')
    }

    const handleDelete = async (noteId) => {
        setNoteLoading(true)
        try {
            await onDeleteNote(app._id, noteId)
        } finally {
            setNoteLoading(false)
        }
    }

    const notes = app.notes ?? []

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
                                    { label: "Gender", value: app.gender },
                                    { label: "Role", value: app.role },
                                    { label: "Experience", value: app.experience },
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

                        {/* Admin Notes */}
                        <div>
                            <h3 className="text-sm font-medium text-text-primary mb-3">
                                Admin Notes
                                {notes.length > 0 && (
                                    <span className="ml-2 text-xs font-normal text-text-secondary">
                                        ({notes.length})
                                    </span>
                                )}
                            </h3>

                            {/* Existing notes */}
                            {notes.length > 0 && (
                                <ul className="space-y-2 mb-3">
                                    {notes.map((note) => (
                                        <li key={note._id} className="bg-bg rounded-lg p-3">
                                            {editingNoteId === note._id ? (
                                                <div>
                                                    <textarea
                                                        value={editNoteText}
                                                        onChange={(e) => setEditNoteText(e.target.value)}
                                                        className="w-full min-h-20 resize-y rounded-lg border border-border px-3 py-2 text-sm bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary"
                                                        disabled={noteLoading}
                                                    />
                                                    <div className="flex justify-end gap-2 mt-2">
                                                        <button
                                                            onClick={handleCancelEdit}
                                                            disabled={noteLoading}
                                                            className="px-2 py-1 rounded text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 disabled:opacity-50"
                                                            aria-label="Cancel edit"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            onClick={() => handleSaveEdit(note._id)}
                                                            disabled={noteLoading || !editNoteText.trim()}
                                                            className="px-2 py-1 rounded text-xs bg-accent-primary text-surface hover:bg-accent-primary/90 transition-colors duration-200 disabled:opacity-50"
                                                            aria-label="Save edit"
                                                        >
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
                                                        {note.text}
                                                    </p>
                                                    <div className="flex items-center justify-between mt-2">
                                                        <p className="text-xs text-text-secondary">
                                                            {note.adminName} - {formatNoteDate(note.createdAt)}
                                                        </p>
                                                        <div className="flex items-center gap-1">
                                                            <button
                                                                onClick={() => handleStartEdit(note)}
                                                                disabled={noteLoading}
                                                                className="p-1 rounded text-text-secondary hover:text-accent-primary transition-colors duration-200 disabled:opacity-50"
                                                                aria-label="Edit note"
                                                            >
                                                                <HiPencilSquare className="w-3.5 h-3.5" />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(note._id)}
                                                                disabled={noteLoading}
                                                                className="p-1 rounded text-text-secondary hover:text-error transition-colors duration-200 disabled:opacity-50"
                                                                aria-label="Delete note"
                                                            >
                                                                <HiTrash className="w-3.5 h-3.5" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Add new note */}
                            <textarea
                                value={newNoteText}
                                onChange={(e) => setNewNoteText(e.target.value)}
                                placeholder="Add context, review notes, follow up items..."
                                className="w-full min-h-20 resize-y rounded-lg border border-border px-3 py-2 text-sm bg-bg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary disabled:opacity-50"
                                disabled={noteLoading}
                            />
                            <div className="flex justify-end mt-2">
                                <Button
                                    onClick={handleSaveNewNote}
                                    disabled={noteLoading || !newNoteText.trim()}
                                    className="bg-accent-primary text-surface hover:bg-accent-primary/90 text-sm duration-200 disabled:opacity-50"
                                >
                                    {noteLoading ? 'Saving...' : 'Save Note'}
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
