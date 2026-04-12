/*
    This component handles the password/security section of the Settings page.
*/

import { useState } from 'react'
import { motion } from 'motion/react'
import { HiExclamation } from 'react-icons/hi'
import { adminFetch } from '../../../utils/adminFetch'
import TextInput from '../../form_elements/TextInput'
import Label from '../../form_elements/Label'
import SettingsFeedback from './SettingsFeedback'

export default function PasswordCard({ isDemo }) {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [feedback, setFeedback] = useState(null)
    const [fieldErrors, setFieldErrors] = useState({})

    const clearFieldError = (field) =>
        setFieldErrors(prev => ({ ...prev, [field]: undefined }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFeedback(null)

        // Client-side validation
        const errors = {}
        if (!currentPassword) errors.currentPassword = 'Required'
        if (!newPassword) errors.newPassword = 'Required'
        else if (newPassword.length < 8) errors.newPassword = 'Must be at least 8 characters'
        if (!confirmPassword) errors.confirmPassword = 'Required'
        else if (confirmPassword !== newPassword) errors.confirmPassword = 'Passwords do not match'

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors)
            return
        }

        setLoading(true)
        try {
            const response = await adminFetch('api/admin/password', {
                method: 'PATCH',
                body: JSON.stringify({ currentPassword, newPassword }),
            })
            setFeedback({ type: 'success', message: response.message })
            setCurrentPassword('')
            setNewPassword('')
            setConfirmPassword('')
            setFieldErrors({})
        } catch (error) {
            setFeedback({ type: 'error', message: error.message || 'Failed to update password.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <motion.div
            className="bg-surface rounded-xl shadow-sm p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
        >
            <h3 className="font-display font-semibold text-base text-text-primary mb-5">Change Password</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <TextInput
                        id="currentPassword"
                        type="password"
                        value={currentPassword}
                        onChange={e => { setCurrentPassword(e.target.value); clearFieldError('currentPassword') }}
                        disabled={isDemo}
                        className={isDemo ? 'opacity-60 cursor-not-allowed' : ''}
                    />
                    {fieldErrors.currentPassword && (
                        <p className="text-xs text-error mt-1">{fieldErrors.currentPassword}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <TextInput
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={e => { setNewPassword(e.target.value); clearFieldError('newPassword') }}
                        disabled={isDemo}
                        className={isDemo ? 'opacity-60 cursor-not-allowed' : ''}
                    />
                    {fieldErrors.newPassword && (
                        <p className="text-xs text-error mt-1">{fieldErrors.newPassword}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <TextInput
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={e => { setConfirmPassword(e.target.value); clearFieldError('confirmPassword') }}
                        disabled={isDemo}
                        className={isDemo ? 'opacity-60 cursor-not-allowed' : ''}
                    />
                    {fieldErrors.confirmPassword && (
                        <p className="text-xs text-error mt-1">{fieldErrors.confirmPassword}</p>
                    )}
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
                            {loading ? 'Saving...' : 'Update Password'}
                        </button>
                    )}
                </div>
            </form>
        </motion.div>
    )
}
