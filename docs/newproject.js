  window.addEventListener('scroll', function() {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Get all elements with the special2 class
      const special2Elements = document.querySelectorAll('.special2');

      // Loop through each element and adjust opacity and font size
      special2Elements.forEach(function(element, index) {
        // Calculate when the fade-in and fade-out should occur for each element
        const fadeInStart = index * 100; // Adjust this value to control when fade-in starts
        const fadeOutStart = fadeInStart + 200; // Adjust this value to control when fade-out starts

        // Calculate opacity based on scroll position
        let opacity;
        if (scrollPosition < fadeInStart) {
          opacity = 0; // Hide if before fade-in start
        } else if (scrollPosition < fadeOutStart) {
          opacity = (scrollPosition - fadeInStart) / (fadeOutStart - fadeInStart); // Fade in
        } else {
          opacity = 1 - (scrollPosition - fadeOutStart) / (fadeOutStart - fadeInStart); // Fade out
        }

        // Apply opacity to the element
        element.style.opacity = opacity;

        // Adjust font size based on scroll position
        const fontSize = 20 + opacity * 10; // Adjust this value to control font size change
        element.style.fontSize = fontSize + 'px';
