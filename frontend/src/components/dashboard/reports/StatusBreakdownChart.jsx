/*
    This component renders a pie chart showing volunteer applications for 
    each status.
*/

import { motion } from 'motion/react'
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function CustomLabel({ cx, cy, total }) {
    return (
        <>
            <text x={cx} y={cy - 6} textAnchor="middle" dominantBaseline="middle"
                style={{ fontSize: 28, fontWeight: 700, fill: '#12100E', fontFamily: "'Sora', sans-serif" }}>
                {total}
            </text>
            <text x={cx} y={cy + 18} textAnchor="middle" dominantBaseline="middle"
                style={{ fontSize: 11, fill: '#9E9590', fontFamily: "'Inter', sans-serif" }}>
                Total
            </text>
        </>
    )
}

function CustomLegend({ payload }) {
    return (
        <div className="flex justify-center gap-5 mt-3 flex-wrap">
            {payload.map(entry => (
                <div key={entry.value} className="flex items-center gap-1.5 text-sm text-text-secondary">
                    <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: entry.color }} />
                    {entry.value}
                </div>
            ))}
        </div>
    )
}

export default function StatusBreakdownChart({ data, delay = 0 }) {
    const coloredData = data.map(entry => ({ ...entry, fill: entry.color }))
    const total = data.reduce((sum, d) => sum + d.value, 0)
    const nonEmpty = data.filter(d => d.value > 0)

    return (
        <motion.div
            className="bg-surface rounded-xl shadow-sm p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay }}
        >
            <h3 className="font-display font-semibold text-base text-text-primary mb-4">Status Breakdown</h3>

            {nonEmpty.length === 0 ? (
                <div className="h-[280px] flex items-center justify-center text-text-muted text-sm">No data available</div>
            ) : nonEmpty.length === 1 ? (
                <div className="h-[280px] flex flex-col items-center justify-center gap-2">
                    <p className="text-5xl font-bold text-text-primary font-display">{nonEmpty[0].value}</p>
                    <p className="text-sm text-text-secondary">{nonEmpty[0].name} applications</p>
                </div>
            ) : (
                <div className="h-[280px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={coloredData}
                                cx="50%"
                                cy="45%"
                                innerRadius={60}
                                outerRadius={95}
                                dataKey="value"
                                nameKey="name"
                                paddingAngle={3}
                                labelLine={false}
                                label={<CustomLabel total={total} />}
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
                                formatter={(value, name) => [`${value} (${total ? Math.round(value / total * 100) : 0}%)`, name]}
                            />
                            <Legend content={<CustomLegend />} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            )}
        </motion.div>
    )
}
