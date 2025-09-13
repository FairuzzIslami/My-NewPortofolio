const body = document.body;
const toggleBtn = document.getElementById("themeToggle");
const iconSun = document.getElementById("iconSun");
const iconMoon = document.getElementById("iconMoon");
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");

// Cek preferensi sebelumnya
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    iconSun.style.display = "none";
    iconMoon.style.display = "block";
}

// Toggle tema
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    if (body.classList.contains("dark-mode")) {
        iconSun.style.display = "none";
        iconMoon.style.display = "block";
        localStorage.setItem("theme", "dark");
    } else {
        iconSun.style.display = "block";
        iconMoon.style.display = "none";
        localStorage.setItem("theme", "light");
    }
});

// Toggle menu mobile
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// typing
const text = "Hello, nama saya Fairuz Aqila Islami";
const typingElement = document.getElementById("typing");

let i = 0;
let isDeleting = false;
let speed = 100;

function typeWriter() {
  if (!isDeleting && i <= text.length) {
    typingElement.textContent = text.substring(0, i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (isDeleting && i >= 0) {
    typingElement.textContent = text.substring(0, i);
    i--;
    setTimeout(typeWriter, speed);
  }
  if (i === text.length && !isDeleting) {
    setTimeout(() => {
      isDeleting = true;
      typeWriter(); // lanjut hapus
    }, 1000);
  }
  if (i === 0 && isDeleting) {
    setTimeout(() => {
      isDeleting = false;
      typeWriter(); 
    }, 500);
  }
}

window.addEventListener("DOMContentLoaded", typeWriter);

