# PrintGuys.ca Component Reference Guide

## Quick Component Menu

This is your go-to reference for building pages with our modular component system. Each component is plug-and-play and can be mixed and matched to create any page layout.

---

## 🏗️ Layout Components

### **Header Component**
- **File**: `/components/layout/header.html`
- **Size**: ~150 lines
- **Usage**: Every page
- **Features**: Logo, main navigation, CTA buttons
- **Variants**: Standard, transparent, sticky
```html
<div id="header-placeholder"></div>
<script>loadComponent('header', '/components/layout/header.html');</script>
```

### **Footer Component**  
- **File**: `/components/layout/footer.html`
- **Size**: ~200 lines
- **Usage**: Every page
- **Features**: Links, contact info, social media
```html
<div id="footer-placeholder"></div>
<script>loadComponent('footer', '/components/layout/footer.html');</script>
```

### **Mobile Navigation**
- **File**: `/components/layout/mobile-nav.html`
- **Size**: ~100 lines
- **Usage**: Mobile breakpoints
- **Features**: Hamburger menu, touch-friendly navigation
```html
<div id="mobile-nav-placeholder"></div>
<script>loadComponent('mobile-nav', '/components/layout/mobile-nav.html');</script>
```

---

## 🎯 Hero Components

### **Homepage Hero**
- **File**: `/components/hero/hero-homepage.html`
- **Size**: ~180 lines
- **Usage**: Homepage only
- **Features**: Main headline, value props, dual CTAs, hero image
```html
<div id="hero-placeholder"></div>
<script>loadComponent('hero', '/components/hero/hero-homepage.html');</script>
```

### **Service Hero**
- **File**: `/components/hero/hero-service.html`
- **Size**: ~160 lines
- **Usage**: All service pages
- **Features**: Dynamic title/description, service-specific media
```html
<div id="hero-placeholder"></div>
<script>loadComponent('hero', '/components/hero/hero-service.html', {
  title: 'DTF Heat Transfers',
  description: 'Professional quality transfers ready in 24 hours',
  media: '/images/dtf-process.jpg'
});</script>
```

### **About Hero**
- **File**: `/components/hero/hero-about.html`
- **Size**: ~140 lines
- **Usage**: About page
- **Features**: Company story introduction, team image
```html
<div id="hero-placeholder"></div>
<script>loadComponent('hero', '/components/hero/hero-about.html');</script>
```

### **Contact Hero**
- **File**: `/components/hero/hero-contact.html`
- **Size**: ~120 lines
- **Usage**: Contact page
- **Features**: Contact headline, quick contact methods
```html
<div id="hero-placeholder"></div>
<script>loadComponent('hero', '/components/hero/hero-contact.html');</script>
```

---

## 📝 Form Components

### **Quote Calculator** ⭐ *Most Important*
- **File**: `/components/forms/quote-calculator.html`
- **Size**: ~250 lines
- **Usage**: Homepage, service pages
- **Features**: Live pricing, service selection, instant calculations
```html
<div id="calculator-placeholder"></div>
<script>loadComponent('calculator', '/components/forms/quote-calculator.html');</script>
```

### **Contact Form**
- **File**: `/components/forms/contact-form.html`
- **Size**: ~180 lines
- **Usage**: Contact page, modal windows
- **Features**: Validation, subject selection, responsive design
```html
<div id="contact-form-placeholder"></div>
<script>loadComponent('contact-form', '/components/forms/contact-form.html');</script>
```

### **Upload Form**
- **File**: `/components/forms/upload-form.html`
- **Size**: ~220 lines
- **Usage**: Quote page, service pages
- **Features**: Drag/drop, file validation, preview
```html
<div id="upload-placeholder"></div>
<script>loadComponent('upload', '/components/forms/upload-form.html');</script>
```

