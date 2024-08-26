// Example: Function to handle a button click
function showAlert() {
  alert("Welcome to Code Constellation!");
}

// More interactivity and functionality can be added here
// Form Validation
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('#contact form');
  const loginForm = document.querySelector('#login-signup form');

  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          if (name === '' || email === '' || message === '') {
              alert('Please fill in all fields.');
              event.preventDefault();
          }
      });
  }

  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;

          if (username === '' || password === '') {
              alert('Please enter your username and password.');
              event.preventDefault();
          }
      });
  }

  // Highlight Current Page
  const navLinks = document.querySelectorAll('nav ul li a');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
          link.style.color = '#61dafb';
      }
  });
});
// Form Validation
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('#contact form');
  const loginForm = document.querySelector('#login-signup form');
  const signupForm = document.querySelector('#signup form');

  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          if (name === '' || email === '' || message === '') {
              alert('Please fill in all fields.');
              event.preventDefault();
          }
      });
  }

  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;

          if (username === '' || password === '') {
              alert('Please enter your username and password.');
              event.preventDefault();
          }
      });
  }

  if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
          const name = document.getElementById('signup-name').value;
          const email = document.getElementById('signup-email').value;
          const password = document.getElementById('signup-password').value;
          const confirmPassword = document.getElementById('signup-confirm-password').value;

          if (name === '' || email === '' || password === '' || confirmPassword === '') {
              alert('Please fill in all fields.');
              event.preventDefault();
          } else if (password !== confirmPassword) {
              alert('Passwords do not match.');
              event.preventDefault();
          }
      });
  }

  // Highlight Current Page
  const navLinks = document.querySelectorAll('nav ul li a');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
          link.style.color = '#61dafb';
      }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const videoPlayer = document.getElementById('videoPlayer');
  const videoSource = videoPlayer.querySelector('source');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          const videoSrc = this.getAttribute('data-video');
          videoSource.setAttribute('src', videoSrc);
          videoPlayer.load();
          videoPlayer.play();
      });
  });
});
// Function to play video based on thumbnail click
function playVideo(videoSrc) {
    var videoElement = document.getElementById("mainVideo");
    videoElement.src = videoSrc;
    videoElement.play();
}
// Function to play video in fullscreen mode
function playFullscreenVideo(videoSrc) {
    var videoElement = document.getElementById("fullscreenVideo");
    videoElement.src = videoSrc;
    videoElement.style.display = "block"; // Make video element visible
    videoElement.play();
    videoElement.requestFullscreen(); // Request fullscreen mode
}
