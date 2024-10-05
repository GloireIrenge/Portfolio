// Toggle Navigation Menu on Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple alert for demonstration. You can integrate with backend services or APIs.
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});
