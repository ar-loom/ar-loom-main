document.addEventListener("DOMContentLoaded", function() {
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
    }, {
      threshold: 0.5 // Trigger when 50% of the target is visible
    });

    // Observe the target
    document.querySelectorAll('p.special2').forEach(item => {
      observer.observe(item);
    });
  });
