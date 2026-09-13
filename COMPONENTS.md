# Component Documentation

Comprehensive documentation for all ImmoAllié components.

## Layout Components

### Sidebar
**File**: `components/Sidebar.tsx`

Navigation sidebar with brand logo and main menu items.

**Props**:
- `activeTab?: string` - Currently active navigation tab ID

**Features**:
- Dark slate background (#263238)
- Logo with shield icon
- Navigation items with icons from Lucide React
- Active state highlighting with primary blue
- Subscription info at bottom
- Smooth hover transitions

**Usage**:
```tsx
<Sidebar activeTab="dashboard" />
```

---

### TopBar
**File**: `components/TopBar.tsx`

Top navigation bar with search, actions, and user profile.

**Features**:
- Global search input with keyboard shortcut (⌘K)
- "Publish Mandate" CTA button
- Notification bell with badge indicator
- User profile dropdown with avatar
- Integrated notification panel

**Usage**:
```tsx
<TopBar />
```

---

### FilterBar
**File**: `components/FilterBar.tsx`

Property filtering toolbar with view mode toggle.

**Props**:
- `viewMode: 'grid' | 'map'` - Current view mode
- `onViewModeChange: (mode) => void` - View mode change handler

**Features**:
- Filter buttons: Location, Price, Bedrooms, Type, DPE, Commission
- View mode toggle (Grid/Map)
- Results counter
- Hover effects on filter buttons

**Usage**:
```tsx
<FilterBar
  viewMode={viewMode}
  onViewModeChange={setViewMode}
/>
```

---

## Property Components

### PropertyCard
**File**: `components/PropertyCard.tsx`

Property listing card with image carousel and details.

**Props**:
- `property: Property` - Property object with all details
- `onDetailsClick: (property) => void` - Click handler for details view

**Features**:
- Image carousel with navigation arrows
- Image indicators (dots)
- Reference ID and exclusive badges
- DPE rating badge
- Price with commission info
- Location with pin icon
- Property stats (surface, rooms, bedrooms, bathrooms)
- Agent info with verification badge
- Primary CTA button
- Hover effects and smooth transitions

**Usage**:
```tsx
<PropertyCard
  property={propertyData}
  onDetailsClick={handleDetailsClick}
/>
```

---

### PropertyDetailsModal
**File**: `components/PropertyDetailsModal.tsx`

Full-screen modal with complete property details.

**Props**:
- `property: Property | null` - Property to display (null to hide)
- `onClose: () => void` - Close handler

**Features**:
- Full-screen overlay with backdrop
- Large image gallery with navigation
- Image counter
- Complete property specifications
- Key stats grid
- Energy performance section
- Agent contact card
- Co-brokering terms box
- Primary CTA button
- Close button

**Usage**:
```tsx
<PropertyDetailsModal
  property={selectedProperty}
  onClose={() => setSelectedProperty(null)}
/>
```

---

## Dashboard Components

### MetricsCard
**File**: `components/MetricsCard.tsx`

Metric display card with icon, value, and trend indicator.

**Props**:
- `title: string` - Metric title
- `value: string | number` - Metric value
- `icon: LucideIcon` - Icon component from Lucide React
- `trend?: { value: number, direction: 'up' | 'down' }` - Trend indicator
- `description?: string` - Additional description text

**Features**:
- Icon in primary blue circle
- Large value display
- Trend badge (green for up, red for down)
- Optional description
- Hover shadow effect

**Usage**:
```tsx
<MetricsCard
  title="Active Mandates"
  value="12"
  icon={Building2}
  trend={{ value: 8, direction: 'up' }}
  description="vs. last month"
/>
```

---

### NotificationPanel
**File**: `components/NotificationPanel.tsx`

Slide-in notification panel from the right side.

**Props**:
- `isOpen: boolean` - Panel visibility state
- `onClose: () => void` - Close handler

**Features**:
- Slide-in animation
- Header with notification count badge
- Notification list with icons and timestamps
- Unread indicator (blue dot)
- "Mark all as read" button
- Click outside to close

**Usage**:
```tsx
<NotificationPanel
  isOpen={showNotifications}
  onClose={() => setShowNotifications(false)}
/>
```

---

## Utility Components

### EmptyState
**File**: `components/EmptyState.tsx`

Empty state display with icon, message, and optional action.

**Props**:
- `icon: LucideIcon` - Icon to display
- `title: string` - Main title
- `description: string` - Description text
- `action?: { label: string, onClick: () => void }` - Optional action button

**Features**:
- Centered layout
- Icon in blue circle
- Title and description
- Optional CTA button
- Responsive padding

**Usage**:
```tsx
<EmptyState
  icon={Search}
  title="No results found"
  description="Try adjusting your filters or search terms"
  action={{ label: "Clear filters", onClick: handleClear }}
/>
```

---

### LoadingSpinner
**File**: `components/LoadingSpinner.tsx`

Loading spinner with size variants.

**Props**:
- `size?: 'sm' | 'md' | 'lg'` - Spinner size (default: 'md')
- `className?: string` - Additional CSS classes

**Features**:
- Animated spinning loader
- Three size options
- Primary blue color
- Centered by default

**Usage**:
```tsx
<LoadingSpinner size="lg" />
```

---

## Type Definitions

### Property Type
**File**: `types/property.ts`

```typescript
interface Property {
  id: string
  reference: string
  title: string
  price: number
  commission: string
  location: string
  surface: number
  rooms: number
  bedrooms: number
  bathrooms: number
  images: string[]
  dpe: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  agent: Agent
  featured?: boolean
  // ... more fields
}
```

---

## Styling Guidelines

### Tailwind Classes

**Spacing**:
- `p-4` / `p-6` - Standard padding
- `gap-2` / `gap-4` - Flex/grid gaps
- `space-y-4` - Vertical spacing

**Colors**:
- `bg-primary` - Primary blue background
- `text-neutral-900` - Dark text
- `text-neutral-600` - Secondary text
- `border-neutral-300` - Border color

**Typography**:
- `text-sm` - Small text (14px)
- `text-base` - Base text (16px)
- `text-lg` - Large text (18px)
- `font-medium` / `font-semibold` / `font-bold` - Font weights

**Effects**:
- `rounded-lg` - 8px border radius
- `rounded-xl` - 12px border radius
- `shadow-lg` - Large shadow
- `hover:shadow-xl` - Shadow on hover
- `transition-all` - Smooth transitions

---

## Icon Usage

All icons from **Lucide React**:

```tsx
import { IconName } from 'lucide-react'

<IconName className="w-5 h-5 text-primary" strokeWidth={2} />
```

**Common Icons**:
- `LayoutDashboard` - Dashboard
- `Building2` - Properties
- `Network` - Network
- `Search` - Search
- `Settings` - Settings
- `Plus` - Add action
- `Send` - Send/Submit
- `CheckCircle2` - Success/Verified

---

## Best Practices

1. **Always use Lucide React icons** - Never use emojis
2. **Consistent spacing** - Use Tailwind spacing scale
3. **Hover states** - Add `hover:` variants for interactive elements
4. **Transitions** - Use `transition-all` for smooth animations
5. **Semantic HTML** - Use proper button/input/heading tags
6. **TypeScript** - Define proper types for all props
7. **Mobile first** - Start with mobile, add responsive classes
8. **Accessibility** - Include ARIA labels where needed

---

## Component Checklist

When creating new components:

- [ ] Use `'use client'` directive if using state/effects
- [ ] Import types from `types/` directory
- [ ] Use Lucide React for all icons
- [ ] Apply Tailwind classes consistently
- [ ] Add hover and transition effects
- [ ] Define TypeScript interfaces for props
- [ ] Export as default
- [ ] Document props and usage
- [ ] Test responsiveness
- [ ] Ensure accessibility

---

**Last Updated**: September 2026
