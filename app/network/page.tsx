'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import FilterBar from '@/components/FilterBar'
import PropertyCard, { Property } from '@/components/PropertyCard'
import { Map } from 'lucide-react'
import { mockProperties } from '@/lib/mockData'

export default function NetworkPage() {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid')

  const handlePropertyClick = (property: Property) => {
    router.push(`/property/${property.id}`)
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Sidebar */}
      <Sidebar activeTab="network" />

      {/* Main Content Layout */}
      <div className="ml-64 flex flex-col min-h-screen">
        {/* Top Bar */}
        <TopBar />

        {/* Content Area */}
        <main className="flex-1 pt-14 pb-12">
          {/* Filter Bar */}
          <FilterBar viewMode={viewMode} onViewModeChange={setViewMode} />

          {/* Properties Grid Container */}
          <div className="px-8 py-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">
                Réseau & Co-courtage
              </h1>
              <p className="text-sm text-slate-500">
                Découvrez les mandats exclusifs partagés par votre réseau de professionnels vérifiés
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onDetailsClick={handlePropertyClick}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 h-[calc(100vh-280px)] flex items-center justify-center shadow-sm">
                <div className="text-center max-w-sm px-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 shadow-sm">
                    <Map className="w-8 h-8" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Vue Carte interactive</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    La géolocalisation en temps réel des mandats du réseau sera bientôt disponible sur cette interface.
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
