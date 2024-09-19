const burgerMenu = document.getElementById("burgerMenu");
const dropdownMenu = document.getElementById("dropdownMenu");

burgerMenu.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

// Funktion til at skifte billeder i slideren

let currentIndex = 1; // Start med det midterste billede som aktiv
const slides = document.querySelectorAll(".slide");
const sliderContainer = document.querySelector(".slider-container");
const totalSlides = slides.length;

// Funktion til at skifte billeder i slideren
function moveSlider(direction) {
  currentIndex += direction;

  // Begrænsningen for billederne (loop)
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateSlider();
}

// Funktion til at opdatere slideren
function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    slide.style.transform = "scale(0.8)"; // Mindre for de ikke-fremhævede billeder
    slide.style.opacity = "0.5"; // Lavere opacitet for ikke-fremhævede billeder
  });

  // Fremhæv det midterste billede
  slides[currentIndex].classList.add("active");
  slides[currentIndex].style.transform = "scale(1.1)";
  slides[currentIndex].style.opacity = "1";

  // Beregn afstanden for at placere det fremhævede billede i midten
  const offset = -(currentIndex - 1) * (slides[0].offsetWidth + 30);
  sliderContainer.style.transform = `translateX(${offset}px)`;
}

// Automatisk skift af billeder hver 2. sekund
const autoSlide = setInterval(() => {
  moveSlider(1); // Flyt slideren fremad
}, 2000);

// Når siden er loadet, opdater slideren med korrekt midterbillede
window.onload = updateSlider;

// Header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".forside-header");
  const scrollPosition = window.scrollY;

  // If scrolled down more than 100px, add 'scrolled' class
  if (scrollPosition > 100) {
    header.classList.add("scrolled");
  } else {
    // If scrolled back to the top, remove 'scrolled' class
    header.classList.remove("scrolled");
  }
});

// Mine projekter
// Lodret Slider
let verticalIndex = 0;
const verticalImages = document.querySelectorAll(".vertical-slider img");
const totalVerticalImages = verticalImages.length;

// Initialize vertical slider
verticalImages.forEach((img, index) => {
  img.style.opacity = index === 0 ? 1 : 0; // Sørger for første billede er synligt
});

setInterval(() => {
  verticalImages.forEach((img, index) => {
    img.style.opacity = index === verticalIndex ? 1 : 0; // Viser nuværende billede
  });
  verticalIndex = (verticalIndex + 1) % totalVerticalImages; // Loop gennem billederne
}, 1000);

// projekt vohejl sektion

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel-image");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      image.classList.toggle("active", i === index);
    });
  }

  document
    .querySelector(".carousel-next")
    .addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

  document
    .querySelector(".carousel-prev")
    .addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

  // Initialize the first image
  showImage(currentIndex);
});

const text = "CAMILLA HEJLSKOV";
const typingContainer = document.getElementById("typing-effect");
let index = 0;
let cursorVisible = true;

// start typing
function type() {
  if (index < text.length) {
    typingContainer.innerHTML =
      text.slice(0, index + 1) + '<span class="cursor"></span>';
    index++;
    setTimeout(type, 150); // Hastighed
  } else {
    removeCursor();
    // Restart typing
    setTimeout(() => {
      index = 0; // Reset index
      type(); // Start typing again
    }, 7000);
  }
}

// fjern cursor efter typing done
function removeCursor() {
  typingContainer.innerHTML = text;
}

// Start typing as soon as the page loads
window.onload = function () {
  type();
};
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section"); // eller den relevante selector for dine sektioner

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      threshold: 0.5, // Procentdelen af sektionen, der skal være synlig for at blive betragtet som i view
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
