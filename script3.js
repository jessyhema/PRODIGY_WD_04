document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        const phone = document.getElementById('phone').value;

        // Basic validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all required fields.');
            return;
        }

        // Simulate form submission (replace alert with actual submission logic)
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');

        // Reset form
        contactForm.reset();
    });

    // Optional: Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.7
    };
    let observer = new IntersectionObserver(navCheck, options);

    function navCheck(entries) {
        entries.forEach(entry => {
            const id = entry.target.id;
            if (entry.isIntersecting) {
                document.querySelector(`header nav ul li a[href="#${id}"]`).classList.add('active');
            } else {
                document.querySelector(`header nav ul li a[href="#${id}"]`).classList.remove('active');
            }
        });
    }

    sections.forEach(section => {
        observer.observe(section);
    });
});
