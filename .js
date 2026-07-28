const themeToggleBtn = document.getElementById('theme0toggle');
const themeIcon = themeToggleBtn.queryselector('i');
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
})

function updateIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    else {
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
                targetElement.scrollIntoView ({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
    });
});

const textToType = "Hardware guy learning to code."
const typeWriterElement = document.getElementById('typewriter');
let index = 0;

function typerWriter() {
    if (index === 0) {
        typeWriterElement.innerHTML = "";
    }
    if (index < textToType.length) {
        typerWriterElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriterElement, 100);
    }
}

setTimeout(typerWriter, 1000);
