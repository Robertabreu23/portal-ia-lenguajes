// Animaciones y efectos interactivos

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-menu a, .btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo aplicar smooth scroll para enlaces internos en la misma página
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Efecto de hover en las tarjetas
    const cards = document.querySelectorAll('.team-card, .language-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animación de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    // Observar elementos que deben animarse
    const animatedElements = document.querySelectorAll('.team-card, .language-card, .stat-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Efecto parallax suave en las estrellas
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const stars = document.querySelector('.stars');
                const stars2 = document.querySelector('.stars2');
                
                if (stars) {
                    stars.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
                if (stars2) {
                    stars2.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });

    // Animación de números en las estadísticas
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalNumber = stat.textContent;
        
        // Solo animar si es un número
        if (!isNaN(parseInt(finalNumber))) {
            stat.textContent = '0';
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateNumber(stat, parseInt(finalNumber));
                        observer.unobserve(stat);
                    }
                });
            }, observerOptions);
            
            observer.observe(stat);
        }
    });

    function animateNumber(element, target) {
        const duration = 2000; // 2 segundos
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current += increment;
            
            if (step >= steps) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, duration / steps);
    }

    // Menú móvil responsive
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav-menu');
        const navContainer = document.querySelector('.nav-container');
        
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-button')) {
            const menuButton = document.createElement('button');
            menuButton.className = 'mobile-menu-button';
            menuButton.innerHTML = '☰';
            menuButton.style.cssText = `
                display: block;
                background: none;
                border: none;
                color: var(--primary);
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
            `;
            
            navContainer.insertBefore(menuButton, nav);
            
            menuButton.addEventListener('click', () => {
                nav.classList.toggle('mobile-menu-open');
            });
        }
    };

    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // Efecto de brillo en los botones
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });

    // Lazy loading de imágenes
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
    
    console.log('✨ Portal de IA cargado exitosamente');
});

// Añadir clase para animaciones CSS
const style = document.createElement('style');
style.textContent = `
    .fade-in-visible {
        animation: fadeInUp 0.6s ease forwards !important;
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            right: -100%;
            background: rgba(10, 14, 39, 0.98);
            backdrop-filter: blur(10px);
            width: 250px;
            height: calc(100vh - 70px);
            flex-direction: column;
            padding: 2rem;
            transition: right 0.3s ease;
            border-left: 1px solid rgba(0, 212, 255, 0.2);
        }
        
        .nav-menu.mobile-menu-open {
            right: 0;
        }
    }
`;
document.head.appendChild(style);
