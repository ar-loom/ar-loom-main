window.addEventListener('scroll', function() {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Determine when the fade-in and fade-out should occur
      const fadeInStart = 100; // Scroll position where fade-in starts
      const fadeOutStart = 300; // Scroll position where fade-out starts

      // Calculate opacity based on scroll position
      let opacity;
      if (scrollPosition < fadeInStart) {
        opacity = 0; // Hide if before fade-in start
      } else if (scrollPosition < fadeOutStart) {
        opacity = (scrollPosition - fadeInStart) / (fadeOutStart - fadeInStart); // Fade in
      } else {
        opacity = 1 - (scrollPosition - fadeOutStart) / (fadeOutStart - fadeInStart); // Fade out
      }

      // Apply opacity to elements with the special2 class
      const special2Elements = document.querySelectorAll('.special2');
      special2Elements.forEach(function(element) {
        element.style.opacity = opacity;
      });
    });
