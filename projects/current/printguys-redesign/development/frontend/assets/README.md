# PrintGuys Assets Directory

This directory contains all visual assets for the PrintGuys website including logos, images, and graphics.

## 📁 Folder Structure

```
assets/
├── images/
│   ├── logo/           # PrintGuys logo files
│   ├── services/       # Service-related images
│   ├── hero/          # Hero section backgrounds
│   ├── team/          # Team photos
│   ├── gallery/       # Work samples and portfolio
│   └── blog/          # Blog post images
├── icons/             # SVG icons and graphics
└── documents/         # PDFs, brochures, etc.
```

## 🎨 Logo Guidelines

### Recommended Logo Formats:
- **PNG** - For web use with transparency
- **JPG** - For backgrounds and email
- **SVG** - For scalable vector graphics
- **ICO** - For favicons

### Recommended Sizes:
- **Primary Logo**: 300x100px (3:1 ratio)
- **Square Logo**: 200x200px for social media
- **Favicon**: 32x32px, 16x16px
- **Large Logo**: 600x200px for headers

## 📋 File Naming Convention

Use descriptive, lowercase filenames with hyphens:
- `printguys-logo-primary.png`
- `printguys-logo-white.png`
- `printguys-logo-square.png`
- `printguys-favicon.ico`

## 🔗 Usage in HTML

After uploading your logo files, reference them in HTML like this:

```html
<!-- Primary logo in header -->
<img src="/assets/images/logo/printguys-logo-primary.png" alt="PrintGuys Logo" class="h-8">

<!-- Favicon in head section -->
<link rel="icon" type="image/x-icon" href="/assets/images/logo/printguys-favicon.ico">
```

## 📸 Image Optimization Tips

- **Compress images** before uploading (use tools like TinyPNG)
- **Use appropriate formats**: PNG for logos, JPG for photos
- **Keep file sizes small** for faster loading
- **Include alt text** for accessibility

## 🚀 Next Steps

1. Upload your PrintGuys logo files to `assets/images/logo/`
2. Update the HTML files to reference your actual logo
3. Add any additional images for services or hero sections
4. Test the images display correctly on your deployed site

---

Ready to upload your logo files! 📂