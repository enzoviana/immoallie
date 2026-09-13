'use client'

import React from 'react'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import MetricsCard from '@/components/MetricsCard'
import {
  Building2,
  Users,
  Eye,
  TrendingUp,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Clock
} from 'lucide-react'

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-neutral-100">
      <Sidebar activeTab="dashboard" isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:ml-64">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <main className="pt-16 p-4 lg:p-6">
          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">
              Tableau de bord
            </h1>
            <p className="text-sm lg:text-base text-neutral-600">
              Vue d'ensemble de votre activité et de votre réseau
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <MetricsCard
              title="Mandats Actifs"
              value="12"
              icon={Building2}
              trend={{ value: 8, direction: 'up' }}
              description="vs. mois dernier"
            />
            <MetricsCard
              title="Visites Planifiées"
              value="27"
              icon={Calendar}
              trend={{ value: 15, direction: 'up' }}
              description="Ce mois-ci"
            />
            <MetricsCard
              title="Demandes Co-courtage"
              value="45"
              icon={Users}
              trend={{ value: 23, direction: 'up' }}
              description="En attente de réponse"
            />
            <MetricsCard
              title="Taux de Conversion"
              value="18%"
              icon={TrendingUp}
              trend={{ value: 3, direction: 'up' }}
              description="Sur les 30 derniers jours"
            />
          </div>

          {/* Activity Feed */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
            {/* Recent Activity */}
            <div className="xl:col-span-2 bg-white border border-neutral-300 rounded-xl p-4 lg:p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Activité Récente
              </h2>

              <div className="space-y-4">
                {[
                  {
                    type: 'success',
                    title: 'Demande de visite acceptée',
                    description: 'Villa Contemporaine - Aix-en-Provence',
                    time: 'Il y a 12 minutes',
                    agent: 'Thomas Laurent'
                  },
                  {
                    type: 'info',
                    title: 'Nouveau mandat publié',
                    description: 'Penthouse Moderne - Nice',
                    time: 'Il y a 1 heure',
                    agent: 'Alexandra Mercier'
                  },
                  {
                    type: 'success',
                    title: 'Co-courtage confirmé',
                    description: 'Appartement Haussmannien - Paris 16ème',
                    time: 'Il y a 3 heures',
                    agent: 'Marie Dubois'
                  },
                  {
                    type: 'info',
                    title: 'Message reçu',
                    description: 'Question sur commission - Maison de Maître',
                    time: 'Il y a 5 heures',
                    agent: 'Jean-Michel Blanc'
                  },
                ].map((activity, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-neutral-50 transition-all"
                  >
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'success'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-blue-50 text-blue-600'
                    }`}>
                      {activity.type === 'success' ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <MessageSquare className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-neutral-600 mb-1">
                        {activity.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span>{activity.agent}</span>
                        <span>•</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-all">
                Voir toute l'activité
              </button>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4 lg:space-y-6">
              {/* Performance This Month */}
              <div className="bg-white border border-neutral-300 rounded-xl p-4 lg:p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Performance
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600">Vues sur vos biens</span>
                      <span className="text-sm font-semibold text-neutral-900">342</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '68%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600">Taux de réponse</span>
                      <span className="text-sm font-semibold text-neutral-900">94%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-600">Satisfaction réseau</span>
                      <span className="text-sm font-semibold text-neutral-900">4.8/5</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '96%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Network Growth */}
              <div className="bg-gradient-to-br from-primary to-primary-hover text-white rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6" />
                  <h3 className="text-lg font-semibold">Votre Réseau</h3>
                </div>
                <p className="text-4xl font-bold mb-2">127</p>
                <p className="text-sm text-white/80 mb-4">Professionnels vérifiés</p>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12 ce mois-ci</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
