# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hearth & Harrow is a bright, peaceful e-commerce demo site built with Astro, showcasing a Pagan & Occult supplies store. It features a **Crayola-inspired color palette** with modern design elements, advanced CSS animations, bento box layouts, and complete responsive design.

**Design Theme**: Bright, welcoming, and peaceful (transformed from dark mystical to vibrant and professional)
**Live Demo**: https://hearthandharrow.netlify.app

## Essential Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start development server at localhost:4321
npm run build           # Build production site to ./dist/
npm run preview         # Preview production build locally
npm run astro           # Run Astro CLI commands
npm run astro -- --help # Get Astro CLI help
```

## Architecture & Key Concepts

### Tech Stack
- **Framework**: Astro (static site generation)
- **Styling**: SCSS with CSS custom properties
- **TypeScript**: Strict configuration via astro/tsconfigs/strict
- **Deployment**: Static output optimized for Netlify

### Project Structure
```
src/
├── layouts/
│   └── BaseLayout.astro    # Main layout with nav, footer, global scripts
├── pages/                  # File-based routing
│   ├── index.astro        # Homepage with hero, categories, newsletter
│   ├── shop.astro         # Shop page
│   ├── about.astro        # About page
│   └── contact.astro      # Contact page
├── styles/
│   └── global.scss        # Global styles, color palette, animations
└── assets/                # Static assets

public/                     # Static files served directly
```

### Key Features & Implementation

**Bright Design System**:
- **Crayola-inspired color palette** with 6 primary colors (`global.scss:3-9`)
- **Peaceful variants** for soft, welcoming tones (`global.scss:11-17`)
- **Advanced gradients** including rainbow spectrum (`global.scss:32-43`)
- **Modern shadows** with soft, gentle effects (`global.scss:45-49`)

**Font Awesome Integration**:
- CDN-based Font Awesome 6 Free with gradient icon support
- `FontAwesome.astro` component with peaceful color themes
- Gradient text effects for icons using CSS background-clip
- Easy-to-use component system: `<FontAwesome icon="heart" gradient="peaceful-red" />`

**Bento Box Layout System**:
- Modern grid-based product presentation (`.bento-grid`, `.bento-item`)
- Auto-responsive with `minmax(280px, 1fr)` grid columns
- Hover effects with rainbow gradient top borders
- Perfect for showcasing products with visual hierarchy

**Interactive Elements**:
- Gentle cursor sparkle effects with peaceful colors
- Smooth card hover animations with `translateY` and `scale`
- Button shimmer effects on hover
- Scroll-triggered animations with Intersection Observer

**Modern Component System**:
- `.peaceful-card` class replacing old `.mystical-card`
- Advanced button variants (primary, secondary, success, warning, danger)
- Modern form inputs with focus states and shadows
- Comprehensive utility classes for rapid development

### Development Notes

**Color System Usage**:
```scss
// Primary colors
color: var(--crayola-blue);     // #1F75FE
color: var(--crayola-green);    // #22C55E
color: var(--crayola-yellow);   // #EAB308

// Peaceful variants
color: var(--peaceful-blue);    // #87CEEB
background: var(--peaceful-gradient); // Blue to purple
```

**Bento Box Implementation**:
```html
<div class="bento-grid">
  <div class="bento-item">
    <FontAwesome icon="heart" gradient="peaceful-red" />
    <h3>Product Title</h3>
    <p>Description</p>
  </div>
</div>
```

**Button & Form Components**:
```html
<button class="btn primary">Primary Action</button>
<button class="btn secondary">Secondary Action</button>
<input type="text" class="form-input" placeholder="Enter text" />
```

**Animation Classes**:
```html
<div class="animate-fade-in">Fades in on scroll</div>
<div class="animate-slide-up">Slides up on scroll</div>
<div class="animate-bounce">Gentle bounce animation</div>
```

**Adding New Pages**:
- Use bright, welcoming color palette
- Implement bento box layouts for product displays
- Add Font Awesome icons with gradient themes
- Follow peaceful, professional aesthetic
- Ensure mobile-responsive design

**Navigation Updates**:
- Main navigation in `BaseLayout.astro:32-52`
- Footer links in `BaseLayout.astro:58-87`
- Sparkles icon in logo shows Font Awesome integration

**Testing Pages**:
- `/design-test` - Complete design system showcase
- `/fontawesome-test` - Icon integration testing

The site now emphasizes **brightness, peace, and professionalism** through Crayola-inspired colors, modern animations, and welcoming user experience design.