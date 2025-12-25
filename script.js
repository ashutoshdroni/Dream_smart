// ==================== DATA ====================
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

// ==================== MODAL MANAGEMENT ====================
const modals = {
    login: document.getElementById('loginModal'),
    signup: document.getElementById('signupModal'),
    enrollment: document.getElementById('enrollmentModal')
};

function toggleModal(name, show) {
    const m = modals[name];
    if (!m) return;
    m.style.display = show ? 'flex' : 'none';
    document.body.style.overflow = show ? 'hidden' : 'auto';
}

function openLoginModal() { toggleModal('login', true); }
function closeLoginModal() { toggleModal('login', false); }
function openSignupModal() { toggleModal('signup', true); }
function closeSignupModal() { toggleModal('signup', false); }
function switchToSignup() { closeLoginModal(); openSignupModal(); }
function switchToLogin() { closeSignupModal(); openLoginModal(); }
function openEnrollmentModal() { toggleModal('enrollment', true); }
function closeEnrollmentModal() { toggleModal('enrollment', false); }

// ==================== TEAM PROFILE ====================
function showTeamProfile(memberName) {
    const m = teamMembers[memberName];
    if (!m) return;

    let modal = document.getElementById('teamProfileModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'teamProfileModal';
        modal.className = 'team-profile-modal';
        document.body.appendChild(modal);
    }

    const initials = m.name.split(' ').map(n => n[0]).join('');
    
    modal.innerHTML = `
        <div class="team-profile-content">
            <span class="modal-close-btn" onclick="closeTeamProfile()">&times;</span>
            <div class="profile-header">
                <div class="profile-avatar">${initials}</div>
                <h2>${m.name}</h2>
                <p class="role">${m.role}</p>
                <p class="experience">${m.experience}</p>
            </div>
            <div class="profile-section">
                <h3>About</h3>
                <p>${m.about}</p>
            </div>
            <div class="profile-section">
                <h3>Contact Information</h3>
                <div class="contact-info-item"><strong>Email:</strong><span>${m.email}</span></div>
                <div class="contact-info-item"><strong>Phone:</strong><span>${m.phone}</span></div>
                <div class="contact-info-item"><strong>Location:</strong><span>${m.location}</span></div>
            </div>
            <div class="profile-section">
                <h3>Education & Specialization</h3>
                <p><strong>Education:</strong> ${m.education}</p>
                <p><strong>Specialization:</strong> ${m.specialization}</p>
            </div>
            <div class="profile-section">
                <h3>Core Skills</h3>
                <ul>${m.skills.map(s => `<li>${s}</li>`).join('')}</ul>
            </div>
            <div class="profile-section">
                <h3>Key Projects</h3>
                <ul>${m.projects.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>
            <div class="profile-section">
                <h3>Certifications</h3>
                <ul>${m.certifications.map(c => `<li>${c}</li>`).join('')}</ul>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeTeamProfile() {
    const m = document.getElementById('teamProfileModal');
    if (m) {
        m.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ==================== PROJECT DETAILS ====================
function showProjectDetails(projectId) {
    const p = projectsData[projectId];
    if (!p) return;

    let modal = document.getElementById('projectModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'projectModal';
        modal.className = 'project-modal';
        document.body.appendChild(modal);
    }

    const detailsHtml = Object.entries(p.details).map(([k, v]) => 
        `<div class="project-info-item"><strong>${k}:</strong><span>${v}</span></div>`
    ).join('');

    modal.innerHTML = `
        <div class="project-modal-content">
            <span class="modal-close-btn" onclick="closeProjectModal()">&times;</span>
            <div class="project-modal-header">
                <h2>${p.title}</h2>
                <div class="project-details">
                    <svg class="map-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span class="project-location">${p.location}</span>
                </div>
            </div>
            <img src="${p.image}" alt="${p.title}" class="project-modal-image">
            <div class="project-modal-body">
                <h3>Project Overview</h3>
                <p>${p.fullDescription}</p>
                <h3>Project Details</h3>
                <div class="project-info-grid">${detailsHtml}</div>
                <h3>Key Features</h3>
                <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
                <h3>Challenges & Solutions</h3>
                <ul>${p.challenges.map(c => `<li>${c}</li>`).join('')}</ul>
                <h3>Project Outcome</h3>
                <p>${p.outcome}</p>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const m = document.getElementById('projectModal');
    if (m) {
        m.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ==================== MOBILE MENU ====================
const menuToggle = document.getElementById('menuToggle');
const mobileSidebar = document.getElementById('mobileSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function toggleSidebar() {
    mobileSidebar?.classList.toggle('active');
    sidebarOverlay?.classList.toggle('active');
    menuToggle?.classList.toggle('active');
}

function closeSidebar() {
    mobileSidebar?.classList.remove('active');
    sidebarOverlay?.classList.remove('active');
    menuToggle?.classList.remove('active');
}

menuToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSidebar();
});

