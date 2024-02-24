function openCity(evt, cityName) {
    // Hide all tab contents and remove "show" class
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Hide the content
        tabcontent[i].classList.remove("show"); // If you're using this for additional styling
    }

    // Remove "active" class from all tab links
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block"; // Show the content
    document.getElementById(cityName).classList.add("show"); // If you're using this for additional styling
    evt.currentTarget.className += " active"; // Highlight the active tab
}


// Function to handle clicking outside tabs to reset them
function resetTabs() {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
}

// Initialize tabs and add event listeners
function initTabs() {
    // Add click event listener for resetting tabs when clicking outside
    document.addEventListener("click", function() {
        resetTabs();
    }); 

    function initTabs() {
        // Existing setup code...
    
        // Attach event listeners to tab buttons
        attachButtonListeners();
    }
    
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

// Call initTabs to setup everything when the document is fully loaded
document.addEventListener("DOMContentLoaded", initTabs);