### **Newsletter Signup**
- **File**: `/components/forms/newsletter-signup.html`
- **Size**: ~80 lines
- **Usage**: Footer, sidebar
- **Features**: Email validation, success states
```html
<div id="newsletter-placeholder"></div>
<script>loadComponent('newsletter', '/components/forms/newsletter-signup.html');</script>
```

---

## 📊 Content Components

### **Service Grid** ⭐ *Homepage Essential*
- **File**: `/components/content/service-grid.html`
- **Size**: ~200 lines
- **Usage**: Homepage, service overview
- **Features**: 4-column grid, pricing display, service cards
```html
<div id="service-grid-placeholder"></div>
<script>loadComponent('service-grid', '/components/content/service-grid.html');</script>
```

### **Pricing Cards** ⭐ *Service Pages*
- **File**: `/components/content/pricing-cards.html`
- **Size**: ~180 lines
- **Usage**: Service pages, pricing page
- **Features**: 3-tier pricing, feature comparison, featured card
```html
<div id="pricing-placeholder"></div>
<script>loadComponent('pricing', '/components/content/pricing-cards.html');</script>
```

### **Process Steps**
- **File**: `/components/content/process-steps.html`
- **Size**: ~160 lines
- **Usage**: Homepage, service pages
- **Features**: 4-step process, icons, descriptions
```html
<div id="process-placeholder"></div>
<script>loadComponent('process', '/components/content/process-steps.html');</script>
```

### **Testimonials**
- **File**: `/components/content/testimonials.html`
- **Size**: ~140 lines
- **Usage**: Homepage, about page
- **Features**: Customer reviews, star ratings, author info
```html
<div id="testimonials-placeholder"></div>
<script>loadComponent('testimonials', '/components/content/testimonials.html');</script>
```

### **FAQ Section**
- **File**: `/components/content/faq-section.html`
- **Size**: ~200 lines
- **Usage**: Service pages, support page
- **Features**: Collapsible questions, search functionality
```html
<div id="faq-placeholder"></div>
<script>loadComponent('faq', '/components/content/faq-section.html');</script>
```

### **Specifications Table**
- **File**: `/components/content/specs-table.html`
- **Size**: ~120 lines
- **Usage**: Service pages
- **Features**: Technical specs, file formats, material compatibility
```html
<div id="specs-placeholder"></div>
<script>loadComponent('specs', '/components/content/specs-table.html');</script>
```

### **Comparison Chart**
- **File**: `/components/content/comparison-chart.html`
- **Size**: ~150 lines
- **Usage**: Service pages, landing pages
- **Features**: Service comparison matrix, highlighting advantages
```html
<div id="comparison-placeholder"></div>
<script>loadComponent('comparison', '/components/content/comparison-chart.html');</script>
```

### **Team Section**
- **File**: `/components/content/team-section.html`
- **Size**: ~130 lines
- **Usage**: About page
- **Features**: Team member cards, photos, roles
```html
<div id="team-placeholder"></div>
<script>loadComponent('team', '/components/content/team-section.html');</script>
```

---

## 🎮 Interactive Components

### **Image Gallery**
- **File**: `/components/interactive/image-gallery.html`
- **Size**: ~180 lines
- **Usage**: Service pages, portfolio
- **Features**: Lightbox, thumbnails, captions
```html
<div id="gallery-placeholder"></div>
<script>loadComponent('gallery', '/components/interactive/image-gallery.html');</script>
```

### **Tabs Component**
- **File**: `/components/interactive/tabs-component.html`
- **Size**: ~120 lines
- **Usage**: Service pages, product details
- **Features**: Multiple content tabs, responsive design
```html
<div id="tabs-placeholder"></div>
<script>loadComponent('tabs', '/components/interactive/tabs-component.html');</script>
```

### **Accordion**
- **File**: `/components/interactive/accordion.html`
- **Size**: ~100 lines
- **Usage**: FAQ, detailed information
- **Features**: Expandable sections, smooth animations
```html
<div id="accordion-placeholder"></div>
<script>loadComponent('accordion', '/components/interactive/accordion.html');</script>
```

