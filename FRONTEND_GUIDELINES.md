# Frontend Development Guidelines

This document establishes the standards for frontend engineering within the **Portifolio** project. Our goal is to create an **Ultra-Premium, Cinematic** user experience that combines technical excellence with visual storytelling.

---

## 1. Design Aesthetics & Visual Excellence

Every interface element must feel intentional and high-end.

### 🎨 Color Palette & Theming
- **Sophisticated Dark Mode**: Use deep charcoal (`#0a0a0a`) or midnight navy instead of pure black for backgrounds.
- **Accents**: Use vibrant yet controlled accents (e.g., Electric Indigo, Gold, or Emerald) for calls to action.
- **Glassmorphism**: Implement translucent layers using `backdrop-filter: blur(12px)` and subtle border highlights to create depth.

### ✍️ Typography
- **Primary Font**: Montserrat or Inter (already in use). Use `font-weight: 700` for headings and `400` for body text.
- **Hierarchy**: Maintain clear visual contrast between H1 (3.5rem+) and H2/H3.
- **Letter Spacing**: Use `letter-spacing: 1px` for titles and `2px` for uppercase subtitles to enhance readability and "premium" feel.

### ✨ Micro-interactions
- **Hover States**: Every interactive element should have a transition. Avoid sudden changes.
- **Smooth Scaling**: Buttons and links should scale slightly (`scale(1.02)`) on hover.
- **Parallax & Reveal**: Use Intersection Observer to reveal elements as the user scrolls, creating a "cinematic" entrance.

---

## 2. Technical Standards (Angular 17)

### 🏗️ Component Architecture
- **Standalone Components**: Prioritize standalone components to reduce boilerplate and improve tree-shaking.
- **Structural Integrity**: Keep components small and focused. Move complex logic into dedicated **Services**.
- **Material UI**: Always use `@angular/material` as the base. Apply custom CSS overrides to "de-materialize" components into a unique brand identity.

### 🔄 State & Data Handling
- **RxJS Patterns**: Use `Observable` and `BehaviorSubject` for application state. Use the `async` pipe in templates to handle subscriptions automatically.
- **Immutability**: Treat state as immutable. Use operators like `map`, `filter`, and `tap` to transform data streams.

### 🚀 Performance & SEO
- **SSR (Server-Side Rendering)**: Ensure components are compatible with Angular SSR (Express engine). Avoid direct DOM manipulation (use `Renderer2` or `ElementRef` when necessary).
- **Lazy Loading**: Use the router to lazy-load feature modules/components to minimize the initial bundle size.

---

## 3. Interaction Design

### 🎞️ Swiper Integration
- Use **Swiper.js** for high-quality sliders and carousels.
- Customize bullets and navigation to match the "glass" aesthetic.
- Enable `mousewheel` or `grabCursor` for better desktop UX.

### 📧 Form Handling
- Use **Angular Reactive Forms** exclusively.
- Implement real-time validation feedback with smooth status transitions.

---

## 4. CSS Best Practices
- **Variables**: Use CSS custom properties (`--primary-color`, etc.) in `src/styles.css` for consistent theming.
- **Flexbox/Grid**: Standardize layouts using modern CSS specs.
- **Responsive**: Mobile-first approach. Ensure the "premium" feel translates to smaller screens without losing clarity.

---

## 🛠️ Tooling & Workflow
1. **Linting**: High adherence to TypeScript strict mode.
2. **Assets**: All images should be optimized and served in modern formats (WebP).
3. **Git**: Write descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) standard.
