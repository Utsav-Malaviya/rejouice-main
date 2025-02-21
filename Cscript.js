document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };
        
        console.log('Form submitted:', formData);
        
        alert('Thank you for your message! We will get back to you soon.');
        
        form.reset();
    });
});