sidebarOverlay?.addEventListener('click', closeSidebar);

document.querySelectorAll('.sidebar-nav a, .sidebar-btn').forEach(el => {
    el.addEventListener('click', () => {
        if (window.innerWidth <= 768) closeSidebar();
    });
});

// ==================== CLOSE MODALS ON OUTSIDE CLICK ====================
Object.values(modals).forEach(m => {
    m?.addEventListener('click', (e) => {
        if (e.target === m) {
            for (const [key, modal] of Object.entries(modals)) {
                if (modal === m) toggleModal(key, false);
            }
        }
    });
});

document.addEventListener('click', (e) => {
    const teamModal = document.getElementById('teamProfileModal');
    const projectModal = document.getElementById('projectModal');
    
    if (teamModal && e.target === teamModal) closeTeamProfile();
    if (projectModal && e.target === projectModal) closeProjectModal();
});

// ==================== CLOUDINARY UPLOAD ====================
function uploadToCloudinary(file, typeLabel, btn) {
    return new Promise((resolve, reject) => {
        if (!file) {
            resolve("Not provided");
            return;
        }

        const cloudName = 'dabfdtke8';
        const unsignedPreset = 'career_form_preset';
        const progressBar = document.getElementById('progress-bar');
        const progressContainer = document.getElementById('progress-container');
        
        progressContainer.style.display = "block";
        progressBar.classList.add('pulse');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', unsignedPreset);

        const resourceType = file.type.includes('video') ? 'video' : 'raw';
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);

        xhr.upload.onprogress = (e) => {
            if (e.lengthComputable) {
                const pct = Math.round((e.loaded / e.total) * 100);
                btn.innerText = `⏳ Uploading ${typeLabel} (${pct}%)`;
                progressBar.style.width = pct + "%";
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                const res = JSON.parse(xhr.responseText);
                progressBar.classList.remove('pulse');
                progressBar.style.width = "0%";
                resolve(res.secure_url);
            } else {
                const err = JSON.parse(xhr.responseText);
                reject(new Error(err.error.message));
            }
        };

        xhr.onerror = () => reject(new Error("Network Error. Please check your internet."));
        xhr.send(formData);
    });
}

async function sendWhatsApp() {
    const btn = document.querySelector('.career-form button');
    const progressContainer = document.getElementById('progress-container');
    
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const countryCode = document.getElementById('country-code').value;
    const mobile = document.getElementById('mobile').value;
    const position = document.getElementById('position').value;
    const resumeFile = document.getElementById('resume').files[0];
    const videoFile = document.getElementById('video').files[0];

    if (!name || !resumeFile) {
        alert("Please fill in required fields (Name & Resume).");
        return;
    }

    try {
        btn.disabled = true;
        btn.style.opacity = "0.7";

        const resumeUrl = await uploadToCloudinary(resumeFile, "Resume", btn);
        let videoUrl = "Not provided";
        if (videoFile) videoUrl = await uploadToCloudinary(videoFile, "Video", btn);

        btn.innerText = "✅ Sending to WhatsApp...";
        progressContainer.style.display = "none";

        const msg = `*New Career Application*\n*Name:* ${name}\n*Email:* ${email}\n*Mobile:* ${countryCode} ${mobile}\n*Position:* ${position}\n*Resume URL:* ${resumeUrl}\n*Video URL:* ${videoUrl}`;
        const phone = "919815969240";
        window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    } catch (error) {
        alert("Upload Failed: " + error.message);
        btn.disabled = false;
        btn.innerText = "Submit Application via WhatsApp";
        btn.style.opacity = "1";
        progressContainer.style.display = "none";
    }
}

// ==================== FORM HANDLERS ====================
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        alert(`Welcome back! Login successful for ${email}`);
        closeLoginModal();
        loginForm.reset();
    });

    const signupForm = document.getElementById('signupForm');
    signupForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const pwd = document.getElementById('signupPassword').value;
        const conf = document.getElementById('confirmPassword').value;
        
        if (pwd !== conf) {
            alert('Passwords do not match!');
            return;
        }
        
        const name = document.getElementById('firstName').value;
        alert(`Account created successfully! Welcome ${name}!`);
        closeSignupModal();
        signupForm.reset();
    });

    const careerForm = document.querySelector('.career-form');
    careerForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('fullName').value;
        alert(`Application submitted successfully! Thank you, ${name}!`);
        careerForm.reset();
    });

    const contactForm = document.querySelector('.contact-form');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    });

    const enrollmentForm = document.querySelector('.enrollment-form');
    enrollmentForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name')?.value || 'Student';
        alert(`Enrollment successful! Welcome, ${name}! Our team will contact you soon.`);
        closeEnrollmentModal();
        enrollmentForm.reset();
    });
});

// ==================== NAVIGATION & ACCESSIBILITY ====================
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const teamModal = document.getElementById('teamProfileModal');
        if (teamModal?.style.display === 'flex') closeTeamProfile();
    }
});




