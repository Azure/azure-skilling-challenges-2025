# Azure Skilling at Microsoft Ignite 2025

> **A comprehensive learning hub featuring hands-on challenges, expert-led sessions, and certification opportunities.**

[![Live Site](https://img.shields.io/badge/Live-Site-0078d4?style=for-the-badge&logo=microsoft-azure)](https://azure.github.io/azure-skilling-challenges-2025/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

Welcome to the official Azure Skilling hub for Microsoft Ignite 2025! This repository hosts a multi-page website designed to help developers and IT professionals advance their Azure and AI skills through interactive challenges, live expert sessions, and industry-recognized certifications.

## 🌐 Live Site

**[https://azure.github.io/azure-skilling-challenges-2025/](https://azure.github.io/azure-skilling-challenges-2025/)**

---

## 📚 What's Inside

This is a **multi-page static website** built with HTML, CSS, and JavaScript, designed to provide a comprehensive Azure learning experience during Microsoft Ignite 2025 (November 10 - December 5, 2025).

### Pages

| Page | Description | Link |
|------|-------------|------|
| **Home** | Main landing page with overview, vouchers, and featured challenges | [index.html](index.html) |
| **Challenges** | All 9 hands-on challenge tracks with direct links to Microsoft Learn | [challenges.html](challenges.html) |
| **Reactor** | Microsoft Reactor sessions and expert-led workshops (coming soon) | [reactor.html](reactor.html) |
| **Vouchers** | Detailed information about certification vouchers and rewards | [vouchers.html](vouchers.html) |

---

## 🎯 Features

### 🖱️ **Interactive Hero Gradient**
- Mouse-tracking gradient on desktop
- Touch and device tilt (gyroscope) support on mobile
- Smooth parallax layers with lerp animation
- Respects `prefers-reduced-motion` for accessibility

### 🎨 **Microsoft Fluent Design System**
- Azure blue (#0078d4) and purple (#5c2d91) color palette
- Segoe UI typography
- Consistent spacing, shadows, and border radius
- Hover effects with lift and enhanced shadows

### 📱 **Mobile-First Responsive Design**
- Breakpoints: 480px, 768px, 1200px
- Touch-optimized navigation with hamburger menu
- Responsive grid layouts (CSS Grid + Flexbox)
- Optimized for all devices (mobile, tablet, desktop)

### ♿ **WCAG 2.1 AA Accessibility**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimized
- High contrast mode support
- Focus visible indicators

---

## 🚀 The 9 Challenges

Our challenges span **4 key technology areas**, each with hands-on Microsoft Learn modules and certification preparation:

### **Innovate with AI Apps & Agents**
1. **[Agentic AI Solutions](https://aka.ms/IgniteAIAgentsChallenge?wt.mc_id=ignite25_skilling_webpage)** (AI-3003) - Build intelligent agents with Microsoft Foundry
2. **[Build Generative AI Apps](https://aka.ms/IgniteGenAIAppsChallenge?wt.mc_id=ignite25_skilling_webpage)** (AI-050) - Azure OpenAI and prompt engineering
3. **[Design Generative AI Solutions](https://aka.ms/IgniteGenAISolutionsChallenge?wt.mc_id=ignite25_skilling_webpage)** (AI-3003) - Enterprise AI solution architecture

### **Unify Your Data Platform**
4. **[Fabric Analytics Engineer](https://aka.ms/Ignite-FabricDataAnalyticsChallenge?wt.mc_id=ignite25_skilling_webpage)** (DP-600) - Real-time analytics and Power BI
5. **[Fabric Data Engineer](https://aka.ms/Ignite-FabricDataEngineeringChallenge?wt.mc_id=ignite25_skilling_webpage)** (DP-700) - Microsoft Fabric pipelines and OneLake
6. **[Data Fundamentals](https://aka.ms/Ignite-DataFundamentalsChallenge?wt.mc_id=ignite25_skilling_webpage)** (DP-900) - Database concepts and warehousing

### **Migrate & Modernize**
7. **[Build Intelligent AI Solutions](https://aka.ms/IgniteBuildAISolutionsChallenge?wt.mc_id=ignite25_skilling_webpage)** (AZ-2005) - Azure AI services and vector search
8. **[AI Engineer Associate](https://aka.ms/IgniteAIEngineerChallenge?wt.mc_id=ignite25_skilling_webpage)** (AI-102) - End-to-end AI solutions

### **Develop with AI-Powered Tools**
9. **[GitHub Copilot for Developers](https://aka.ms/IgniteGitHubCopilotChallenge?wt.mc_id=ignite25_skilling_webpage)** (MS-4012) - AI-assisted coding

### **Secure & Govern**
10. **[Secure and Govern AI](https://aka.ms/IgniteSecureGovernAIChallenge?wt.mc_id=ignite25_skilling_webpage)** (AZ-2006) - Zero Trust, AI security, compliance

> **Note:** Complete any challenge between **November 10 - December 5, 2025** to earn badges and qualify for certification vouchers!

---

## 🎫 Certification Vouchers

**Be among the first 5,000** challenge completions to earn:
- **50% off** Microsoft certification exams (DP-600, DP-700, AI-102, and more)
- **Digital badges** for LinkedIn and Microsoft Learn
- **Leaderboard recognition** for top learners

[Learn more about vouchers →](https://azure.github.io/azure-skilling-challenges-2025/vouchers.html)

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and content |
| **CSS3** | Styling with CSS Grid, Flexbox, custom properties |
| **JavaScript (ES6+)** | Interactive features, mobile nav, gradient animation |
| **GitHub Pages** | Static site hosting |
| **Git** | Version control |

### Key Libraries/Features
- **Vanilla JavaScript** (no frameworks - lightweight & fast)
- **CSS Custom Properties** for theming
- **requestAnimationFrame** for smooth 60fps animations
- **Media Queries** for responsive design
- **SVG** for scalable icons and logos

---

## 🏗️ Site Architecture

```
azure-skilling-challenges-2025/
├── index.html              # Main landing page
├── challenges.html         # All 9 challenge tracks
├── reactor.html           # Microsoft Reactor sessions
├── vouchers.html          # Certification voucher details
├── styles.css             # Complete design system
├── script.js              # Interactive features & analytics
└── README.md              # This file
```

### Page Flow
```
┌─────────────────┐
│   index.html    │  Main hub with overview
│   (Home)         │  ↓ Featured challenges, vouchers, navigation
└─────────────────┘
        ↓
┌─────────────────┬─────────────────┬─────────────────┐
│ challenges.html │  reactor.html   │ vouchers.html   │
│ All 9 tracks    │  Live sessions  │  Voucher info   │
│ → aka.ms links  │  Coming soon    │  Terms & FAQs   │
└─────────────────┴─────────────────┴─────────────────┘
```

---

## 💻 Local Development

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Code editor (VS Code, Sublime, etc.)
- Optional: Local web server (Live Server, Python HTTP server)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Azure/azure-skilling-challenges-2025.git
   cd azure-skilling-challenges-2025
   ```

2. **Open in browser**
   - Double-click `index.html`, or
   - Use a local server (recommended for testing):
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (http-server)
   npx http-server

   # VS Code Live Server extension
   # Right-click index.html → "Open with Live Server"
   ```

3. **View in browser**
   ```
   http://localhost:8000
   ```

### File Structure

```
styles.css
├── CSS Custom Properties (theming)
├── Base styles & typography
├── Navigation bar
├── Hero with interactive gradient
├── Vouchers section
├── Azure Skilling Experience tiles
├── Challenge cards
├── How It Works section
├── Featured challenges
├── Footer
└── Responsive media queries

script.js
├── Mobile navigation toggle
├── Interactive hero gradient
│   ├── Desktop: Mouse tracking
│   └── Mobile: Touch + device tilt
├── Analytics hooks (console.log stubs)
├── Event timer
└── Accessibility enhancements
```

---

## 🚀 Deployment

This site is deployed via **GitHub Pages** using the "Deploy from a branch" method.

### Steps to Deploy

1. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** → **/ (root)**
   - Click **Save**

2. **Wait for deployment**
   - GitHub Actions will build and deploy automatically
   - Check the **Actions** tab for progress
   - Deployment typically takes 1-2 minutes

3. **Access your site**
   ```
   https://azure.github.io/azure-skilling-challenges-2025/
   ```

### Custom Domain (Optional)
To use a custom domain (e.g., `skilling.azure.com`):
1. Add `CNAME` file with your domain
2. Configure DNS with your domain provider
3. Update GitHub Pages settings

---

## 🎨 Design System

### Colors
```css
--color-azure-blue: #0078d4    /* Primary brand color */
--color-purple: #5c2d91        /* Secondary brand color */
--color-orange: #d83b01        /* Accent */
--color-green: #107c10         /* Success */
--color-gray: #323130          /* Text */
--color-gray-light: #605e5c    /* Secondary text */
```

### Typography
```css
--font-primary: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif
--font-size-h1: 48px
--font-size-h2: 36px
--font-size-h3: 24px
```

### Spacing
```css
--spacing-xs: 8px
--spacing-sm: 16px
--spacing-md: 24px
--spacing-lg: 32px
--spacing-xl: 48px
--spacing-xxl: 64px
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Issues
- Use GitHub Issues to report bugs or suggest features
- Provide clear descriptions and steps to reproduce
- Include screenshots for visual issues

### Pull Requests
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly (all devices, browsers, accessibility)
5. Commit with clear messages (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Standards
- **HTML:** Semantic, accessible markup with ARIA labels
- **CSS:** BEM-like naming, mobile-first, CSS custom properties
- **JavaScript:** ES6+, clear comments, no jQuery
- **Accessibility:** WCAG 2.1 AA compliance required
- **Performance:** Keep bundle size small, optimize images

---

## 📊 Performance Targets

- **Page Load:** < 2 seconds (3G connection)
- **Bundle Size:** < 100KB total (HTML + CSS + JS)
- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **Mobile Friendly:** 100% responsive
- **Browser Support:** Last 2 versions of Chrome, Firefox, Safari, Edge

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Useful Links

### Microsoft Learn
- [Microsoft Learn](https://learn.microsoft.com)
- [Azure Certifications](https://learn.microsoft.com/en-us/certifications/)
- [Microsoft Ignite](https://ignite.microsoft.com/)

### Azure Resources
- [Azure Documentation](https://docs.microsoft.com/azure/)
- [Azure Blog](https://azure.microsoft.com/blog/)
- [Azure Community](https://azure.microsoft.com/community/)

### GitHub
- [Azure on GitHub](https://github.com/Azure)
- [Microsoft on GitHub](https://github.com/Microsoft)

### Social
- [Azure on Twitter](https://twitter.com/Azure)
- [Azure on LinkedIn](https://linkedin.com/showcase/microsoft-azure)

---

## 📞 Support

### For Challenge/Certification Questions:
- Visit [Microsoft Learn Support](https://learn.microsoft.com/support/)
- Check [Microsoft Q&A](https://learn.microsoft.com/answers/)

### For Website Issues:
- Open a [GitHub Issue](https://github.com/Azure/azure-skilling-challenges-2025/issues)
- Contact the repository maintainers

---

## 🙏 Acknowledgments

- **Microsoft Design System** for Fluent design guidelines
- **Microsoft Ignite Team** for challenge content and coordination
- **Azure Community** for feedback and support
- **Contributors** who help improve this resource

---

<div align="center">

**Built with ❤️ by the Azure Team**

⭐ Star this repo if you find it helpful!

[View Live Site](https://azure.github.io/azure-skilling-challenges-2025/) • [Report Bug](https://github.com/Azure/azure-skilling-challenges-2025/issues) • [Request Feature](https://github.com/Azure/azure-skilling-challenges-2025/issues)

</div>
