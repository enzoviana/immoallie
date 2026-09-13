'use client'

import React, { useState } from 'react'
import {
  LayoutDashboard,
  Building2,
  Network,
  Search,
  FileText,
  Settings,
  Shield,
  HelpCircle,
  X
} from 'lucide-react'
import clsx from 'clsx'

interface NavItem {
  id: string
  label: string
  icon: React.ElementType
  badge?: string
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'properties', label: 'Mes Mandats Exclusifs', icon: Building2 },
  { id: 'network', label: 'Réseau & Co-courtage', icon: Network },
  { id: 'search', label: 'Recherche croisée', icon: Search },
  { id: 'agreements', label: 'Demandes & Partages', icon: FileText },
]

const bottomNavItems: NavItem[] = [
  { id: 'settings', label: 'Paramètres', icon: Settings },
  { id: 'help', label: 'Aide', icon: HelpCircle },
]

export default function Sidebar({ activeTab = 'dashboard', isOpen, onClose }: { activeTab?: string, isOpen?: boolean, onClose?: () => void }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={clsx(
        "fixed left-0 top-0 h-screen w-64 bg-white text-slate-700 flex flex-col border-r border-slate-200 shadow-sm z-50 transition-transform duration-300",
        "lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
      {/* Logo & Brand */}
      <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
            <Shield className="w-5 h-5" strokeWidth={2.2} />
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900 tracking-tight">ImmoAllié</h1>
            <p className="text-[11px] text-slate-400 font-medium tracking-wide uppercase">Réseau Privé</p>
          </div>
        </div>

        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 px-3 py-4 space-y-6 overflow-y-auto scrollbar-none">
        <div>
          <p className="px-3 mb-2 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            Menu Principal
          </p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id

              return (
                <button
                  key={item.id}
                  className={clsx(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group',
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )}
                >
                  <Icon className={clsx('w-5 h-5 flex-shrink-0 transition-colors', isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600')} strokeWidth={2} />
                  <span className="truncate">{item.label}</span>
                  {item.badge && (
                    <span className={clsx('ml-auto text-xs px-2 py-0.5 rounded-full font-semibold', isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600')}>
                      {item.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        <div>
          <p className="px-3 mb-2 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            Système
          </p>
          <nav className="space-y-1">
            {bottomNavItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id

              return (
                <button
                  key={item.id}
                  className={clsx(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group',
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  )}
                >
                  <Icon className={clsx('w-5 h-5 flex-shrink-0 transition-colors', isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600')} strokeWidth={2} />
                  <span className="truncate">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Subscription Card Widget */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/50">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-full blur-xl -mr-6 -mt-6 pointer-events-none" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
              Pro SaaS
            </span>
            <span className="text-xs font-bold text-slate-900">365€/an</span>
          </div>
          <p className="text-xs font-medium text-slate-700 mb-1">Essai gratuit 90 jours</p>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Aucun frais avant le 91e jour.
          </p>
        </div>
      </div>
    </aside>
    </>
  )
}