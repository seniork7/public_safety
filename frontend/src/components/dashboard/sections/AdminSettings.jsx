/*
    This component determines whether the logged-in account is a Demo_Admin and passes that flag down to both cards
    so they can restrict editing. After a successful profile save it calls the AuthContext
    login() to sync the updated name across the dashboard without a page reload.
*/

import { useAuth } from '../../../store/AuthContext'
import ProfileCard from '../settings/ProfileCard'
import PasswordCard from '../settings/PasswordCard'

export default function AdminSettings() {
    const { user, login } = useAuth()

    const isDemo = (user?.role ?? '').toLowerCase() !== 'admin'

    const handleProfileSaved = ({ fName, lName }) => {
        login({ ...user, fName, lName })
    }

    return (
        <section className="space-y-6">
            <h2 className="font-display font-bold text-lg text-text-primary">Manage your account and security preferences</h2>

            <ProfileCard
                profile={user}
                isDemo={isDemo}
                onProfileSaved={handleProfileSaved}
            />

            <PasswordCard isDemo={isDemo} />
        </section>
    )
}
