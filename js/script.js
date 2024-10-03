// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// Contact form validation
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (event) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Dynamic "Coming Soon" for future projects
const portfolioSection = document.getElementById('portfolio');

// Example list of upcoming projects
const upcomingProjects = [
    { title: 'Project 1 - Coming Soon' },
    { title: 'Project 2 - Coming Soon' }
];

upcomingProjects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('coming-soon');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>More details will be added soon!</p>
    `;
    portfolioSection.appendChild(projectDiv);
});