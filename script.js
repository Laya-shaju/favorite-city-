// Tokyo Guide Website JavaScript

$(document).ready(function() {
    
    // Initialize the website
    initializeWebsite();
    
    // Load content sections
    loadAttractions();
    loadRestaurants();
    loadActivities();
    loadEvents();
    
    // Add scroll progress indicator
    addScrollProgress();
    
    // Add smooth scrolling for navigation links
    addSmoothScrolling();
    
    // Add navbar scroll effect
    addNavbarScrollEffect();
    
    // Add scroll animations
    addScrollAnimations();
});

// Data for the website sections
const attractionsData = [
    {
        title: "Tokyo Skytree",
        icon: "fas fa-broadcast-tower",
        description: "Standing at 634 meters, Tokyo Skytree is the world's second tallest structure and offers breathtaking panoramic views of the city.",
        rating: 4.8,
        badge: "Must Visit",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23ff6b6b' width='400' height='200'/><circle fill='%23ffffff' cx='200' cy='100' r='60'/><polygon fill='%23333' points='200,60 180,120 220,120'/></svg>"
    },
    {
        title: "Senso-ji Temple",
        icon: "fas fa-torii-gate",
        description: "Tokyo's oldest temple, founded in 628 AD, located in the historic Asakusa district with traditional shops and cultural experiences.",
        rating: 4.7,
        badge: "Historic",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%2300a86b' width='400' height='200'/><rect fill='%23ffdd59' x='150' y='50' width='100' height='100' rx='10'/><circle fill='%23ff6b6b' cx='200' cy='40' r='15'/></svg>"
    },
    {
        title: "Imperial Palace",
        icon: "fas fa-crown",
        description: "The primary residence of the Emperor of Japan, surrounded by beautiful East Gardens open to the public with stunning landscapes.",
        rating: 4.5,
        badge: "Royal",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%2355a3ff' width='400' height='200'/><rect fill='%23ffffff' x='100' y='80' width='200' height='80' rx='5'/><rect fill='%2327ae60' x='50' y='150' width='300' height='50'/></svg>"
    }
];

const restaurantsData = [
    {
        title: "Sukiyabashi Jiro",
        icon: "fas fa-fish",
        description: "World-famous sushi restaurant by Jiro Ono. A culinary pilgrimage destination offering the finest omakase experience.",
        rating: "3 Michelin Stars",
        badge: "Premium",
        location: "Ginza",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%232d3748' width='400' height='200'/><circle fill='%23f7fafc' cx='200' cy='100' r='40'/><rect fill='%23e53e3e' x='180' y='90' width='40' height='20' rx='10'/></svg>"
    },
    {
        title: "Ichiran Ramen",
        icon: "fas fa-bowl-food",
        description: "Famous ramen chain known for its tonkotsu ramen served in individual booths for the ultimate focused dining experience.",
        rating: "4.2/5",
        badge: "Casual",
        location: "Multiple Locations",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23fbd38d' width='400' height='200'/><circle fill='%23ffffff' cx='200' cy='100' r='50'/><rect fill='%23c53030' x='170' y='85' width='60' height='30' rx='5'/></svg>"
    },
    {
        title: "Robot Restaurant",
        icon: "fas fa-robot",
        description: "Unique dining experience in Shinjuku combining food with an incredible robot show featuring lights, music, and entertainment.",
        rating: "4.0/5",
        badge: "Unique",
        location: "Shinjuku",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%2368d391' width='400' height='200'/><rect fill='%23ffffff' x='150' y='75' width='100' height='50' rx='25'/><circle fill='%23f56565' cx='200' cy='100' r='15'/></svg>"
    }
];

