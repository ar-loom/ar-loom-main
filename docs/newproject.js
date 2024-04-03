const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Add class for fade in animation
        } else {
            entry.target.classList.remove('fade-in'); // Remove class for fade out animation
        }
    });
}, { threshold: 0.5 });

// Observe all elements with class 'special2'
document.querySelectorAll('.special2').forEach(item => {
    observer.observe(item);
});

