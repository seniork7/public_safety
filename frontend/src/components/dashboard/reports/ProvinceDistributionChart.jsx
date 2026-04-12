/*
    This component renders a vertical bar chart showing the geographic spread
    of volunteer applications by province. 
*/

import { motion } from 'motion/react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts'

const AXIS_STYLE = { fontSize: 12, fill: '#9E9590', fontFamily: "'Inter', sans-serif" }

export default function ProvinceDistributionChart({ data, delay = 0 }) {
    return (
        <motion.div
            className="bg-surface rounded-xl shadow-sm p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay }}
        >
            <h3 className="font-display font-semibold text-base text-text-primary mb-4">Applications by Province</h3>

            {data.length === 0 ? (
                <div className="h-[280px] flex items-center justify-center text-text-muted text-sm">No data available</div>
            ) : (
                <div className="h-[280px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#EDE8E3" vertical={false} />
                            <XAxis dataKey="province" tick={AXIS_STYLE} axisLine={false} tickLine={false} />
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
                                cursor={{ fill: '#F9F7F5' }}
                            />
                            <Bar dataKey="count" name="Applications" fill="#F6715B" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
        </motion.div>
    )
}
