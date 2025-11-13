// ==========================================
// MICROSOFT IGNITE 2025 AZURE SKILLING CHALLENGES
// Landing Page JavaScript
// ==========================================

(function() {
    'use strict';

    // ==========================================
    // CONFIGURATION
    // ==========================================
    const CONFIG = {
        eventStartDate: new Date('2025-11-17T00:00:00'),
        eventEndDate: new Date('2025-11-21T23:59:59'),
        analyticsEnabled: true, // Set to true when integrating Application Insights
        smoothScrollDuration: 800
    };

    // ==========================================
    // ANALYTICS HOOKS
    // TODO: Replace console.log with Application Insights calls
    // ==========================================
    const Analytics = {
        /**
         * Track page load performance
         */
        trackPageLoad: function() {
            if (!CONFIG.analyticsEnabled) return;

            window.addEventListener('load', () => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

                console.log('[Analytics] Page Load Performance:', {
                    loadTime: pageLoadTime,
                    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart,
                    timeToInteractive: perfData.domInteractive - perfData.navigationStart
                });

                // TODO: Add Application Insights tracking
                // appInsights.trackMetric({ name: "PageLoadTime", average: pageLoadTime });
            });
        },

        /**
         * Track challenge CTA clicks
         * @param {string} challengeName - Name of the challenge
         * @param {string} source - Source of the click (card, cta-section, etc.)
         */
        trackChallengeClick: function(challengeName, source = 'card') {
            if (!CONFIG.analyticsEnabled) return;

            // Get URL parameters for campaign tracking
            const urlParams = new URLSearchParams(window.location.search);
            const campaignData = {
                challengeName: challengeName,
                source: source,
                utmSource: urlParams.get('source') || urlParams.get('utm_source'),
                utmMedium: urlParams.get('medium') || urlParams.get('utm_medium'),
                utmCampaign: urlParams.get('campaign') || urlParams.get('utm_campaign'),
                timestamp: new Date().toISOString()
            };

            console.log('[Analytics] Challenge CTA Click:', campaignData);

            // TODO: Add Application Insights tracking
            // appInsights.trackEvent({ name: "ChallengeCTAClick", properties: campaignData });
        },

        /**
         * Track challenge card hover events
         * @param {string} challengeName - Name of the challenge
         */
        trackChallengeHover: function(challengeName) {
            if (!CONFIG.analyticsEnabled) return;

            console.log('[Analytics] Challenge Card Hover:', { challengeName });

            // TODO: Add Application Insights tracking
            // appInsights.trackEvent({ name: "ChallengeCardHover", properties: { challengeName } });
        },

        /**
         * Track scroll depth
         */
        trackScrollDepth: function() {
            if (!CONFIG.analyticsEnabled) return;

            let maxScrollPercentage = 0;
            const milestones = [25, 50, 75, 100];
            const trackedMilestones = new Set();

            window.addEventListener('scroll', () => {
                const scrollPercentage = Math.round(
                    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
                );

                if (scrollPercentage > maxScrollPercentage) {
                    maxScrollPercentage = scrollPercentage;
                }

                milestones.forEach(milestone => {
                    if (scrollPercentage >= milestone && !trackedMilestones.has(milestone)) {
                        trackedMilestones.add(milestone);
                        console.log('[Analytics] Scroll Depth Milestone:', { percentage: milestone });

                        // TODO: Add Application Insights tracking
                        // appInsights.trackEvent({ name: "ScrollDepth", properties: { percentage: milestone } });
                    }
                });
            });
        }
    };

    // ==========================================
    // EVENT TIMER
    // ==========================================
    const EventTimer = {
        /**
         * Check if event is currently live
         */
        isEventLive: function() {
            const now = new Date();
            return now >= CONFIG.eventStartDate && now <= CONFIG.eventEndDate;
        },

        /**
         * Get days until event starts
         */
        getDaysUntilEvent: function() {
            const now = new Date();
            const diffTime = CONFIG.eventStartDate - now;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        },

        /**
         * Update event ribbon based on current date
         */
        updateEventRibbon: function() {
            const ribbon = document.querySelector('.event-ribbon .event-text');
            if (!ribbon) return;

            if (this.isEventLive()) {
                // Event is live - keep current message
                console.log('[Event Timer] Event is currently LIVE');
            } else {
                const daysUntil = this.getDaysUntilEvent();
                if (daysUntil > 0) {
                    // Event hasn't started yet
                    ribbon.textContent = `${daysUntil} DAYS UNTIL | November 17-21, 2025 | Microsoft Ignite`;
                    console.log(`[Event Timer] Event starts in ${daysUntil} days`);
                } else {
                    // Event has ended
                    ribbon.textContent = 'RECORDINGS AVAILABLE | November 17-21, 2025 | Microsoft Ignite';
                    console.log('[Event Timer] Event has ended');
                }
            }
        }
    };

    // ==========================================
    // SMOOTH SCROLLING
    // ==========================================
    const SmoothScroll = {
        /**
         * Initialize smooth scrolling for anchor links
         */
        init: function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    const targetId = anchor.getAttribute('href');
                    if (targetId === '#') return;

                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });

                        // Update URL without jumping
                        if (history.pushState) {
                            history.pushState(null, null, targetId);
                        }
                    }
                });
            });
        }
    };

    // ==========================================
    // CHALLENGE CARD INTERACTIONS
    // ==========================================
    const ChallengeCards = {
        /**
         * Initialize challenge card event listeners
         */
        init: function() {
            // Track CTA button clicks
            document.querySelectorAll('.challenge-cta').forEach(button => {
                button.addEventListener('click', (e) => {
                    const challengeName = button.getAttribute('data-challenge-name');
                    Analytics.trackChallengeClick(challengeName, 'card-cta');
                });
            });

            // Track card hover events (debounced)
            let hoverTimeout;
            document.querySelectorAll('.challenge-card').forEach(card => {
                card.addEventListener('mouseenter', () => {
                    clearTimeout(hoverTimeout);
                    hoverTimeout = setTimeout(() => {
                        const challengeName = card.querySelector('.challenge-title').textContent;
                        Analytics.trackChallengeHover(challengeName);
                    }, 500); // Only track if hovered for 500ms
                });

                card.addEventListener('mouseleave', () => {
                    clearTimeout(hoverTimeout);
                });
            });

            // Add keyboard navigation support
            document.querySelectorAll('.challenge-card').forEach(card => {
                const button = card.querySelector('.challenge-cta');
                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' && document.activeElement === card) {
                        button.click();
                    }
                });
            });
        }
    };

    // ==========================================
    // URL PARAMETER TRACKING
    // ==========================================
    const URLTracking = {
        /**
         * Log URL parameters for debugging
         */
        logParameters: function() {
            const urlParams = new URLSearchParams(window.location.search);
            const params = {};

            for (const [key, value] of urlParams) {
                params[key] = value;
            }

            if (Object.keys(params).length > 0) {
                console.log('[URL Tracking] Parameters detected:', params);

                // TODO: Store parameters for attribution tracking
                // sessionStorage.setItem('campaignParams', JSON.stringify(params));
            }
        },

        /**
         * Append URL parameters to outbound links
         */
        appendToLinks: function() {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.toString()) {
                document.querySelectorAll('a[href^="http"]').forEach(link => {
                    const url = new URL(link.href);
                    // Only append to Microsoft domains
                    if (url.hostname.includes('microsoft.com') || url.hostname.includes('azure.com')) {
                        for (const [key, value] of urlParams) {
                            url.searchParams.set(key, value);
                        }
                        link.href = url.toString();
                    }
                });
            }
        }
    };

    // ==========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ==========================================
    const Accessibility = {
        /**
         * Announce dynamic content changes to screen readers
         */
        announceToScreenReader: function(message) {
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'status');
            announcement.setAttribute('aria-live', 'polite');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            document.body.appendChild(announcement);

            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        },

        /**
         * Initialize keyboard shortcuts
         */
        initKeyboardShortcuts: function() {
            document.addEventListener('keydown', (e) => {
                // Skip to main content (Alt + S)
                if (e.altKey && e.key === 's') {
                    e.preventDefault();
                    document.querySelector('main, .hero').focus();
                }
            });
        }
    };

    // ==========================================
    // INTERACTIVE GRADIENT FACTORY
    // ==========================================
    /**
     * Creates an interactive gradient instance for a section
     */
    function createInteractiveGradient(sectionSelector) {
        return {
            section: null,
            gradientBanner: null,
            isReducedMotion: false,
            mouseX: 0.5,
            mouseY: 0.5,
            currentX: 0.5,
            currentY: 0.5,
            animationFrame: null,
            isMobile: false,
            supportsOrientation: false,
            selectorName: sectionSelector,

            /**
             * Initialize interactive gradient
             */
            init: function() {
                this.section = document.querySelector(sectionSelector);
                this.gradientBanner = this.section ? this.section.querySelector('.hero-banner') : null;

                if (!this.section || !this.gradientBanner) return;

                // Check for reduced motion preference
                this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                if (this.isReducedMotion) {
                    console.log(`[${this.selectorName}] Reduced motion preferred - static gradient`);
                    return;
                }

                // Detect mobile device
                this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                    || window.matchMedia('(max-width: 768px)').matches;

                // Desktop: Mouse movement
                if (!this.isMobile) {
                    this.section.addEventListener('mousemove', (e) => this.handleMouseMove(e));
                    this.section.addEventListener('mouseleave', () => this.handleMouseLeave());
                    console.log(`[${this.selectorName}] Desktop mode - mouse tracking enabled`);
                }
                // Mobile: Touch + Device Orientation
                else {
                    // Touch events
                    this.section.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: true });
                    this.section.addEventListener('touchstart', (e) => this.handleTouchMove(e), { passive: true });
                    this.section.addEventListener('touchend', () => this.handleMouseLeave());

                    // Device orientation (tilt/gyroscope)
                    if (window.DeviceOrientationEvent) {
                        // Check if permission is needed (iOS 13+)
                        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                            this.supportsOrientation = true;
                            console.log(`[${this.selectorName}] iOS - orientation available (requires permission)`);
                        } else {
                            // Android and older iOS
                            window.addEventListener('deviceorientation', (e) => this.handleOrientation(e), { passive: true });
                            this.supportsOrientation = true;
                            console.log(`[${this.selectorName}] Mobile mode - touch + orientation tracking enabled`);
                        }
                    } else {
                        console.log(`[${this.selectorName}] Mobile mode - touch tracking enabled (no orientation)`);
                    }
                }

                // Start animation loop
                this.animate();

                console.log(`[${this.selectorName}] Dynamic gradient initialized`);
            },

            /**
             * Handle mouse movement
             */
            handleMouseMove: function(e) {
                const rect = this.section.getBoundingClientRect();

                // Calculate mouse position relative to section (0 to 1)
                this.mouseX = (e.clientX - rect.left) / rect.width;
                this.mouseY = (e.clientY - rect.top) / rect.height;
            },

            /**
             * Handle mouse leaving section area
             */
            handleMouseLeave: function() {
                // Return to center
                this.mouseX = 0.5;
                this.mouseY = 0.5;
            },

            /**
             * Handle touch movement on mobile
             */
            handleTouchMove: function(e) {
                if (!e.touches || e.touches.length === 0) return;

                const touch = e.touches[0];
                const rect = this.section.getBoundingClientRect();

                // Calculate touch position relative to section (0 to 1)
                this.mouseX = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
                this.mouseY = Math.max(0, Math.min(1, (touch.clientY - rect.top) / rect.height));
            },

            /**
             * Handle device orientation (tilt) on mobile
             */
            handleOrientation: function(e) {
                if (!e.beta || !e.gamma) return;

                // Beta: front-to-back tilt (-180 to 180)
                // Gamma: left-to-right tilt (-90 to 90)

                // Normalize gamma (left-right) to 0-1
                // -45 to 45 degrees mapped to 0-1 (more sensitive range)
                const gamma = Math.max(-45, Math.min(45, e.gamma));
                this.mouseX = (gamma + 45) / 90;

                // Normalize beta (forward-back) to 0-1
                // 30 to 90 degrees mapped to 0-1 (accounting for typical holding angle)
                const beta = Math.max(30, Math.min(90, e.beta));
                this.mouseY = (beta - 30) / 60;
            },

            /**
             * Smooth animation loop using lerp (linear interpolation)
             */
            animate: function() {
                // Lerp for smooth following (0.05 = slower, 0.2 = faster)
                const smoothing = 0.08;
                this.currentX += (this.mouseX - this.currentX) * smoothing;
                this.currentY += (this.mouseY - this.currentY) * smoothing;

                // Convert to percentages for CSS
                const xPercent = this.currentX * 100;
                const yPercent = this.currentY * 100;

                // Create parallax layers with different speeds
                const layer1X = 40 + (xPercent - 50) * 0.3; // Slow layer
                const layer1Y = 50 + (yPercent - 50) * 0.3;

                const layer2X = 70 + (xPercent - 50) * 0.5; // Medium layer
                const layer2Y = 70 + (yPercent - 50) * 0.5;

                const layer3X = 30 + (xPercent - 50) * 0.7; // Fast layer
                const layer3Y = 30 + (yPercent - 50) * 0.7;

                // Update CSS custom properties for gradient positions
                this.gradientBanner.style.setProperty('--mouse-x', `${xPercent}%`);
                this.gradientBanner.style.setProperty('--mouse-y', `${yPercent}%`);
                this.gradientBanner.style.setProperty('--layer1-x', `${layer1X}%`);
                this.gradientBanner.style.setProperty('--layer1-y', `${layer1Y}%`);
                this.gradientBanner.style.setProperty('--layer2-x', `${layer2X}%`);
                this.gradientBanner.style.setProperty('--layer2-y', `${layer2Y}%`);
                this.gradientBanner.style.setProperty('--layer3-x', `${layer3X}%`);
                this.gradientBanner.style.setProperty('--layer3-y', `${layer3Y}%`);

                // Continue animation loop
                this.animationFrame = requestAnimationFrame(() => this.animate());
            },

            /**
             * Clean up animation frame
             */
            destroy: function() {
                if (this.animationFrame) {
                    cancelAnimationFrame(this.animationFrame);
                }
            }
        };
    }

    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================
    const MobileNav = {
        /**
         * Initialize mobile navigation toggle
         */
        init: function() {
            const navToggle = document.querySelector('.nav-toggle');
            const navLinks = document.querySelector('.nav-links');

            if (!navToggle || !navLinks) return;

            navToggle.addEventListener('click', () => {
                const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
                navToggle.setAttribute('aria-expanded', !isExpanded);
                navLinks.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navLinks.classList.remove('active');
                }
            });

            // Close menu when clicking on a link
            navLinks.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navLinks.classList.remove('active');
                });
            });

            console.log('[Mobile Nav] Initialized');
        }
    };

    // ==========================================
    // INITIALIZATION
    // ==========================================
    function init() {
        console.log('[Init] Microsoft Ignite 2025 Azure Skilling Challenges');
        console.log('[Init] Landing page loaded successfully');

        // Initialize mobile navigation
        MobileNav.init();

        // Track page load performance
        Analytics.trackPageLoad();

        // Update event ribbon based on current date
        EventTimer.updateEventRibbon();

        // Initialize smooth scrolling
        SmoothScroll.init();

        // Initialize challenge card interactions
        ChallengeCards.init();

        // URL parameter tracking
        URLTracking.logParameters();
        URLTracking.appendToLinks();

        // Scroll depth tracking
        Analytics.trackScrollDepth();

        // Accessibility enhancements
        Accessibility.initKeyboardShortcuts();

        // Initialize interactive gradients on all gradient sections
        const heroGradient = createInteractiveGradient('.hero');
        heroGradient.init();

        const skillingGradient = createInteractiveGradient('.skilling-experience');
        skillingGradient.init();

        const featuredGradient = createInteractiveGradient('.featured-challenges');
        featuredGradient.init();

        // Log ready state
        console.log('[Init] All features initialized');
        console.log('[Init] Analytics hooks ready (currently logging to console)');
        console.log('[Init] TODO: Integrate Application Insights for production tracking');
    }

    // ==========================================
    // RUN ON DOM READY
    // ==========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ==========================================
    // EXPORT FOR TESTING (if needed)
    // ==========================================
    window.IgniteSkilling = {
        Analytics,
        EventTimer,
        CONFIG
    };

})();
