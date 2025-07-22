# Portfolio Website

A modern, responsive portfolio website showcasing my software development projects and skills. Built with React, TypeScript, and Tailwind CSS.

## Live Demo
[View Live Site](https://param-10.github.io/Portfolio-Website/)

## Technology Stack
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Vite for build tooling

## Features
- **Fully Mobile Responsive**: Optimized for all screen sizes with mobile-first design
- **Universal Mobile Compatibility**: Comprehensive mobile optimization across all components
- Dark and light theme support with system preference detection
- Smooth, modern animations and transitions (Framer Motion)
- Animated project sorting and "See More" functionality
- Hero-style + dashboard contact section with glass-morphism and contact stats
- Unified skills view with category badges and icons
- Contact form with email integration
- SEO optimized with proper meta tags
- Fast loading with optimized assets
- Scroll offset fix for anchor links (navbar and buttons scroll to the same position)
- Mobile-optimized touch targets and interactions
- Performance optimizations for mobile devices

## Local Development

Clone the repository:
```bash
git clone https://github.com/Param-10/Portfolio-Website.git
cd Portfolio-Website
```

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build and Deploy

Create production build:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## Project Structure
```
src/
├── components/          # React components
├── data.ts             # Portfolio data and content
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## Mobile Optimization Features
This portfolio is fully optimized for mobile devices with:

### Responsive Layout
- Mobile-first design approach with breakpoints at 768px and 375px
- Adaptive grid layouts that stack properly on smaller screens
- Optimized spacing and padding for different screen sizes

### Mobile-Specific Optimizations
- **Experience Section**: Horizontal scrolling tabs with abbreviated company names on mobile
- **Projects Section**: Single-column layout with smaller cards and optimized text sizes
- **Skills Section**: Reduced padding and smaller icons/text for mobile viewing
- **Contact Section**: Stacked layout with optimized form and contact cards
- **About Section**: Profile image positioned above text on mobile
- **Home Section**: Breaking long headlines into multiple lines for readability

### Performance & UX
- Touch-optimized buttons with 44px minimum touch targets
- Reduced animation complexity on smaller screens
- Optimized text sizes for mobile readability
- Enhanced scrolling performance with mobile-specific CSS

## Mobile View Testing
- Use browser DevTools (toggle device toolbar) to preview mobile layouts
- Test on actual devices for best experience
- Or open your local dev server on your phone using your computer's IP address

## Contact
Paramveer Singh Bhele
- Email: bheleparamveer@gmail.com
- LinkedIn: [Paramveer Singh Bhele](https://www.linkedin.com/in/paramveer-singh-bhele/)
- GitHub: [@Param-10](https://github.com/Param-10)

## License
MIT License - see [LICENSE](LICENSE) file for details.

