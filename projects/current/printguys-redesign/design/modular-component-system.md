# PrintGuys.ca Modular Component System

## Overview
A modular component architecture for PrintGuys.ca that keeps HTML files under 1200 lines by using reusable components. Each component is self-contained and can be used across multiple pages.

## Component Organization Structure

```
/components/
├── layout/
│   ├── header.html
│   ├── footer.html
│   ├── navigation.html
│   └── mobile-nav.html
├── hero/
│   ├── hero-homepage.html
│   ├── hero-service.html
│   ├── hero-about.html
│   └── hero-contact.html
├── forms/
│   ├── quote-calculator.html
│   ├── contact-form.html
│   ├── upload-form.html
│   └── newsletter-signup.html
├── content/
│   ├── service-grid.html
│   ├── pricing-cards.html
│   ├── process-steps.html
│   ├── testimonials.html
│   ├── faq-section.html
│   └── specs-table.html
├── interactive/
│   ├── image-gallery.html
│   ├── tabs-component.html
│   ├── accordion.html
│   └── modal.html
├── utility/
│   ├── cta-buttons.html
│   ├── social-proof.html
│   ├── trust-badges.html
│   └── progress-bar.html
└── documentation/
    ├── component-library.md
    ├── usage-guide.md
    └── style-guide.md
```

---

## Component Library Reference

### 1. Layout Components

#### **header.html**
```html
<!-- Main site header with navigation -->
<header class="site-header">
  <div class="container">
    <div class="header-content">
      <div class="logo">
        <a href="/">PrintGuys.ca</a>
      </div>
      <nav class="main-nav">
        <ul>
          <li><a href="/dtf-transfers">DTF Transfers</a></li>
          <li><a href="/screen-printing">Screen Printing</a></li>
          <li><a href="/sublimation">Sublimation</a></li>
          <li><a href="/embroidery">Embroidery</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <a href="/quote" class="btn btn-primary">Get Quote</a>
        <a href="/upload" class="btn btn-secondary">Upload</a>
      </div>
    </div>
  </div>
</header>
```
**Usage**: Include on every page
**Variants**: Standard, transparent, sticky

#### **footer.html**
```html
<!-- Site footer with links and contact info -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Services</h4>
        <ul>
          <li><a href="/dtf-transfers">DTF Transfers</a></li>
          <li><a href="/screen-printing">Screen Printing</a></li>
          <li><a href="/sublimation">Sublimation</a></li>
          <li><a href="/embroidery">Embroidery</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/samples">Samples</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Contact</h4>
        <p>1-800-PRINT-GUY</p>
        <p>info@printguys.ca</p>
        <p>Toronto, ON</p>
      </div>
    </div>
  </div>
</footer>
```
**Usage**: Include on every page

### 2. Hero Components

#### **hero-homepage.html**
```html
<!-- Homepage hero section -->
<section class="hero hero-homepage">
  <div class="hero-content">
    <div class="hero-text">
      <h1>Canada's Leading DTF Transfer Specialists</h1>
      <p>Professional Quality • 24-Hour Turnaround • No Minimums</p>
      <div class="hero-actions">
        <a href="/quote" class="btn btn-primary">Start Your Quote</a>
        <a href="/upload" class="btn btn-secondary">Upload Design</a>
      </div>
    </div>
    <div class="hero-image">
      <img src="/images/dtf-process-hero.jpg" alt="DTF Transfer Process">
    </div>
  </div>
</section>
```
**Usage**: Homepage only
**Customizable**: Text, images, CTA buttons

#### **hero-service.html**
```html
<!-- Service page hero -->
<section class="hero hero-service">
  <div class="hero-content">
    <div class="hero-text">
      <h1 data-service-title>Service Name</h1>
      <p data-service-description>Service description</p>
      <div class="hero-actions">
        <a href="/quote" class="btn btn-primary">Get Quote</a>
        <a href="/upload" class="btn btn-secondary">Upload Design</a>
      </div>
    </div>
    <div class="hero-media">
      <div data-service-media>Service media content</div>
    </div>
  </div>
</section>
```
**Usage**: All service pages
**Customizable**: Title, description, media content

### 3. Form Components