const activitiesData = [
    {
        title: "Shibuya Crossing",
        icon: "fas fa-road",
        description: "Experience the world's busiest pedestrian crossing. Visit the Shibuya Sky observation deck for aerial views of the organized chaos below.",
        badges: ["Free", "Iconic"],
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23667eea' width='400' height='200'/><circle fill='%23ffffff' cx='200' cy='100' r='40'/><path fill='%23ffd93d' d='M180,100 L200,80 L220,100 L200,120 Z'/></svg>"
    },
    {
        title: "Harajuku Fashion District",
        icon: "fas fa-shopping-bag",
        description: "Explore Tokyo's youth culture and fashion scene. Visit Takeshita Street for unique fashion, accessories, and street food.",
        badges: ["Shopping", "Culture"],
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%2327ae60' width='400' height='200'/><rect fill='%23e74c3c' x='100' y='50' width='200' height='100' rx='10'/><circle fill='%23f39c12' cx='200' cy='100' r='20'/></svg>"
    },
    {
        title: "TeamLab Borderless",
        icon: "fas fa-palette",
        description: "Immersive digital art museum featuring interactive exhibitions that respond to movement and touch. A truly unique experience.",
        badges: ["Art", "Interactive"],
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23e91e63' width='400' height='200'/><circle fill='%23ffffff' cx='200' cy='100' r='50'/><rect fill='%232196f3' x='180' y='80' width='40' height='40' rx='5'/></svg>"
    }
];

const eventsData = [
    {
        title: "Cherry Blossom Festival",
        icon: "fas fa-seedling",
        description: "Spring's most celebrated event when Tokyo's parks burst with pink sakura blossoms. Perfect for hanami (flower viewing) picnics.",
        date: "March - April",
        badge: "Seasonal",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23ff69b4' width='400' height='200'/><circle fill='%23ffb6c1' cx='150' cy='80' r='20'/><circle fill='%23ffb6c1' cx='200' cy='70' r='25'/><circle fill='%23ffb6c1' cx='250' cy='80' r='20'/></svg>"
    },
    {
        title: "Summer Festivals (Matsuri)",
        icon: "fas fa-fire",
        description: "Traditional summer festivals featuring fireworks, food stalls, games, and people wearing beautiful yukatas (summer kimonos).",
        date: "July - August",
        badge: "Traditional",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%23ff4500' width='400' height='200'/><rect fill='%23ffd700' x='150' y='50' width='100' height='100' rx='10'/><circle fill='%23ff0000' cx='200' cy='100' r='30'/></svg>"
    },
    {
        title: "Tokyo Game Show",
        icon: "fas fa-gamepad",
        description: "One of the world's largest video game exhibitions showcasing the latest in gaming technology, VR experiences, and upcoming releases.",
        date: "September",
        badge: "Technology",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect fill='%236a0dad' width='400' height='200'/><rect fill='%23ffffff' x='100' y='75' width='200' height='50' rx='25'/><circle fill='%23ff0000' cx='150' cy='100' r='10'/><circle fill='%2300ff00' cx='250' cy='100' r='10'/></svg>"
    }
];

// Initialize website
function initializeWebsite() {
    console.log('Tokyo Guide Website Initialized');
    
    // Add loading effect to page
    $('body').addClass('loading-complete');
    
    // Initialize tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
    
    // Add click effects to cards
    addCardClickEffects();
    
    // Add counter animation to stats
    animateCounters();
}

// Load attractions section
function loadAttractions() {
    showLoading('attractions');
    
    setTimeout(() => {
        let html = '';
        attractionsData.forEach(attraction => {
            html += createAttractionCard(attraction);
        });
        
        $('#attractions-container').html(html);
        hideLoading('attractions');
        
        // Add animation to cards
        animateCards('#attractions-container .card-custom');
    }, 1000);
}

// Load restaurants section
function loadRestaurants() {
    showLoading('restaurants');
    
    setTimeout(() => {
        let html = '';
        restaurantsData.forEach(restaurant => {
            html += createRestaurantCard(restaurant);
        });
        
        $('#restaurants-container').html(html);
        hideLoading('restaurants');
        
        // Add animation to cards
        animateCards('#restaurants-container .card-custom');
    }, 1500);
}

// Load activities section
function loadActivities() {
    showLoading('activities');
    
    setTimeout(() => {
        let html = '';
        activitiesData.forEach(activity => {
            html += createActivityCard(activity);
        });
        
        $('#activities-container').html(html);
        hideLoading('activities');
        
        // Add animation to cards
        animateCards('#activities-container .card-custom');
    }, 2000);
}

