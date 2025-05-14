
const colorButton = document.getElementById('color-changer');
colorButton.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  colorButton.style.backgroundColor = randomColor;
  colorButton.textContent = `Current Color: ${randomColor}`;
});

// Hover Effects
const hoverBox = document.getElementById('hover-box');
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.classList.add('hover-active');
});
hoverBox.addEventListener('mouseleave', () => {
  hoverBox.classList.remove('hover-active');
});

// Keypress Detection
document.addEventListener('keydown', (e) => {
    const keyDisplay = document.getElementById('key-display');
    keyDisplay.textContent = `You pressed: ${e.key} (Code: ${e.code})`;
  });


  // Secret Double-Click Action
  const secretButton = document.getElementById('secret-button');
let clickCount = 0;

secretButton.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 2) {
    alert('🎉 Secret unlocked! You double-clicked!');
    clickCount = 0;
  }
  setTimeout(() => { clickCount = 0; }, 300);
});


// Interactive Elements
// Image Gallery
const galleryImages = document.querySelectorAll('.gallery-img');
const mainImage = document.getElementById('main-image');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    mainImage.src = img.src;
    mainImage.alt = img.alt;
  });
});

// Tabs Component
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Form Validation
// Real-time Validation
const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Email validation
emailInput.addEventListener('input', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('invalid');
    document.getElementById('email-error').textContent = 'Please enter a valid email';
  } else {
    emailInput.classList.remove('invalid');
    document.getElementById('email-error').textContent = '';
  }
});

// Password validation
passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordInput.classList.add('invalid');
    document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
  } else {
    passwordInput.classList.remove('invalid');
    document.getElementById('password-error').textContent = '';
  }
});

// Form submission
form.addEventListener('submit', (e) => {
  if (emailInput.classList.contains('invalid') || passwordInput.classList.contains('invalid')) {
    e.preventDefault();
    alert('Please fix the errors before submitting');
  }
});

// Click Animation
const animatedButton = document.getElementById('animated-button');
animatedButton.addEventListener('click', () => {
  animatedButton.classList.add('click-animation');
  setTimeout(() => {
    animatedButton.classList.remove('click-animation');
  }, 500);
});