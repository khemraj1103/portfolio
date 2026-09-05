<?php
/**
 * Full-Stack WordPress + SEO Expert
 * Custom Static Portfolio Template
 *
 * Files:
 *   index.php
 *   layout.css
 *   custom_events.js
 */

declare(strict_types=1);

/* =========================================================
   PORTFOLIO CONFIGURATION
   Edit this section to personalize the entire website.
========================================================= */

$portfolio = [

    'name' => 'Your Name',

    'initials' => 'YN',

    'role' => 'Full-Stack WordPress & SEO Expert',

    'location' => 'India',

    'email' => 'hello@example.com',

    'availability' => 'Available for freelance projects',

    'hero' => [
        'eyebrow' => 'FULL-STACK WORDPRESS + SEO',
        'title' => 'I Build Fast Websites That <span>Rank, Convert & Grow.</span>',
        'description' =>
            'I create high-performance websites and SEO strategies that combine clean development, exceptional UX, technical SEO and measurable business results.'
    ],

    'stats' => [
        [
            'number' => '8+',
            'label' => 'Years Experience'
        ],
        [
            'number' => '120+',
            'label' => 'Projects Delivered'
        ],
        [
            'number' => '95%',
            'label' => 'Client Satisfaction'
        ],
        [
            'number' => '3X',
            'label' => 'Average Organic Growth'
        ],
    ],

    'about' => [
        'intro' =>
            'I am a Full-Stack Developer and SEO Expert focused on building scalable, search-friendly digital experiences.',

        'description' =>
            'From custom development and performance optimization to technical SEO and conversion-focused design, I help businesses turn their websites into measurable growth engines.'
    ],

    'services' => [
        [
            'number' => '01',
            'icon' => '⌘',
            'title' => 'Full-Stack Development',
            'description' =>
                'Modern, scalable web experiences built with clean architecture, responsive interfaces and maintainable code.',
            'class' => 'teal'
        ],
        [
            'number' => '02',
            'icon' => '⌁',
            'title' => 'Technical SEO',
            'description' =>
                'Technical audits, crawling, indexing, schema, site architecture, migrations and Core Web Vitals.',
            'class' => 'blue'
        ],
        [
            'number' => '03',
            'icon' => '↗',
            'title' => 'SEO Growth',
            'description' =>
                'Data-driven SEO strategies designed to improve rankings, qualified traffic and organic conversions.',
            'class' => 'green'
        ],
        [
            'number' => '04',
            'icon' => '✦',
            'title' => 'Performance',
            'description' =>
                'Speed optimization, caching, asset optimization, database cleanup and frontend performance engineering.',
            'class' => 'violet'
        ],
    ],

    'projects' => [
        [
            'category' => 'Development + SEO',
            'title' => 'SaaS Growth Platform',
            'description' =>
                'A conversion-focused digital platform with a strong technical SEO foundation and performance-first architecture.',
            'result' => '+184% Organic Traffic',
            'tags' => [
                'Development',
                'SEO',
                'Performance'
            ],
            'url' => '#'
        ],
        [
            'category' => 'E-Commerce',
            'title' => 'High Performance Store',
            'description' =>
                'A modern e-commerce experience optimized for product discovery, performance and conversion.',
            'result' => '+67% Revenue',
            'tags' => [
                'E-Commerce',
                'SEO',
                'UX'
            ],
            'url' => '#'
        ],
        [
            'category' => 'Technical SEO',
            'title' => 'Organic Search Recovery',
            'description' =>
                'Technical SEO recovery project focused on site architecture, indexing, internal linking and structured data.',
            'result' => '+142% Keywords',
            'tags' => [
                'Technical SEO',
                'Schema',
                'Analytics'
            ],
            'url' => '#'
        ],
    ],

    'skills' => [
        'PHP',
        'JavaScript',
        'HTML5',
        'CSS3',
        'MySQL',
        'WordPress',
        'WooCommerce',
        'Technical SEO',
        'On-Page SEO',
        'Core Web Vitals',
        'Google Analytics',
        'Search Console'
    ],

    'seo_metrics' => [
        [
            'number' => '+184%',
            'label' => 'Organic Traffic'
        ],
        [
            'number' => '+142%',
            'label' => 'Ranking Keywords'
        ],
        [
            'number' => '98',
            'label' => 'Performance Score'
        ],
        [
            'number' => '3.2X',
            'label' => 'Average ROI'
        ],
    ],

    'testimonials' => [
        [
            'quote' =>
                'The new website completely transformed our online presence. Traffic increased significantly and the site finally feels like a real representation of our brand.',
            'name' => 'Alex Morgan',
            'role' => 'Founder, Growth Company',
            'initial' => 'A'
        ],
        [
            'quote' =>
                'Excellent combination of development and SEO expertise. Communication was clear, deadlines were respected, and the final result exceeded expectations.',
            'name' => 'Sarah Williams',
            'role' => 'Marketing Director',
            'initial' => 'S'
        ],
        [
            'quote' =>
                'Our website became faster, cleaner and much easier to manage. The SEO improvements produced measurable results within months.',
            'name' => 'Daniel Carter',
            'role' => 'CEO, Digital Business',
            'initial' => 'D'
        ],
    ],

    'social' => [
        'linkedin' => '#',
        'github' => '#',
        'twitter' => '#'
    ]
];

