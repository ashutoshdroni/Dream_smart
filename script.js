// ==================== ULTRA OPTIMIZED DATA ====================
const teamMembers = {
    'Rajesh Kumar': {
        name: 'Rajesh Kumar',
        role: 'Senior Civil Engineer',
        experience: '15+ Years Experience',
        email: 'rajesh.kumar@dreamsmart.com',
        phone: '+91 98765-43210',
        location: 'Ferozepur City, Punjab',
        specialization: 'Structural Engineering & Project Management',
        education: 'M.Tech in Civil Engineering, IIT Delhi',
        about: 'Rajesh is a highly experienced civil engineer with expertise in structural design, project planning, and quality control. He has successfully led multiple large-scale construction projects across North India.',
        skills: ['Structural Analysis & Design', 'AutoCAD & Revit', 'Project Management', 'Quality Assurance', 'Team Leadership'],
        projects: ['K.P. College Main Building', 'Veer Nagar Residential Complex', 'Industrial Warehouse - Phase 2'],
        certifications: ['PMP Certified', 'Chartered Engineer (IE India)', 'Green Building Certification']
    },
    'Rakesh Kumar': {
        name: 'Rakesh Kumar',
        role: 'Project Manager',
        experience: '12+ Years Experience',
        email: 'rakesh.kumar@dreamsmart.com',
        phone: '+91 98765-43211',
        location: 'Ferozepur City, Punjab',
        specialization: 'Construction Management & Site Supervision',
        education: 'B.Tech in Civil Engineering, Punjab University',
        about: 'Rakesh specializes in project coordination, resource management, and ensuring timely project delivery. His attention to detail and leadership skills make him an invaluable asset to the team.',
        skills: ['Project Planning', 'Resource Management', 'Budget Control', 'Site Supervision', 'Vendor Coordination'],
        projects: ['Smart City Initiative Projects', 'Highway Construction - NH 15', 'Multiple Residential Projects'],
        certifications: ['PRINCE2 Practitioner', 'Construction Safety Officer', 'MS Project Specialist']
    },
    'Raj Kumar': {
        name: 'Raj Kumar',
        role: 'Site Engineer',
        experience: '8+ Years Experience',
        email: 'raj.kumar@dreamsmart.com',
        phone: '+91 98765-43212',
        location: 'Ferozepur City, Punjab',
        specialization: 'On-Site Construction & Quality Control',
        education: 'Diploma in Civil Engineering',
        about: 'Raj is responsible for day-to-day site operations, ensuring that construction activities are carried out according to specifications and safety standards. His hands-on approach ensures quality execution.',
        skills: ['Site Management', 'Quality Control', 'Material Testing', 'Safety Compliance', 'Technical Documentation'],
        projects: ['Residential Villa Construction', 'Commercial Complex - Phase 1', 'School Building Renovation'],
        certifications: ['Site Safety Supervisor', 'Quality Control Inspector', 'First Aid Certified']
    }
};

