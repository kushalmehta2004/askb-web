// Arthur Street Kitchen + Bar - Modern Restaurant Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initMenuSystem();
    initBookingForm();
    initScrollEffects();
    initAnimations();
    initVideoBackground();
    initDailySpecials();
    initTestimonials();
    initParallaxEffects();
    initProgressiveImageLoading();
    initIntersectionAnimations();
    initWinePairingFeature();
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

    // Simple navbar behavior - always visible, just gets thinner on scroll
    window.addEventListener('scroll', () => {
        if (navbar) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add/remove scrolled class for thinner navbar
            if (scrollTop > 50) {
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
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5NXVDdK0-gUKxyY7uOdMXYjij0KWMp11kMQ&s"
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
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" />
                </div>
                <div class="menu-item-content">
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <div class="price">${item.price}</div>
                </div>
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

// Daily Specials functionality
function initDailySpecials() {
    const dailySpecials = [
        {
            name: "Monday Madness",
            dish: "BBQ Ribs Platter",
            description: "Fall-off-the-bone ribs with our signature BBQ sauce, coleslaw, and fries",
            price: "$19.99",
            originalPrice: "$24.99",
            image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "Taco Tuesday",
            dish: "Fish Taco Trio",
            description: "Three soft shell tacos with beer-battered fish, cabbage slaw, and chipotle mayo",
            price: "$16.99",
            originalPrice: "$21.99",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "Wing Wednesday",
            dish: "All-You-Can-Eat Wings",
            description: "Unlimited wings with your choice of sauce, served with celery and blue cheese",
            price: "$22.99",
            originalPrice: "$28.99",
            image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "Thirsty Thursday",
            dish: "Steak & Beer Combo",
            description: "8oz sirloin steak with your choice of local craft beer",
            price: "$26.99",
            originalPrice: "$32.99",
            image: "https://images.unsplash.com/photo-1615937691194-97dbd4d3e4c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "Fish Friday",
            dish: "Fish & Chips Special",
            description: "Beer-battered cod with hand-cut fries, mushy peas, and tartar sauce",
            price: "$17.99",
            originalPrice: "$22.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdPaHsGnkFVxaUSI9Z33ml0EKZMkIoSavwA&s"
        },
        {
            name: "Saturday Surf & Turf",
            dish: "Lobster & Steak",
            description: "6oz filet mignon with lobster tail, garlic butter, and seasonal vegetables",
            price: "$39.99",
            originalPrice: "$49.99",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "Sunday Brunch",
            dish: "Ultimate Brunch Platter",
            description: "Eggs benedict, bacon, sausage, hash browns, and fresh fruit",
            price: "$18.99",
            originalPrice: "$23.99",
            image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
    ];

    function displayDailySpecial() {
        const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
        const todaysSpecial = dailySpecials[today];
        const specialContainer = document.getElementById('daily-special');
        
        if (specialContainer && todaysSpecial) {
            specialContainer.innerHTML = `
                <div class="special-content">
                    <div class="special-image">
                        <img src="${todaysSpecial.image}" alt="${todaysSpecial.dish}" loading="lazy" />
                    </div>
                    <div class="special-details">
                        <span class="special-day">${todaysSpecial.name}</span>
                        <h4>${todaysSpecial.dish}</h4>
                        <p>${todaysSpecial.description}</p>
                        <div class="special-pricing">
                            <span class="special-price">${todaysSpecial.price}</span>
                            <span class="original-price">${todaysSpecial.originalPrice}</span>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Display today's special
    displayDailySpecial();
    
    // Update special at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    
    setTimeout(() => {
        displayDailySpecial();
        // Then update every 24 hours
        setInterval(displayDailySpecial, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);
}

// Make closeBookingModal globally available
window.closeBookingModal = closeBookingModal;

// Testimonials Slider
function initTestimonials() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let testimonialInterval;

    function showSlide(index) {
        // Hide all slides
        testimonialItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide
        if (testimonialItems[index]) {
            testimonialItems[index].classList.add('active');
        }
        
        // Activate current dot
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialItems.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialItems.length) % testimonialItems.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        testimonialInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(testimonialInterval);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    // Pause on hover
    const testimonialSlider = document.getElementById('testimonials-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', stopAutoSlide);
        testimonialSlider.addEventListener('mouseleave', startAutoSlide);
    }

    // Initialize
    if (testimonialItems.length > 0) {
        showSlide(0);
        startAutoSlide();
    }
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-background, .testimonials-background, .book-background');
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.bottom >= 0 && rect.top <= window.innerHeight;
            
            if (isVisible) {
                element.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Use requestAnimationFrame for smooth parallax
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', () => {
        requestTick();
        ticking = false;
    });
}

// Progressive Image Loading
function initProgressiveImageLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const placeholder = img.parentElement;
                
                // Add loading placeholder
                placeholder.classList.add('image-placeholder');
                
                // Create new image to preload
                const newImg = new Image();
                newImg.onload = () => {
                    img.src = img.dataset.src;
                    img.classList.add('image-loaded');
                    placeholder.classList.remove('image-placeholder');
                    img.removeAttribute('data-src');
                };
                newImg.src = img.dataset.src;
                
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Intersection Observer Animations
function initIntersectionAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });

    // Add animation classes to elements
    document.querySelectorAll('.chef-content .chef-info').forEach(el => {
        el.classList.add('fade-in-right');
    });
    
    document.querySelectorAll('.chef-content .chef-image').forEach(el => {
        el.classList.add('fade-in-left');
    });
    
    document.querySelectorAll('.award-item').forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.about-feature').forEach((el, index) => {
        el.classList.add('fade-in-up');
        el.style.animationDelay = `${index * 0.2}s`;
    });
}

// Wine Pairing Feature
function initWinePairingFeature() {
    const specialtyCards = document.querySelectorAll('.specialty-card[data-wine-pairing="true"]');
    
    specialtyCards.forEach(card => {
        const winePairing = card.querySelector('.wine-pairing');
        const winePairingHint = card.querySelector('.wine-pairing-hint');
        
        if (winePairing && winePairingHint) {
            // Show wine pairing on hover
            card.addEventListener('mouseenter', () => {
                winePairing.style.maxHeight = winePairing.scrollHeight + 'px';
                winePairingHint.style.opacity = '1';
                winePairingHint.style.transform = 'translateY(0)';
            });
            
            card.addEventListener('mouseleave', () => {
                winePairing.style.maxHeight = '0';
                winePairingHint.style.opacity = '0';
                winePairingHint.style.transform = 'translateY(10px)';
            });
        }
    });
}

// Enhanced Menu Item Interactions
function initEnhancedMenuInteractions() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const price = item.querySelector('.price');
        
        item.addEventListener('mouseenter', () => {
            // Add subtle glow effect to price
            if (price) {
                price.style.textShadow = '0 0 10px rgba(201, 169, 110, 0.5)';
                price.style.transform = 'scale(1.05)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            if (price) {
                price.style.textShadow = 'none';
                price.style.transform = 'scale(1)';
            }
        });
    });
}

// Lightbox Gallery for Images
function initLightboxGallery() {
    const galleryImages = document.querySelectorAll('.about-image-main img, .chef-image img, .specialty-image img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            createLightbox(img.src, img.alt);
        });
        
        // Add cursor pointer to indicate clickable
        img.style.cursor = 'pointer';
    });
}

function createLightbox(imageSrc, imageAlt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${imageSrc}" alt="${imageAlt}" />
            <button class="lightbox-close">&times;</button>
        </div>
    `;
    
    // Add lightbox styles
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const content = lightbox.querySelector('.lightbox-content');
    content.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;
    
    const img = lightbox.querySelector('img');
    img.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 8px;
    `;
    
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Fade in
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
    
    // Close handlers
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', handleEscapeKey);
    
    function closeLightbox() {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(lightbox);
            document.body.style.overflow = 'auto';
        }, 300);
        document.removeEventListener('keydown', handleEscapeKey);
    }
    
    function handleEscapeKey(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    }
}

// Loading States for Dynamic Content
function showLoadingState(element) {
    const loader = document.createElement('div');
    loader.className = 'loading-spinner';
    loader.innerHTML = `
        <div class="spinner"></div>
        <p>Loading...</p>
    `;
    
    loader.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        color: var(--text-muted);
    `;
    
    const spinner = loader.querySelector('.spinner');
    spinner.style.cssText = `
        width: 40px;
        height: 40px;
        border: 3px solid rgba(201, 169, 110, 0.3);
        border-top: 3px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    `;
    
    // Add spinner animation
    const spinnerCSS = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    if (!document.querySelector('#spinner-styles')) {
        const style = document.createElement('style');
        style.id = 'spinner-styles';
        style.textContent = spinnerCSS;
        document.head.appendChild(style);
    }
    
    element.innerHTML = '';
    element.appendChild(loader);
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    // Add a small delay to ensure all elements are rendered
    setTimeout(() => {
        initEnhancedMenuInteractions();
        initLightboxGallery();
    }, 100);
});

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
            console.log(`Page load time: ${entry.loadEventEnd - entry.loadEventStart}ms`);
        }
    }
});

if ('PerformanceObserver' in window) {
    performanceObserver.observe({ entryTypes: ['navigation'] });
}