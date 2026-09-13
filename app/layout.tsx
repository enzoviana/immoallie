import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ImmoAllié — Réseau Privé Immobilier',
  description: 'Plateforme de co-courtage immobilier pour professionnels vérifiés',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
