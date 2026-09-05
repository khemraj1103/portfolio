/**
 * KT Architecture Portfolio - Custom Events
 * Handles: Page Loading, Smooth Reveal Transitions, Navigation Highlighting.
 */

(() => {
    "use strict";

    // Technical Optimization: Run scripts after DOM is parsed.
    document.addEventListener("DOMContentLoaded", initKTApp);

    function initKTApp() {
        console.log("KT Architect UI Initialized...");

        // Loader Handling (Ensures smooth first paint)
        handlePageLoad();

        // Initializing Intersection Observer for Scroll Reveals (Trendy UI component)
        initScrollReveals();

        // Dynamic Active Navigation Highlighting
        initNavSpy();
    }

    /**
     * Remove loading class and reveal the site smoothly.
     */
    function handlePageLoad() {
        requestAnimationFrame(() => {
            // Precise browser timing optimization buffer.
            setTimeout(() => {
                document.body.classList.remove('loading');
            }, 300);
        });
    }

    /**
     * Professional Scroll Reveal functionality using native IntersectionObserver API.
     */
    function initScrollReveals() {
        const revealElements = document.querySelectorAll(
            '.expertise-card, .solution-item, .section-title, .hero-text-block, .timeline-item, .hero-visual-block'
        );

        const observerOptions = {
            root: null, // viewpoint
            threshold: 0.15, // trigger when 15% visible
            rootMargin: "0px 0px -50px 0px" // trigger slightly before reaching the viewport
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Technically Strong: Reveal only once.
                    entry.target.classList.add('revealed');
                    // Stop observing after reveal.
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => {
            // Initial state set in CSS via .reveal-init
            revealObserver.observe(el);
        });
    }

    /**
     * Active Navigation Highlighting (Graceful Visibility).
     */
    function initNavSpy() {
        const sections = document.querySelectorAll("main section, footer");
        const navLinks = document.querySelectorAll(".nav-links a:not(.btn-cta-small)");

        const spyOptions = {
            root: null,
            threshold: 0.5, // trigger when 50% section is in view
            rootMargin: "-80px 0px 0px 0px" // Header offset
        };

        const navSpyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    
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
