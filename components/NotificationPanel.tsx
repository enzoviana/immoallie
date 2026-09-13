'use client'

import React from 'react'
import {
  Bell,
  X,
  CheckCircle2,
  AlertCircle,
  Info,
  Send,
  UserCheck,
  Clock
} from 'lucide-react'
import clsx from 'clsx'

interface Notification {
  id: string
  type: 'success' | 'info' | 'warning'
  title: string
  message: string
  time: string
  read: boolean
}

interface NotificationPanelProps {
  isOpen: boolean
  onClose: () => void
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Demande de visite acceptée',
    message: 'Marie Dubois a accepté votre demande pour le bien PA-16-4521',
    time: 'Il y a 5 min',
    read: false,
  },
  {
    id: '2',
    type: 'info',
    title: 'Nouveau bien disponible',
    message: '3 nouveaux mandats correspondent à vos critères acheteurs',
    time: 'Il y a 1 heure',
    read: false,
  },
  {
    id: '3',
    type: 'success',
    title: 'Agent vérifié dans votre réseau',
    message: 'Thomas Laurent a rejoint votre réseau professionnel',
    time: 'Il y a 3 heures',
    read: true,
  },
]

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  if (!isOpen) return null

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return CheckCircle2
      case 'warning':
        return AlertCircle
      default:
        return Info
    }
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-600 bg-green-50'
      case 'warning':
        return 'text-orange-600 bg-orange-50'
      default:
        return 'text-blue-600 bg-blue-50'
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-0 top-16 bottom-0 w-96 bg-white border-l border-neutral-300 shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-300">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-neutral-600" />
            <h2 className="text-lg font-semibold text-neutral-900">Notifications</h2>
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold rounded-full">
              2
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-neutral-100 rounded-lg transition-all"
          >
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {mockNotifications.map((notification) => {
            const Icon = getIcon(notification.type)
            return (
              <div
                key={notification.id}
                className={clsx(
                  'p-4 border-b border-neutral-200 hover:bg-neutral-50 cursor-pointer transition-all',
                  !notification.read && 'bg-blue-50/30'
                )}
              >
                <div className="flex gap-3">
                  <div className={clsx('p-2 rounded-lg', getIconColor(notification.type))}>
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                      {notification.title}
                    </h4>
                    <p className="text-sm text-neutral-600 mb-2">{notification.message}</p>
                    <div className="flex items-center gap-1 text-xs text-neutral-500">
                      <Clock className="w-3 h-3" />
                      {notification.time}
                    </div>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-300">
          <button className="w-full py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-all">
            Tout marquer comme lu
          </button>
        </div>
      </div>
    </>
  )
}