function e(string $value): string
{
    return htmlspecialchars(
        $value,
        ENT_QUOTES,
        'UTF-8'
    );
}
?>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="<?= e($portfolio['hero']['description']); ?>"
    >

    <meta
        name="theme-color"
        content="#050b16"
    >

    <title>
        <?= e($portfolio['name']); ?> —
        <?= e($portfolio['role']); ?>
    </title>

    <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
    >

    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
    >

    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
    >

    <link
        rel="stylesheet"
        href="layout.css"
    >

</head>

<body>

<!-- =====================================================
     BACKGROUND
====================================================== -->

<div class="site-background">

    <div class="background-grid"></div>

    <div class="background-orb background-orb-teal"></div>

    <div class="background-orb background-orb-blue"></div>

    <div class="background-orb background-orb-violet"></div>

</div>


<!-- =====================================================
     NAVIGATION
====================================================== -->

<header class="site-header" id="siteHeader">

    <div class="container navigation-wrapper">

        <a
            href="#home"
            class="brand"
            aria-label="<?= e($portfolio['name']); ?> home"
        >

            <span class="brand-mark">
                &lt;/&gt;
            </span>

            <span class="brand-name">
                <?= e($portfolio['name']); ?>
            </span>

        </a>


        <button
            class="menu-toggle"
            id="menuToggle"
            aria-label="Open navigation"
            aria-expanded="false"
            type="button"
        >

            <span></span>
            <span></span>
            <span></span>

        </button>


        <nav
            class="navigation"
            id="navigation"
            aria-label="Main navigation"
        >

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#services">Services</a>

            <a href="#projects">Projects</a>

            <a href="#skills">Skills</a>

            <a
                href="#contact"
                class="navigation-cta"
            >
                Let's Talk <span>↗</span>
            </a>

        </nav>

    </div>

</header>


<main>


<!-- =====================================================
     HERO
====================================================== -->

<section
    class="hero"
    id="home"
