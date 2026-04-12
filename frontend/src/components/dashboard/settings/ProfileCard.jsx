/*
    This component allows admins to manage their profile information such as first and last name. On a successful save it calls onProfileSaved so AdminSettings can sync the updated name into AuthContext, updating the dashboard header without a page reload.
*/

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { HiExclamation } from 'react-icons/hi'
import { adminFetch } from '../../../utils/adminFetch'
import TextInput from '../../form_elements/TextInput'
import Label from '../../form_elements/Label'
import SettingsReadOnlyField from './SettingsReadOnlyField'
import SettingsFeedback from './SettingsFeedback'

export default function ProfileCard({ profile, isDemo, onProfileSaved }) {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [loading, setLoading] = useState(false)
    const [feedback, setFeedback] = useState(null)

    useEffect(() => {
        if (profile) {
            setFName(profile.fName ?? '')
            setLName(profile.lName ?? '')
        }
    }, [profile])

    const memberSince = profile?.createdAt
        ? new Date(profile.createdAt).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })
        : '—'

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!fName.trim() && !lName.trim()) {
            setFeedback({ type: 'error', message: 'First name and last name cannot both be empty.' })
            return
        }
        setLoading(true)
        try {
            const response = await adminFetch('api/admin/profile', {
                method: 'PATCH',
                body: JSON.stringify({ fName: fName.trim(), lName: lName.trim() }),
            })
            setFeedback({ type: 'success', message: response.message })
            onProfileSaved({ fName: response.fName, lName: response.lName })
        } catch (error) {
            setFeedback({ type: 'error', message: error.message || 'Failed to update profile.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <motion.div
            className="bg-surface rounded-xl shadow-sm p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0 }}
        >
            <h3 className="font-display font-semibold text-base text-text-primary mb-5">Profile Information</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="fName">First Name</Label>
                        <TextInput
                            id="fName"
                            type="text"
                            value={fName}
                            onChange={e => setFName(e.target.value)}
                            disabled={isDemo}
                            className={isDemo ? 'opacity-60 cursor-not-allowed' : ''}
                        />
                    </div>
                    <div>
                        <Label htmlFor="lName">Last Name</Label>
                        <TextInput
                            id="lName"
                            type="text"
                            value={lName}
                            onChange={e => setLName(e.target.value)}
                            disabled={isDemo}
                            className={isDemo ? 'opacity-60 cursor-not-allowed' : ''}
                        />
                    </div>
                </div>

                <SettingsReadOnlyField label="Email Address" value={profile?.email ?? '—'} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SettingsReadOnlyField label="Role" value={profile?.role ?? '—'} badge />
                    <SettingsReadOnlyField label="Member Since" value={memberSince} />
                </div>

                <div className="mt-6 space-y-3">
                    {feedback && (
                        <SettingsFeedback
                            type={feedback.type}
                            message={feedback.message}
                            onDismiss={() => setFeedback(null)}
                        />
                    )}

                    {isDemo ? (
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-accent-secondary/10 border border-accent-secondary/30">
                            <HiExclamation className="w-4 h-4 text-accent-secondary mt-0.5 shrink-0" />
                            <p className="text-xs text-text-secondary">
                                Demo accounts cannot make changes. This section is read-only.
                            </p>
                        </div>
                    ) : (
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-5 py-2 rounded-lg text-sm font-semibold bg-accent-secondary hover:bg-accent-primary hover:text-surface text-text-primary transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                    )}
                </div>
            </form>
        </motion.div>
    )
}
