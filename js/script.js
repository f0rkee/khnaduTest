const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');

let slideWidth = slides.firstElementChild.clientWidth;
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
if (currentIndex === 0) {
    return;
}
currentIndex--;
slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
if (currentIndex === slides.children.length - 1) {
    return;
}
currentIndex++;
slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

window.addEventListener('resize', () => {
slideWidth = slides.firstElementChild.clientWidth;
slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});