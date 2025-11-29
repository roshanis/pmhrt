// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from(".hero-content > *", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Section Title Animations
gsap.utils.toArray(".section-title").forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Card Animations
gsap.utils.toArray(".card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: "back.out(1.7)"
    });
});

// Myth Buster Animation
gsap.utils.toArray(".myth-buster").forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Country Card Animation
gsap.utils.toArray(".country-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: "back.out(1.2)"
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Download Discussion Guide
document.addEventListener('DOMContentLoaded', function () {
    const downloadButtons = document.querySelectorAll('.cta-button');
    downloadButtons.forEach(button => {
        if (button.textContent.includes('Download Discussion Guide')) {
            button.addEventListener('click', function () {
                window.open('discussion-guide.html', '_blank');
            });
        }
    });
});
