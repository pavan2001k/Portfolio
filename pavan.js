// Contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending data (you can replace this with actual backend API)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Show success message or clear form
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
});