#### **quote-calculator.html**
```html
<!-- Interactive quote calculator -->
<section class="quote-calculator">
  <div class="calculator-container">
    <h3>Get Your Quote Now</h3>
    <form id="quoteForm">
      <div class="form-group">
        <label>Service:</label>
        <select id="serviceType">
          <option value="dtf" data-price="0.025">DTF Transfer ($0.025/sq in)</option>
          <option value="screen" data-price="2.50">Screen Printing ($2.50/pc)</option>
          <option value="sublimation" data-price="1.25">Sublimation ($1.25/pc)</option>
          <option value="embroidery" data-price="8.00">Embroidery ($8.00/pc)</option>
        </select>
      </div>
      <div class="form-group">
        <label>Width (inches):</label>
        <input type="number" id="width" min="1" max="20" value="5">
      </div>
      <div class="form-group">
        <label>Height (inches):</label>
        <input type="number" id="height" min="1" max="20" value="5">
      </div>
      <div class="form-group">
        <label>Quantity:</label>
        <input type="number" id="quantity" min="1" value="100">
      </div>
      <div class="quote-result">
        <div class="price-display">
          <span class="price-label">Estimated Price:</span>
          <span class="price-amount" id="estimatedPrice">$6.25</span>
        </div>
        <button type="button" class="btn btn-primary">Get Detailed Quote</button>
      </div>
    </form>
  </div>
</section>
```
**Usage**: Homepage, service pages
**Features**: Live calculation, responsive design

#### **contact-form.html**
```html
<!-- Contact form component -->
<section class="contact-form">
  <div class="form-container">
    <h3>Send Us a Message</h3>
    <form id="contactForm">
      <div class="form-group">
        <input type="text" id="name" placeholder="Your Name" required>
      </div>
      <div class="form-group">
        <input type="email" id="email" placeholder="Your Email" required>
      </div>
      <div class="form-group">
        <input type="tel" id="phone" placeholder="Your Phone">
      </div>
      <div class="form-group">
        <select id="subject">
          <option value="">Select Subject</option>
          <option value="quote">Quote Request</option>
          <option value="support">Support</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div class="form-group">
        <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
</section>
```
**Usage**: Contact page, footer
**Features**: Validation, responsive design

### 4. Content Components

#### **service-grid.html**
```html
<!-- Service overview grid -->
<section class="service-grid">
  <div class="container">
    <h2>Our Services</h2>
    <div class="grid">
      <div class="service-card">
        <div class="service-image">
          <img src="/images/dtf-service.jpg" alt="DTF Transfers">
        </div>
        <div class="service-content">
          <h3>DTF Transfers</h3>
          <p class="service-price">Starting at $0.025/sq inch</p>
          <p class="service-description">Professional heat transfers for any fabric</p>
          <a href="/dtf-transfers" class="btn btn-outline">Learn More</a>
        </div>
      </div>
      <div class="service-card">
        <div class="service-image">
          <img src="/images/screen-printing.jpg" alt="Screen Printing">
        </div>
        <div class="service-content">
          <h3>Screen Printing</h3>
          <p class="service-price">Starting at $2.50/piece</p>
          <p class="service-description">Traditional screen printing for large orders</p>
          <a href="/screen-printing" class="btn btn-outline">Learn More</a>
        </div>
      </div>
      <div class="service-card">
        <div class="service-image">
          <img src="/images/sublimation.jpg" alt="Sublimation">
        </div>
        <div class="service-content">
          <h3>Sublimation</h3>
          <p class="service-price">Starting at $1.25/piece</p>
          <p class="service-description">Vibrant prints for light-colored fabrics</p>
          <a href="/sublimation" class="btn btn-outline">Learn More</a>
        </div>
      </div>
      <div class="service-card">
        <div class="service-image">
          <img src="/images/embroidery.jpg" alt="Embroidery">
        </div>
        <div class="service-content">
          <h3>Embroidery</h3>
          <p class="service-price">Starting at $8.00/piece</p>
          <p class="service-description">Premium embroidered designs</p>
          <a href="/embroidery" class="btn btn-outline">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>
```
**Usage**: Homepage, service comparison pages
**Customizable**: Service cards, pricing, descriptions

#### **pricing-cards.html**
```html
<!-- Pricing comparison cards -->
<section class="pricing-cards">
  <div class="container">
    <h2>Choose Your Package</h2>
    <div class="pricing-grid">
      <div class="pricing-card">
        <div class="pricing-header">
          <h3>Standard DTF</h3>
          <div class="price">$0.025<span>/sq inch</span></div>
        </div>
        <div class="pricing-features">
          <ul>
            <li>70 wash durability</li>
            <li>24-hour delivery</li>
            <li>No minimums</li>
            <li>Standard colors</li>
          </ul>
        </div>
        <div class="pricing-footer">
          <button class="btn btn-primary">Order Now</button>
        </div>
      </div>
      <div class="pricing-card featured">
        <div class="pricing-header">
          <h3>Premium DTF</h3>
          <div class="price">$0.035<span>/sq inch</span></div>
        </div>
        <div class="pricing-features">
          <ul>
            <li>100 wash durability</li>
            <li>Enhanced grip</li>
            <li>Vibrant colors</li>
            <li>Premium materials</li>
          </ul>
        </div>
        <div class="pricing-footer">
          <button class="btn btn-primary">Order Now</button>
        </div>
      </div>
      <div class="pricing-card">
        <div class="pricing-header">
          <h3>Bulk DTF</h3>
          <div class="price">$0.020<span>/sq inch</span></div>
        </div>
        <div class="pricing-features">
          <ul>
            <li>1000+ pieces</li>
            <li>48-hour delivery</li>
            <li>Account required</li>
            <li>Volume discounts</li>
          </ul>
        </div>
        <div class="pricing-footer">
          <button class="btn btn-primary">Get Quote</button>
        </div>
      </div>
    </div>
  </div>
</section>
```
**Usage**: Service pages, pricing page
**Customizable**: Pricing tiers, features, styling