const projectsData = {
    'project1': {
        title: 'K.P. College Main Building',
        image: 'images/K.P  colg front.jpg',
        location: 'Ferozepur City, Punjab',
        shortDescription: 'Modern educational facility with state-of-the-art infrastructure.',
        fullDescription: 'The K.P. College Main Building project represents our commitment to creating modern educational spaces. This three-story structure combines functional design with aesthetic appeal, providing students and faculty with an inspiring learning environment.',
        details: {'Project Type': 'Educational Institution', 'Built Area': '25,000 sq ft', 'Duration': '18 months', 'Status': 'Completed', 'Year': '2023', 'Client': 'K.P. Educational Trust'},
        features: ['Spacious classrooms with modern furniture', 'Advanced laboratory facilities', 'Central air conditioning system', 'Energy-efficient lighting', 'Wheelchair accessible ramps', 'Fire safety systems', 'Eco-friendly construction materials'],
        challenges: ['Working within educational campus constraints', 'Meeting strict deadline for academic year', 'Maintaining quality while optimizing costs'],
        outcome: 'Successfully delivered a modern educational facility that enhances the learning experience for over 1000 students. The project was completed on time and received appreciation from the educational trust.'
    },
    'project2': {
        title: 'Dream Homes Residential Complex',
        image: 'images/front3301411.jpg',
        location: 'Ferozepur City, Punjab',
        shortDescription: 'Luxury residential complex with modern amenities and sustainable design.',
        fullDescription: 'Dream Homes is a premium residential project featuring contemporary architecture and world-class amenities. The complex consists of 3BHK and 4BHK apartments designed for comfortable living with a focus on natural light and ventilation.',
        details: {'Project Type': 'Residential Complex', 'Built Area': '1,50,000 sq ft', 'Total Units': '48 Apartments', 'Duration': '24 months', 'Status': 'Completed', 'Year': '2024', 'Client': 'Dream Developers Pvt. Ltd.'},
        features: ['Modern apartment layouts (3BHK & 4BHK)', 'Clubhouse with gym and swimming pool', 'Children\'s play area and park', '24/7 security with CCTV surveillance', 'Covered parking for all residents', 'Rain water harvesting system', 'Solar panel installation', 'High-speed elevators'],
        challenges: ['Complex foundation work in mixed soil conditions', 'Coordinating multiple sub-contractors', 'Implementing sustainable building practices'],
        outcome: 'Created a sustainable living community that has set new standards for residential construction in the region. All units were sold within 6 months of completion, showcasing the quality of our work.'
    },
    'project3': {
        title: 'Commercial Hub - Phase 1',
        image: 'images/FRONT11102.jpg',
        location: 'Ferozepur City, Punjab',
        shortDescription: 'Multi-purpose commercial complex designed for retail and office spaces.',
        fullDescription: 'The Commercial Hub project is a modern commercial complex designed to accommodate retail shops on the ground floor and office spaces on upper floors. The building features contemporary architecture with emphasis on energy efficiency.',
        details: {'Project Type': 'Commercial Complex', 'Built Area': '35,000 sq ft', 'Floors': '4 Stories', 'Duration': '16 months', 'Status': 'Completed', 'Year': '2023', 'Client': 'City Commercial Ventures'},
        features: ['Ground floor retail spaces (15 units)', 'Office spaces on upper floors', 'Centralized HVAC system', 'High-speed internet infrastructure', 'Multiple entry/exit points', 'Ample parking space', 'Backup power supply', 'Modern glass façade'],
        challenges: ['Urban location with limited space', 'Managing traffic during construction', 'Installing modern building systems'],
        outcome: 'Delivered a versatile commercial space that has attracted premium tenants. The building has become a landmark in the commercial district with 100% occupancy rate.'
    },
    'project4': {
        title: 'Industrial Warehouse Complex',
        image: 'images/ANGLE11103.jpg',
        location: 'Ferozepur City, Punjab',
        shortDescription: 'Large-scale industrial warehouse with advanced storage systems.',
        fullDescription: 'This industrial warehouse project showcases our expertise in constructing large-span structures. The facility is designed for efficient logistics operations with modern material handling systems and storage solutions.',
        details: {'Project Type': 'Industrial Warehouse', 'Built Area': '80,000 sq ft', 'Storage Capacity': '50,000 metric tons', 'Duration': '14 months', 'Status': 'Completed', 'Year': '2024', 'Client': 'Punjab Logistics Ltd.'},
        features: ['High-ceiling open storage area', 'Advanced racking systems', 'Loading docks with hydraulic platforms', 'Climate-controlled sections', 'Fire detection and suppression systems', 'Office and staff facilities', 'Heavy-duty flooring', 'Wide access roads for trucks'],
        challenges: ['Engineering large-span roof structure', 'Meeting industrial safety standards', 'Quick project turnaround time'],
        outcome: 'Successfully delivered a state-of-the-art warehouse facility that significantly improved the client\'s logistics operations. The project demonstrated our capability in industrial construction.'
    }
};

// ==================== ULTRA FAST DOM CACHE ====================
const DOM = {};
const modals = {};

// ==================== INSTANT INITIALIZATION ====================
function initializeDOM() {
    modals.login = document.getElementById('loginModal');
    modals.signup = document.getElementById('signupModal');
    modals.enrollment = document.getElementById('enrollmentModal');
    
    DOM.menuToggle = document.getElementById('menuToggle');
    DOM.mobileSidebar = document.getElementById('mobileSidebar');
    DOM.sidebarOverlay = document.getElementById('sidebarOverlay');
    DOM.progressBar = document.getElementById('progress-bar');
    DOM.progressContainer = document.getElementById('progress-container');
}

// ==================== INSTANT MODAL MANAGEMENT ====================
const toggleModal = (name, show) => {
    const modal = modals[name];
    if (!modal) return;
    
    modal.style.display = show ? 'flex' : 'none';
    modal.setAttribute('aria-hidden', !show);
    document.body.style.overflow = show ? 'hidden' : 'auto';
};

