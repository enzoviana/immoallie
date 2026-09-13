'use client'

import React, { useState } from 'react'
import { Search, Plus, Bell, ChevronDown, Command } from 'lucide-react'
import NotificationPanel from './NotificationPanel'

export default function TopBar() {
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <>
      <header className="fixed top-0 py-2 left-64 right-0 h-18 bg-white border-b border-slate-200 z-40 px-8 flex items-center justify-between gap-4 shadow-xs">
        {/* Global Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" strokeWidth={2} />
            <input
              type="text"
              placeholder="Rechercher des biens, agents, ou critères acheteurs..."
              className="w-full pl-10 pr-16 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-semibold text-slate-400 shadow-2xs flex items-center gap-1">
              <Command className="w-3 h-3" strokeWidth={2} />K
            </kbd>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Publish Mandate Button */}
          <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30">
            <Plus className="w-4 h-4" strokeWidth={2.5} />
            Publier un mandat
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2.5 hover:bg-slate-100 rounded-xl transition-all text-slate-600 hover:text-slate-900 border border-transparent hover:border-slate-200"
            >
              <Bell className="w-5 h-5" strokeWidth={2} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white"></span>
            </button>
          </div>

          {/* User Profile */}
          <button className="flex items-center gap-3 pl-2 pr-3 py-1.5 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-200">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-sm">
              SM
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-slate-900 leading-tight">Sophie Martin</p>
              <p className="text-[10px] font-medium text-blue-600 mt-0.5">Agent Vérifié</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 ml-1" strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Notification Panel */}
      <NotificationPanel
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
      />
    </>
  )
}