### **Modal Component**
- **File**: `/components/interactive/modal.html`
- **Size**: ~140 lines
- **Usage**: Forms, image previews, confirmations
- **Features**: Overlay, close buttons, responsive
```html
<div id="modal-placeholder"></div>
<script>loadComponent('modal', '/components/interactive/modal.html');</script>
```

---

## 🛠️ Utility Components

### **CTA Buttons**
- **File**: `/components/utility/cta-buttons.html`
- **Size**: ~80 lines
- **Usage**: Throughout site
- **Features**: Multiple button styles, consistent branding
```html
<div id="cta-placeholder"></div>
<script>loadComponent('cta', '/components/utility/cta-buttons.html');</script>
```

### **Trust Badges** ⭐ *Conversion Booster*
- **File**: `/components/utility/trust-badges.html`
- **Size**: ~90 lines
- **Usage**: Homepage, service pages
- **Features**: Value propositions, trust signals, icons
```html
<div id="trust-badges-placeholder"></div>
<script>loadComponent('trust-badges', '/components/utility/trust-badges.html');</script>
```

### **Social Proof**
- **File**: `/components/utility/social-proof.html`
- **Size**: ~100 lines
- **Usage**: Homepage, checkout
- **Features**: Customer count, recent orders, live stats
```html
<div id="social-proof-placeholder"></div>
<script>loadComponent('social-proof', '/components/utility/social-proof.html');</script>
```

### **Progress Bar**
- **File**: `/components/utility/progress-bar.html`
- **Size**: ~60 lines
- **Usage**: Multi-step forms, loading states
- **Features**: Step indicators, completion status
```html
<div id="progress-placeholder"></div>
<script>loadComponent('progress', '/components/utility/progress-bar.html');</script>
```

### **Breadcrumbs**
- **File**: `/components/utility/breadcrumbs.html`
- **Size**: ~50 lines
- **Usage**: Deep pages, navigation aid
- **Features**: Dynamic path generation, SEO-friendly
```html
<div id="breadcrumbs-placeholder"></div>
<script>loadComponent('breadcrumbs', '/components/utility/breadcrumbs.html');</script>
```

---

## 📱 Page Templates

### **Homepage Template** (Total: ~800 lines)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PrintGuys.ca - Canada's Leading DTF Transfer Specialists</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
  <!-- Layout -->
  <div id="header-placeholder"></div>
  
  <!-- Content Sections -->
  <div id="hero-placeholder"></div>
  <div id="trust-badges-placeholder"></div>
  <div id="service-grid-placeholder"></div>
  <div id="process-placeholder"></div>
  <div id="calculator-placeholder"></div>
  <div id="testimonials-placeholder"></div>
  <div id="social-proof-placeholder"></div>
  
  <!-- Layout -->
  <div id="footer-placeholder"></div>
  
  <script src="/js/component-loader.js"></script>
  <script>
    // Load all components
    loadComponent('header', '/components/layout/header.html');
    loadComponent('hero', '/components/hero/hero-homepage.html');
    loadComponent('trust-badges', '/components/utility/trust-badges.html');
    loadComponent('service-grid', '/components/content/service-grid.html');
    loadComponent('process', '/components/content/process-steps.html');
    loadComponent('calculator', '/components/forms/quote-calculator.html');
    loadComponent('testimonials', '/components/content/testimonials.html');
    loadComponent('social-proof', '/components/utility/social-proof.html');
    loadComponent('footer', '/components/layout/footer.html');
  </script>
