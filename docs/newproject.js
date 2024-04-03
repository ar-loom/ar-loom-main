 // Setup IntersectionObserver for fade-in effects
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1; // Fade in
                entry.target.style.transform = "scale(1)"; // Zoom in to full size
            } else {
                entry.target.style.opacity = 0; // Fade out
                entry.target.style.transform = "scale(0.5)"; // Zoom out to half size
            }
        });
    }, { threshold: 0.5 });

    // Observe all elements with class 'special2'
    document.querySelectorAll('.special2').forEach(item => {
        observer.observe(item);
    });
}