>

    <div class="container hero-layout">

        <div class="hero-content">

            <div
                class="availability reveal"
                data-delay="0"
            >

                <span class="availability-dot"></span>

                <?= e($portfolio['availability']); ?>

            </div>


            <p
                class="eyebrow reveal"
                data-delay="100"
            >
                <?= e($portfolio['hero']['eyebrow']); ?>
            </p>


            <h1
                class="hero-title reveal"
                data-delay="150"
            >

                <?= $portfolio['hero']['title']; ?>

            </h1>


            <p
                class="hero-description reveal"
                data-delay="250"
            >

                <?= e($portfolio['hero']['description']); ?>

            </p>


            <div
                class="hero-actions reveal"
                data-delay="350"
            >

                <a
                    href="#projects"
                    class="button button-primary"
                >
                    View My Work
                    <span>↗</span>
                </a>


                <a
                    href="#contact"
                    class="button button-secondary"
                >
                    Let's Work Together
                </a>

            </div>


            <div
                class="hero-trust reveal"
                data-delay="450"
            >

                <span>Specialized in</span>

                <div>

                    <span>Development</span>
                    <span>SEO</span>
                    <span>Performance</span>
                    <span>Growth</span>

                </div>

            </div>

        </div>


        <!-- HERO VISUAL -->

        <div
            class="hero-visual reveal"
            data-delay="250"
        >

            <div class="code-window">

                <div class="code-window-header">

                    <div class="window-controls">

                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                    <span class="window-file">
                        growth.php
                    </span>

                </div>


                <div class="code-body">

                    <div>
                        <span class="syntax-purple">&lt;?php</span>
                    </div>

                    <div class="code-line">
                        <span class="syntax-purple">function</span>
                        <span class="syntax-blue">
                            grow_business
                        </span>(<span class="syntax-green">$site</span>) {
                    </div>

                    <div class="code-indent">
                        <span class="syntax-purple">return</span> [
                    </div>

                    <div class="code-indent-2">
                        <span class="syntax-key">
                            'performance'
                        </span>
                        =&gt;
                        <span class="syntax-green">
                            'fast'
                        </span>,
                    </div>

                    <div class="code-indent-2">
                        <span class="syntax-key">
                            'seo'
                        </span>
                        =&gt;
                        <span class="syntax-green">
                            'optimized'
                        </span>,
                    </div>

                    <div class="code-indent-2">
                        <span class="syntax-key">
                            'ux'
                        </span>
                        =&gt;
                        <span class="syntax-green">
                            'conversion-focused'
                        </span>,
                    </div>

                    <div class="code-indent-2">
                        <span class="syntax-key">
                            'growth'
                        </span>
                        =&gt;
                        <span class="syntax-green">
                            'measurable'
                        </span>
                    </div>

                    <div class="code-indent">
                        ];
                    </div>

                    <div>
                        }
                    </div>

                    <div class="code-comment">
                        // Build. Optimize. Grow.
                    </div>

                </div>

            </div>


            <div class="floating-stat floating-stat-top">

                <span class="floating-icon teal-icon">
                    ↗
                </span>

                <div>

                    <strong>+184%</strong>

                    <small>
                        Organic Traffic
                    </small>

                </div>

            </div>


            <div class="floating-stat floating-stat-bottom">

                <span class="floating-icon green-icon">
                    ⚡
                </span>

                <div>

                    <strong>98/100</strong>

                    <small>
                        Performance
                    </small>

                </div>

            </div>

        </div>

    </div>


    <div class="scroll-hint">

        <span></span>

        Scroll to explore

    </div>

</section>


<!-- =====================================================
     STATS
====================================================== -->

<section class="stats">

    <div class="container stats-grid">

        <?php foreach ($portfolio['stats'] as $stat): ?>

            <div
                class="stat reveal"
                data-delay="100"
            >

                <strong
                    data-counter="<?= e($stat['number']); ?>"
                >
                    <?= e($stat['number']); ?>
                </strong>

                <span>
                    <?= e($stat['label']); ?>
                </span>

            </div>

        <?php endforeach; ?>

    </div>

</section>


<!-- =====================================================
     ABOUT
====================================================== -->

<section
    class="section about"
    id="about"
>

    <div class="container">

        <div class="section-heading">

            <div class="section-kicker">

                <span>01</span>

                ABOUT ME

            </div>

            <h2 class="reveal">

                Developer mindset.<br>

                <span>
                    SEO-driven results.
                </span>

            </h2>

        </div>


        <div class="about-grid">

            <div class="about-content reveal">

                <p class="about-lead">

                    <?= e($portfolio['about']['intro']); ?>

                </p>

                <p>

                    <?= e($portfolio['about']['description']); ?>

                </p>


                <a
                    href="#contact"
                    class="text-link"
                >

                    Start a conversation

                    <span>→</span>

                </a>

            </div>


            <div class="about-cards">

                <div class="about-card reveal">

                    <span>01</span>

                    <h3>Build</h3>

                    <p>
                        Clean, scalable and maintainable
                        digital solutions.
                    </p>

                </div>


                <div class="about-card reveal">

                    <span>02</span>

                    <h3>Optimize</h3>

                    <p>
                        Performance and technical SEO
                        engineered from the ground up.
                    </p>

                </div>


                <div class="about-card reveal">

                    <span>03</span>

                    <h3>Grow</h3>

                    <p>
                        Strategies focused on visibility,
                        traffic and conversions.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- =====================================================
     SERVICES
====================================================== -->

