import NavMenu from "../header/NavMenu"
import { HiViewGrid, HiCog } from 'react-icons/hi'
import { HiExclamationTriangle, HiFolder } from 'react-icons/hi2'
import { Link } from "react-router-dom"


const Nav_Items = [
    { label: 'Dashboard', to: '/admin/dashboard', icon: HiViewGrid },
    { label: 'Safety Alerts', to: '/admin/dashboard/safety-alerts', icon: HiExclamationTriangle },
    { label: 'Reports', to: '/admin/dashboard/reports', icon: HiFolder },
    { label: 'Settings', to: '/admin/dashboard/settings', icon: HiCog }
]

export default function ControlPanel() {
    return (
        <div className="bg-nav-bg h-screen flex flex-col">
            <div className='py-8 lg:px-8 shadow-lg flex flex-col justify-center h-8'>
                <h2 className="text-lg font-bold text-accent-secondary">Public Safety</h2>
                <p className="text-xs text-surface/80">Admin Dashboard</p>
            </div>

            <NavMenu Nav_Items={Nav_Items} className="py-15 lg:px-8 text-surface/80 text-lg h-screen flex-col" page='admin' />
            
            <footer className="mt-auto py-4 px-8 text-xs text-surface/80 shadow-lg border-t border-surface/10">
                <p>v1.0 | &copy; {new Date().getFullYear()} | <Link to="/" className="hover:underline">Public Safety</Link></p>
            </footer>
        </div>
    )
}
