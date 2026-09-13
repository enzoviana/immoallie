# ImmoAllié Setup Guide

Complete setup instructions for the ImmoAllié frontend application.

## Prerequisites

Ensure you have the following installed:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

or with yarn:

```bash
yarn install
```

This will install all required packages:
- Next.js 14 (React framework)
- Tailwind CSS (Styling)
- Lucide React (Premium SVG icons)
- TypeScript (Type safety)

### 2. Run Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
immo-allie/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Main page (Network & Co-brokering)
│   ├── dashboard/
│   │   └── page.tsx             # Dashboard with metrics
│   └── mandates/
│       └── page.tsx             # Mandates management
│
├── components/                   # React components
│   ├── Sidebar.tsx              # Navigation sidebar
│   ├── TopBar.tsx               # Top navigation bar
│   ├── FilterBar.tsx            # Property filters
│   ├── PropertyCard.tsx         # Property card display
│   ├── PropertyDetailsModal.tsx # Property details modal
│   ├── MetricsCard.tsx          # Dashboard metrics
│   ├── NotificationPanel.tsx    # Notification sidebar
│   ├── EmptyState.tsx           # Empty state component
│   └── LoadingSpinner.tsx       # Loading indicator
│
├── lib/
│   └── utils.ts                 # Utility functions
│
├── types/
│   └── property.ts              # TypeScript type definitions
│
└── public/                       # Static assets

```

## Available Pages

### 1. Dashboard (`/dashboard`)
- Overview metrics (Active mandates, visits, co-brokering requests)
- Recent activity feed
- Performance indicators
- Network statistics

### 2. Network & Co-brokering (`/`)
- Browse available properties from verified network
- Advanced filtering (location, price, DPE, commission split)
- Grid/Map view toggle
- Property details modal with co-brokering terms
- Request co-sale or visit

### 3. My Mandates (`/mandates`)
- Manage your exclusive property listings
- Track views and inquiries
- Edit, share, or remove mandates
- Search and filter your properties

## Design System

### Colors

```css
Primary: #2E66F6 (Electric Blue)
Slate: #263238 (Dark Sidebar)
Neutral 100: #F8FAFC (Background)
Neutral 300: #E2E8F0 (Borders)
Neutral 500: #78889B (Text secondary)
```

### Typography

- **Font Family**: Inter (sans-serif)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Icon Library

All icons use **Lucide React** for a consistent, professional look:
- No emojis anywhere in the UI
- Premium SVG icons only
- 24x24px default size (w-6 h-6)
- 16x16px small size (w-4 h-4)

## Key Features

### 1. Sidebar Navigation
- Logo with brand identity
- Active tab highlighting
- Subscription information display
- Smooth transitions

### 2. Top Bar
- Global search with keyboard shortcut (⌘K)
- "Publish Mandate" CTA button
- Notification center with badge
- User profile dropdown

### 3. Property Cards
- Image carousel with navigation
- DPE rating badge
- Property details (surface, rooms, bedrooms, bathrooms)
- Agent information with verification badge
- Primary CTA: "Request co-sale/visit"
- Hover effects and smooth transitions

### 4. Property Details Modal
- Full-screen overlay
- Large image gallery
- Complete property specifications
- Energy performance data
- Co-brokering terms and conditions
- Agent contact options
- Integrated action form

### 5. Filters
- Location, Price range, Bedrooms, Property type
- DPE energy rating
- Commission split selector
- View mode toggle (Grid/Map)
- Results counter

## Customization

### Adding New Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    DEFAULT: '#2E66F6',
    hover: '#1E50E0',
    // Add new shades
  },
}
```

### Adding New Components

Create in `components/` directory:

```tsx
'use client'

import React from 'react'
import { IconName } from 'lucide-react'

export default function MyComponent() {
  return (
    <div className="bg-white rounded-xl p-4">
      {/* Your component */}
    </div>
  )
}
```

### Extending Property Types

Edit `types/property.ts` to add new fields or types.

## Performance Optimization

- **Image Optimization**: Use Next.js `<Image>` component for production
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Purging**: Tailwind removes unused styles in production
- **Font Loading**: Inter font loaded via Google Fonts CDN

## Troubleshooting

### Module Not Found Errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Regenerate Next.js types
rm -rf .next
npm run dev
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps

1. **Integrate Backend API**: Connect to your real estate data API
2. **Authentication**: Add user login and registration
3. **Real-time Updates**: Implement WebSocket for live notifications
4. **Map Integration**: Add Google Maps or Mapbox for map view
5. **Image Upload**: Implement property image upload functionality
6. **Payment Integration**: Add Stripe for subscription management

## Support

For issues or questions:
- Check the documentation
- Review component source code
- Consult Next.js and Tailwind CSS documentation

---

**Version**: 1.0.0
**Last Updated**: September 2026
**Built with**: Next.js 14, TypeScript, Tailwind CSS, Lucide React
