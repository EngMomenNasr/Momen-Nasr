const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementsByClassName('nav-links')[0];

// menuIcon
menuIcon.addEventListener('click', () => {
    event.stopPropagation();
    navLinks.classList.toggle('active');
});

document.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// github click
document.querySelectorAll('.github-link').forEach((element) => {
    element.addEventListener('click', () => {
        window.open('https://github.com/EngMomenNasr', '_blank');
    });
});

// fixed text-nowrap
document.querySelectorAll('.text-nowrap').forEach((element) => {
    element.style.whiteSpace = 'nowrap';
});

