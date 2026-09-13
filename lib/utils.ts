import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatSurface(surface: number): string {
  return `${surface} m²`
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function getDPELabel(dpe: string): string {
  const labels: Record<string, string> = {
    A: 'Excellent',
    B: 'Très bon',
    C: 'Bon',
    D: 'Moyen',
    E: 'Passable',
    F: 'Médiocre',
    G: 'Très mauvais',
  }
  return labels[dpe] || 'Non renseigné'
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
}
