/*
    This component renders the Reports section of the admin dashboard.
*/

import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminFetch } from '../../../utils/adminFetch'
import LoadingOverlay from '../../LoadingOverlay'
import ReportsSummaryBar from '../reports/ReportsSummaryBar'
import ReportsFilters from '../reports/ReportsFilters'
import StatusBreakdownChart from '../reports/StatusBreakdownChart'
import ApplicationsOverTimeChart from '../reports/ApplicationsOverTimeChart'
import RoleDistributionChart from '../reports/RoleDistributionChart'
import ProvinceDistributionChart from '../reports/ProvinceDistributionChart'

export default function Reports() {
    const [fetchLoading, setFetchLoading] = useState(false)
    const [applications, setApplications] = useState([])
    const [statusFilter, setStatusFilter] = useState('all')
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            setFetchLoading(true)
            try {
                const response = await adminFetch('api/admin/dashboard_data', { cache: 'no-store' })
                setApplications(response.applications ?? [])
            } catch (error) {
                if (error.message === 'Unauthorized!') {
                    navigate('/admin/login')
                    return
                }
                console.error(error)
            } finally {
                setFetchLoading(false)
            }
        }
        fetchData()
    }, [navigate])

    // Stats for summary bar
    const stats = useMemo(() => ({
        totalApplications: applications.length,
        totalPending: applications.filter(app => app.status === 'pending').length,
        totalApproved: applications.filter(app => app.status === 'approved').length,
        totalRejected: applications.filter(app => app.status === 'rejected').length,
    }), [applications])

    // Filtered applications
    const filtered = useMemo(() => applications
        .filter(app => statusFilter === 'all' || app.status === statusFilter)
        .filter(app => {
            if (!dateFrom && !dateTo) return true
            const date = new Date(app.createdAt)
            if (dateFrom && date < new Date(dateFrom)) return false
            if (dateTo && date > new Date(dateTo + 'T23:59:59')) return false
            return true
        })
        , [applications, statusFilter, dateFrom, dateTo])

    // Status breakdown
    const statusData = useMemo(() => {
        const counts = { pending: 0, approved: 0, rejected: 0 }
        filtered.forEach(a => { if (a.status in counts) counts[a.status]++ })
        return [
            { name: 'Pending', value: counts.pending, color: '#F8A974' },
            { name: 'Approved', value: counts.approved, color: '#16A34A' },
            { name: 'Rejected', value: counts.rejected, color: '#B91C1C' },
        ]
    }, [filtered])

    // Applications over time (grouped by month)
    const timeData = useMemo(() => {
        const map = {}
        filtered.forEach(a => {
            if (!a.createdAt) return
            const d = new Date(a.createdAt)
            const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
            map[key] = (map[key] || 0) + 1
        })
        return Object.entries(map)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, count]) => ({
                month: new Date(key + '-01').toLocaleDateString('en', { month: 'short', year: '2-digit' }),
                count
            }))
    }, [filtered])

    // Role distribution
    const roleData = useMemo(() => {
        const map = {}
        filtered.forEach(a => { if (a.role) map[a.role] = (map[a.role] || 0) + 1 })
        return Object.entries(map)
            .map(([role, count]) => ({ role, count }))
            .sort((a, b) => b.count - a.count)
    }, [filtered])

    // Province distribution (top 8)
    const provinceData = useMemo(() => {
        const map = {}
        filtered.forEach(a => { if (a.province) map[a.province] = (map[a.province] || 0) + 1 })
        return Object.entries(map)
            .map(([province, count]) => ({ province, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 8)
    }, [filtered])

    const handleClearAll = () => {
        setStatusFilter('all')
        setDateFrom('')
        setDateTo('')
    }

    const isEmpty = filtered.length === 0 && applications.length > 0

    return (
        <section className="space-y-6">
            {fetchLoading && <LoadingOverlay />}

            <h2 className="font-display font-bold text-lg text-text-primary">Volunteer application analytics</h2>

            <ReportsSummaryBar {...stats} />

            <ReportsFilters
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
                dateFrom={dateFrom}
                onDateFromChange={setDateFrom}
                dateTo={dateTo}
                onDateToChange={setDateTo}
                onClearAll={handleClearAll}
            />

            {isEmpty ? (
                <div className="bg-surface rounded-xl shadow-sm p-10 border border-border text-center">
                    <p className="text-text-muted text-sm">No applications match the selected filters.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <StatusBreakdownChart data={statusData} delay={0} />
                    <ApplicationsOverTimeChart data={timeData} delay={0.08} />
                    <RoleDistributionChart data={roleData} delay={0.16} />
                    <ProvinceDistributionChart data={provinceData} delay={0.24} />
                </div>
            )}
        </section>
    )
}
