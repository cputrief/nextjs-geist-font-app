// ===== DOM Content Loaded Event =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initPreloader();
    initSmoothScrolling();
    initSkillsAnimation();
    initContactForm();
    initDarkModeToggle();
    initScrollToTop();
    initNavbarScroll();
    initTypingAnimation();
    
    // Add fade-in animations to sections
    initScrollAnimations();
});

// ===== Preloader Functionality =====
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    // Hide preloader after page load
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
            // Remove preloader from DOM after animation
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1000); // Show preloader for at least 1 second
    });
}

// ===== Smooth Scrolling for Navigation Links =====
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

// ===== Skills Progress Bar Animation =====
function initSkillsAnimation() {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');
    let skillsAnimated = false;
    
    function animateSkills() {
        if (skillsAnimated) return;
        
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 200);
        });
        
        skillsAnimated = true;
    }
    
    // Intersection Observer for skills animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ===== Contact Form Validation and Submission =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();
        
        // Clear previous messages
        formMessage.innerHTML = '';
        
        // Validation
        let isValid = true;
        const errors = [];
        
        // Name validation
        if (name === '') {
            errors.push('Nama harus diisi.');
            isValid = false;
        } else if (name.length < 2) {
            errors.push('Nama minimal 2 karakter.');
            isValid = false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            errors.push('Email harus diisi.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            errors.push('Format email tidak valid.');
            isValid = false;
        }
        
        // Message validation
        if (message === '') {
            errors.push('Pesan harus diisi.');
            isValid = false;
        } else if (message.length < 10) {
            errors.push('Pesan minimal 10 karakter.');
            isValid = false;
        }
        
        // Display validation results
        if (!isValid) {
            displayFormMessage('danger', 'Terjadi kesalahan:', errors);
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Mengirim...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form submission logic)
        setTimeout(() => {
            try {
                // Here you would typically send the data to your server
                // For demo purposes, we'll just show a success message
                
                displayFormMessage('success', 'Pesan berhasil dikirim!', [
                    'Terima kasih atas pesan Anda.',
                    'Saya akan merespons dalam 24 jam.'
                ]);
                
                // Reset form
                contactForm.reset();
                
            } catch (error) {
                displayFormMessage('danger', 'Terjadi kesalahan saat mengirim pesan.', [
                    'Silakan coba lagi atau hubungi langsung melalui email.'
                ]);
            } finally {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        }, 2000);
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Remove invalid class when user starts typing
            this.classList.remove('is-invalid');
            const feedback = this.parentNode.querySelector('.invalid-feedback');
            if (feedback) {
                feedback.style.display = 'none';
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    switch (field.type) {
        case 'text':
            if (field.name === 'name') {
                if (value === '') {
                    errorMessage = 'Nama harus diisi.';
                    isValid = false;
                } else if (value.length < 2) {
                    errorMessage = 'Nama minimal 2 karakter.';
                    isValid = false;
                }
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value === '') {
                errorMessage = 'Email harus diisi.';
                isValid = false;
            } else if (!emailRegex.test(value)) {
                errorMessage = 'Format email tidak valid.';
                isValid = false;
            }
            break;
            
        case 'textarea':
            if (value === '') {
                errorMessage = 'Pesan harus diisi.';
                isValid = false;
            } else if (value.length < 10) {
                errorMessage = 'Pesan minimal 10 karakter.';
                isValid = false;
            }
            break;
    }
    
    // Update field appearance
    const feedback = field.parentNode.querySelector('.invalid-feedback');
    if (!isValid) {
        field.classList.add('is-invalid');
        if (feedback) {
            feedback.textContent = errorMessage;
            feedback.style.display = 'block';
        }
    } else {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
        if (feedback) {
            feedback.style.display = 'none';
        }
    }
    
    return isValid;
}

function displayFormMessage(type, title, messages) {
    const formMessage = document.getElementById('formMessage');
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    
    let messageHtml = `
        <div class="alert ${alertClass}" role="alert">
            <strong>${title}</strong>
    `;
    
    if (Array.isArray(messages)) {
        messageHtml += '<ul class="mb-0 mt-2">';
        messages.forEach(msg => {
            messageHtml += `<li>${msg}</li>`;
        });
        messageHtml += '</ul>';
    } else {
        messageHtml += `<p class="mb-0 mt-2">${messages}</p>`;
    }
    
    messageHtml += '</div>';
    formMessage.innerHTML = messageHtml;
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.innerHTML = '';
        }, 5000);
    }
}

