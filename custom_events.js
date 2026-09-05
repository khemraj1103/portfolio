/**
 * KT Architecture Portfolio - Custom Events
 * Handles: Page Loading, Smooth Reveal Transitions, Navigation Highlighting.
 */

// Use immediately invoked function expression (IIFE) to avoid global scope pollution.
(() => {
    "use strict";

    // Technical Optimization: Run scripts only after DOM is parsed but before external resources load.
    document.addEventListener("DOMContentLoaded", initKTApp);

    function initKTApp() {
        console.log("KT Architect UI Initialized...");

        // 1. Loader Handling (Ensures smooth first paint)
        handlePageLoad();

        // 2. Initializing Intersection Observer for Scroll Reveals (Trendy UI component)
        initScrollReveals();

        // 3. Dynamic Active Navigation Highlighting
        initNavSpy();
    }

    /**
     * Remove loading class and reveal the site smoothly.
     */
    function handlePageLoad() {
        const body = document.body;
        
        // Use requestAnimationFrame for precise browser timing optimization.
        requestAnimationFrame(() => {
            // Give a tiny buffer for browser paint, then show site.
            setTimeout(() => {
                body.classList.remove('loading');
            }, 300); // Technical Buffer for heavy assets paint.
        });
    }

    /**
     * Professional Scroll Reveal functionality using native IntersectionObserver API.
     * Better performance than listening to 'scroll' events.
     */
    function initScrollReveals() {
        // Target elements that should be professionally revealed on scroll.
        const revealElements = document.querySelectorAll(
            '.expertise-card, .solution-item, .section-title, .hero-text-block'
        );

        const observerOptions = {
            root: null, // use viewpoint
            threshold: 0.15, // trigger when 15% visible
            rootMargin: "0px 0px -50px 0px" // trigger slightly before it reaches the viewport
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Technically Strong: Professional optimization only revealing once.
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Stop observing after reveal to conserve resources.
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => {
            // Set initial state via JS to allow no-JS fallback support in HTML.
            el.classList.add('reveal-init');
            revealObserver.observe(el);
        });
    }

    /**
     * Active Navigation Highlighting (Technical visibility for user experience).
     */
    function initNavSpy() {
        const sections = document.querySelectorAll("main section");
        const navLinks = document.querySelectorAll(".nav-links a:not(.btn-cta-small)");

        const spyOptions = {
            root: null,
            threshold: 0.5, // trigger when 50% section is in view
            rootMargin: "-80px 0px 0px 0px" // Adjust for fixed header height
        };

        const navSpyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    
                    // Technical optimization: update UI only when necessary.
                    navLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${id}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        }, spyOptions);

        sections.forEach(section => {
            navSpyObserver.observe(section);
        });
    }

})();