</body>
</html>
```

### **Service Page Template** (Total: ~900 lines)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DTF Heat Transfers - PrintGuys.ca</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
  <!-- Layout -->
  <div id="header-placeholder"></div>
  <div id="breadcrumbs-placeholder"></div>
  
  <!-- Content Sections -->
  <div id="hero-placeholder"></div>
  <div id="pricing-placeholder"></div>
  <div id="specs-placeholder"></div>
  <div id="process-placeholder"></div>
  <div id="comparison-placeholder"></div>
  <div id="calculator-placeholder"></div>
  <div id="gallery-placeholder"></div>
  <div id="faq-placeholder"></div>
  
  <!-- Layout -->
  <div id="footer-placeholder"></div>
  
  <script src="/js/component-loader.js"></script>
  <script>
    // Load service-specific components
    loadComponent('header', '/components/layout/header.html');
    loadComponent('breadcrumbs', '/components/utility/breadcrumbs.html');
    loadComponent('hero', '/components/hero/hero-service.html', {
      title: 'DTF Heat Transfers',
      description: 'Canada\'s largest DTF printer - professional quality in 24 hours',
      media: '/images/dtf-hero.jpg'
    });
    loadComponent('pricing', '/components/content/pricing-cards.html');
    loadComponent('specs', '/components/content/specs-table.html');
    loadComponent('process', '/components/content/process-steps.html');
    loadComponent('comparison', '/components/content/comparison-chart.html');
    loadComponent('calculator', '/components/forms/quote-calculator.html');
    loadComponent('gallery', '/components/interactive/image-gallery.html');
    loadComponent('faq', '/components/content/faq-section.html');
    loadComponent('footer', '/components/layout/footer.html');
  </script>
</body>
</html>
```

### **Quote Page Template** (Total: ~700 lines)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Get Your Quote - PrintGuys.ca</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
  <!-- Layout -->
  <div id="header-placeholder"></div>
  <div id="breadcrumbs-placeholder"></div>
  
  <!-- Content Sections -->
  <div id="hero-placeholder"></div>
  <div id="progress-placeholder"></div>
  <div id="calculator-placeholder"></div>
  <div id="upload-placeholder"></div>
  <div id="trust-badges-placeholder"></div>
  
  <!-- Layout -->
  <div id="footer-placeholder"></div>
  
  <script src="/js/component-loader.js"></script>
  <script>
    // Load quote-specific components
    loadComponent('header', '/components/layout/header.html');
    loadComponent('breadcrumbs', '/components/utility/breadcrumbs.html');
    loadComponent('hero', '/components/hero/hero-contact.html', {
      title: 'Get Your Custom Quote',
      description: 'Simple process - instant pricing'
    });
    loadComponent('progress', '/components/utility/progress-bar.html');
    loadComponent('calculator', '/components/forms/quote-calculator.html');
    loadComponent('upload', '/components/forms/upload-form.html');
    loadComponent('trust-badges', '/components/utility/trust-badges.html');
    loadComponent('footer', '/components/layout/footer.html');
  </script>
</body>
</html>
```

### **About Page Template** (Total: ~750 lines)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About PrintGuys.ca - Canada's DTF Transfer Specialists</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
  <!-- Layout -->
  <div id="header-placeholder"></div>
  
  <!-- Content Sections -->
  <div id="hero-placeholder"></div>
  <div id="team-placeholder"></div>
  <div id="testimonials-placeholder"></div>
  <div id="gallery-placeholder"></div>
  <div id="trust-badges-placeholder"></div>
  
  <!-- Layout -->
  <div id="footer-placeholder"></div>
  
  <script src="/js/component-loader.js"></script>
  <script>
    // Load about-specific components
    loadComponent('header', '/components/layout/header.html');
    loadComponent('hero', '/components/hero/hero-about.html');
    loadComponent('team', '/components/content/team-section.html');
    loadComponent('testimonials', '/components/content/testimonials.html');
    loadComponent('gallery', '/components/interactive/image-gallery.html', {
      type: 'facility-tour'
    });
    loadComponent('trust-badges', '/components/utility/trust-badges.html');
    loadComponent('footer', '/components/layout/footer.html');
  </script>
</body>
</html>
```