// Load events section
function loadEvents() {
    showLoading('events');
    
    setTimeout(() => {
        let html = '';
        eventsData.forEach(event => {
            html += createEventCard(event);
        });
        
        $('#events-container').html(html);
        hideLoading('events');
        
        // Add animation to cards
        animateCards('#events-container .card-custom');
    }, 2500);
}

// Create attraction card HTML
function createAttractionCard(attraction) {
    const stars = '★'.repeat(Math.floor(attraction.rating));
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card card-custom attraction-card">
                <img src="${attraction.image}" class="card-img-top" alt="${attraction.title}">
                <div class="card-body">
                    <h5 class="card-title">
                        <i class="${attraction.icon} me-2"></i>${attraction.title}
                    </h5>
                    <p class="card-text">${attraction.description}</p>
                    <div class="rating mb-2">
                        ${stars}
                        <span class="ms-2">${attraction.rating}/5</span>
                    </div>
                    <span class="badge badge-custom">${attraction.badge}</span>
                </div>
            </div>
        </div>
    `;
}

// Create restaurant card HTML
function createRestaurantCard(restaurant) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card card-custom restaurant-card">
                <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.title}">
                <div class="card-body">
                    <h5 class="card-title">
                        <i class="${restaurant.icon} me-2"></i>${restaurant.title}
                    </h5>
                    <p class="card-text">${restaurant.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="rating">
                            <i class="fas fa-award me-1"></i>
                            <span>${restaurant.rating}</span>
                        </div>
                        <span class="badge badge-custom">${restaurant.badge}</span>
                    </div>
                    <p class="mt-2"><i class="fas fa-map-marker-alt me-1"></i> ${restaurant.location}</p>
                </div>
            </div>
        </div>
    `;
}

// Create activity card HTML
function createActivityCard(activity) {
    const badgesHtml = activity.badges.map(badge => 
        `<span class="badge badge-custom">${badge}</span>`
    ).join(' ');
    
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card card-custom activity-card">
                <img src="${activity.image}" class="card-img-top" alt="${activity.title}">
                <div class="card-body">
                    <h5 class="card-title">
                        <i class="${activity.icon} me-2"></i>${activity.title}
                    </h5>
                    <p class="card-text">${activity.description}</p>
                    ${badgesHtml}
                </div>
            </div>
        </div>
    `;
}

// Create event card HTML
function createEventCard(event) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card card-custom event-card">
                <img src="${event.image}" class="card-img-top" alt="${event.title}">
                <div class="card-body">
                    <h5 class="card-title">
                        <i class="${event.icon} me-2"></i>${event.title}
                    </h5>
                    <p class="card-text">${event.description}</p>
                    <p class="text-light">
                        <i class="fas fa-calendar me-1"></i>${event.date}
                    </p>
                    <span class="badge badge-custom">${event.badge}</span>
                </div>
            </div>
        </div>
    `;
}

// Show loading animation
function showLoading(section) {
    $(`#${section}-loading`).addClass('show');
}

// Hide loading animation
function hideLoading(section) {
    $(`#${section}-loading`).removeClass('show');
}

// Add scroll progress indicator
function addScrollProgress() {
    // Add progress bar to body
    $('body').prepend(`
        <div class="scroll-indicator">
            <div class="scroll-progress"></div>
        </div>
    `);
    
    // Update progress on scroll
    $(window).scroll(function() {
        const scroll = $(window).scrollTop();
        const height = $(document).height() - $(window).height();
        const progress = (scroll / height) * 100;
        
        $('.scroll-progress').css('width', progress + '%');
    });
}

// Add smooth scrolling for navigation links
function addSmoothScrolling() {
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });
}

// Add navbar scroll effect
function addNavbarScrollEffect() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar-custom').addClass('scrolled');
        } else {
            $('.navbar-custom').removeClass('scrolled');
        }
    });
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    $('.card-custom, .section-title, .intro-content, .stat-card, .contact-card').each(function() {
        observer.observe(this);
    });
}

// Animate cards on load
function animateCards(selector) {
    $(selector).each(function(index) {
        $(this).delay(index * 200).queue(function() {
            $(this).addClass('animate-in').dequeue();
        });
    });
}

