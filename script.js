// Anniversary Website Logic

// 1. Music Toggle Functionality
const bgMusic = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicIcon.classList.remove('fa-play');
        musicIcon.classList.add('fa-pause');
    } else {
        bgMusic.pause();
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-play');
    }
}

// 2. Floating Hearts Animation
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    
    // Random size between 10px and 25px
    const size = Math.random() * 15 + 10;
    heart.style.fontSize = `${size}px`;
    
    // Random position across the width
    heart.style.left = `${Math.random() * 100}vw`;
    
    // Random animation duration
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
    
    // Random opacity
    heart.style.opacity = Math.random() * 0.5 + 0.3;

    heartsContainer.appendChild(heart);

    // Remove heart after animation finishes
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create hearts at regular intervals
setInterval(createHeart, 800);

// 3. Typing Text Animation
const typingTextElement = document.getElementById('typing-text');
const message = "Dear Mom and Dad,\nCongratulations on 26 beautiful years! You've shown us that love isn't just a word, but a promise made every day. Thank you for building such a warm home and being our guiding stars. We love you both endlessly! ❤️";

let charIndex = 0;

function typeWriter() {
    if (charIndex < message.length) {
        typingTextElement.innerHTML += message.charAt(charIndex) === '\n' ? '<br>' : message.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
    }
}

// 4. Intersection Observer for Scroll Reveal
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            
            // Trigger typing effect if the target is the message card
            if (entry.target.parentElement.id === 'message' || entry.target.id === 'message') {
                if (charIndex === 0) typeWriter();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// 5. Initial Confetti Celebration
window.addEventListener('load', () => {
    // Initial blast
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD1DC', '#FFD700', '#89CFF0', '#FFFFFF']
    });

    // Subside burst after 2 seconds
    setTimeout(() => {
        confetti({
            particleCount: 80,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#FFD1DC', '#FFD700']
        });
        confetti({
            particleCount: 80,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#FFD1DC', '#FFD700']
        });
    }, 2000);
});

// 6. Surprise Button (Optional Feature)
// Adding a small interaction on title click
const title = document.querySelector('.hero h1');
if (title) {
    title.addEventListener('click', () => {
        confetti({
            particleCount: 50,
            spread: 100,
            origin: { y: 0.3 }
        });
    });
}
