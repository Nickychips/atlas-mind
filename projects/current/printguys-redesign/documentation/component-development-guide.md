# PrintGuys.ca Component Development Instructions

## For New Contributors / Fresh Chat Sessions

This document provides all the context needed to create components for the PrintGuys.ca modular website system without any prior knowledge of the project.

---

## 🎯 Project Overview

**Website**: PrintGuys.ca redesign  
**Goal**: Combine PrintGuys' professional design with WeMust's competitive advantages  
**Architecture**: Modular component system keeping each page under 1200 lines  
**Tech Stack**: HTML, Tailwind CSS, Vanilla JavaScript  

---

## 📋 Component System Requirements

### **1. File Structure**
```
projects/current/printguys-redesign/development/frontend/
├── components/
│   ├── layout/ (header, footer, navigation)
│   ├── hero/ (homepage, service, about, contact)
│   ├── forms/ (quote-calc, contact, upload)
│   ├── content/ (service-grid, pricing, testimonials)
│   ├── interactive/ (gallery, tabs, modal)
│   └── utility/ (cta-buttons, trust-badges, progress)
├── js/
│   └── component-loader.js
└── pages/
    └── [page templates]
```

### **2. Component Standards**
- **Maximum size**: 250 lines per component
- **Format**: Pure HTML with embedded CSS and JavaScript
- **Styling**: Tailwind CSS classes only
- **Responsive**: Mobile-first design
- **Self-contained**: No external dependencies

### **3. Component Loading System**
Components are loaded using:
```html
<div id="component-name-placeholder"></div>
<script>
  loadComponent('component-name', '/components/category/component-name.html', {data});
</script>
```

---

## 🎨 Design Standards

