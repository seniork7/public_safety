/*
    This component renders an area chart showing volunteer application submission
    over time grouped by month. The data is derived from each application's createdAt
    timestamp and sorted chronologically.
*/

import { motion } from 'motion/react'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts'

const AXIS_STYLE = { fontSize: 12, fill: '#9E9590', fontFamily: "'Inter', sans-serif" }

export default function ApplicationsOverTimeChart({ data, delay = 0 }) {
    return (
        <motion.div
            className="bg-surface rounded-xl shadow-sm p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay }}
        >
            <h3 className="font-display font-semibold text-base text-text-primary mb-4">Applications Over Time</h3>

            {data.length === 0 ? (
                <div className="h-[280px] flex items-center justify-center text-text-muted text-sm">No data available</div>
            ) : (
                <div className="h-[280px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                            <defs>
                                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#F43758" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#F43758" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#EDE8E3" vertical={false} />
                            <XAxis dataKey="month" tick={AXIS_STYLE} axisLine={false} tickLine={false} />
                            <YAxis allowDecimals={false} tick={AXIS_STYLE} axisLine={false} tickLine={false} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #EDE8E3',
                                    borderRadius: '0.75rem',
                                    fontSize: '0.875rem',
                                    color: '#12100E',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                                }}
                                cursor={{ stroke: '#EDE8E3' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="count"
                                name="Applications"
                                stroke="#F43758"
                                strokeWidth={2}
                                fill="url(#areaGradient)"
                                dot={{ r: 3, fill: '#F43758', strokeWidth: 0 }}
                                activeDot={{ r: 5, fill: '#F43758', strokeWidth: 0 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            )}
        </motion.div>
    )
}
