const carousel = document.querySelector('.carousel-items');
const slides = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let index = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`; // Move to the current slide
}

// Navigate to the previous slide
prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slides.length - 1; // Loop back to last slide if on the first slide
    updateCarousel();
});

// Navigate to the next slide
nextButton.addEventListener('click', () => {
    index = (index + 1) % slides.length; // Loop back to first slide if on the last slide
    updateCarousel();
});