### **Brand Guidelines**
- **Primary Colors**: Blue (#2563eb), Indigo (#4f46e5), Purple (#7c3aed)
- **Secondary Colors**: Green (#059669), Orange (#ea580c), Yellow (#ca8a04)
- **Typography**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
- **Gradients**: Use bg-gradient-to-r/br with brand colors

### **Component Styling**
```css
/* Use Tailwind classes like: */
.component-name {
  @apply bg-white rounded-xl shadow-lg p-6;
}

/* Responsive breakpoints: */
sm: 640px    /* tablet */
md: 768px    /* desktop */
lg: 1024px   /* large desktop */
xl: 1280px   /* extra large */
```

### **Interactive Elements**
- **Buttons**: `bg-blue-600 hover:bg-blue-700 transition-colors`
- **Cards**: `hover:shadow-xl transition-shadow`
- **Forms**: `focus:ring-2 focus:ring-blue-500 focus:border-transparent`

---

## 💼 Business Context

### **PrintGuys.ca Strengths** (to preserve)
- Professional, modern visual design
- Clean user interface with high-quality imagery
- Customer testimonials and social proof
- Good brand storytelling

### **WeMust.ca Strengths** (to adopt)
- Clear value proposition: "Largest DTF printer in Canada"
- Transparent pricing ($0.025/sq inch)
- Specific turnaround times (24 hours)
- No minimums policy

### **Key Services & Pricing**
1. **DTF Heat Transfers**: $0.025/sq inch (lead service)
2. **Screen Printing**: $2.50/piece
3. **Sublimation**: $1.25/piece
4. **Custom Embroidery**: $8.00/piece
5. **UV DTF Stickers**: $0.05/sq inch

### **Value Propositions**
- Fast turnaround (24-48 hours)
- No minimum orders
- Transparent pricing structure
- 70-100 wash durability
- Professional quality with industrial equipment

---

## 🔧 Component Template

### **Basic Component Structure**
```html
<!-- Component Name - Brief Description -->
<section class="component-name py-16 bg-gray-50">
  <div class="container mx-auto px-4">
    
    <!-- Header (if needed) -->
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Section Title</h2>
      <p class="text-lg text-gray-600">Section description</p>
    </div>

    <!-- Content Area -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Component content -->
    </div>

  </div>
</section>

<!-- Component JavaScript (if needed) -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Component-specific functionality
});
</script>

<!-- Component Styles (if needed) -->
<style>
.component-name {
  /* Custom styles using Tailwind */
}
</style>
```

### **Data Injection Support**
Use `data-` attributes for dynamic content:
```html
<h2 data-title>Default Title</h2>
<p data-description>Default description</p>
```

---

## 📱 Responsive Design Requirements

### **Breakpoint Strategy**
```css
/* Mobile First Approach */
/* Base: 320px+ (mobile) */
@media (min-width: 640px)  { /* sm: tablet */ }
@media (min-width: 768px)  { /* md: desktop */ }
@media (min-width: 1024px) { /* lg: large desktop */ }
@media (min-width: 1280px) { /* xl: extra large */ }
```

### **Grid Patterns**
```html
<!-- Common responsive grids -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
<div class="flex flex-col sm:flex-row gap-4">
```

---

## 🎯 Conversion Optimization

### **Trust Signals to Include**
- Pricing transparency
- Quality guarantees (70-100 wash durability)
- Fast turnaround times (24-48 hours)
- No minimum orders
- Customer testimonials
- Professional certifications

### **Call-to-Action Hierarchy**
1. **Primary**: "Get Quote" / "Start Your Quote"
2. **Secondary**: "Upload Design" / "Learn More"
3. **Tertiary**: "Contact Us" / "View Samples"

### **CTA Button Styles**
```html
<!-- Primary CTA -->
<a href="/quote" class="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
  Get Quote Now
</a>

<!-- Secondary CTA -->
<a href="/upload" class="inline-flex items-center px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
  Upload Design
</a>
```

---

## 📋 Component Categories & Examples

### **Layout Components**
- **Purpose**: Site structure, navigation
- **Examples**: header.html, footer.html, mobile-nav.html
- **Key Features**: Consistent across all pages, responsive navigation

### **Hero Components**
- **Purpose**: Page headers with value propositions
- **Examples**: hero-homepage.html, hero-service.html
- **Key Features**: Large headlines, CTAs, trust signals

### **Content Components**
- **Purpose**: Information display, product showcases
- **Examples**: service-grid.html, pricing-cards.html, testimonials.html
- **Key Features**: Grid layouts, clear pricing, social proof

### **Form Components**
- **Purpose**: User interactions, data collection
- **Examples**: contact-form.html, quote-calculator.html, upload-form.html
- **Key Features**: Validation, responsive design, clear feedback

### **Utility Components**
- **Purpose**: Reusable UI elements
- **Examples**: trust-badges.html, cta-buttons.html, progress-bar.html
- **Key Features**: Small, focused, highly reusable

---

## 🚀 Development Workflow

### **1. Component Creation**
```bash
# Create component file
touch components/[category]/[component-name].html

# Follow naming convention:
# - Kebab case (component-name.html)
# - Descriptive category folders
# - Max 250 lines per file
```

### **2. Component Testing**
```html
<!-- Test in isolation -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
</head>
<body>
  <!-- Include your component here -->
</body>
</html>
```

### **3. Component Integration**
```html
<!-- Add to page template -->
<div id="component-name-placeholder"></div>
<script>
  loadComponent('component-name', '/components/category/component-name.html');
</script>
```

---

## ✅ Quality Checklist

### **Before Submitting Component**
- [ ] Under 250 lines total
- [ ] Mobile responsive (test at 320px, 768px, 1024px)
- [ ] Uses only Tailwind CSS classes
- [ ] Includes hover states and transitions
- [ ] Semantic HTML structure
- [ ] Proper accessibility (ARIA labels, alt text)
- [ ] Fast loading (optimized images, minimal JS)
- [ ] Cross-browser compatible
- [ ] Matches brand design guidelines
- [ ] Includes conversion optimization elements

### **Testing Requirements**
- [ ] Works in isolation
- [ ] Loads via component system
- [ ] Responsive across all breakpoints
- [ ] Interactive elements function properly
- [ ] No console errors
- [ ] Performance optimized

---

## 📞 Component Request Format

### **When Requesting a New Component**
```
Component Name: [descriptive-name]
Category: [layout/hero/content/forms/utility]
Purpose: [brief description]
Key Features: [list main functionality]
Data Requirements: [any dynamic content needs]
Responsive Requirements: [specific mobile considerations]
Integration Notes: [how it fits with existing components]
```

### **Example Request**
```
Component Name: faq-section
Category: content
Purpose: Collapsible FAQ section for service pages
Key Features: 
- Expandable questions
- Search functionality
- Category filtering
Data Requirements: 
- FAQ questions and answers
- Category labels
Responsive Requirements: 
- Single column on mobile
- Search bar optimization
Integration Notes: 
- Used on all service pages
- Matches existing content component styling
```

---

This document provides everything needed to create components that fit seamlessly into the PrintGuys.ca modular system while maintaining design consistency and meeting business objectives.