const openLoginModal = () => toggleModal('login', true);
const closeLoginModal = () => { toggleModal('login', false); clearFormErrors('loginForm'); };
const openSignupModal = () => toggleModal('signup', true);
const closeSignupModal = () => { toggleModal('signup', false); clearFormErrors('signupForm'); };
const switchToSignup = () => { closeLoginModal(); openSignupModal(); };
const switchToLogin = () => { closeSignupModal(); openLoginModal(); };
const openEnrollmentModal = () => toggleModal('enrollment', true);
const closeEnrollmentModal = () => toggleModal('enrollment', false);

// ==================== ULTRA FAST TEAM PROFILE ====================
function showTeamProfile(memberName) {
    const member = teamMembers[memberName];
    if (!member) return;

    let modal = modals.teamProfile || document.getElementById('teamProfileModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'teamProfileModal';
        modal.className = 'team-profile-modal';
        modal.innerHTML = '<div class="team-profile-content"></div>';
        document.body.appendChild(modal);
        modals.teamProfile = modal;
        modal.addEventListener('click', (e) => { if (e.target === modal) closeTeamProfile(); });
    }

    const content = modal.querySelector('.team-profile-content');
    const initials = member.name.split(' ').map(n => n[0]).join('');
    
    content.innerHTML = `
        <span class="modal-close-btn" onclick="closeTeamProfile()">&times;</span>
        <div class="profile-header">
            <div class="profile-avatar">${initials}</div>
            <h2>${member.name}</h2>
            <p class="role">${member.role}</p>
            <p class="experience">${member.experience}</p>
        </div>
        <div class="profile-section">
            <h3>About</h3>
            <p>${member.about}</p>
        </div>
        <div class="profile-section">
            <h3>Contact Information</h3>
            <div class="contact-info-item"><strong>Email:</strong><span>${member.email}</span></div>
            <div class="contact-info-item"><strong>Phone:</strong><span>${member.phone}</span></div>
            <div class="contact-info-item"><strong>Location:</strong><span>${member.location}</span></div>
        </div>
        <div class="profile-section">
            <h3>Education & Specialization</h3>
            <p><strong>Education:</strong> ${member.education}</p>
            <p><strong>Specialization:</strong> ${member.specialization}</p>
        </div>
        <div class="profile-section">
            <h3>Core Skills</h3>
            <ul>${member.skills.map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
        <div class="profile-section">
            <h3>Key Projects</h3>
            <ul>${member.projects.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>
        <div class="profile-section">
            <h3>Certifications</h3>
            <ul>${member.certifications.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>
    `;

    requestAnimationFrame(() => {
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
}

const closeTeamProfile = () => {
    const modal = modals.teamProfile || document.getElementById('teamProfileModal');
    if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }
};

// ==================== INSTANT PROJECT DETAILS ====================
function showProjectDetails(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    let modal = modals.project || document.getElementById('projectModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'projectModal';
        modal.className = 'project-modal';
        modal.innerHTML = '<div class="project-modal-content"></div>';
        document.body.appendChild(modal);
        modals.project = modal;
        modal.addEventListener('click', (e) => { if (e.target === modal) closeProjectModal(); });
    }

    const content = modal.querySelector('.project-modal-content');
    
    // Pre-build all HTML strings for maximum speed
    const detailsHtml = Object.entries(project.details)
        .map(([k, v]) => `<div class="project-info-item"><strong>${k}:</strong><span>${v}</span></div>`)
        .join('');
    const featuresHtml = project.features.map(f => `<li>${f}</li>`).join('');
    const challengesHtml = project.challenges.map(c => `<li>${c}</li>`).join('');

    content.innerHTML = `
        <span class="modal-close-btn" onclick="closeProjectModal()">&times;</span>
        <div class="project-modal-header">
            <h2>${project.title}</h2>
            <div class="project-details">
                <svg class="map-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span class="project-location">${project.location}</span>
            </div>
        </div>
        <img src="${project.image}" alt="${project.title}" class="project-modal-image" loading="lazy">
        <div class="project-modal-body">
            <h3>Project Overview</h3>
            <p>${project.fullDescription}</p>
            <h3>Project Details</h3>
            <div class="project-info-grid">${detailsHtml}</div>
            <h3>Key Features</h3>
            <ul>${featuresHtml}</ul>
            <h3>Challenges & Solutions</h3>
            <ul>${challengesHtml}</ul>
            <h3>Project Outcome</h3>
            <p>${project.outcome}</p>
        </div>
    `;

    requestAnimationFrame(() => {
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
}

const closeProjectModal = () => {
    const modal = modals.project || document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }
};

// ==================== INSTANT MOBILE MENU ====================
const toggleSidebar = () => {
    const isActive = DOM.mobileSidebar?.classList.contains('active');
    if (isActive) {
        closeSidebar();
    } else {
        DOM.mobileSidebar?.classList.add('active');
        DOM.sidebarOverlay?.classList.add('active');
        DOM.menuToggle?.classList.add('active');
        DOM.menuToggle?.setAttribute('aria-expanded', 'true');
    }
};

const closeSidebar = () => {
    DOM.mobileSidebar?.classList.remove('active');
    DOM.sidebarOverlay?.classList.remove('active');
    DOM.menuToggle?.classList.remove('active');
    DOM.menuToggle?.setAttribute('aria-expanded', 'false');
};

// ==================== ULTRA FAST VALIDATION ====================
const validators = {
    name: (value, fieldName) => {
        if (!value.trim()) return `${fieldName} is required`;
        if (value.length < 2) return `${fieldName} must be at least 2 characters`;
        if (value.length > 30) return `${fieldName} must not exceed 30 characters`;
        if (!/^[a-zA-Z\s]{2,30}$/.test(value)) return `${fieldName} can only contain letters and spaces`;
        return null;
    },
    email: (value) => {
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return null;
    },
    phone: (value) => {
        if (!value.trim()) return 'Mobile number is required';
        if (!/^[0-9]{10}$/.test(value)) return value.length < 10 ? `Mobile number must be exactly 10 digits (${10 - value.length} more needed)` : 'Mobile number must be exactly 10 digits';
        return null;
    },
    password: (value) => {
        if (!value) return 'Password is required';
        if (value.length < 8) return `Password must be at least 8 characters (${8 - value.length} more needed)`;
        if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value)) return 'Password should contain uppercase, lowercase, and numbers';
        return null;
    }
};

