// Menu Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initMenuNavigation();
    initScrollToTop();
    initMenuAnimations();
});

// Menu Navigation Functionality
function initMenuNavigation() {
    const menuNavButtons = document.querySelectorAll('.menu-nav-btn');
    const menuSections = document.querySelectorAll('.menu-category-section');

    menuNavButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetCategory = button.getAttribute('data-category');
            
            // Remove active class from all buttons
            menuNavButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Hide all menu sections and reset animations
            menuSections.forEach(section => {
                section.classList.remove('active');
                // Reset animation state for all items
                const items = section.querySelectorAll('.menu-item-card');
                items.forEach(item => {
                    item.classList.remove('animated');
                    item.style.opacity = '';
                    item.style.transform = '';
                    item.style.transition = '';
                });
            });
            
            // Show target section with animation
            const targetSection = document.getElementById(targetCategory);
            if (targetSection) {
                // Add loading state
                targetSection.classList.add('loading');
                
                // Make sure all menu items in the section are visible
                const menuItems = targetSection.querySelectorAll('.menu-item-card');
                menuItems.forEach(item => {
                    item.style.display = '';
                });
                
                setTimeout(() => {
                    targetSection.classList.remove('loading');
                    targetSection.classList.add('active');
                    
                    // Don't scroll - just activate the section to prevent jumping
                    // targetSection.scrollIntoView({
                    //     behavior: 'smooth',
                    //     block: 'start'
                    // });
                    
                    // Animate menu items only once
                    animateMenuItems(targetSection);
                }, 100);
            }
        });
    });
}

// Animate menu items when section becomes active
function animateMenuItems(section) {
    const menuItems = section.querySelectorAll('.menu-item-card');
    
    menuItems.forEach((item, index) => {
        // Check if item is already animated to prevent double animation
        if (item.classList.contains('animated')) {
            return;
        }
        
        // Make sure the item is displayed before animating
        item.style.display = '';
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.classList.add('animated'); // Mark as animated
        }, index * 100);
    });
}

// Scroll to top functionality
function initScrollToTop() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    
    // Add styles
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: var(--text-dark);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: var(--shadow);
        transition: var(--transition);
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'translateY(-3px)';
        scrollButton.style.boxShadow = 'var(--shadow-hover)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'translateY(0)';
        scrollButton.style.boxShadow = 'var(--shadow)';
    });
}

// Initialize menu animations
function initMenuAnimations() {
    // Intersection Observer for menu items
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

    // Only animate items in the active section initially
    const activeSection = document.querySelector('.menu-category-section.active');
    if (activeSection) {
        const menuItems = activeSection.querySelectorAll('.menu-item-card');
        menuItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease';
            
            // Stagger the animations
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
            
            observer.observe(item);
        });
    }
}

// Mobile menu navigation enhancement
function initMobileMenuEnhancements() {
    const menuNavButtons = document.querySelectorAll('.menu-nav-btn');
    
    // Add touch feedback for mobile
    menuNavButtons.forEach(button => {
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', () => {
            button.style.transform = 'scale(1)';
        });
    });
}

// Initialize mobile enhancements
if ('ontouchstart' in window) {
    initMobileMenuEnhancements();
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeButton = document.querySelector('.menu-nav-btn.active');
        const allButtons = Array.from(document.querySelectorAll('.menu-nav-btn'));
        const currentIndex = allButtons.indexOf(activeButton);
        
        let nextIndex;
        if (e.key === 'ArrowLeft') {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : allButtons.length - 1;
        } else {
            nextIndex = currentIndex < allButtons.length - 1 ? currentIndex + 1 : 0;
        }
        
        allButtons[nextIndex].click();
        allButtons[nextIndex].focus();
    }
});

// Add loading states for better UX
function showLoadingState(section) {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading menu items...</p>
        </div>
    `;
    
    loadingOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    `;
    
    section.style.position = 'relative';
    section.appendChild(loadingOverlay);
    
    // Remove loading state after animation
    setTimeout(() => {
        loadingOverlay.remove();
    }, 500);
}

// Enhanced smooth scrolling
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.offsetTop - 100;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Performance optimization: Lazy load menu sections
function initLazyLoading() {
    // We'll keep this empty for now as it was causing issues
    // The menu items should be visible in all sections
}

// Initialize lazy loading
// initLazyLoading(); // Commented out to prevent hiding menu items