### **Contact Page Template** (Total: ~600 lines)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact PrintGuys.ca - Get In Touch</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
  <!-- Layout -->
  <div id="header-placeholder"></div>
  
  <!-- Content Sections -->
  <div id="hero-placeholder"></div>
  <div id="contact-form-placeholder"></div>
  <div id="trust-badges-placeholder"></div>
  
  <!-- Layout -->
  <div id="footer-placeholder"></div>
  
  <script src="/js/component-loader.js"></script>
  <script>
    // Load contact-specific components
    loadComponent('header', '/components/layout/header.html');
    loadComponent('hero', '/components/hero/hero-contact.html');
    loadComponent('contact-form', '/components/forms/contact-form.html');
    loadComponent('trust-badges', '/components/utility/trust-badges.html');
    loadComponent('footer', '/components/layout/footer.html');
  </script>
</body>
</html>
```

---

## 🎨 Component Styling Guidelines

### **CSS Organization**
```
/css/
├── main.css (global styles)
├── components/
│   ├── layout.css
│   ├── hero.css
│   ├── forms.css
│   ├── content.css
│   ├── interactive.css
│   └── utility.css
└── pages/
    ├── homepage.css
    ├── service.css
    └── contact.css
```

### **CSS Class Naming Convention**
- **Component**: `.component-name`
- **Element**: `.component-name__element`
- **Modifier**: `.component-name--modifier`
- **State**: `.component-name.is-active`

### **Example CSS Structure**
```css
/* Component base */
.quote-calculator {
  /* Base styles */
}

/* Component elements */
.quote-calculator__form { }
.quote-calculator__input { }
.quote-calculator__result { }

/* Component modifiers */
.quote-calculator--compact { }
.quote-calculator--mobile { }

/* Component states */
.quote-calculator.is-loading { }
.quote-calculator.is-complete { }
```

---

## 📋 Component Usage Checklist

### **Before Using a Component:**
- [ ] Check if component exists in library
- [ ] Review component documentation
- [ ] Confirm responsive behavior
- [ ] Test with different content lengths
- [ ] Verify accessibility features

### **When Creating New Components:**
- [ ] Keep under 250 lines
- [ ] Include responsive breakpoints
- [ ] Add proper ARIA labels
- [ ] Document customization options
- [ ] Test across browsers
- [ ] Optimize for performance

### **Component Quality Standards:**
- [ ] Mobile-first responsive design
- [ ] Accessibility compliance (WCAG 2.1)
- [ ] Cross-browser compatibility
- [ ] Performance optimized
- [ ] SEO-friendly markup
- [ ] Clean, semantic HTML

---

## 🚀 Quick Start Guide

### **Building a New Page:**

1. **Choose Template**: Start with closest page template
2. **Select Components**: Pick from component menu above
3. **Customize Content**: Adjust text, images, data
4. **Test Responsive**: Check all breakpoints
5. **Optimize Performance**: Minimize HTTP requests

### **Example: Creating a FAQ Page**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>FAQ - PrintGuys.ca</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
  <div id="header-placeholder"></div>
  <div id="hero-placeholder"></div>
  <div id="faq-placeholder"></div>
  <div id="contact-form-placeholder"></div>
  <div id="footer-placeholder"></div>
  
  <script src="/js/component-loader.js"></script>
  <script>
    loadComponent('header', '/components/layout/header.html');
    loadComponent('hero', '/components/hero/hero-contact.html', {
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about our services'
    });
    loadComponent('faq', '/components/content/faq-section.html');
    loadComponent('contact-form', '/components/forms/contact-form.html');
    loadComponent('footer', '/components/layout/footer.html');
  </script>
</body>
</html>
```

**Total Lines**: ~400 (well under 1200 limit!)

---

This modular system ensures every page stays under 1200 lines while maintaining full functionality and professional design. Each component is reusable, maintainable, and optimized for performance.
