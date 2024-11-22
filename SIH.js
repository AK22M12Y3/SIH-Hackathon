// app.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic content loading animation
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.animate-on-scroll');
    let windowHeight = window.innerHeight;

    elements.forEach(element => {
        let positionFromTop = element.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fadeInUp');
        }
    });
});