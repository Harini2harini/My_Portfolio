// Main JavaScript for Portfolio

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Smooth Scroll for Navigation Links
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

// Render Skills
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    portfolioData.skills.forEach((skillGroup, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card reveal';
        skillCard.style.transitionDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <div class="skill-icon">${skillGroup.icon}</div>
            <h3 class="text-xl font-semibold text-slate-800 mb-3">${skillGroup.category}</h3>
            <ul class="space-y-2">
                ${skillGroup.items.map(item => `
                    <li class="flex items-center text-slate-600">
                        <svg class="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        `;
        
        skillsContainer.appendChild(skillCard);
    });
}

// Render Experience
function renderExperience() {
    const experienceContainer = document.getElementById('experience-container');
    
    portfolioData.experience.forEach((exp, index) => {
        const expCard = document.createElement('div');
        expCard.className = 'experience-card reveal';
        expCard.style.transitionDelay = `${index * 0.2}s`;
        
        expCard.innerHTML = `
            <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div class="mb-2 md:mb-0">
                    <h3 class="text-2xl font-bold text-slate-800">${exp.title}</h3>
                    <p class="text-lg text-purple-600 font-semibold">${exp.company}</p>
                    ${exp.location ? `<p class="text-slate-500">${exp.location}</p>` : ''}
                </div>
                <span class="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                    ${exp.period}
                </span>
            </div>
            <p class="text-slate-600 mb-4">${exp.description}</p>
            <div class="mb-4">
                <h4 class="font-semibold text-slate-800 mb-2">Key Achievements:</h4>
                <ul class="space-y-2">
                    ${exp.achievements.map(achievement => `
                        <li class="flex items-start text-slate-600">
                            <svg class="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span>${achievement}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="flex flex-wrap gap-2">
                ${exp.technologies.map(tech => `
                    <span class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        ${tech}
                    </span>
                `).join('')}
            </div>
        `;
        
        experienceContainer.appendChild(expCard);
    });
}

// Render Projects
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    portfolioData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card reveal';
        projectCard.style.transitionDelay = `${index * 0.15}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <span class="text-6xl">${project.icon}</span>
            </div>
            <div class="project-content">
                <div class="mb-3">
                    <span class="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                        ${project.category}
                    </span>
                </div>
                <h3 class="text-xl font-bold text-slate-800 mb-3">${project.title}</h3>
                <p class="text-slate-600 mb-4">${project.description}</p>
                
                <div class="mb-4">
                    <h4 class="text-sm font-semibold text-slate-700 mb-2">Features:</h4>
                    <ul class="space-y-1">
                        ${project.features.slice(0, 3).map(feature => `
                            <li class="text-sm text-slate-600 flex items-start">
                                <svg class="w-4 h-4 mr-1 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="mb-4">
                    ${project.technologies.map(tech => `
                        <span class="project-tag">${tech}</span>
                    `).join('')}
                </div>
                
                <div class="flex gap-3">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" class="flex items-center text-slate-600 hover:text-purple-600 transition">
                            <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Code
                        </a>
                    ` : ''}
                    ${project.live ? `
                        <a href="${project.live}" target="_blank" class="flex items-center text-slate-600 hover:text-purple-600 transition">
                            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                            Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-purple-600');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-purple-600');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Initialize Portfolio
function initPortfolio() {
    renderSkills();
    renderExperience();
    renderProjects();
    reveal(); // Initial reveal for elements in viewport
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}

// Add typing effect to hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const subtitle = document.querySelector('.hero-subtitle');
//     const originalText = subtitle.textContent;
//     typeWriter(subtitle, originalText, 80);
// });