<section
    class="section services"
    id="services"
>

    <div class="container">

        <div class="section-heading centered">

            <div class="section-kicker">
                WHAT I DO
            </div>

            <h2 class="reveal">

                One partner for your<br>

                <span>
                    entire digital stack.
                </span>

            </h2>

            <p class="reveal">

                Development, SEO and performance
                working together as one growth system.

            </p>

        </div>


        <div class="services-grid">

            <?php foreach ($portfolio['services'] as $service): ?>

                <article
                    class="service-card reveal"
                    data-delay="100"
                >

                    <div class="service-top">

                        <span
                            class="service-icon <?= e($service['class']); ?>"
                        >
                            <?= e($service['icon']); ?>
                        </span>

                        <span class="service-number">
                            <?= e($service['number']); ?>
                        </span>

                    </div>


                    <h3>
                        <?= e($service['title']); ?>
                    </h3>


                    <p>
                        <?= e($service['description']); ?>
                    </p>


                    <span class="service-arrow">
                        ↗
                    </span>

                </article>

            <?php endforeach; ?>

        </div>

    </div>

</section>


<!-- =====================================================
     PROJECTS
====================================================== -->

<section
    class="section projects"
    id="projects"
>

    <div class="container">

        <div class="projects-heading">

            <div class="section-kicker">

                <span>02</span>

                SELECTED WORK

            </div>

            <h2 class="reveal">

                Projects that<br>

                <span>
                    move the needle.
                </span>

            </h2>

        </div>


        <div class="projects-grid">

            <?php foreach ($portfolio['projects'] as $index => $project): ?>

                <article
                    class="project-card reveal"
                    data-delay="<?= $index * 100; ?>"
                >

                    <div
                        class="project-visual project-visual-<?= $index + 1; ?>"
                    >

                        <div class="browser-window">

                            <div class="browser-header">

                                <span></span>
                                <span></span>
                                <span></span>

                            </div>


                            <div class="browser-content">

                                <div class="mock-navigation"></div>

                                <div class="mock-heading"></div>

                                <div class="mock-heading short"></div>


                                <div class="mock-chart">

                                    <span style="height:35%"></span>
                                    <span style="height:48%"></span>
                                    <span style="height:43%"></span>
                                    <span style="height:62%"></span>
                                    <span style="height:55%"></span>
                                    <span style="height:77%"></span>
                                    <span style="height:94%"></span>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="project-content">

                        <div class="project-meta">

                            <span>
                                <?= e($project['category']); ?>
                            </span>

                            <strong>
                                <?= e($project['result']); ?>
                            </strong>

                        </div>


                        <h3>
                            <?= e($project['title']); ?>
                        </h3>


                        <p>
                            <?= e($project['description']); ?>
                        </p>


                        <div class="project-footer">

                            <div class="project-tags">

                                <?php foreach ($project['tags'] as $tag): ?>

                                    <span>
                                        <?= e($tag); ?>
                                    </span>

                                <?php endforeach; ?>

                            </div>


                            <a
                                href="<?= e($project['url']); ?>"
                                class="project-link"
                                aria-label="View project"
                            >
                                ↗
                            </a>

                        </div>

                    </div>

                </article>

            <?php endforeach; ?>

        </div>

    </div>

</section>


<!-- =====================================================
     SKILLS
====================================================== -->

<section
    class="section skills"
    id="skills"
>

    <div class="container skills-layout">

        <div class="skills-intro">

            <div class="section-kicker">
                TECH STACK
            </div>

            <h2 class="reveal">

                Tools I use to<br>

                <span>
                    build & grow.
                </span>

            </h2>

            <p class="reveal">

                A practical technology stack covering
                development, analytics, search and performance.

            </p>

        </div>


        <div class="skills-list">

            <?php foreach ($portfolio['skills'] as $index => $skill): ?>

                <div
                    class="skill-pill reveal"
                    data-delay="<?= ($index % 4) * 50; ?>"
                >

                    <span>
                        <?= sprintf('%02d', $index + 1); ?>
                    </span>

                    <?= e($skill); ?>

                </div>

            <?php endforeach; ?>

        </div>

    </div>

</section>


<!-- =====================================================
     SEO RESULTS
====================================================== -->

