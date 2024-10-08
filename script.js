//Nav Menu --------------------------------------------------
const nav = document.getElementById('nav');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

//Slideshow --------------------------------------------------
let currentImageIndex = 0;
const images = document.querySelectorAll('.slide');

function switchImage () {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

setInterval(switchImage, 5000);

// Banner -----------------------------------------------------
const bannerContent = document.getElementById('bannerContent');
let messageHTML = '<span class="contact-message">Contact Me At daniel.r.gagnon@outlook.com - I\'m here to help</span>';
let repeatedMessage = messageHTML.repeat(10);

bannerContent.innerHTML = repeatedMessage + repeatedMessage;

function scrollBanner() {

}

// Houdini Background ------------------------------------------
CSS.paintWorklet.addModule(
    "https://rawcdn.githack.com/CSSHoudini/css-houdini/6979b873e80f9120f52bd481fbdf2d4c60db6b19/src/connections/dist/connections.js"
);