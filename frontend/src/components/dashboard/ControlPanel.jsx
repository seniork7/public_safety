/* 
    Admin dashboard ControlPanel component. Contains nav links to different dashboard sections and a footer
*/

import { Link } from "react-router-dom"
import NavMenu from "../header/NavMenu"
import { HiViewGrid, HiCog, HiChevronLeft } from 'react-icons/hi'
import { HiExclamationTriangle, HiFolder } from 'react-icons/hi2'


const Nav_Items = [
    { label: 'Dashboard', to: '/admin/dashboard', icon: HiViewGrid },
    { label: 'Safety Alerts', to: '/admin/dashboard/safety-alerts', icon: HiExclamationTriangle },
    { label: 'Reports', to: '/admin/dashboard/reports', icon: HiFolder },
    { label: 'Settings', to: '/admin/dashboard/settings', icon: HiCog }
]

export default function ControlPanel({handleCallapse = null}) {

    return (
        <div className="bg-nav-bg h-screen flex flex-col">
            <div className='py-8 shadow-lg flex items-center justify-center gap-4 h-8'>
                <button 
                    onClick={handleCallapse} 
                    className="p-1 rounded-full text-surface hover:bg-surface/15 transition duration-300 cursor-pointer"
                    aria-label="Collapse control panel"
                    title="Collapse control panel"
                >
                    <HiChevronLeft className="text-2xl text-surface" />
                </button>

                <div>
                    <h2 className="text-lg font-bold text-accent-secondary">Public Safety</h2>
                    <p className="text-xs text-surface/80">Admin Dashboard</p>
                </div>
            </div>

            <div className="flex justify-center">
                <NavMenu Nav_Items={Nav_Items} className="py-15 text-surface/80 text-lg flex-col" page='admin' />
            </div>
            
            <footer className="mt-auto py-4 px-8 text-xs text-surface/80 shadow-lg border-t border-surface/10">
                <p>v1.0 | &copy; {new Date().getFullYear()} | <Link to="/" className="hover:underline">Public Safety</Link></p>
            </footer>
        </div>
    )
}
