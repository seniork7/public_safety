/*
    Admin dashboard ControlPanel component. Contains nav links to different dashboard sections and a footer
*/

import { Link, NavLink } from "react-router-dom"
import { HiViewGrid, HiCog, HiChevronLeft } from 'react-icons/hi'
import { HiExclamationTriangle, HiFolder } from 'react-icons/hi2'

// "end: true" on Dashboard prevents it from staying active when a nested route (e.g. /reports) is open
const Nav_Items = [
    { label: 'Dashboard',      to: '/admin/dashboard',                  icon: HiViewGrid,         end: true },
    { label: 'Safety Alerts',  to: '/admin/dashboard/safety-alerts',    icon: HiExclamationTriangle },
    { label: 'Reports',        to: '/admin/dashboard/reports',           icon: HiFolder },
    { label: 'Settings',       to: '/admin/dashboard/settings',          icon: HiCog },
]

export default function ControlPanel({ onCollapse = () => { }, mobileClose = () => { } }) {
    return (
        <div className="bg-nav-bg h-screen md:fixed flex flex-col w-full md:w-[230px]">

            <div className="h-16 border-b border-surface/10 flex items-center px-5">
                <div>
                    <h2 className="text-base font-bold text-accent-secondary leading-none">Public Safety</h2>
                    <p className="text-xs text-surface/60 mt-0.5">Admin Dashboard</p>
                </div>
            </div>

            <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Admin navigation">
                {Nav_Items.map(({ label, to, icon: Icon, end }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={end}
                        onClick={mobileClose}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors duration-200 ${
                                isActive
                                    ? 'bg-surface/10 text-surface font-medium'
                                    : 'text-surface/60 hover:text-surface hover:bg-surface/5'
                            }`
                        }
                    >
                        <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                        {label}
                    </NavLink>
                ))}
            </nav>

            <div className="border-t border-surface/10">
                <button
                    onClick={onCollapse}
                    className="w-full flex items-center gap-3 px-5 py-3 text-surface/60 hover:text-surface hover:bg-surface/5 text-sm transition-colors duration-200 cursor-pointer"
                    aria-label="Collapse control panel"
                    title="Collapse control panel"
                >
                    <HiChevronLeft className="w-4 h-4 shrink-0" aria-hidden="true" />
                    Collapse
                </button>
                <footer className="px-5 pb-4 text-xs text-surface/40">
                    <p>v1.0 · © {new Date().getFullYear()} · <Link to="/" className="hover:text-surface/70 transition-colors">Public Safety</Link></p>
                </footer>
            </div>
        </div>
    )
}
