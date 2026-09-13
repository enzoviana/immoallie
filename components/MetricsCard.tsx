'use client'

import React from 'react'
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'
import clsx from 'clsx'

interface MetricsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: {
    value: number
    direction: 'up' | 'down'
  }
  description?: string
}

export default function MetricsCard({ title, value, icon: Icon, trend, description }: MetricsCardProps) {
  return (
    <div className="bg-white border border-neutral-300 rounded-xl p-6 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
        </div>
        {trend && (
          <div
            className={clsx(
              'flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded-lg',
              trend.direction === 'up'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            )}
          >
            {trend.direction === 'up' ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            {Math.abs(trend.value)}%
          </div>
        )}
      </div>
      <h3 className="text-sm font-medium text-neutral-600 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-neutral-900 mb-1">{value}</p>
      {description && <p className="text-xs text-neutral-500">{description}</p>}
    </div>
  )
}
