# Style Guide: PrintGuys.ca Redesign

*Last Updated: July 10, 2025*

## Brand Identity

### Logo and Brand Mark
- **Primary Logo**: PrintGuys.ca wordmark with clean, modern typography
- **Secondary Mark**: "PG" monogram for small applications
- **Clear Space**: Minimum spacing equal to the height of the "P" in PrintGuys
- **Minimum Size**: 120px wide for digital, 1" for print

### Brand Positioning
**Primary Message**: "Canada's Premier DTF Printing Specialist"  
**Tagline**: "Professional Quality, No Minimums Required"  
**Brand Promise**: Fast, transparent, professional custom printing services

## Color Palette

### Primary Colors
- **PrintGuys Blue**: #1e40af (Primary brand color)
  - HEX: #1e40af
  - RGB: 30, 64, 175
  - CMYK: 83, 63, 0, 31
  - Usage: Headers, CTAs, brand elements

- **PrintGuys Navy**: #1e3a8a (Secondary brand color)
  - HEX: #1e3a8a
  - RGB: 30, 58, 138
  - CMYK: 78, 58, 0, 46
  - Usage: Navigation, footer, dark elements

### Accent Colors
- **Success Green**: #10b981
  - Usage: Success messages, positive indicators
- **Warning Orange**: #f59e0b
  - Usage: Alerts, attention-grabbing elements
- **Error Red**: #ef4444
  - Usage: Error states, urgent notices

### Neutral Colors
- **Charcoal**: #374151 (Primary text)
- **Medium Gray**: #6b7280 (Secondary text)
- **Light Gray**: #f3f4f6 (Background, borders)
- **Pure White**: #ffffff (Background, cards)

## Typography

### Primary Typeface: Inter
**Usage**: All digital applications, body text, headers

**Font Weights Available**:
- Regular (400): Body text, paragraphs
- Medium (500): Subheadings, emphasis
- SemiBold (600): Section headers
- Bold (700): Page titles, main headers

### Secondary Typeface: Roboto
**Usage**: Technical specifications, data tables, pricing

**Font Weights Available**:
- Regular (400): Technical content
- Medium (500): Table headers
- Bold (700): Pricing, important numbers

### Typography Scale

#### Headings
- **H1**: 48px/52px, SemiBold (Desktop) | 32px/36px (Mobile)
- **H2**: 36px/40px, SemiBold (Desktop) | 28px/32px (Mobile)
- **H3**: 24px/28px, SemiBold (Desktop) | 22px/26px (Mobile)
- **H4**: 20px/24px, Medium (Desktop) | 18px/22px (Mobile)
- **H5**: 18px/22px, Medium
- **H6**: 16px/20px, Medium

#### Body Text
- **Large**: 18px/26px, Regular
- **Base**: 16px/24px, Regular
- **Small**: 14px/20px, Regular
- **Caption**: 12px/16px, Regular

## Spacing System

### Base Unit: 4px
All spacing follows 4px increments for consistency

**Spacing Scale**:
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px

### Layout Spacing
- **Component Padding**: 16px (mobile) | 24px (desktop)
- **Section Spacing**: 48px (mobile) | 64px (desktop)
- **Container Max Width**: 1280px
- **Grid Gutters**: 16px (mobile) | 24px (desktop)

## Component Library

### Buttons

#### Primary Button
```css
background: #1e40af
color: #ffffff
padding: 12px 24px
border-radius: 6px
font-weight: 600
font-size: 16px
```

#### Secondary Button
```css
background: transparent
color: #1e40af
border: 2px solid #1e40af
padding: 10px 22px
border-radius: 6px
font-weight: 600
font-size: 16px
```

#### Outline Button
```css
background: transparent
color: #374151
border: 1px solid #d1d5db
padding: 12px 24px
border-radius: 6px
font-weight: 500
font-size: 16px
```

### Form Elements

#### Input Fields
```css
border: 1px solid #d1d5db
border-radius: 6px
padding: 12px 16px
font-size: 16px
background: #ffffff
```

#### Focus State
```css
border-color: #1e40af
box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1)
```

### Cards
```css
background: #ffffff
border: 1px solid #e5e7eb
border-radius: 8px
padding: 24px
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
```

## Layout Grid

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

### Grid System
- **Columns**: 12-column grid
- **Mobile**: 1-2 columns typical
- **Tablet**: 2-3 columns typical
- **Desktop**: 3-4 columns typical

## Icons

### Icon Library: Lucide React
**Style**: Outline style, consistent stroke width
**Sizes**: 16px, 20px, 24px, 32px
**Stroke Width**: 1.5px
**Color**: Inherits from parent or uses brand colors

### Common Icons
- **Menu**: hamburger menu
- **Search**: magnifying glass
- **Cart**: shopping cart
- **User**: user profile
- **Upload**: upload arrow
- **Download**: download arrow
- **Check**: checkmark
- **X**: close/cancel

## Images and Graphics

### Photography Style
- **Style**: Clean, professional, well-lit
- **Color Palette**: Aligned with brand colors
- **Composition**: Simple, focused on products
- **Quality**: High resolution, optimized for web

### Image Specifications
- **Hero Images**: 1920x1080 minimum
- **Product Images**: 800x800 minimum, square aspect ratio
- **Thumbnails**: 400x400 minimum
- **File Formats**: WebP preferred, JPEG/PNG fallback

### Graphic Elements
- **Style**: Minimal, geometric
- **Colors**: Brand color palette
- **Usage**: Accent elements, dividers, backgrounds

## Interactive States

### Hover Effects
- **Buttons**: Darken background by 10%
- **Links**: Underline appearance
- **Cards**: Subtle shadow increase
- **Images**: Slight scale (1.05x)

### Active States
- **Buttons**: Darken background by 15%
- **Form Fields**: Border color change
- **Navigation**: Highlight current page

### Loading States
- **Buttons**: Spinner overlay
- **Images**: Skeleton placeholder
- **Forms**: Disabled appearance

## Accessibility Guidelines

### Color Contrast
- **Normal Text**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **Interactive Elements**: Clear focus indicators

### Typography
- **Minimum Size**: 14px for body text
- **Line Height**: Minimum 1.4 for readability
- **Font Weight**: Sufficient contrast for readability

### Interactive Elements
- **Touch Targets**: Minimum 44px for mobile
- **Keyboard Navigation**: Visible focus states
- **Screen Readers**: Proper ARIA labels

## Responsive Behavior

### Mobile-First Approach
- Design for mobile, enhance for larger screens
- Touch-friendly interaction areas
- Simplified navigation for small screens

### Breakpoint Behavior
- **Content Scaling**: Proportional sizing
- **Image Optimization**: Responsive images
- **Navigation**: Collapse to hamburger menu on mobile

## Brand Voice in Design

### Visual Personality
- **Professional**: Clean, organized layouts
- **Approachable**: Friendly colors and rounded corners
- **Trustworthy**: Consistent, reliable design patterns
- **Efficient**: Clear hierarchy and easy navigation

### Design Principles
1. **Clarity**: Every element has a clear purpose
2. **Consistency**: Uniform patterns throughout
3. **Accessibility**: Usable by everyone
4. **Performance**: Fast loading and smooth interactions

---

*This style guide ensures consistent visual identity across all PrintGuys.ca digital touchpoints.*