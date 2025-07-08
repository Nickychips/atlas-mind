# PrintGuys Netlify Deployment Guide

This guide will help you deploy the PrintGuys website to Netlify quickly and efficiently.

## 🚀 Quick Deployment Steps

### 1. Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose GitHub and authorize Netlify
4. Select your `atlas-mind` repository

### 2. Configure Build Settings
```
Build command: echo 'No build process required for static site'
Publish directory: projects/current/printguys-redesign/development/frontend/
```

### 3. Deploy
Click "Deploy site" and Netlify will automatically deploy your site!

## 📁 File Structure for Deployment

```
projects/current/printguys-redesign/development/frontend/
├── index.html                    # Main homepage (deployment root)
├── pages/
│   ├── index.html               # Original homepage
│   ├── about.html               # About page
│   ├── contact.html             # Contact page
│   └── blog.html                # Blog page
└── components/content/
    └── services-grid.html       # Services component
```

## 🔗 URL Structure

After deployment, your site will have clean URLs:
- Homepage: `https://your-site.netlify.app/`
- About: `https://your-site.netlify.app/about`
- Contact: `https://your-site.netlify.app/contact`
- Blog: `https://your-site.netlify.app/blog`

## ⚙️ Configuration Files

### netlify.toml
- Configures build settings
- Sets up URL redirects for clean URLs
- Adds security headers
- Optimizes caching for static assets

### Security Features
- X-Frame-Options: DENY
- X-XSS-Protection enabled
- Content Security Policy configured
- Proper caching headers for performance

## 🎯 Post-Deployment Checklist

### Test All Pages
- [ ] Homepage loads correctly
- [ ] About page accessible via `/about`
- [ ] Contact page accessible via `/contact`
- [ ] Blog page accessible via `/blog`
- [ ] Mobile menu works on all pages
- [ ] Contact form validation works
- [ ] All CTAs redirect properly

### Performance & SEO
- [ ] Site loads fast (< 3 seconds)
- [ ] All images load properly
- [ ] Meta tags are correct
- [ ] Mobile responsive on all devices
- [ ] All links work correctly

### Functionality Tests
- [ ] Navigation works between pages
- [ ] Mobile menu toggles correctly
- [ ] Contact form submits (even if placeholder)
- [ ] FAQ sections expand/collapse
- [ ] Hover effects work properly

## 🛠️ Troubleshooting

### Common Issues & Solutions

**404 Errors on Subpages:**
- Ensure `netlify.toml` is in the repository root
- Check that redirect rules are properly configured

**Styling Issues:**
- Verify Tailwind CSS is loading from CDN
- Check that all CSS classes are spelled correctly

**JavaScript Errors:**
- Open browser dev tools to check for console errors
- Ensure all script tags are properly closed

**Mobile Menu Not Working:**
- Check that JavaScript is loading correctly
- Verify mobile menu button has correct ID

## 🎨 Customization Options

### Custom Domain (Optional)
1. In Netlify dashboard, go to Domain settings
2. Add your custom domain (e.g., printguys.ca)
3. Configure DNS settings as instructed
4. Enable HTTPS (automatic with Netlify)

### Environment Variables
If you need to add environment variables later:
1. Go to Site settings → Environment variables
2. Add variables for forms, analytics, etc.

### Form Handling
To enable the contact form:
1. Add `netlify` attribute to form tag
2. Netlify will automatically handle form submissions
3. Configure notifications in Netlify dashboard

## 📊 Analytics & Monitoring

### Netlify Analytics (Optional)
- Enable in Site settings → Analytics
- Track page views, unique visitors, bandwidth

### Google Analytics Integration
Add tracking code to all HTML files before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 Future Updates

### Updating the Site
1. Make changes to files in GitHub
2. Commit and push to main branch
3. Netlify automatically redeploys (usually within 1-2 minutes)

### Adding New Pages
1. Create new HTML file in `pages/` directory
2. Add redirect rule to `netlify.toml`
3. Update navigation in all existing pages

---

## 🎉 You're Ready to Deploy!

Your PrintGuys website is now fully prepared for Netlify deployment with:
- ✅ Optimized file structure
- ✅ Clean URL routing
- ✅ Security headers
- ✅ Performance optimization
- ✅ Mobile responsiveness
- ✅ Professional design

Simply follow the deployment steps above and your site will be live!