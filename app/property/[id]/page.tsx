'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import {
  MapPin,
  Maximize,
  Bed,
  Bath,
  CheckCircle2,
  Send,
  ArrowLeft,
  Share2,
  MoreVertical,
  Mail,
  Home,
  Building,
  Calendar,
  Layers,
  ShieldCheck,
  Flame,
  Wind,
  Tv
} from 'lucide-react'
import clsx from 'clsx'
import { mockProperties } from '@/lib/mockData'

export default function PropertyPage() {
  const params = useParams()
  const router = useRouter()
  const [commentText, setCommentText] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const property = mockProperties.find(p => p.id === params.id)

  if (!property) {
    return (
      <div className="min-h-screen bg-slate-50/50 flex items-center justify-center">
        <div className="text-center max-w-sm px-6 py-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <h1 className="text-lg font-bold text-slate-900 mb-1">Propriété introuvable</h1>
          <p className="text-xs text-slate-500 mb-6">Cette propriété n'existe pas ou a été supprimée du réseau.</p>
          <button
            onClick={() => router.push('/network')}
            className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-xl font-medium text-xs hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
          >
            Retour au réseau
          </button>
        </div>
      </div>
    )
  }

  // Fallback images array if mock has few images
  const images = property.images.length >= 5 
    ? property.images 
    : [...property.images, ...property.images, ...property.images].slice(0, 5)

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!commentText.trim()) return
    alert('Commentaire envoyé : ' + commentText)
    setCommentText('')
  }

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-700">
      <Sidebar activeTab="network" isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:ml-64 flex flex-col min-h-screen">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 pt-16 pb-8 lg:pb-16">
          {/* Breadcrumb Header Bar */}
          <div className="px-4 lg:px-8 py-3.5 border-b border-slate-200 bg-white flex items-center justify-between shadow-2xs">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              <span className="hidden sm:inline">Properties</span> <span className="hidden sm:inline text-slate-300">/</span> <span className="text-slate-900 font-bold">Property Details</span>
            </button>
          </div>

          {/* Main Container */}
          <div className="px-4 lg:px-8 py-4 lg:py-6 max-w-7xl mx-auto w-full space-y-4 lg:space-y-6">
            
            {/* 1. PHOTO GRID (Asymmetric Layout like reference) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-3">
              {/* Main big image (2 cols) */}
              <div className="lg:col-span-2 relative aspect-[16/10] lg:aspect-auto lg:h-[420px] rounded-xl lg:rounded-2xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200/60">
                <img
                  src={images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right side 4 small grid */}
              <div className="grid grid-cols-2 gap-2 lg:gap-3 lg:h-[420px]">
                {images.slice(1, 5).map((imgUrl, idx) => (
                  <div key={idx} className="relative rounded-lg lg:rounded-xl overflow-hidden bg-slate-900 shadow-2xs border border-slate-200/65 group aspect-square lg:aspect-auto">
                    <img
                      src={imgUrl}
                      alt={`Miniature ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {idx === 3 && (
                      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-2xs flex items-center justify-center text-white font-bold text-base shadow-inner">
                        30+
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 2. TITLE BAR & ACTIONS */}
            <div className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
              <div>
                <div className="flex items-start gap-2 mb-1 flex-wrap">
                  <h1 className="text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight">{property.title}</h1>
                  <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold border border-blue-100">
                    {property.reference}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">{property.location}</p>
                <div className="flex items-center gap-3 lg:gap-4 mt-3 text-xs font-bold text-slate-800 flex-wrap">
                  <span className="flex items-center gap-1.5"><Bed className="w-4 h-4 text-slate-400" /> {property.bedrooms} Beds</span>
                  <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-slate-400" /> {property.bathrooms} Baths</span>
                  <span className="flex items-center gap-1.5"><Maximize className="w-4 h-4 text-slate-400" /> {property.surface * 10} Sqft</span>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button className="flex items-center gap-1.5 px-3 lg:px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-semibold transition-all">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Send Mail</span>
                </button>
                <button className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl transition-all">
                  <Share2 className="w-4 h-4 text-slate-500" />
                </button>
                <button className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl transition-all">
                  <MoreVertical className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </div>

            {/* 3. MAIN CONTENT LAYOUT (Left Details / Right Comments) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">

              {/* Left Column (2 cols) : Description, Details, Information, Internal Features */}
              <div className="lg:col-span-2 space-y-4 lg:space-y-6">

                {/* About the Property */}
                <div className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <h3 className="text-sm font-bold text-slate-900">About the Property</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A brand new home ready for occupation. This wonderful property is located in a prime location. The charming exterior and covered porch are so inviting along with a large backyard to enjoy with deck. Once you enter, you will fall in love with the openness and beauty of the home. Tall vaulted ceiling is in the family room which leads into an open kitchen and dining area. The kitchen is expertly designed with a huge island and granite counters. Large bedrooms with wooden floors. Large utility room with ample storage and natural light. This property invites you in from the moment it comes into view!
                  </p>
                </div>

                {/* Details Section */}
                <div className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Details</h3>
                    <p className="text-[11px] text-slate-400 font-medium">The property's essential info</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 pt-2 border-t border-slate-100 text-xs">
                    <div>
                      <p className="text-slate-400 font-medium mb-1">For sale or for Rent</p>
                      <p className="font-bold text-slate-900">For Sale</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Property Type</p>
                      <p className="font-bold text-slate-900">Single Family Residence</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Status</p>
                      <p className="font-bold text-emerald-600">Available</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">List Selling Price</p>
                      <p className="font-bold text-slate-900">{property.price.toLocaleString('fr-FR')} €</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Previous List Price</p>
                      <p className="font-bold text-slate-900">{(property.price * 1.1).toLocaleString('fr-FR')} €</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Days on Market</p>
                      <p className="font-bold text-slate-900">22</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Bedrooms</p>
                      <p className="font-bold text-slate-900">{property.bedrooms}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Bathrooms</p>
                      <p className="font-bold text-slate-900">{property.bathrooms}</p>
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Property Information</h3>
                    <p className="text-[11px] text-slate-400 font-medium">Details & facts about the property</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 pt-2 border-t border-slate-100 text-xs">
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Reference #</p>
                      <p className="font-bold text-slate-900">{property.reference}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Construction Year</p>
                      <p className="font-bold text-slate-900">1947</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Construction Materials</p>
                      <p className="font-bold text-slate-900">Masonite</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Home Size (Sqft)</p>
                      <p className="font-bold text-slate-900">{property.surface * 10} sqft</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Lot Size</p>
                      <p className="font-bold text-slate-900">8000 sqft</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Price per Sqft</p>
                      <p className="font-bold text-slate-900">1,150 €</p>
                    </div>
                  </div>
                </div>

                {/* Internal Details */}
                <div className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Internal Details</h3>
                    <p className="text-[11px] text-slate-400 font-medium">Internal features</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 pt-2 border-t border-slate-100 text-xs">
                    {/* Flooring */}
                    <div className="space-y-2.5">
                      <p className="text-[11px] uppercase font-bold text-slate-400">Flooring</p>
                      <div className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" /> Carpet
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" /> Ceramic Tile
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" /> Concrete
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2.5">
                      <p className="text-[11px] uppercase font-bold text-slate-400">Features</p>
                      <div className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" /> Factory Built
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" /> Carbon Monoxide Detector(s)
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" /> Fire Alarm
                      </div>
                    </div>

                    {/* Security */}
                    <div className="space-y-2.5">
                      <p className="text-[11px] uppercase font-bold text-slate-400">Safety</p>
                      <div className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" /> Panic Alarm
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" /> Security System
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column (1 col) : Comments / Messaging box */}
              <div className="space-y-4 lg:space-y-6">
                <div className="bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-slate-200 shadow-sm lg:sticky lg:top-24 space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Comments</h3>
                    <p className="text-[11px] text-slate-400 font-medium">It's good to talk</p>
                  </div>

                  <form onSubmit={handleCommentSubmit} className="space-y-3">
                    <textarea
                      rows={4}
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Say something"
                      className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none text-slate-800 placeholder:text-slate-400"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-400">Press Shift+Enter for new line. Enter to submit</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-xs shadow-md shadow-blue-600/20 transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit
                    </button>
                  </form>
                </div>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  )
}