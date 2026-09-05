/**
 * Portfolio Interaction Layer
 *
 * Handles:
 * - Sticky navigation
 * - Mobile navigation
 * - Scroll reveal
 * - Animated counters
 * - Smooth navigation
 * - Hero mouse movement
 */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header =
        document.getElementById("siteHeader");

    const menuToggle =
        document.getElementById("menuToggle");

    const navigation =
        document.getElementById("navigation");

    const revealElements =
        document.querySelectorAll(".reveal");

    const counters =
        document.querySelectorAll("[data-counter]");

    const heroVisual =
        document.querySelector(".hero-visual");


    /* =====================================================
       STICKY HEADER
    ===================================================== */

    const updateHeader = () => {

        if (!header) {
            return;
        }

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

    updateHeader();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && navigation) {

        menuToggle.addEventListener(
            "click",
            () => {

                const open =
                    navigation.classList.toggle(
                        "active"
                    );

                menuToggle.setAttribute(
                    "aria-expanded",
                    open ? "true" : "false"
                );

            }
        );


        navigation
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navigation.classList.remove(
                            "active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }

                            const element =
                                entry.target;

                            const delay =
                                parseInt(
                                    element.dataset.delay ||
                                    "0",
                                    10
                                );

                            setTimeout(
                                () => {

                                    element.classList.add(
                                        "visible"
                                    );

                                },
                                delay
                            );

                            revealObserver.unobserve(
                                element
                            );

                        }
                    );

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       COUNTER ANIMATION
    ===================================================== */

    const animateCounter =
        element => {

            const finalValue =
                element.dataset.counter;

            if (!finalValue) {
                return;
            }

            const match =
                finalValue.match(
                    /^([\d.]+)(.*)$/
                );

            if (!match) {
                return;
            }

            const target =
                parseFloat(match[1]);

            const suffix =
                match[2];

            const duration =
                1300;

            const start =
                performance.now();


            const update =
                currentTime => {

                    const progress =
                        Math.min(
                            (
                                currentTime -
                                start
                            ) / duration,
                            1
                        );

                    const eased =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );

                    const current =
                        target * eased;


                    if (
                        target % 1 !== 0
                    ) {

                        element.textContent =
                            current.toFixed(1) +
                            suffix;

                    } else {

                        element.textContent =
                            Math.floor(current) +
                            suffix;

                    }


                    if (
                        progress < 1
                    ) {

                        requestAnimationFrame(
                            update
                        );

                    } else {

                        element.textContent =
                            finalValue;

                    }

                };


            requestAnimationFrame(update);

        };


    if (
        "IntersectionObserver" in window
    ) {

        const counterObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }

                            animateCounter(
                                entry.target
                            );

                            counterObserver.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: .7
                }
            );


        counters.forEach(
            counter => {

                counterObserver.observe(
                    counter
                );

            }
        );

    }


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    if (
        heroVisual &&
        window.matchMedia(
            "(min-width: 900px)"
        ).matches
    ) {

        let ticking = false;


        document.addEventListener(
            "mousemove",
            event => {

                if (ticking) {
                    return;
                }

                ticking = true;


                requestAnimationFrame(
                    () => {

                        const x =
                            (
                                window.innerWidth /
                                2 -
                                event.clientX
                            ) / 100;

                        const y =
                            (
                                window.innerHeight /
                                2 -
                                event.clientY
                            ) / 120;


                        heroVisual.style.transform =
                            `translate3d(
                                ${x}px,
                                ${y}px,
                                0
                            )`;


                        ticking = false;

                    }
                );

            }
        );

    }


    /* =====================================================
       ESCAPE CLOSES MOBILE MENU
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                navigation
            ) {

                navigation.classList.remove(
                    "active"
                );

                if (menuToggle) {

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );

});
