/*
    This component renders a horizontal bar chart showing how many applications
    were submitted per volunteer role. The bar with the highest count is highlighted in
    gold to make it easy to spot at a glance.
*/

import { motion } from 'motion/react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts'

const AXIS_STYLE = { fontSize: 12, fill: '#9E9590', fontFamily: "'Inter', sans-serif" }

export default function RoleDistributionChart({ data, delay = 0 }) {
    const maxCount = data.length > 0 ? data[0].count : 0

    const coloredData = data.map(entry => ({
        ...entry,
        fill: entry.count === maxCount ? '#F8A974' : '#F43758'
    }))

    return (
        <motion.div
            className="bg-surface rounded-xl shadow-sm p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay }}
        >
            <h3 className="font-display font-semibold text-base text-text-primary mb-4">Applications by Role</h3>

            {data.length === 0 ? (
                <div className="h-[280px] flex items-center justify-center text-text-muted text-sm">No data available</div>
            ) : (
                <div className="h-[280px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={coloredData}
                            layout="vertical"
                            margin={{ top: 4, right: 20, left: 8, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#EDE8E3" horizontal={false} />
                            <XAxis type="number" allowDecimals={false} tick={AXIS_STYLE} axisLine={false} tickLine={false} />
                            <YAxis
                                type="category"
                                dataKey="role"
                                width={110}
                                tick={AXIS_STYLE}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #EDE8E3',
                                    borderRadius: '0.75rem',
                                    fontSize: '0.875rem',
                                    color: '#12100E',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                                }}
                                cursor={{ fill: '#F9F7F5' }}
                            />
                            <Bar dataKey="count" name="Applications" radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </motion.div>
    )
}
