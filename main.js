const body = document.body;
const toggleBtn = document.getElementById("themeToggle");
const iconSun = document.getElementById("iconSun");
const iconMoon = document.getElementById("iconMoon");
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");

// Preferensi tema
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    iconSun.style.display = "none";
    iconMoon.style.display = "block";
}

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

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Typing Effect
const text = "Fairuz Aqila Islami";
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
            typeWriter();
        }, 1200);
    } else if (i === 0 && isDeleting) {
        setTimeout(() => {
            isDeleting = false;
            typeWriter();
        }, 500);
    }
}

window.addEventListener("DOMContentLoaded", typeWriter);

// Active Nav Item on Scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${current}`) {
            item.classList.add("active");
        }
    });
});

// Project Filter Logic
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        projectCards.forEach((card) => {
            if (filter === "all" || card.getAttribute("data-category") === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Modal Logic
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.addEventListener("click", function (e) {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// PERBAIKAN TOTAL: Progress Ring & Scroll-to-Top
const backToTopBtn = document.getElementById("backToTop");
const circle = document.querySelector(".progress-ring__circle");

if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (scrollHeight > 0) {
            const scrollPercent = scrollTop / scrollHeight;
            const offset = circumference - (scrollPercent * circumference);
            circle.style.strokeDashoffset = offset;
        }

        if (scrollTop > 200) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });
}

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});