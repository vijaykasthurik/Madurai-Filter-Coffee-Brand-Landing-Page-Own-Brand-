// Toggle navbar
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu').onclick = () => {
  navbar.classList.add('active');
};

document.querySelector('#close').onclick = () => {
  navbar.classList.remove('active');
};

// Carousel Image Change
const images = ['11.jpg', 'nxt3.jpg', 'nxt4.jpg']; // Ensure correct paths
let currentIndex = 0;
const imageElement = document.querySelector('.image img');

document.querySelector('#prev').onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  imageElement.src = images[currentIndex];
};

document.querySelector('#next').onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
};

// Mouse Move Parallax Effect
document.addEventListener('mousemove', move);
function move(e) {
  this.querySelectorAll('.move').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerWidth - e.pageY * speed) / 120;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// GSAP animations
gsap.from('.logo', { opacity: 0, duration: 1, delay: 2, y: 10 });
gsap.from('.navbar .nav_item', { opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2 });
gsap.from('.title', { opacity: 0, duration: 1, delay: 1.6, y: 30 });
gsap.from('.description', { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from('.btn', { opacity: 0, duration: 1, delay: 2.1, y: 30 });
gsap.from('.image', { opacity: 0, duration: 1, delay: 2.6, y: 30 });
