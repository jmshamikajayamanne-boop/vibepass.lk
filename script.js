// ===============================
// VIBPASS.LK MAIN SCRIPT
// ===============================

// THEME TOGGLE

const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', () => {

    document.body.classList.toggle('light');

    // SAVE THEME

    if(document.body.classList.contains('light')){

        toggle.innerHTML = '☀️';

        localStorage.setItem('theme', 'light');

    } else {

        toggle.innerHTML = '🌙';

        localStorage.setItem('theme', 'dark');

    }

});

// LOAD SAVED THEME

window.addEventListener('load', () => {

    const savedTheme = localStorage.getItem('theme');

    if(savedTheme === 'light'){

        document.body.classList.add('light');

        toggle.innerHTML = '☀️';

    } else {

        toggle.innerHTML = '🌙';

    }

});

// ===============================
// LOGIN MODAL
// ===============================

const loginModal = document.getElementById('loginModal');

const loginOpen = document.getElementById('loginOpen');

const closeLogin = document.getElementById('closeLogin');

// OPEN MODAL

loginOpen.addEventListener('click', () => {

    loginModal.classList.add('active');

    document.body.style.overflow = 'hidden';

});

// CLOSE MODAL BUTTON

closeLogin.addEventListener('click', () => {

    closeModal();

});

// CLICK OUTSIDE TO CLOSE

loginModal.addEventListener('click', (e) => {

    if(e.target === loginModal){

        closeModal();

    }

});

// ESC KEY CLOSE

document.addEventListener('keydown', (e) => {

    if(e.key === 'Escape'){

        closeModal();

    }

});

// CLOSE FUNCTION

function closeModal(){

    loginModal.classList.remove('active');

    document.body.style.overflow = 'auto';

}

// ===============================
// SEARCH BAR
// ===============================

const searchInput = document.querySelector('.search-box input');

searchInput.addEventListener('keyup', (e) => {

    if(e.key === 'Enter'){

        const value = searchInput.value.trim();

        if(value !== ''){

            alert(`Searching for: ${value}`);

        }

    }

});

// ===============================
// HERO BUTTONS
// ===============================

const primaryBtn = document.querySelector('.primary-btn');

const secondaryBtn = document.querySelector('.secondary-btn');

primaryBtn.addEventListener('click', () => {

    alert('Invitation Creator Coming Soon');

});

secondaryBtn.addEventListener('click', () => {

    alert('Online Ticket Seller Panel Coming Soon');

});

// ===============================
// PREMIUM EVENT BUTTONS
// ===============================

const adButtons = document.querySelectorAll('.ad-card button');

adButtons.forEach((button) => {

    button.addEventListener('click', () => {

        alert('Event Details Coming Soon');

    });

});

// ===============================
// SERVICE CARD HOVER EFFECT
// ===============================

const cards = document.querySelectorAll('.service-card');

cards.forEach((card) => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'translateY(-8px)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0px)';

    });

});

// ===============================
// HEADER SHADOW ON SCROLL
// ===============================

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.25)';

    } else {

        header.style.boxShadow = 'none';

    }

});

// ===============================
// SIMPLE FADE-IN ANIMATION
// ===============================

const fadeElements = document.querySelectorAll(
    '.hero-text, .hero-image, .service-card, .ad-card, .timeline-item'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.style.opacity = '1';

            entry.target.style.transform = 'translateY(0px)';

        }

    });

}, {
    threshold:0.1
});

fadeElements.forEach((element) => {

    element.style.opacity = '0';

    element.style.transform = 'translateY(40px)';

    element.style.transition = '0.8s ease';

    observer.observe(element);

});

// ===============================
// LOADING ANIMATION
// ===============================

window.addEventListener('load', () => {

    document.body.style.opacity = '1';

});

// ===============================
// END OF FILE
// ===============================