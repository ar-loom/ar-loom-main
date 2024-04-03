    window.addEventListener('scroll', function() {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Calculate styles based on scroll position
      const fontSize = 20 + scrollPosition / 20; // Adjust font size based on scroll position
      const opacity = Math.min(scrollPosition / 100, 1); // Fade in based on scroll position

      // Apply styles to the element
      const element = document.querySelector('.special2');
      element.style.fontSize = `${fontSize}px`;
      element.style.opacity = opacity;
        
  });
