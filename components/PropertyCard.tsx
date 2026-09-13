'use client'

import React, { useState } from 'react'
import {
  MapPin,
  Maximize,
  Bed,
  Bath,
  CheckCircle2,
  Send,
  ChevronLeft,
  ChevronRight,
  Star,
  Home
} from 'lucide-react'
import clsx from 'clsx'

export interface Property {
  id: string
  title: string
  price: number
  location: string
  surface: number
  rooms: number
  bedrooms: number
  bathrooms: number
  images: string[]
  reference: string
  dpe: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  commission: string
  agent: {
    name: string
    verified: boolean
    agency: string
  }
  featured?: boolean
}

interface PropertyCardProps {
  property: Property
  onDetailsClick: (property: Property) => void
}

export default function PropertyCard({ property, onDetailsClick }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  const getDPEColor = (dpe: string) => {
    const colors = {
      A: 'bg-emerald-600',
      B: 'bg-emerald-500',
      C: 'bg-amber-400',
      D: 'bg-amber-500',
      E: 'bg-orange-500',
      F: 'bg-rose-500',
      G: 'bg-red-600',
    }
    return colors[dpe as keyof typeof colors] || 'bg-slate-400'
  }

  return (
    <div
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer group flex flex-col"
      onClick={() => onDetailsClick(property)}
    >
      {/* Image Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Image Navigation */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1.5 bg-slate-900/60 hover:bg-slate-900/80 text-white rounded-full backdrop-blur-xs transition-all opacity-0 group-hover:opacity-100 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 bg-slate-900/60 hover:bg-slate-900/80 text-white rounded-full backdrop-blur-xs transition-all opacity-0 group-hover:opacity-100 shadow-sm"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 bg-slate-900/40 backdrop-blur-xs px-2 py-1 rounded-full">
              {property.images.map((_, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    'h-1 rounded-full transition-all',
                    idx === currentImageIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/60'
                  )}
                />
              ))}
            </div>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <div className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-xs font-bold text-slate-900 shadow-xs border border-slate-200/50">
            {property.reference}
          </div>
          {property.featured && (
            <div className="px-2.5 py-1 bg-blue-600/95 backdrop-blur-md rounded-lg text-xs font-bold text-white flex items-center gap-1 shadow-sm">
              <Star className="w-3 h-3" fill="currentColor" />
              Exclusif
            </div>
          )}
        </div>

        {/* DPE Badge */}
        <div className="absolute top-3 right-3">
          <div className={clsx('px-2.5 py-1 rounded-lg font-bold text-white text-xs shadow-sm', getDPEColor(property.dpe))}>
            DPE {property.dpe}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Price */}
          <div className="mb-2.5">
            <p className="text-xl font-extrabold text-slate-900 tracking-tight">
              {property.price.toLocaleString('fr-FR')} €
            </p>
            <p className="text-xs font-medium text-blue-600 mt-0.5">{property.commission}</p>
          </div>

          {/* Title */}
          <h3 className="text-sm font-bold text-slate-800 mb-2 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-4">
            <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-4 gap-2 py-3 mb-4 border-y border-slate-100 bg-slate-50/50 rounded-xl px-2">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1 text-slate-700">
                <Maximize className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-bold">{property.surface} m²</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center border-l border-slate-200">
              <div className="flex items-center gap-1 text-slate-700">
                <Home className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-bold">{property.rooms} p.</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center border-l border-slate-200">
              <div className="flex items-center gap-1 text-slate-700">
                <Bed className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-bold">{property.bedrooms} ch.</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center border-l border-slate-200">
              <div className="flex items-center gap-1 text-slate-700">
                <Bath className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-bold">{property.bathrooms} sdb</span>
              </div>
            </div>
          </div>

          {/* Agent Info */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xs shadow-2xs">
                {property.agent.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-xs font-bold text-slate-900">{property.agent.name}</p>
                  {property.agent.verified && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" fill="currentColor" />
                  )}
                </div>
                <p className="text-[11px] text-slate-400 font-medium">{property.agent.agency}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-xs transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30"
          onClick={(e) => {
            e.stopPropagation()
            onDetailsClick(property)
          }}
        >
          <Send className="w-4 h-4" strokeWidth={2} />
          Demander une co-vente / visite
        </button>
      </div>
    </div>
  )
}