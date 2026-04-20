// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Initialize AOS animations
AOS.init({
    duration: 1000,
});