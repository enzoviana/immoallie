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
      <head>
        <link rel="preconnect" href="https://framerusercontent.com" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
