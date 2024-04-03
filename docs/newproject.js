 function attachButtonListeners() {
        var tablinks = document.getElementsByClassName("tablinks");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].addEventListener('click', function(evt) {
                var cityName = this.getAttribute("data-city"); // Assuming you use a data attribute to store the city name
                openCity(cityName);
                evt.preventDefault(); // Prevent default button behavior
            });
        }
    }
    

    // Prevent clicks on the tab from triggering the reset
    document.querySelector(".tab").addEventListener("click", function(event) {
        event.stopPropagation();
    });

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
