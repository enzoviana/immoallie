'use client'

import React from 'react'
import { MapPin, Euro, Bed, Home, Zap, Repeat, SlidersHorizontal, Grid3x3, Map } from 'lucide-react'
import clsx from 'clsx'

interface FilterBarProps {
  viewMode: 'grid' | 'map'
  onViewModeChange: (mode: 'grid' | 'map') => void
}

export default function FilterBar({ viewMode, onViewModeChange }: FilterBarProps) {
  return (
    <div className="bg-white border-b border-neutral-300 px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Filters */}
        <div className="flex items-center gap-2 flex-1 overflow-x-auto scrollbar-none pb-2 lg:pb-0 lg:flex-wrap">
          {/* Location */}
          <button className="flex items-center gap-2 px-3 py-2 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg text-xs lg:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0">
            <MapPin className="w-4 h-4 text-neutral-600" />
            Localisation
          </button>

          {/* Price Range */}
          <button className="flex items-center gap-2 px-3 py-2 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg text-xs lg:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0">
            <Euro className="w-4 h-4 text-neutral-600" />
            Prix
          </button>

          {/* Bedrooms */}
          <button className="flex items-center gap-2 px-3 py-2 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg text-xs lg:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0">
            <Bed className="w-4 h-4 text-neutral-600" />
            Chambres
          </button>

          {/* Property Type */}
          <button className="flex items-center gap-2 px-3 py-2 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg text-xs lg:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0">
            <Home className="w-4 h-4 text-neutral-600" />
            Type de bien
          </button>

          {/* DPE */}
          <button className="flex items-center gap-2 px-3 py-2 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg text-xs lg:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0">
            <Zap className="w-4 h-4 text-neutral-600" />
            DPE
          </button>

          {/* Commission Split */}
          <button className="flex items-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg text-xs lg:text-sm font-medium text-primary transition-all whitespace-nowrap flex-shrink-0">
            <Repeat className="w-4 h-4" />
            Commission 50/50
          </button>

          {/* More Filters */}
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-neutral-100 border border-neutral-300 rounded-lg text-xs lg:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-neutral-600" />
            Plus de filtres
          </button>
        </div>

        {/* View Toggle */}
        <div className="hidden lg:flex items-center gap-1 bg-neutral-100 p-1 rounded-lg flex-shrink-0">
          <button
            onClick={() => onViewModeChange('grid')}
            className={clsx(
              'p-2 rounded transition-all',
              viewMode === 'grid'
                ? 'bg-white shadow-sm text-primary'
                : 'text-neutral-600 hover:text-neutral-900'
            )}
          >
            <Grid3x3 className="w-5 h-5" strokeWidth={2} />
          </button>
          <button
            onClick={() => onViewModeChange('map')}
            className={clsx(
              'p-2 rounded transition-all',
              viewMode === 'map'
                ? 'bg-white shadow-sm text-primary'
                : 'text-neutral-600 hover:text-neutral-900'
            )}
          >
            <Map className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Active Filters Summary */}
      <div className="mt-3 flex items-center gap-2 text-sm text-neutral-600">
        <span className="font-medium">127 biens</span>
        <span className="text-neutral-400">•</span>
        <span>Disponibles pour co-courtage</span>
      </div>
    </div>
  )
}