const validateField = (input, validatorType, ...args) => {
    const error = validators[validatorType](input.value, ...args);
    if (error) {
        showError(input, error);
        return false;
    }
    clearError(input);
    input.classList.add('success');
    setTimeout(() => input.classList.remove('success'), 2000);
    return true;
};

const validateName = (input, fieldName) => validateField(input, 'name', fieldName);
const validateEmail = (input) => validateField(input, 'email');
const validatePhone = (input) => validateField(input, 'phone');
const validatePassword = (input) => validateField(input, 'password');

const validateConfirmPassword = () => {
    const password = document.getElementById('signupPassword')?.value;
    const confirmPassword = document.getElementById('confirmPassword');
    if (!confirmPassword) return true;
    
    const value = confirmPassword.value;
    if (!value) {
        showError(confirmPassword, 'Please confirm your password');
        return false;
    }
    if (password !== value) {
        showError(confirmPassword, 'Passwords do not match');
        return false;
    }
    clearError(confirmPassword);
    confirmPassword.classList.add('success');
    setTimeout(() => confirmPassword.classList.remove('success'), 2000);
    return true;
};

const showError = (input, message) => {
    if (!input) return;
    input.classList.remove('success');
    input.classList.add('error');
    
    const existingError = input.parentElement?.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    const errorDiv = document.createElement('span');
    errorDiv.className = 'error-message';
    errorDiv.textContent = '⚠️ ' + message;
    input.parentElement?.appendChild(errorDiv);
};

const clearError = (input) => {
    if (!input) return;
    input.classList.remove('error');
    const errorMessage = input.parentElement?.querySelector('.error-message');
    if (errorMessage) errorMessage.remove();
};

const clearFormErrors = (formId) => {
    const form = document.getElementById(formId);
    if (!form) return;
    form.reset();
    form.querySelectorAll('.error, .success').forEach(el => el.classList.remove('error', 'success'));
    form.querySelectorAll('.error-message').forEach(el => el.remove());
};

const validateLoginForm = () => {
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');
    if (!email || !password) return false;
    
    let isValid = true;
    if (!validateEmail(email)) isValid = false;
    if (!password.value) {
        showError(password, 'Password is required');
        isValid = false;
    } else {
        clearError(password);
    }
    return isValid;
};

