// Initialize AOS Library for scroll animations
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ 
        duration: 1000, 
        once: true 
    });

    // 1. Initialize 3D Coverflow Swiper for Projects
    const projectsSwiper = new Swiper('.projects-swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 0,
        loop: true,
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: '.projects-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.projects-next',
            prevEl: '.projects-prev',
        },
        keyboard: {
            enabled: true,
        }
    });

    // 2. Initialize 3D Coverflow Swiper for Education
    const educationSwiper = new Swiper('.education-swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 0,
        loop: false,
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 220,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: '.education-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.education-next',
            prevEl: '.education-prev',
        },
        keyboard: {
            enabled: true,
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});