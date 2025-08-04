# Replit Configuration

## Overview

This is a static portfolio website for a freelance automation specialist who works at Rappi and has created 16 Chrome extensions. The portfolio showcases 5 main extensions with video demonstration spaces and 11 additional extensions in a simplified 2-column layout. The design uses psychological principles to make services easy to understand for non-technical clients, emphasizing real time savings (90% reduction) and practical automation solutions without mentioning the current employer for legal reasons.

## User Preferences

- **Communication style:** Simple, everyday language
- **Font:** Changed from Inter to Poppins for more professional appearance
- **Time reduction metric:** 90% (not 85%)
- **Removed:** LinkedIn contact method, support technical references
- **Legal concerns:** No mention of current employer (Rappi), avoid naming Uber Eats/PedidosYa directly
- **Layout preference:** Psychological design that's easy for clients to understand services
- **Content updates:** Changed "copiar y pegar manual" to "automatizo procesos operativos"
- **Social media:** Removed LinkedIn, Twitter, GitHub icons from footer and contact
- **Extension focus:** Authentic 16 extensions, Calculator moved to mini-cards, added Replicador Masivo
- **Terminology:** RPA changed to "automatización simulación click", removed blog references
- **Service focus:** Added 50/50 approach - Extensions + manual data processing services
- **ROI removed:** Eliminated "Estimación de ROI" from consultation offer
- **Versatile approach:** Emphasized both tool creation AND large-scale data handling capabilities

## System Architecture

### Frontend Architecture
- **Static HTML/CSS/JavaScript**: Single-page application built with vanilla web technologies
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox layouts
- **Animation Framework**: Custom CSS animations for background gradients and floating particles
- **Navigation System**: Smooth scrolling with fixed navigation bar that adapts on scroll
- **Component Structure**: Modular sections (hero, services, portfolio, about, contact) for easy maintenance

### Design Patterns
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with interactive features
- **Mobile-First Responsive**: Breakpoints designed for mobile devices first, then scaled up
- **Performance Optimization**: Preloaded Google Fonts and Font Awesome icons via CDN
- **Semantic HTML**: Proper heading hierarchy and accessibility considerations

### User Interface Features
- **Dynamic Navbar**: Background opacity changes on scroll, mobile hamburger menu
- **Portfolio Filtering**: JavaScript-powered filtering system for project categories
- **Contact Form**: Client-side form handling with validation
- **Animated Elements**: CSS keyframe animations for visual appeal
- **Particle System**: Dynamic floating particles for enhanced visual experience

### Content Strategy
- **Authentic Focus**: Based on 16 real Chrome extensions actually developed
- **5 Main Extensions**: Showcased with video/GIF demonstration spaces
- **11 Additional Extensions**: Displayed in 2-column mini-card layout
- **Clear Value Proposition**: "De horas de trabajo manual a minutos automatizados"
- **Simple Language**: Avoiding technical jargon, explaining benefits in everyday terms
- **Contact-Driven**: Videollamada replaced LinkedIn, emphasis on free consultation

## External Dependencies

### Content Delivery Networks (CDNs)
- **Google Fonts**: Poppins font family for professional typography
- **Font Awesome 6.4.0**: Icon library for UI elements and visual enhancement

### Featured Extensions (Top 5)
1. **Automatizador de Digitación** - From 2 hours to 5 minutes (most popular)
2. **Convertor Web → Excel/Sheets** - Web scraping to organized spreadsheets
3. **Analizador Google Drive** - Image quality analysis and direct download
4. **Descargador Inteligente de Imágenes** - Smart bulk download with naming
5. **Replicador Masivo de Valores** - Replaces manual one-by-one replication (replaced calculator)

### Additional Extensions (11 mini-cards) - Updated with Real Names from Image
- Calculadora Instantánea por Selección, Generador de Enlaces por ID, Apertura Masiva de Registros
- Navegación Inteligente entre Páginas, Consulta de Jerarquías Automática, Borrado Masivo Inteligente
- Distribución Automática de Datos, Conversión de Formatos Múltiples, Control Masivo de Elementos
- Procesador de Datos Avanzado, Automatizador de Flujos Complejos
- Each with specific micro-descriptions explaining functionality based on real operations

### Browser APIs
- **Scroll API**: For navbar behavior and smooth scrolling functionality
- **DOM Manipulation**: Vanilla JavaScript for interactive elements
- **CSS3 Animations**: For background effects and visual transitions

### Development Considerations
- **Static Hosting Ready**: No server-side dependencies, deployable to any static host
- **SEO Optimized**: Meta tags, semantic structure, and proper heading hierarchy
- **Cross-Browser Compatible**: Standard web technologies for maximum compatibility