const validateSignupForm = () => {
    const fields = [
        { id: 'firstName', validator: validateName, args: ['First Name'] },
        { id: 'lastName', validator: validateName, args: ['Last Name'] },
        { id: 'signupEmail', validator: validateEmail },
        { id: 'phone', validator: validatePhone },
        { id: 'signupPassword', validator: validatePassword },
    ];
    
    let isValid = true;
    let firstInvalid = null;
    
    for (const field of fields) {
        const el = document.getElementById(field.id);
        if (el && !field.validator(el, ...(field.args || []))) {
            if (!firstInvalid) firstInvalid = el;
            isValid = false;
        }
    }
    
    if (!validateConfirmPassword()) {
        if (!firstInvalid) firstInvalid = document.getElementById('confirmPassword');
        isValid = false;
    }
    
    const userType = document.getElementById('userType');
    if (userType && !userType.value) {
        alert('⚠ Please select your user type.');
        if (!firstInvalid) firstInvalid = userType;
        isValid = false;
    }
    
    if (firstInvalid) firstInvalid.focus();
    return isValid;
};

// ==================== INSTANT INPUT FILTERS ====================
const setupInputFilter = (id, pattern, maxLength) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('input', function() {
        this.value = this.value.replace(pattern, '');
        if (maxLength && this.value.length > maxLength) this.value = this.value.slice(0, maxLength);
    }, { passive: true });
};

const setupValidationListeners = () => {
    ['firstName', 'lastName'].forEach(id => {
        setupInputFilter(id, /[^a-zA-Z\s]/g, 30);
        const input = document.getElementById(id);
        if (input) input.addEventListener('blur', () => validateName(input, id === 'firstName' ? 'First Name' : 'Last Name'), { passive: true });
    });
    
    ['loginEmail', 'signupEmail'].forEach(id => {
        const input = document.getElementById(id);
        if (input) input.addEventListener('blur', () => validateEmail(input), { passive: true });
    });
    
    setupInputFilter('phone', /[^0-9]/g, 10);
    const phone = document.getElementById('phone');
    if (phone) phone.addEventListener('blur', () => validatePhone(phone), { passive: true });
    
    const signupPassword = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    if (signupPassword) signupPassword.addEventListener('blur', () => validatePassword(signupPassword), { passive: true });
    if (confirmPassword) confirmPassword.addEventListener('blur', validateConfirmPassword, { passive: true });
};

// ==================== INSTANT FORM HANDLERS ====================
const setupFormHandlers = () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateLoginForm()) {
                const email = document.getElementById('loginEmail')?.value;
                alert(`✅ Welcome back! Login successful for ${email}`);
                closeLoginModal();
            }
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateSignupForm()) {
                const firstName = document.getElementById('firstName')?.value;
                alert(`✅ Account created successfully! Welcome ${firstName}!`);
                closeSignupModal();
            }
        });
    }
};

// ==================== INSTANT MODAL HANDLERS ====================
const setupModalHandlers = () => {
    Object.values(modals).forEach(modal => {
        if (!modal) return;
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = 'auto';
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTeamProfile();
            closeProjectModal();
            if (modals.login?.style.display === 'flex') closeLoginModal();
            if (modals.signup?.style.display === 'flex') closeSignupModal();
            if (modals.enrollment?.style.display === 'flex') closeEnrollmentModal();
        }
    });
};

// ==================== INSTANT MOBILE MENU SETUP ====================
const setupMobileMenu = () => {
    DOM.menuToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSidebar();
    });
    DOM.sidebarOverlay?.addEventListener('click', closeSidebar);
    document.querySelectorAll('.sidebar-nav a, .sidebar-btn').forEach(el => {
        el.addEventListener('click', () => { if (window.innerWidth <= 768) closeSidebar(); });
    });
};

// ==================== INSTANT NAVIGATION ====================
const setupNavigation = () => {
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.href === window.location.href) link.classList.add('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.length > 1) {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
};

// ==================== INSTANT ACCESSIBILITY ====================
const setupAccessibility = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.scrollBehavior = 'auto';
    }
};

// ==================== INSTANT INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeDOM();
    setupValidationListeners();
    setupFormHandlers();
    setupModalHandlers();
    setupMobileMenu();
    setupNavigation();
    setupAccessibility();
});

// ==================== INSTANT WINDOW HANDLERS ====================
window.addEventListener('click', (e) => {
    Object.values(modals).forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    });
});

// Debounced resize handler for performance
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 900 && DOM.mobileSidebar?.classList.contains('active')) closeSidebar();
    }, 250);
}, { passive: true });