#### **process-steps.html**
```html
<!-- Process explanation steps -->
<section class="process-steps">
  <div class="container">
    <h2>How It Works</h2>
    <div class="steps-container">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>Upload Design</h3>
          <p>Upload your artwork or choose from our templates</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>Get Quote</h3>
          <p>Receive instant pricing with our calculator</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>Production</h3>
          <p>We print your transfers with professional equipment</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h3>Delivery</h3>
          <p>Fast shipping within 24-48 hours</p>
        </div>
      </div>
    </div>
  </div>
</section>
```
**Usage**: Homepage, service pages
**Customizable**: Steps, content, styling

#### **testimonials.html**
```html
<!-- Customer testimonials -->
<section class="testimonials">
  <div class="container">
    <h2>What Our Customers Say</h2>
    <div class="testimonial-grid">
      <div class="testimonial-card">
        <div class="testimonial-content">
          <p>"Amazing quality and fast service. PrintGuys delivered exactly what we needed for our event."</p>
        </div>
        <div class="testimonial-author">
          <div class="author-info">
            <strong>Sarah Mitchell</strong>
            <span>Event Coordinator</span>
          </div>
          <div class="rating">★★★★★</div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-content">
          <p>"The DTF transfers are incredibly durable. After 50+ washes, they still look brand new."</p>
        </div>
        <div class="testimonial-author">
          <div class="author-info">
            <strong>Mike Rodriguez</strong>
            <span>Small Business Owner</span>
          </div>
          <div class="rating">★★★★★</div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-content">
          <p>"Great customer service team and transparent pricing. No hidden fees or surprises."</p>
        </div>
        <div class="testimonial-author">
          <div class="author-info">
            <strong>Lisa Chen</strong>
            <span>Marketing Director</span>
          </div>
          <div class="rating">★★★★★</div>
        </div>
      </div>
    </div>
  </div>
</section>
```
**Usage**: Homepage, about page
**Customizable**: Testimonials, layout, styling

### 5. Utility Components

#### **cta-buttons.html**
```html
<!-- Call-to-action button variants -->
<div class="cta-buttons">
  <!-- Primary CTA -->
  <a href="/quote" class="btn btn-primary">Get Quote Now</a>
  
  <!-- Secondary CTA -->
  <a href="/upload" class="btn btn-secondary">Upload Design</a>
  
  <!-- Outline CTA -->
  <a href="/samples" class="btn btn-outline">View Samples</a>
  
  <!-- Large CTA -->
  <a href="/quote" class="btn btn-primary btn-large">Start Your Project</a>
</div>
```
**Usage**: Throughout site
**Variants**: Primary, secondary, outline, large

#### **trust-badges.html**
```html
<!-- Trust signals and badges -->
<section class="trust-badges">
  <div class="container">
    <div class="badges-container">
      <div class="badge">
        <div class="badge-icon">✓</div>
        <div class="badge-text">$0.025/sq inch</div>
      </div>
      <div class="badge">
        <div class="badge-icon">⚡</div>
        <div class="badge-text">24hr turnaround</div>
      </div>
      <div class="badge">
        <div class="badge-icon">🔥</div>
        <div class="badge-text">No minimums</div>
      </div>
      <div class="badge">
        <div class="badge-icon">🛡️</div>
        <div class="badge-text">70+ wash durability</div>
      </div>
    </div>
  </div>
</section>
```
**Usage**: Homepage, service pages
**Customizable**: Icons, text, styling

---

## Page Assembly Examples

