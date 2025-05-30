// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Terminal typing animation
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize terminal animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate hero section commands
    const heroCommands = document.querySelectorAll('.hero .command');
    heroCommands.forEach((cmd, index) => {
        setTimeout(() => {
            typeWriter(cmd, cmd.textContent);
        }, index * 1000);
    });

    // Animate card commands
    const cardCommands = document.querySelectorAll('.card .command');
    cardCommands.forEach((cmd, index) => {
        setTimeout(() => {
            typeWriter(cmd, cmd.textContent);
        }, 2000 + index * 500);
    });

    startMatrixRain();
});

// Modal functionality
const modal = document.getElementById('investment-modal');
const modalTrigger = document.querySelector('.modal-trigger');
const closeModal = document.querySelector('.close-modal');

modalTrigger.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animate modal content
    const modalCommands = modal.querySelectorAll('.command');
    modalCommands.forEach((cmd, index) => {
        setTimeout(() => {
            typeWriter(cmd, cmd.textContent);
        }, index * 500);
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add cursor blink animation to prompts
const prompts = document.querySelectorAll('.prompt');
prompts.forEach(prompt => {
    prompt.innerHTML += '<span class="cursor">_</span>';
});

// Add hover effect to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const command = card.querySelector('.command');
        const originalText = command.textContent;
        command.textContent = '> ' + originalText;
    });
    
    card.addEventListener('mouseleave', () => {
        const command = card.querySelector('.command');
        command.textContent = command.textContent.replace('> ', '');
    });
});

// Matrix Rain Animation
function startMatrixRain() {
    const container = document.querySelector('.matrix-animation');
    if (!container) return;
    console.log('Matrix animation container found, creating canvas...');
    // Remove any existing canvas
    container.innerHTML = '';
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Matrix characters
    const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 18;
    let columns, drops;

    function resize() {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(1);
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
        ctx.fillStyle = 'rgba(10,10,10,0.6)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px JetBrains Mono, monospace';
        ctx.fillStyle = '#3b82f6';
        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(draw, 50);
}

function checkWorkPassword() {
    const password = document.getElementById('work-password').value;
    const workContent = document.getElementById('work-content');
    
    // Replace 'your-password-here' with your actual password
    if (password === 'your-password-here') {
        workContent.style.display = 'block';
        document.querySelector('.password-protection').style.display = 'none';
    } else {
        alert('Incorrect password');
    }
} 