<section class="results">

    <div class="container">

        <div class="results-card reveal">

            <div class="results-copy">

                <div class="section-kicker">
                    SEO PERFORMANCE
                </div>

                <h2>

                    I don't just build websites.

                    <span>
                        I build growth systems.
                    </span>

                </h2>

                <p>

                    Every technical decision is made with
                    performance, visibility and business outcomes
                    in mind.

                </p>

            </div>


            <div class="results-grid">

                <?php foreach ($portfolio['seo_metrics'] as $metric): ?>

                    <div class="result-metric">

                        <strong>
                            <?= e($metric['number']); ?>
                        </strong>

                        <span>
                            <?= e($metric['label']); ?>
                        </span>

                    </div>

                <?php endforeach; ?>

            </div>

        </div>

    </div>

</section>


<!-- =====================================================
     TESTIMONIALS
====================================================== -->

<section class="section testimonials">

    <div class="container">

        <div class="section-heading centered">

            <div class="section-kicker">
                CLIENT WORDS
            </div>

            <h2 class="reveal">

                Good work speaks<br>

                <span>
                    for itself.
                </span>

            </h2>

        </div>


        <div class="testimonials-grid">

            <?php foreach ($portfolio['testimonials'] as $testimonial): ?>

                <article class="testimonial reveal">

                    <div class="quote">
                        “
                    </div>

                    <p>
                        <?= e($testimonial['quote']); ?>
                    </p>


                    <div class="testimonial-author">

                        <div class="avatar">
                            <?= e($testimonial['initial']); ?>
                        </div>

                        <div>

                            <strong>
                                <?= e($testimonial['name']); ?>
                            </strong>

                            <span>
                                <?= e($testimonial['role']); ?>
                            </span>

                        </div>

                    </div>

                </article>

            <?php endforeach; ?>

        </div>

    </div>

</section>


<!-- =====================================================
     CONTACT CTA
====================================================== -->

<section
    class="contact"
    id="contact"
>

    <div class="contact-glow"></div>

    <div class="container">

        <div class="contact-content reveal">

            <div class="section-kicker">
                HAVE A PROJECT?
            </div>

            <h2>

                Let's turn your<br>

                <span>
                    idea into impact.
                </span>

            </h2>

            <p>

                Tell me what you're building,
                what isn't working, or where
                you want to go next.

            </p>


            <a
                href="mailto:<?= e($portfolio['email']); ?>"
                class="button button-primary button-large"
            >

                Start a Project

                <span>↗</span>

            </a>


            <a
                href="mailto:<?= e($portfolio['email']); ?>"
                class="contact-email"
            >
                <?= e($portfolio['email']); ?>
            </a>

        </div>

    </div>

</section>


</main>


<!-- =====================================================
     FOOTER
====================================================== -->

<footer class="footer">

    <div class="container footer-top">

        <div class="footer-brand">

            <a
                href="#home"
                class="brand"
            >

                <span class="brand-mark">
                    &lt;/&gt;
                </span>

                <span>
                    <?= e($portfolio['name']); ?>
                </span>

            </a>


            <p>

                Full-Stack Developer<br>

                & SEO Growth Specialist.

            </p>

        </div>


        <div class="footer-navigation">

            <div>

                <strong>Explore</strong>

                <a href="#about">About</a>

                <a href="#services">Services</a>

                <a href="#projects">Projects</a>

                <a href="#skills">Skills</a>

            </div>


            <div>

                <strong>Connect</strong>

                <a
                    href="<?= e($portfolio['social']['linkedin']); ?>"
                    target="_blank"
                    rel="noopener"
                >
                    LinkedIn
                </a>

                <a
                    href="<?= e($portfolio['social']['github']); ?>"
                    target="_blank"
                    rel="noopener"
                >
                    GitHub
                </a>

                <a
                    href="<?= e($portfolio['social']['twitter']); ?>"
                    target="_blank"
                    rel="noopener"
                >
                    X / Twitter
                </a>

            </div>

        </div>

    </div>


    <div class="container footer-bottom">

        <span>
            © <?= date('Y'); ?>
            <?= e($portfolio['name']); ?>.
            All rights reserved.
        </span>

        <span>
            Designed & developed with PHP + CSS + JavaScript.
        </span>

    </div>

</footer>


<script src="custom_events.js"></script>

</body>

</html>