// ===== Dark Mode Toggle =====
function initDarkModeToggle() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateDarkModeButton(true);
    }
    
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        // Save preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        updateDarkModeButton(isDarkMode);
        
        // Add transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
}

function updateDarkModeButton(isDarkMode) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.textContent = isDarkMode ? 'Light' : 'Dark';
    darkModeToggle.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode');
}

// ===== Scroll to Top Button =====
function initScrollToTop() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Navbar Scroll Effect =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== Typing Animation for Hero Section =====
function initTypingAnimation() {
    const typingElement = document.querySelector('.hero-content h2');
    if (!typingElement) return;
    
    const texts = [
        'Web Developer | UI/UX Designer',
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    // Start typing animation after a delay
    setTimeout(typeText, 1000);
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.portfolio-item, .skill-item, .contact-info');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ===== Portfolio Modal Enhancement =====
document.addEventListener('DOMContentLoaded', function() {
    const portfolioModals = document.querySelectorAll('[id^="portfolioModal"]');
    
    portfolioModals.forEach(modal => {
        modal.addEventListener('shown.bs.modal', function() {
            // Add focus to modal for accessibility
            this.focus();
        });
        
        modal.addEventListener('hidden.bs.modal', function() {
            // Return focus to trigger button
            const triggerButton = document.querySelector(`[data-bs-target="#${this.id}"]`);
            if (triggerButton) {
                triggerButton.focus();
            }
        });
    });
});

// ===== Form Auto-save (Optional Enhancement) =====
function initFormAutoSave() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    // Load saved data
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(`form_${input.name}`);
        if (savedValue) {
            input.value = savedValue;
        }
        
        // Save on input
        input.addEventListener('input', function() {
            localStorage.setItem(`form_${this.name}`, this.value);
        });
    });
    
    // Clear saved data on successful submission
    contactForm.addEventListener('submit', function() {
        inputs.forEach(input => {
            localStorage.removeItem(`form_${input.name}`);
        });
    });
}

// ===== Keyboard Navigation Enhancement =====
document.addEventListener('keydown', function(e) {
    // ESC key to close modals
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal.show');
        if (openModal) {
            const bsModal = bootstrap.Modal.getInstance(openModal);
            if (bsModal) {
                bsModal.hide();
            }
        }
    }
    
    // Ctrl/Cmd + D for dark mode toggle
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        document.getElementById('darkModeToggle').click();
    }
});

// ===== Performance Optimization =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle scroll events here if needed
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// ===== Error Handling =====
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    
    // Show user-friendly error message for critical errors
    if (e.error && e.error.message) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-danger position-fixed';
        errorMessage.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 300px;';
        errorMessage.innerHTML = `
            <strong>Terjadi kesalahan:</strong><br>
            <small>Silakan refresh halaman atau hubungi administrator.</small>
            <button type="button" class="btn-close ms-2" onclick="this.parentElement.remove()"></button>
        `;
        
        document.body.appendChild(errorMessage);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (errorMessage.parentNode) {
                errorMessage.remove();
            }
        }, 10000);
    }
});

// ===== Service Worker Registration (Optional for PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment if you want to add PWA functionality
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// ===== Analytics Integration (Optional) =====
function trackEvent(eventName, eventData = {}) {
    // Integrate with your analytics service
    // Example: Google Analytics, Mixpanel, etc.
    console.log('Event tracked:', eventName, eventData);
    
    // Example Google Analytics integration:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// Track form submissions
document.addEventListener('submit', function(e) {
    if (e.target.id === 'contactForm') {
        trackEvent('form_submission', {
            form_name: 'contact_form'
        });
    }
});

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary')) {
        trackEvent('button_click', {
            button_text: e.target.textContent.trim(),
            button_location: e.target.closest('section')?.id || 'unknown'
        });
    }
});

// ===== Accessibility Enhancements =====
function initAccessibility() {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only sr-only-focusable position-absolute';
    skipLink.style.cssText = 'top: 10px; left: 10px; z-index: 10000; padding: 8px 16px; background: #007bff; color: white; text-decoration: none; border-radius: 4px;';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const heroSection = document.getElementById('home');
    if (heroSection) {
        heroSection.setAttribute('id', 'main-content');
        heroSection.setAttribute('role', 'main');
    }
    
    // Enhance focus management
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Initialize accessibility enhancements
initAccessibility();

// ===== Console Welcome Message =====
console.log(`
🚀 Portfolio Website Loaded Successfully!
📧 Contact: ahmad.rizki@email.com
🌐 Built with HTML5, CSS3, JavaScript & Bootstrap 5
💡 Dark mode: Ctrl/Cmd + D
`);
