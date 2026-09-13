'use client'

import React, { useState } from 'react'
import {
  X,
  MapPin,
  Maximize,
  Bed,
  Bath,
  Calendar,
  TrendingUp,
  Zap,
  CheckCircle2,
  Send,
  Phone,
  Mail,
  Building2,
  Euro,
  Percent,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Home
} from 'lucide-react'
import { Property } from './PropertyCard'
import clsx from 'clsx'

interface PropertyDetailsModalProps {
  property: Property | null
  onClose: () => void
}

export default function PropertyDetailsModal({ property, onClose }: PropertyDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)

  if (!property) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  const getDPEColor = (dpe: string) => {
    const colors = {
      A: 'bg-green-500',
      B: 'bg-green-400',
      C: 'bg-yellow-400',
      D: 'bg-yellow-500',
      E: 'bg-orange-400',
      F: 'bg-orange-500',
      G: 'bg-red-500',
    }
    return colors[dpe as keyof typeof colors] || 'bg-neutral-400'
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute inset-4 md:inset-8 lg:inset-12 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-300">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-neutral-100 rounded-lg text-sm font-bold text-neutral-900">
              {property.reference}
            </div>
            {property.featured && (
              <div className="px-3 py-1 bg-primary/10 rounded-lg text-sm font-bold text-primary">
                Mandat Exclusif
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-all"
          >
            <X className="w-6 h-6 text-neutral-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Images */}
            <div className="relative bg-neutral-900">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />

                {/* Image Navigation */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {property.images.length}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="p-6 lg:p-8 space-y-6">
              {/* Price */}
              <div>
                <p className="text-4xl font-bold text-neutral-900 mb-2">
                  {property.price.toLocaleString('fr-FR')} €
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-neutral-600">{property.commission}</span>
                  <span className="text-neutral-400">•</span>
                  <div className="flex items-center gap-1 text-primary font-medium">
                    <Percent className="w-4 h-4" />
                    Commission 50/50
                  </div>
                </div>
              </div>

              {/* Title & Location */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                  {property.title}
                </h2>
                <div className="flex items-center gap-2 text-neutral-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-base">{property.location}</span>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-4 gap-4 py-4 border-y border-neutral-200">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Maximize className="w-5 h-5 text-neutral-500" />
                  </div>
                  <p className="text-lg font-bold text-neutral-900">{property.surface} m²</p>
                  <p className="text-xs text-neutral-500">Surface</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Home className="w-5 h-5 text-neutral-500" />
                  </div>
                  <p className="text-lg font-bold text-neutral-900">{property.rooms}</p>
                  <p className="text-xs text-neutral-500">Pièces</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Bed className="w-5 h-5 text-neutral-500" />
                  </div>
                  <p className="text-lg font-bold text-neutral-900">{property.bedrooms}</p>
                  <p className="text-xs text-neutral-500">Chambres</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Bath className="w-5 h-5 text-neutral-500" />
                  </div>
                  <p className="text-lg font-bold text-neutral-900">{property.bathrooms}</p>
                  <p className="text-xs text-neutral-500">Salles de bain</p>
                </div>
              </div>

              {/* Energy Performance */}
              <div className="p-4 bg-neutral-50 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-neutral-600" />
                    <h3 className="font-semibold text-neutral-900">Performance Énergétique</h3>
                  </div>
                  <div className={clsx('px-3 py-1 rounded-lg font-bold text-white', getDPEColor(property.dpe))}>
                    {property.dpe}
                  </div>
                </div>
                <p className="text-sm text-neutral-600">
                  Diagnostic de performance énergétique conforme aux normes 2024
                </p>
              </div>

              {/* Agent Info */}
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Agent Mandataire
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    {property.agent.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <p className="font-semibold text-neutral-900">{property.agent.name}</p>
                      {property.agent.verified && (
                        <CheckCircle2 className="w-4 h-4 text-primary" fill="currentColor" />
                      )}
                    </div>
                    <p className="text-sm text-neutral-600">{property.agent.agency}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-lg font-medium text-sm transition-all">
                    <Phone className="w-4 h-4" />
                    Appeler
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-900 rounded-lg font-medium text-sm transition-all">
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                </div>
              </div>

              {/* Co-Brokering Terms */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Conditions de Co-courtage
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Commission partagée 50/50 sur honoraires vendeur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Relation vendeur conservée par l'agent mandataire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Visites coordonnées sous 48h maximum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Protocole de transaction sécurisée via ImmoAllié</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowContactForm(true)}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold text-base shadow-lg shadow-primary/20 transition-all"
              >
                <Send className="w-5 h-5" />
                Demander une co-vente ou organiser une visite
              </button>

              <p className="text-xs text-center text-neutral-500">
                Réponse moyenne sous 2 heures • 94% de taux d'acceptation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
