// Arthur Street Kitchen + Bar - Modern Restaurant Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initMenuSystem();
    initBookingForm();
    initScrollEffects();
    initAnimations();
    initVideoBackground();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });

    // Enhanced smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 100;
                    
                    // Custom smooth scroll with easing
                    smoothScrollTo(offsetTop, 1200);
                }
            }
        });
    });

    // Enhanced navbar background on scroll
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

// Menu system functionality
function initMenuSystem() {
    const menuCategories = document.querySelectorAll('.menu-category');
    const menuItemsContainer = document.getElementById('menu-items');

    // Enhanced menu data with images
    const menuData = {
        appetizers: [
            {
                name: "Legendary Wings",
                description: "Our award-winning wings tossed in your choice of signature sauce: Buffalo, BBQ, Honey Garlic, or Spicy Thai. Served with celery and blue cheese.",
                price: "$14.99",
                image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            },
            {
                name: "Ultimate Loaded Nachos",
                description: "House-made tortilla chips loaded with melted cheese, jalapeños, tomatoes, green onions, sour cream, and guacamole.",
                price: "$16.99",
                image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            },
            {
                name: "Golden Calamari",
                description: "Tender squid rings hand-breaded and fried to golden perfection. Served with zesty marinara and lemon aioli.",
                price: "$13.99",
                image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            },
            {
                name: "Artisan Bruschetta",
                description: "Grilled artisan bread topped with fresh tomatoes, basil, garlic, and balsamic glaze.",
                price: "$11.99",
                image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            }
        ],
        mains: [
            {
                name: "The Arthur Street Burger",
                description: "8oz hand-formed beef patty, aged cheddar, crispy bacon, lettuce, tomato, red onion, and our signature sauce on a brioche bun. Served with seasoned fries.",
                price: "$18.99",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            },
            {
                name: "Pan-Seared Salmon",
                description: "Fresh Atlantic salmon with lemon herb butter, served with garlic mashed potatoes and seasonal vegetables.",
                price: "$24.99",
                image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            },
            {
                name: "Prime Ribeye Steak",
                description: "12oz AAA ribeye grilled to your liking, topped with herb butter. Served with loaded baked potato and grilled asparagus.",
                price: "$32.99",
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            },
            {
                name: "Chicken Parmesan",
                description: "Breaded chicken breast topped with marinara sauce and melted mozzarella, served over fettuccine pasta.",
                price: "$21.99",
                image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            }
        ],
        desserts: [
            {
                name: "Chocolate Lava Cake",
                description: "Warm chocolate cake with a molten center, served with vanilla ice cream and berry compote.",
                price: "$8.99",
                image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            },
            {
                name: "Classic Cheesecake",
                description: "New York style cheesecake with graham cracker crust and fresh berry topping.",
                price: "$7.99",
                image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            },
            {
                name: "Tiramisu",
                description: "Traditional Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
                price: "$8.99",
                image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            }
        ],
        drinks: [
            {
                name: "Local Craft Beer",
                description: "Rotating selection of Ontario craft beers on tap including IPA, Lager, and Wheat varieties.",
                price: "$7.99",
                image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            },
            {
                name: "House Wine Selection",
                description: "Carefully selected red and white wines by the glass. Ask your server about our wine of the day.",
                price: "$9.99",
                image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            },
            {
                name: "Signature Cocktails",
                description: "Handcrafted cocktails including our famous Arthur Street Mule, Classic Old Fashioned, and seasonal specialties.",
                price: "$13.99",
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            },
            {
                name: "Artisan Coffee",
                description: "Freshly roasted coffee beans, expertly brewed. Available as espresso, cappuccino, or drip coffee.",
                price: "$3.99",
                image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            }
        ]
    };

    // Function to display menu items
    function displayMenuItems(category) {
        const items = menuData[category] || [];
        if (!menuItemsContainer) return;
        
        menuItemsContainer.innerHTML = '';

        items.forEach((item, index) => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
            `;
            menuItemsContainer.appendChild(menuItem);
        });

        // Add animation to menu items
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Menu category click handlers
    menuCategories.forEach(category => {
        category.addEventListener('click', () => {
            // Remove active class from all categories
            menuCategories.forEach(cat => cat.classList.remove('active'));
            // Add active class to clicked category
            category.classList.add('active');
            // Display items for selected category
            const categoryName = category.getAttribute('data-category');
            displayMenuItems(categoryName);
        });
    });

    // Display initial menu items (appetizers)
    displayMenuItems('appetizers');
}

// Booking form functionality
function initBookingForm() {
    const bookForm = document.getElementById('book-form');
    
    if (bookForm) {
        bookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(bookForm);
            const bookingData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                guests: formData.get('guests'),
                date: formData.get('date'),
                time: formData.get('time'),
                message: formData.get('message')
            };
            
            // Simulate booking submission
            showBookingConfirmation(bookingData);
        });
    }
}

function showBookingConfirmation(data) {
    // Create confirmation modal
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.innerHTML = `
        <div class="booking-modal-content">
            <div class="booking-confirmation">
                <i class="fas fa-check-circle" style="color: var(--primary-color); font-size: 3rem; margin-bottom: 1rem;"></i>
                <h3>Booking Request Received!</h3>
                <p>Thank you, ${data.name}! We've received your reservation request for ${data.guests} ${data.guests === '1' ? 'person' : 'people'} on ${data.date} at ${data.time}.</p>
                <p>We'll contact you at ${data.phone} within 24 hours to confirm your reservation.</p>
                <button class="btn btn-primary" onclick="closeBookingModal()">Close</button>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    modal.querySelector('.booking-modal-content').style.cssText = `
        background: var(--text-light);
        padding: 2rem;
        border-radius: var(--border-radius);
        text-align: center;
        max-width: 500px;
        margin: 0 1rem;
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Auto close after 10 seconds
    setTimeout(() => {
        closeBookingModal();
    }, 10000);
}

function closeBookingModal() {
    const modal = document.querySelector('.booking-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
        // Reset form
        const bookForm = document.getElementById('book-form');
        if (bookForm) bookForm.reset();
    }
}

// Scroll effects and animations
function initScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-feature, .specialty-card, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        observer.observe(el);
    });
}

// Video background initialization
function initVideoBackground() {
    const video = document.querySelector('.hero-video video');
    const fallbackImage = document.querySelector('.hero-image-fallback');
    
    if (video && fallbackImage) {
        video.addEventListener('loadeddata', () => {
            video.style.opacity = '0.8';
            fallbackImage.style.opacity = '0';
        });
        
        video.addEventListener('error', () => {
            video.style.display = 'none';
            fallbackImage.style.opacity = '1';
        });
        
        // Ensure video plays on mobile
        video.addEventListener('canplay', () => {
            video.play().catch(e => {
                console.log('Video autoplay failed:', e);
                fallbackImage.style.opacity = '1';
            });
        });
    }
}

// Additional animations and interactions
function initAnimations() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroVideo = document.querySelector('.hero-video');
        if (heroVideo) {
            heroVideo.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Hover effects for specialty cards
    const specialtyCards = document.querySelectorAll('.specialty-card');
    specialtyCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Button click animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Smooth reveal animations for sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced smooth scroll function with easing
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// Add ripple effect CSS dynamically
const rippleCSS = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .section-visible {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Add the CSS to the document
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
const throttledScrollHandler = debounce(() => {
    // Handle scroll events here if needed
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Console welcome message
console.log('%c🍽️ Arthur Street Kitchen + Bar', 'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'color: #1a1a1a; font-size: 14px;');

// Make closeBookingModal globally available
window.closeBookingModal = closeBookingModal;