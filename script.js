// Portfolio JavaScript functionality

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Offset for header
            behavior: 'smooth'
        });
        
        // Close mobile menu after clicking a link
        const navLinks = document.querySelector('.navigation');
        if (navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
}

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            
            // Clear form
            contactForm.reset();
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.textContent = `Thanks, ${name}! Your message has been sent.`;
            
            const formContainer = document.querySelector('.contact-form');
            formContainer.appendChild(successMsg);
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                formContainer.removeChild(successMsg);
            }, 5000);
        });
    }
});