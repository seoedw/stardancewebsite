const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');
const rootElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
rootElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const textToType = "Hardware guy learning to code.";
const typeWriterElement = document.getElementById('typewriter');
let index = 0;

function typeWriter() {
    if (index === 0) {
        typeWriterElement.innerHTML = "";
    }
    if (index < textToType.length) {
        typeWriterElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

setTimeout(typeWriter, 1000);

function openContact(platform, username) {
    document.getElementById('modal-title').textContent = platform;
    document.getElementById('modal-username').textContent = username;
    document.getElementById('contact-modal').classList.add('active');
}

function closeContact() {
    document.getElementById('contact-modal').classList.remove('active');
}

// Close popup when clicking on the dimmed background outside the card
document.getElementById('contact-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('contact-modal')) {
        closeContact();
    }
});
