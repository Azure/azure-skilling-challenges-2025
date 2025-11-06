# Microsoft Ignite 2025 Azure Skilling Challenges

A campaign-quality landing page for Microsoft Ignite 2025 Azure Skilling Challenges, featuring 6 hands-on learning tracks designed to help developers build AI and cloud skills.

## Overview

This landing page aggregates 6 Ignite-aligned learning challenges:

1. **Innovate with AI Apps & Agents** - Azure OpenAI Service, GitHub Copilot, multi-agent orchestration
2. **Unify Your Data Platform** - Microsoft Fabric, Azure Cosmos DB, real-time analytics
3. **Migration & Modernization** - AKS, container orchestration, cloud migration
4. **Agentic DevOps powered by GitHub Copilot** - AI pair programming, prompt engineering
5. **Security & Compliance** - Zero Trust architecture, Microsoft Defender
6. **Full-Stack Cloud Development** - Azure App Service, serverless, CI/CD

## Features

- **Microsoft Design System** - Azure blue (#0078d4), Segoe UI fonts, Fluent design principles
- **Mobile-First Responsive** - Optimized for mobile, tablet, and desktop
- **WCAG 2.1 AA Compliant** - Semantic HTML, ARIA labels, keyboard navigation
- **Performance Optimized** - <100KB total size, <2s load time target
- **Analytics Ready** - Hooks for Application Insights (currently console.log)
- **Progressive Enhancement** - Works without JavaScript

## File Structure

```
.
├── index.html              # Main landing page
├── styles.css              # Microsoft Design System styling
├── script.js               # Interactivity and analytics hooks
└── README.md               # This file
```

## Local Development

### Preview Locally

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Use Python HTTP server
python3 -m http.server 8000
# Visit: http://localhost:8000

# Option 3: Use Node.js http-server
npx http-server
```

### Making Changes

1. Edit `index.html`, `styles.css`, or `script.js`
2. Refresh your browser to see changes
3. Test on mobile using browser DevTools (Cmd+Opt+I on Mac, F12 on Windows)

## Deployment

### GitHub Pages Setup

**Deployment URL:** `https://azure.github.io/azure-skilling-challenges-2025`

To enable GitHub Pages:

1. Merge this branch to `main`
2. Go to repository Settings → Pages
3. Source: Select "Deploy from a branch"
4. Branch: Select `main` and `/ (root)`
5. Click "Save"

The site will automatically deploy whenever you push to `main`.

### Alternative: GitHub Actions Workflow

If you prefer automated deployments with GitHub Actions, you can create `.github/workflows/pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then in Settings → Pages, select "GitHub Actions" as the source.

## Updating Challenge URLs

Currently, all challenge CTAs link to `#` (placeholder). To update:

1. Edit `index.html`
2. Find each `.challenge-cta` link
3. Replace `href="#"` with the actual Microsoft Learn URL

Example:
```html
<a href="https://learn.microsoft.com/training/challenges/..." class="btn btn-primary challenge-cta">
    Start AI Apps & Agents →
</a>
```

## Analytics Integration

The site includes analytics hooks ready for Application Insights integration.

### Current State (Development)
- All analytics events log to browser console
- URL parameter tracking enabled
- Performance metrics captured

### Production Integration

1. Add Application Insights to `index.html`:
```html
<script type="text/javascript">
!function(T,l,y){/* Application Insights snippet */}
</script>
```

2. Update `script.js` to replace console.log calls:
```javascript
// Replace:
console.log('[Analytics] Challenge CTA Click:', data);

// With:
appInsights.trackEvent({ name: "ChallengeCTAClick", properties: data });
```

3. Events tracked:
   - Page load performance
   - Challenge CTA clicks
   - Challenge card hovers
   - Scroll depth milestones
   - URL parameter attribution

## Performance Optimization

Current optimizations:
- ✅ No external dependencies (vanilla HTML/CSS/JS)
- ✅ Minimal animations (respects prefers-reduced-motion)
- ✅ CSS custom properties for efficient theming
- ✅ Semantic HTML for fast parsing
- ✅ Optimized for mobile-first

Target metrics:
- **Lighthouse Score:** 90+
- **Page Load Time:** <2 seconds
- **Total Page Size:** <100KB
- **First Contentful Paint:** <1.5s

## Accessibility

The site follows WCAG 2.1 AA guidelines:

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ High contrast mode support
- ✅ Screen reader compatible
- ✅ Focus visible indicators
- ✅ Skip to content shortcuts (Alt+S)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (latest)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request

## License

© 2025 Microsoft. All rights reserved.

## Resources

- [Microsoft Learn](https://learn.microsoft.com)
- [Microsoft Ignite](https://ignite.microsoft.com)
- [Azure Documentation](https://docs.microsoft.com/azure)
- [Microsoft Design System](https://www.microsoft.com/design/fluent/)
