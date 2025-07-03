# Arthur Street Kitchen + Bar - Elegant Restaurant Website

A sophisticated, modern restaurant website featuring elegant typography, smooth animations, and premium visual design inspired by high-end dining establishments.

## Features

### Current Features
- **Premium Typography**: Elegant font combinations (Cormorant Garamond + Montserrat + Dancing Script)
- **Video Hero Background**: Cinematic video background with elegant overlay and fallback image
- **Smooth Scroll Navigation**: Custom eased scrolling with 1200ms duration for seamless transitions
- **Interactive Menu System**: Dynamic menu with smooth category switching and hover effects
- **Booking System**: Professional reservation form with confirmation modal
- **High-Quality Imagery**: Curated food photography from Unsplash for visual appeal
- **Responsive Design**: Mobile-first approach with elegant breakpoints
- **Modern Animations**: Sophisticated CSS animations with cubic-bezier easing

### Technical Stack
- **HTML5**: Semantic markup with accessibility and SEO optimization
- **CSS3**: Advanced styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Modern interactive functionality and optimized 3D scene management
- **Three.js**: Professional 3D food graphics with performance optimization
- **Font Awesome**: Curated icon library for restaurant context
- **Google Fonts**: Premium typography pairing (Playfair Display + Inter)

### Design Philosophy
- **Sophistication**: Inspired by high-end restaurant design templates
- **Elegance**: Cream and gold color palette with premium typography
- **Smooth Interactions**: Custom eased animations and transitions
- **Visual Hierarchy**: Clear content structure with elegant spacing
- **Premium Feel**: Every element designed to convey quality and refinement

## File Structure
```
Restaurant Website Overhaul/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # Main stylesheet
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── 3d-scene.js        # 3D scene management
└── README.md              # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in a modern web browser
2. **Local Development**: Use a local server for best performance:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```
3. **Access**: Navigate to `http://localhost:8000`

## Browser Compatibility

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **WebGL Support**: Required for 3D graphics (graceful fallback included)
- **Mobile**: Fully responsive design for all screen sizes

## Customization

### Colors
The website uses CSS custom properties for easy theming:
```css
:root {
    --primary-color: #d4af37;    /* Gold */
    --secondary-color: #2c1810;  /* Dark Brown */
    --accent-color: #f4f4f4;     /* Light Gray */
}
```

### Menu Items
Edit the `menuData` object in `js/main.js` to update menu items:
```javascript
const menuData = {
    appetizers: [
        {
            name: "Item Name",
            description: "Item description",
            price: "$X.XX"
        }
    ]
};
```

## Future Enhancements

### Phase 2 Features
- [ ] Real online ordering system integration
- [ ] Customer reviews and testimonials
- [ ] Photo gallery with restaurant images
- [ ] Event booking system
- [ ] Newsletter signup
- [ ] Social media integration

### Phase 3 Features
- [ ] Table reservation system
- [ ] Loyalty program integration
- [ ] Multi-language support
- [ ] Advanced 3D food models
- [ ] Virtual restaurant tour

## Performance

- **Optimized 3D Graphics**: Efficient Three.js implementation with performance monitoring
- **Lazy Loading**: Images and heavy content loaded as needed
- **Minification Ready**: Code structure prepared for production minification
- **SEO Friendly**: Semantic HTML and meta tags included

## Contact Information

**Arthur Street Kitchen + Bar**
- Address: 32 Arthur Street S., Elmira, Ontario
- Phone: 548-889-3433
- Instagram: @arthur_street_kitchen_bar

## Development Notes

- The 3D scene automatically detects WebGL support and provides fallbacks
- All animations are optimized for 60fps performance
- The design system is modular and easily extensible
- Mobile navigation includes hamburger menu with smooth transitions

---

*This website represents the MVP (Minimum Viable Product) phase of the Arthur Street Kitchen + Bar redesign project.*
