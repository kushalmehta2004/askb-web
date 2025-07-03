// Interactive Enhancements JavaScript
// Arthur Street Kitchen + Bar - Enhanced Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    initParallaxEffects();
    initGlassMorphismEffects();
    initMicroAnimations();
    initScrollRevealAnimations();
    // initInteractiveMenuCategories(); // Disabled to prevent conflict with menu.js
    // initImageGallery(); // Removed gallery
    initEnhancedHoverEffects();
    initLoadingAnimations();
    initScrollProgressIndicator();
    initParticleEffects();
    initEnhancedNavigation();
});

// =====================================================
// PARALLAX EFFECTS
// =====================================================

function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-layer[data-speed]');
    
    if (parallaxElements.length === 0) return;
    
    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    // Disable parallax on mobile and tablets
    if (window.innerWidth <= 768) {
        return;
    }
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = parseFloat(element.dataset.speed) || 0.5;
            
            // Only apply parallax if element is visible
            if (rect.bottom >= 0 && rect.top <= windowHeight) {
                const yPos = -(scrollTop * speed);
                // Use a simple 2D transform to avoid alignment issues
                // Skip parallax for menu hero content to prevent misalignment
                if (element.classList.contains('menu-hero-content')) {
                    return;
                }
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    }
    
    // Use throttled scroll for better performance
    let ticking = false;
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    function resetTick() {
        ticking = false;
    }
    
    window.addEventListener('scroll', requestTick);
    requestAnimationFrame(resetTick);
}

// =====================================================
// GLASS-MORPHISM EFFECTS
// =====================================================

function initGlassMorphismEffects() {
    // Add glass effect to navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.add('glass');
    }
    
    // Add glass effect to menu items
    const menuItems = document.querySelectorAll('.menu-item-card');
    menuItems.forEach(item => {
        item.classList.add('glass');
    });
    
    // Dynamic glass intensity based on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const maxScroll = 300;
        const intensity = Math.min(scrollTop / maxScroll, 1);
        
        if (navbar) {
            navbar.style.setProperty('--glass-intensity', intensity);
        }
    });
}

// =====================================================
// MICRO-ANIMATIONS
// =====================================================

function initMicroAnimations() {
    // Enhance all buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.classList.add('micro-animated');
    });
    
    // Enhance menu navigation buttons
    const menuNavBtns = document.querySelectorAll('.menu-nav-btn');
    menuNavBtns.forEach(btn => {
        btn.classList.add('enhanced');
    });
    
    // Add icon animations
    const icons = document.querySelectorAll('.menu-nav-btn i, .feature-icon');
    icons.forEach(icon => {
        icon.classList.add('icon-animated');
    });
    
    // Add bounce effect to scroll indicator
    const scrollIndicator = document.querySelector('.hero-scroll i');
    if (scrollIndicator) {
        scrollIndicator.classList.add('icon-bounce');
    }
}

// =====================================================
// SCROLL REVEAL ANIMATIONS
// =====================================================

function initScrollRevealAnimations() {
    const revealElements = document.querySelectorAll('.section-header, .menu-item-card, .about-feature');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
                
                // Add staggered animation for multiple items
                if (entry.target.parentElement.classList.contains('menu-items-grid')) {
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.setProperty('--animation-order', index);
                    entry.target.classList.add('stagger-animation');
                }
            }
        });
    }, observerOptions);
    
    revealElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// =====================================================
// INTERACTIVE MENU CATEGORIES - Fixed Scrolling
// =====================================================

function initInteractiveMenuCategories() {
    const menuNavButtons = document.querySelectorAll('.menu-nav-btn');
    const menuSections = document.querySelectorAll('.menu-category-section');
    
    menuNavButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetCategory = button.getAttribute('data-category');
            const targetSection = document.getElementById(targetCategory);
            
            if (!targetSection) return;
            
            // Store current scroll position
            const currentScrollY = window.pageYOffset;
            
            // Remove active class from all buttons
            menuNavButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Hide current section with animation
            const currentSection = document.querySelector('.menu-category-section.active');
            if (currentSection && currentSection !== targetSection) {
                currentSection.classList.add('slide-out');
                
                setTimeout(() => {
                    currentSection.classList.remove('active', 'slide-out');
                    
                    // Show new section
                    targetSection.classList.add('active', 'slide-in');
                    
                    // Maintain scroll position
                    window.scrollTo(0, currentScrollY);
                    
                    // Remove slide-in class after animation
                    setTimeout(() => {
                        targetSection.classList.remove('slide-in');
                    }, 800);
                    
                    // Animate menu items
                    animateMenuItems(targetSection);
                }, 300);
            } else {
                // First load
                targetSection.classList.add('active', 'slide-in');
                setTimeout(() => {
                    targetSection.classList.remove('slide-in');
                }, 800);
                animateMenuItems(targetSection);
            }
        });
    });
}

function animateMenuItems(section) {
    const menuItems = section.querySelectorAll('.menu-item-card');
    
    menuItems.forEach((item, index) => {
        item.classList.add('enhanced');
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// =====================================================
// IMAGE GALLERY - REMOVED
// =====================================================

// Gallery functionality has been removed to clean up the page

// =====================================================
// ENHANCED HOVER EFFECTS
// =====================================================

function initEnhancedHoverEffects() {
    // Add magnetic effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// =====================================================
// LOADING ANIMATIONS
// =====================================================

function initLoadingAnimations() {
    // Add loading state to images
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
    
    // Add smooth page transitions
    window.addEventListener('beforeunload', () => {
        document.body.classList.add('page-transition');
    });
}

// =====================================================
// SCROLL PROGRESS INDICATOR
// =====================================================

function initScrollProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: rgba(201, 169, 110, 0.2);
        z-index: 9999;
        pointer-events: none;
    `;
    
    const progressBarFill = progressBar.querySelector('.scroll-progress-bar');
    progressBarFill.style.cssText = `
        height: 100%;
        background: linear-gradient(90deg, var(--primary-color), #d4b876);
        width: 0%;
        transition: width 0.3s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBarFill.style.width = scrollPercent + '%';
    });
}

// =====================================================
// PARTICLE EFFECTS
// =====================================================

function initParticleEffects() {
    // Add subtle particle effects to hero section
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(201, 169, 110, 0.3);
            border-radius: 50%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        particleContainer.appendChild(particle);
    }
    
    hero.appendChild(particleContainer);
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
    `;
    document.head.appendChild(style);
}

// =====================================================
// ENHANCED NAVIGATION
// =====================================================

function initEnhancedNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
            link.style.textShadow = '0 2px 4px rgba(201, 169, 110, 0.3)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
            link.style.textShadow = 'none';
        });
    });
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

// Throttle function for better performance
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Debounce function
function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Add smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance optimization: Reduce animations on low-end devices
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
    document.documentElement.style.setProperty('--transition-duration', '0.2s');
}

// Add lazy loading for images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));