// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    // Navigation mobile toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle navigation
    burger?.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger animation
        burger.classList.toggle('toggle');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // If mobile menu is open, close it
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    burger.classList.remove('toggle');
                    
                    navLinks.forEach(link => {
                        link.style.animation = '';
                    });
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Add floating animation to shapes
    const shapes = document.querySelectorAll('.shape');
    if (shapes.length > 0) {
        shapes.forEach((shape, index) => {
            // Add random initial position
            shape.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) rotate(${Math.random() * 20 - 10}deg)`;
        });
    }
    
    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Parallax effect for hero section
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const shapes = heroSection.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                const speed = index * 0.2 + 0.5;
                shape.style.transform = `translate(${Math.random() * 10 - 5}px, ${scrollPosition * speed}px) rotate(${scrollPosition / 100 * (index + 1)}deg)`;
            });
        }
    });
    
    // Typing animation for hero heading
    const heroHeading = document.querySelector('.hero h1');
    if (heroHeading) {
        const text = heroHeading.textContent;
        heroHeading.innerHTML = '';
        
        // Create wrapper for typing animation
        const wrapper = document.createElement('span');
        wrapper.className = 'typing-text';
        heroHeading.appendChild(wrapper);
        
        let i = 0;
        const typingSpeed = 100; // ms per character
        
        function typeWriter() {
            if (i < text.length) {
                wrapper.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Add blinking cursor at the end
                const cursor = document.createElement('span');
                cursor.className = 'typing-cursor';
                cursor.textContent = '|';
                heroHeading.appendChild(cursor);
                
                // Remove cursor after 3 seconds
                setTimeout(() => {
                    cursor.style.display = 'none';
                }, 3000);
            }
        }
        
        // Start typing animation after a small delay
        setTimeout(typeWriter, 500);
    }
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Prepare email data for sending
            const emailData = {
                to_email: "deeper7268@gmail.com",
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            };
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            emailjs.send(
                'service_lat8w6g', // Replace with your EmailJS service ID
                'template_om5k8hc', // Replace with your EmailJS template ID
                emailData
            )
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message with animation
                    const formWrapper = contactForm.parentElement;
                    
                    // Create success message element
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.innerHTML = `
                        <i class="fas fa-check-circle"></i>
                        <h3>Thank you, ${name}!</h3>
                        <p>Your message has been sent successfully. I'll get back to you soon.</p>
                        <button class="btn primary-btn reset-btn">Send Another Message</button>
                    `;
                    
                    // Hide form and show success message
                    contactForm.style.opacity = '0';
                    setTimeout(() => {
                        contactForm.style.display = 'none';
                        formWrapper.appendChild(successMessage);
                        
                        // Animate success message
                        setTimeout(() => {
                            successMessage.style.opacity = '1';
                        }, 100);
                        
                        // Add event listener to reset button
                        const resetBtn = successMessage.querySelector('.reset-btn');
                        resetBtn.addEventListener('click', () => {
                            // Reset form
                            contactForm.reset();
                            
                            // Reset button
                            submitBtn.textContent = originalBtnText;
                            submitBtn.disabled = false;
                            
                            // Hide success message and show form
                            successMessage.style.opacity = '0';
                            setTimeout(() => {
                                successMessage.remove();
                                contactForm.style.display = 'block';
                                setTimeout(() => {
                                    contactForm.style.opacity = '1';
                                }, 100);
                            }, 500);
                        });
                    }, 500);
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    
                    // Restore button state
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                    
                    // Show error message
                    alert("Sorry, there was an error sending your message. Please try again later.");
                });
        });
    }
    
    // Add active class to nav links based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Parallax effect for header
        const header = document.querySelector('header');
        if (scrollPosition > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = (elements, className, threshold = 0.2) => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: threshold });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };
    
    // Apply animations to different elements
    animateOnScroll(document.querySelectorAll('.skill-card'), 'animate', 0.1);
    animateOnScroll(document.querySelectorAll('.project-card'), 'animate', 0.1);
    animateOnScroll(document.querySelectorAll('.contact-item'), 'animate', 0.1);
    animateOnScroll(document.querySelectorAll('.about-image'), 'animate', 0.2);
    animateOnScroll(document.querySelectorAll('.about-text p'), 'animate', 0.2);
    
    // Add mouse move effect to the hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth) - 0.5;
            const y = (clientY / window.innerHeight) - 0.5;
            
            // Move shapes based on mouse position
            const shapes = heroSection.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                const speed = index * 4 + 10;
                const xOffset = x * speed;
                const yOffset = y * speed;
                
                shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
            
            // Subtle movement for hero content
            const heroContent = heroSection.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
            }
        });
    }
    
    // Add css class to indicate when the page is fully loaded
    document.body.classList.add('loaded');
}); 