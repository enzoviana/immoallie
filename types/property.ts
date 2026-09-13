export type DPERating = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

export type PropertyType =
  | 'apartment'
  | 'house'
  | 'villa'
  | 'loft'
  | 'penthouse'
  | 'castle'
  | 'land'

export interface Agent {
  id: string
  name: string
  email: string
  phone: string
  verified: boolean
  agency: string
  agencyLogo?: string
  rating?: number
  completedDeals?: number
}

export interface Property {
  id: string
  reference: string
  title: string
  description?: string
  price: number
  commission: string
  commissionRate: number
  commissionSplit: string

  // Location
  location: string
  address?: string
  city: string
  postalCode: string
  region: string
  coordinates?: {
    lat: number
    lng: number
  }

  // Property Details
  type: PropertyType
  surface: number
  rooms: number
  bedrooms: number
  bathrooms: number
  floor?: number
  totalFloors?: number

  // Features
  features?: string[]
  heating?: string
  parking?: number
  garden?: boolean
  terrace?: boolean
  balcony?: boolean
  pool?: boolean
  elevator?: boolean

  // Energy
  dpe: DPERating
  ges?: DPERating

  // Media
  images: string[]
  virtualTour?: string
  floorPlan?: string

  // Status
  featured?: boolean
  exclusive?: boolean
  status: 'available' | 'under_negotiation' | 'sold'
  publishedAt: Date
  updatedAt: Date

  // Agent
  agent: Agent

  // Co-brokering
  cobrokeringEnabled: boolean
  cobrokeringTerms?: string
  visitProtocol?: string
}

export interface PropertyFilter {
  location?: string
  priceMin?: number
  priceMax?: number
  surfaceMin?: number
  surfaceMax?: number
  rooms?: number[]
  bedrooms?: number[]
  propertyTypes?: PropertyType[]
  dpe?: DPERating[]
  features?: string[]
  commissionSplit?: string
}

export interface PropertySearchResult {
  properties: Property[]
  total: number
  page: number
  pageSize: number
}
