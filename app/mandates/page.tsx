'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import { Plus, Search, Filter, MoreVertical, Eye, Edit, Trash2, Share2 } from 'lucide-react'

interface Mandate {
  id: string
  reference: string
  title: string
  location: string
  price: number
  status: 'active' | 'pending' | 'sold'
  views: number
  inquiries: number
  publishedDate: string
}

const mockMandates: Mandate[] = [
  {
    id: '1',
    reference: 'MA-75-2341',
    title: 'Appartement Haussmannien - Paris 16ème',
    location: 'Paris 16ème',
    price: 1250000,
    status: 'active',
    views: 234,
    inquiries: 12,
    publishedDate: '2024-01-15',
  },
  {
    id: '2',
    reference: 'MA-13-8832',
    title: 'Villa Moderne - Aix-en-Provence',
    location: 'Aix-en-Provence',
    price: 890000,
    status: 'active',
    views: 178,
    inquiries: 8,
    publishedDate: '2024-01-20',
  },
  {
    id: '3',
    reference: 'MA-69-4521',
    title: 'Loft Industriel - Lyon Confluence',
    location: 'Lyon 2ème',
    price: 675000,
    status: 'pending',
    views: 89,
    inquiries: 4,
    publishedDate: '2024-02-01',
  },
]

export default function MandatesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700'
      case 'pending':
        return 'bg-yellow-100 text-yellow-700'
      case 'sold':
        return 'bg-neutral-100 text-neutral-700'
      default:
        return 'bg-neutral-100 text-neutral-700'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Actif'
      case 'pending':
        return 'En attente'
      case 'sold':
        return 'Vendu'
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <Sidebar activeTab="mandates" />

      <div className="ml-64">
        <TopBar />

        <main className="pt-16 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                Mes Mandats Exclusifs
              </h1>
              <p className="text-neutral-600">
                Gérez vos biens en vente et suivez leur performance
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all shadow-sm hover:shadow-md">
              <Plus className="w-5 h-5" strokeWidth={2.5} />
              Nouveau Mandat
            </button>
          </div>

          {/* Search and Filters */}
          <div className="bg-white border border-neutral-300 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Rechercher par référence, titre ou localisation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg font-medium text-sm transition-all">
                <Filter className="w-4 h-4" />
                Filtres
              </button>
            </div>
          </div>

          {/* Mandates Table */}
          <div className="bg-white border border-neutral-300 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-300">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                    Référence
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                    Bien
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                    Prix
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                    Vues
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                    Demandes
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                    Publié le
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {mockMandates.map((mandate) => (
                  <tr key={mandate.id} className="hover:bg-neutral-50 transition-all">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-mono font-semibold text-neutral-900">
                        {mandate.reference}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-neutral-900">{mandate.title}</p>
                        <p className="text-xs text-neutral-500">{mandate.location}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-neutral-900">
                        {mandate.price.toLocaleString('fr-FR')} €
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(mandate.status)}`}>
                        {getStatusLabel(mandate.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-sm text-neutral-700">
                        <Eye className="w-4 h-4 text-neutral-500" />
                        {mandate.views}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-primary">
                        {mandate.inquiries}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600">
                      {new Date(mandate.publishedDate).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 hover:bg-neutral-100 rounded transition-all" title="Voir">
                          <Eye className="w-4 h-4 text-neutral-600" />
                        </button>
                        <button className="p-1.5 hover:bg-neutral-100 rounded transition-all" title="Modifier">
                          <Edit className="w-4 h-4 text-neutral-600" />
                        </button>
                        <button className="p-1.5 hover:bg-neutral-100 rounded transition-all" title="Partager">
                          <Share2 className="w-4 h-4 text-neutral-600" />
                        </button>
                        <button className="p-1.5 hover:bg-red-50 rounded transition-all" title="Supprimer">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
