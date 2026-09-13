# Quick Start Guide

Get ImmoAllié running in under 5 minutes.

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# Navigate to http://localhost:3000
```

That's it! The application should now be running.

## Project Overview

ImmoAllié is a premium B2B SaaS platform for verified real estate professionals to share exclusive mandates and collaborate on co-brokering deals.

### Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Premium SVG icon library

### Design Principles

1. **NO EMOJIS** - Only professional SVG icons
2. **Electric Blue Primary** (#2E66F6)
3. **Clean, minimalist B2B SaaS aesthetic**
4. **High-end real estate professional vibe**

## Available Routes

### Main Pages

| Route | Description |
|-------|-------------|
| `/` | Network & Co-brokering - Browse properties |
| `/dashboard` | Dashboard with metrics and activity |
| `/mandates` | Manage your exclusive property listings |

### Page Features

#### 1. Network & Co-brokering (`/`)
- Browse 127 available properties
- Advanced filtering (location, price, DPE, commission)
- Grid/Map view toggle
- Property cards with image carousels
- Detailed property modal
- Request co-sale or visit

#### 2. Dashboard (`/dashboard`)
- Key metrics cards
- Activity feed
- Performance indicators
- Network statistics

#### 3. My Mandates (`/mandates`)
- Property listings table
- Search and filter
- View, edit, share actions
- Status tracking

## Core Components

### Layout
- **Sidebar** - Dark navigation with logo and menu
- **TopBar** - Search bar, CTA button, notifications, profile
- **FilterBar** - Property filters with view toggle

### Property Display
- **PropertyCard** - Card with carousel, details, CTA
- **PropertyDetailsModal** - Full-screen property view

### Dashboard
- **MetricsCard** - Metric display with trends
- **NotificationPanel** - Slide-in notification center

### Utilities
- **EmptyState** - Empty state messages
- **LoadingSpinner** - Loading indicators

## Design System

### Colors

```
Primary Blue:    #2E66F6
Slate Dark:      #263238
Background:      #F8FAFC
Border:          #E2E8F0
Text Primary:    #1E293B
Text Secondary:  #78889B
```

### Typography

- **Font**: Inter (sans-serif)
- **Sizes**: text-sm (14px), text-base (16px), text-lg (18px)
- **Weights**: regular (400), medium (500), semibold (600), bold (700)

### Spacing

- Small: `gap-2` `p-2` (8px)
- Medium: `gap-4` `p-4` (16px)
- Large: `gap-6` `p-6` (24px)

### Border Radius

- Small: `rounded-lg` (8px)
- Medium: `rounded-xl` (12px)
- Large: `rounded-2xl` (16px)

## Icon Library

All icons use **Lucide React**:

```tsx
import { IconName } from 'lucide-react'

<IconName className="w-5 h-5" strokeWidth={2} />
```

**Common icons used**:
- LayoutDashboard, Building2, Network, Search
- Home, Bed, Bath, Maximize
- MapPin, Euro, Calendar, TrendingUp
- Plus, Send, Bell, Settings

## Mock Data

The application includes realistic mock data:

- **6 sample properties** with real images from Unsplash
- **Multiple locations** (Paris, Lyon, Nice, Bordeaux, etc.)
- **Various property types** (apartments, villas, lofts)
- **DPE ratings** from A to E
- **Commission structures** (50/50 split)
- **Verified agents** with agencies

## Customization

### Change Primary Color

Edit `tailwind.config.js`:

```js
primary: {
  DEFAULT: '#YOUR_COLOR',
  hover: '#YOUR_HOVER_COLOR',
}
```

### Add New Page

1. Create `app/your-page/page.tsx`
2. Add to sidebar navigation in `components/Sidebar.tsx`
3. Use existing layout components

### Modify Property Card

Edit `components/PropertyCard.tsx` to change:
- Card layout
- Displayed information
- CTA button text
- Hover effects

## File Structure

```
immo-allie/
├── app/                    # Pages
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx           # Main page
│   ├── dashboard/
│   └── mandates/
├── components/            # Reusable components
├── lib/                   # Utilities
├── types/                 # TypeScript types
└── public/                # Static files
```

## Next Steps

### Immediate Enhancements

1. **Connect Backend API**
   - Replace mock data with real API calls
   - Add data fetching with React Query or SWR

2. **Add Authentication**
   - Implement login/logout
   - Protect routes
   - User session management

3. **Implement Search**
   - Connect global search bar
   - Add search results page
   - Implement autocomplete

4. **Enable Map View**
   - Integrate Google Maps or Mapbox
   - Display properties on map
   - Add clustering

### Future Features

- Property image upload
- Agent messaging system
- Appointment scheduling
- Contract management
- Payment processing (Stripe)
- Analytics dashboard
- Mobile app (React Native)
- PDF report generation
- Email notifications

## Keyboard Shortcuts

- `⌘K` / `Ctrl+K` - Open global search (planned)
- `ESC` - Close modals and panels

## Responsive Design

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components are responsive and mobile-friendly.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Performance

- Automatic code splitting
- Image optimization (with Next.js Image)
- CSS purging in production
- Fast refresh in development

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```bash
docker build -t immo-allie .
docker run -p 3000:3000 immo-allie
```

### Traditional Hosting

```bash
npm run build
npm start
```

## Troubleshooting

**Port already in use?**
```bash
npx kill-port 3000
```

**Module not found?**
```bash
rm -rf node_modules
npm install
```

**TypeScript errors?**
```bash
rm -rf .next
npm run dev
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Support

For questions or issues:
1. Check SETUP.md for detailed setup
2. Review COMPONENTS.md for component docs
3. Consult Next.js and Tailwind documentation

---

**Happy Coding!**

Built with precision for real estate professionals.
