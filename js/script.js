// JavaScript code
const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel img');
const slideDuration = 3000; 

let currentIndex = 0;
let intervalId;

function slideCarousel() {
  carouselImages[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].style.display = 'block';
}

function startCarousel() {
  intervalId = setInterval(slideCarousel, slideDuration);
}

function stopCarousel() {
  clearInterval(intervalId);
}

// Start the carousel on page load
startCarousel();

// Pause the carousel on mouseenter
carousel.addEventListener('mouseenter', stopCarousel);

// Resume the carousel on mouseleave
carousel.addEventListener('mouseleave', startCarousel);

// Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    sendEmail();
  }
});

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    isValid = false;
    setError(nameInput, 'Name is required');
  } else {
    removeError(nameInput);
  }

  if (emailInput.value.trim() === '') {
    isValid = false;
    setError(emailInput, 'Email is required');
  } else if (!isValidEmail(emailInput.value.trim())) {
    isValid = false;
    setError(emailInput, 'Invalid email address');
  } else {
    removeError(emailInput);
  }

  if (messageInput.value.trim() === '') {
    isValid = false;
    setError(messageInput, 'Message is required');
  } else {
    removeError(messageInput);
  }

  return isValid;
}

function setError(input, message) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector('.error-text');
  formControl.classList.add('error');
  errorText.innerText = message;
}

function removeError(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
}

function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


// JavaScript code
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.section');

// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('home').style.display = 'block';
  document.getElementById('our-package').style.display = 'none';
  document.getElementById('call-us').style.display = 'none';
});


menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSectionId = link.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);

    sections.forEach((section) => {
      if (section === targetSection) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });
});