// Add click effects to cards
function addCardClickEffects() {
    $(document).on('click', '.card-custom', function(e) {
        // Add ripple effect
        const rect = this.getBoundingClientRect();
        const ripple = $('<span class="ripple"></span>');
        
        ripple.css({
            left: e.clientX - rect.left,
            top: e.clientY - rect.top
        });
        
        $(this).append(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Add pulse effect
        $(this).addClass('pulse');
        setTimeout(() => {
            $(this).removeClass('pulse');
        }, 1000);
    });
}

// Animate counters in stats section
function animateCounters() {
    const counters = $('.stat-number');
    
    const animateCounter = (counter) => {
        const target = counter.text().replace(/[^\d]/g, '');
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            const originalText = counter.text();
            const suffix = originalText.replace(/[\d]/g, '');
            counter.text(Math.floor(current) + suffix);
        }, 40);
    };
    
    // Trigger animation when stats section is visible
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.each(function() {
                    animateCounter($(this));
                });
                statsObserver.disconnect();
            }
        });
    });
    
    const statsSection = document.querySelector('#about');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Additional interactive features
$(document).ready(function() {
    
    // Add hover effect to navigation links
    $('.nav-link').hover(
        function() {
            $(this).addClass('bounce');
        },
        function() {
            $(this).removeClass('bounce');
        }
    );
    
    // Add click effect to buttons
    $('.btn').click(function(e) {
        const button = $(this);
        button.addClass('clicked');
        
        setTimeout(() => {
            button.removeClass('clicked');
        }, 300);
    });
    
    // Add form validation and submission for contact forms
    $('form').submit(function(e) {
        e.preventDefault();
        
        // Show success message
        const successMsg = $('<div class="alert alert-success mt-3">Thank you! We\'ll get back to you soon.</div>');
        $(this).after(successMsg);
        
        // Reset form
        this.reset();
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMsg.fadeOut();
        }, 5000);
    });
    
    // Add search functionality (if search box is added)
    $('#search-input').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        $('.card-custom').each(function() {
            const cardText = $(this).text().toLowerCase();
            if (cardText.includes(searchTerm)) {
                $(this).parent().show();
            } else {
                $(this).parent().hide();
            }
        });
    });
    
    // Add back to top button
    $('body').append('<button id="back-to-top" class="btn btn-custom" style="position: fixed; bottom: 20px; right: 20px; display: none; z-index: 1000; border-radius: 50%; width: 50px; height: 50px;"><i class="fas fa-arrow-up"></i></button>');
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    
    $('#back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    
    // Add keyboard navigation support
    $(document).keydown(function(e) {
        if (e.key === 'Escape') {
            // Close any open modals or overlays
            $('.modal').modal('hide');
        }
        
        if (e.ctrlKey && e.key === 'f') {
            // Focus search box if exists
            $('#search-input').focus();
        }
    });
    
    // Add theme toggle functionality
    const toggleTheme = () => {
        $('body').toggleClass('dark-theme');
        const isDark = $('body').hasClass('dark-theme');
        localStorage.setItem('darkTheme', isDark);
    };
    
    // Load saved theme
    if (localStorage.getItem('darkTheme') === 'true') {
        $('body').addClass('dark-theme');
    }
    
    // Add theme toggle button if desired
    // $('#theme-toggle').click(toggleTheme);
    
    console.log('All interactive features loaded successfully!');
});

// CSS for animations (add to styles.css)
const additionalCSS = `
    .animate-in {
        animation: slideInUp 0.6s ease-out;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        0% {
            width: 0;
            height: 0;
        }
        100% {
            width: 200px;
            height: 200px;
            margin-left: -100px;
            margin-top: -100px;
            opacity: 0;
        }
    }
    
    .clicked {
        transform: scale(0.95);
        transition: transform 0.1s ease;
    }
    
    .dark-theme {
        background-color: #1a1a1a;
        color: #ffffff;
    }
    
    .dark-theme .card-custom {
        background-color: #2d2d2d;
        color: #ffffff;
    }
    
    .dark-theme .bg-light {
        background-color: #2d2d2d !important;
    }
`;

// Inject additional CSS
$('<style>').prop('type', 'text/css').html(additionalCSS).appendTo('head');