### Homepage Structure (Under 1200 lines)
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
  <!-- Include header component -->
  <div id="header-placeholder"></div>
  
  <!-- Include homepage hero -->
  <div id="hero-placeholder"></div>
  
  <!-- Include trust badges -->
  <div id="trust-badges-placeholder"></div>
  
  <!-- Include service grid -->
  <div id="service-grid-placeholder"></div>
  
  <!-- Include process steps -->
  <div id="process-steps-placeholder"></div>
  
  <!-- Include quote calculator -->
  <div id="quote-calculator-placeholder"></div>
  
  <!-- Include testimonials -->
  <div id="testimonials-placeholder"></div>
  
  <!-- Include footer -->
  <div id="footer-placeholder"></div>
  
  <script src="/js/component-loader.js"></script>
  <script>
    // Load components
    loadComponent('header', '/components/layout/header.html');
    loadComponent('hero', '/components/hero/hero-homepage.html');
    loadComponent('trust-badges', '/components/utility/trust-badges.html');
    loadComponent('service-grid', '/components/content/service-grid.html');
    loadComponent('process-steps', '/components/content/process-steps.html');
    loadComponent('quote-calculator', '/components/forms/quote-calculator.html');
    loadComponent('testimonials', '/components/content/testimonials.html');
    loadComponent('footer', '/components/layout/footer.html');
  </script>
</body>
</html>
```

### Service Page Structure (Under 1200 lines)
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
  <!-- Include header -->
  <div id="header-placeholder"></div>
  
  <!-- Include service hero -->
  <div id="hero-placeholder"></div>
  
  <!-- Include pricing cards -->
  <div id="pricing-placeholder"></div>
  
  <!-- Include specifications -->
  <div id="specs-placeholder"></div>
  
  <!-- Include process steps -->
  <div id="process-placeholder"></div>
  
  <!-- Include quote calculator -->
  <div id="calculator-placeholder"></div>
  
  <!-- Include FAQ -->
  <div id="faq-placeholder"></div>
  
  <!-- Include footer -->
  <div id="footer-placeholder"></div>
  
  <script src="/js/component-loader.js"></script>
  <script>
    // Load components with service-specific data
    loadComponent('header', '/components/layout/header.html');
    loadComponent('hero', '/components/hero/hero-service.html', {
      title: 'DTF Heat Transfers',
      description: 'Professional quality transfers ready in 24 hours',
      media: '/images/dtf-process.jpg'
    });
    loadComponent('pricing', '/components/content/pricing-cards.html');
    loadComponent('specs', '/components/content/specs-table.html');
    loadComponent('process', '/components/content/process-steps.html');
    loadComponent('calculator', '/components/forms/quote-calculator.html');
    loadComponent('faq', '/components/content/faq-section.html');
    loadComponent('footer', '/components/layout/footer.html');
  </script>
</body>
</html>
```

---

## Component Loader System

### component-loader.js
```javascript
// Component loading system
function loadComponent(placeholderId, componentPath, data = {}) {
  const placeholder = document.getElementById(placeholderId + '-placeholder');
  
  if (!placeholder) {
    console.error(`Placeholder ${placeholderId}-placeholder not found`);
    return;
  }
  
  fetch(componentPath)
    .then(response => response.text())
    .then(html => {
      // Replace data attributes with actual data
      Object.keys(data).forEach(key => {
        const regex = new RegExp(`data-${key}`, 'g');
        html = html.replace(regex, data[key]);
      });
      
      placeholder.innerHTML = html;
      
      // Initialize component-specific JavaScript
      initializeComponent(placeholderId);
    })
    .catch(error => {
      console.error(`Error loading component ${componentPath}:`, error);
    });
}

function initializeComponent(componentId) {
  switch (componentId) {
    case 'quote-calculator':
      initQuoteCalculator();
      break;
    case 'contact-form':
      initContactForm();
      break;
    case 'image-gallery':
      initImageGallery();
      break;
    // Add more component initializations as needed
  }
}
```

---

## Benefits of This System

### 1. **Maintainability**
- Single source of truth for each component
- Easy to update components across all pages
- Clear separation of concerns

### 2. **Scalability**
- Easy to add new components
- Components can be mixed and matched
- Consistent styling and behavior

### 3. **Performance**
- Smaller HTML files
- Cached components
- Faster loading times

### 4. **Development Efficiency**
- Reusable code reduces duplication
- Easier testing of individual components
- Faster development of new pages

### 5. **Consistency**
- Uniform styling across the site
- Consistent user experience
- Easier brand management

---

## Next Steps

1. **Create Base Components**: Start with layout and form components
2. **Build Component Library**: Create all documented components
3. **Test Integration**: Ensure components work together
4. **Create Documentation**: Document usage and customization
5. **Optimize Performance**: Fine-tune loading and caching

This modular system will keep our codebase clean, maintainable, and under the 1200-line limit for each page while providing maximum flexibility and reusability.
