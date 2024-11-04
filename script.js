const containers = document.querySelectorAll('.carousel-container');

let currentIndex = 0;

function showNextContainer() {
    // Hide all containers by removing 'active' class
    containers.forEach(container => {
        container.classList.remove('active');
    });

    // Add the 'active' class to the current container
    containers[currentIndex].classList.add('active');

    // Increment the index (loop back to the first container if necessary)
    currentIndex = (currentIndex + 1) % containers.length;
}

// Initially display the first container
showNextContainer();

// Change the visible container every 3 seconds
setInterval(showNextContainer, 3000);



// CROUSEL

const carouselContainer = document.querySelector('.carousel__container');
const prevButton = document.querySelector('.carousel__button.prev');
const nextButton = document.querySelector('.carousel__button.next');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;

// Button Navigation
nextButton.addEventListener('click', () => {
  carouselContainer.scrollBy({ left: 250, behavior: 'smooth' });
});

prevButton.addEventListener('click', () => {
  carouselContainer.scrollBy({ left: -250, behavior: 'smooth' });
});

// Drag Functionality
carouselContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.pageX - carouselContainer.offsetLeft;
  previousTranslate = currentTranslate;
});

carouselContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentPosition = e.pageX - carouselContainer.offsetLeft;
  currentTranslate = previousTranslate + (currentPosition - startPosition);
  carouselContainer.style.transform = `translateX(${currentTranslate}px)`;
});

carouselContainer.addEventListener('mouseup', () => {
  isDragging = false;
});

carouselContainer.addEventListener('mouseleave', () => {
  isDragging = false;
});



const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});




function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}
window.onscroll = () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
};

