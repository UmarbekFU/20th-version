# Umarbek's Personal Website

A scalable, modern personal website built with Next.js 14, TypeScript, and Tailwind CSS. Designed with a minimalist approach focused on content and readability.

## 🏗️ Architecture Overview

### Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Inter (sans-serif), JetBrains Mono (monospace)

### Project Structure
```
/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage component
├── components/             # Reusable UI components
│   └── Navigation.tsx     # Main navigation component
├── public/                 # Static assets
├── styles/                 # Additional styling (if needed)
├── types/                  # TypeScript type definitions
├── lib/                    # Utility functions and helpers
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Design System

### Color Palette (Dark-First)
- **Background**: `#0f1115` (Deep dark blue-gray)
- **Text Primary**: `#e7e7e7` (Light gray)
- **Text Muted**: `#9ca3af` (Medium gray)
- **Accent**: `#00e0a1` (Bright teal)
- **Accent Alt**: `#c9f27d` (Lime green)
- **Hairline**: `rgba(231, 231, 231, 0.12)` (Subtle borders)
- **Glass Fill**: `rgba(255, 255, 255, 0.08)` (Glass effect)

### Typography
- **Primary Font**: Inter (300, 400, 500, 600, 700)
- **Monospace**: JetBrains Mono (400, 500, 600)
- **Responsive**: Scales from mobile to desktop seamlessly

### Design Principles
- **Minimalist**: Clean, uncluttered interface
- **Content-First**: Typography and spacing optimized for reading
- **Accessible**: High contrast, keyboard navigation, screen reader friendly
- **Responsive**: Mobile-first design with progressive enhancement

## 🧭 Navigation Structure

### Main Navigation (Left Sidebar)
- **Essays** → Long-form thoughts and ideas
- **Projects** → Things built and broken
- **Notes** → Book notes and thinking
- **Gallery** → Photography and visual content
- **Atomic Ideas** → Half-formed thoughts
- **Scrapbook** → Digital attic of thoughts
- **Uses** → Tools and setup
- **List** → Media consumption and collections
- **Now** → Current focus and activities
- **About** → Personal manifesto

### Social Links (Right Side)
- GitHub
- Email
- LinkedIn
- X (Twitter)

### Quick Links Grid
- Organized categories for easy access
- Hover effects and visual feedback
- Responsive grid layout

## 🚀 Features

### Core Functionality
- **Responsive Design**: Works on all device sizes
- **Dark Mode**: Optimized for dark themes
- **Keyboard Navigation**: Power-user shortcuts (⌘K for search, ⌘J for nav)
- **Search**: Global search functionality
- **Accessibility**: ARIA labels, keyboard support, screen reader friendly

### Performance
- **LCP Optimization**: Hero section optimized for Largest Contentful Paint
- **Image Optimization**: Next.js Image component integration ready
- **Code Splitting**: Automatic route-based code splitting
- **SEO Ready**: Meta tags, Open Graph, structured data ready

### Developer Experience
- **TypeScript**: Full type safety
- **ESLint**: Code quality and consistency
- **Hot Reload**: Fast development iteration
- **Component Library**: Reusable, maintainable components

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Stacked layout, mobile menu
- **Tablet**: `768px - 1024px` - Side navigation hidden, mobile-friendly
- **Desktop**: `> 1024px` - Full sidebar navigation, optimal layout

## 🔧 Development

### Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Available Scripts
- `npm run dev` - Development server with hot reload
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - ESLint code quality check

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Next.js
3. Automatic deployments on push to main branch

### Other Platforms
- **Netlify**: Compatible with Next.js static export
- **AWS Amplify**: Full-stack deployment support
- **Docker**: Containerized deployment ready

## 📈 Scalability Features

### Architecture Benefits
- **Component-Based**: Easy to add new pages and features
- **Route-Based**: Automatic code splitting and lazy loading
- **Type-Safe**: TypeScript prevents runtime errors
- **Modular CSS**: Tailwind utility classes for consistent styling
- **Performance**: Built-in optimizations for large-scale sites

### Future Expansion
- **Blog System**: Markdown/MDX support ready
- **CMS Integration**: Headless CMS compatibility
- **Analytics**: Performance and user behavior tracking
- **Internationalization**: Multi-language support ready
- **PWA**: Progressive Web App capabilities

## 🎯 Content Strategy

### Page Types
1. **Static Pages**: About, Uses, Now
2. **Dynamic Lists**: Projects, Essays, Notes
3. **Collection Pages**: Gallery, Scrapbook, Lists
4. **Individual Content**: Blog posts, project details

### Content Management
- **Markdown Support**: Ready for MDX integration
- **Image Optimization**: Automatic optimization and lazy loading
- **SEO**: Meta tags, structured data, Open Graph
- **Performance**: Optimized for Core Web Vitals

## 🔒 Security & Privacy

- **HTTPS Only**: Secure connections required
- **Content Security Policy**: XSS protection
- **Privacy-First**: Minimal tracking, GDPR compliant
- **Accessibility**: WCAG 2.1 AA compliance

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome. Please ensure any changes maintain the minimalist design philosophy and accessibility standards.

## 📄 License

MIT License - feel free to use this structure for your own projects.

---

Built with ❤️ by Umarbek using modern web technologies.

