# ImmoAllié — Réseau Privé Immobilier

A premium B2B SaaS platform for verified real estate professionals to share exclusive mandates and collaborate on co-brokering deals.

## Features

- **Modern Dashboard**: Clean, professional interface with dark sidebar navigation
- **Property Management**: Browse exclusive mandates with high-quality images and detailed specs
- **Co-Brokering System**: Pre-agreed commission splits (50/50) with secure transaction protocols
- **Advanced Filtering**: Search by location, price, property type, DPE rating, and more
- **Verified Network**: Connect only with certified real estate professionals
- **Responsive Design**: Optimized for desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React (Premium SVG icons)
- **UI Design**: Custom component library following B2B SaaS best practices

## Design System

### Colors
- **Primary Accent**: Electric Blue (#2E66F6)
- **Dark Neutral**: Deep Slate (#263238)
- **Background**: Clean Off-White (#F8FAFC)
- **Card Borders**: Subtle Gray (#78889B)

### Typography
- **Font**: Inter (Clean sans-serif)
- **Style**: Professional, high readability, B2B SaaS aesthetic

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
immo-allie/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Dashboard page
├── components/
│   ├── Sidebar.tsx          # Navigation sidebar
│   ├── TopBar.tsx           # Top navigation bar
│   ├── FilterBar.tsx        # Property filters
│   ├── PropertyCard.tsx     # Property card component
│   └── PropertyDetailsModal.tsx  # Property details modal
├── public/                  # Static assets
└── tailwind.config.js       # Tailwind configuration
```

## Key Components

### Sidebar Navigation
- Dashboard overview
- Exclusive mandates management
- Network and co-brokering
- Cross-buyer search
- Visit requests and shares
- Settings and subscription (365€/year, 90-day trial)

### Property Cards
- High-quality image carousels
- Price and commission details
- Property specifications (surface, rooms, DPE rating)
- Agent information with verification badges
- Direct CTA for co-sale/visit requests

### Property Details Modal
- Full property specifications
- Energy performance data (DPE)
- Pre-agreed commission split terms
- Agent contact information
- Integrated action form for visit requests

## Design Principles

1. **NO EMOJIS**: Only premium SVG icons (Lucide React)
2. **Professional Aesthetic**: High-end B2B SaaS design
3. **Clean Layout**: Minimalist, content-focused interface
4. **Accessibility**: High contrast, readable typography
5. **Performance**: Optimized images and code splitting

## Build for Production

```bash
npm run build
npm start
```

## License

Proprietary - All rights reserved

---

Built with precision for real estate professionals by professionals.
