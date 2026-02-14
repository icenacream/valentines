// Valentine's Day Website - Bouquet First Layout

// Love Letter Text
const loveLetterText = `Hello, Maureen

Hindi talaga ako sanay gumawa ng ganito eh hahahaha accurately 1st time lang talaga ako gumawa ng ganitong mga bagay-bagay. To be honest mahiyain ako and andaming times na gusto kitang makausap pero nahihiya talaga ako kaya mga stickers na lang pinagsesend ko hahhahaha and ilang beses ko na rin sinabi sa sarili ko na sige today kakausapin na kita pero pag nandiyan na yung moment hindi ko na gagawin.

Hindi dahil sa wala akong gustong sabihin. kundi dahil gusto kong maayos ko ang mga sasabihin ko. I wanted to make sure na tama at sincere ang lahat ng salita ko, lalo na pag tungkol sa nararamdaman ko sa iyo. Although I am not the most confident person, ngayon gusto ko lang maging honest. I like you. This is not much, simple lang ito, pero I really hope you like it. 

And even if today is just a simple letter, I hope it marks the beginning of something sincere and meaningful between us. 

Happy Valentine's again <3

Sincerely,
Ian
`;

// elements
const envelope = document.getElementById('envelope');
const envelopeSection = document.getElementById('envelopeSection');
const letterContainer = document.getElementById('letterContainer');
const letterText = document.getElementById('letterText');
const signatureText = document.getElementById('signatureText');
const signatureName = document.getElementById('signatureName');
const particlesContainer = document.getElementById('particles');
const floatingHearts = document.getElementById('floatingHearts');
const sparklesContainer = document.getElementById('sparkles');
const bouquetMain = document.getElementById('bouquetMain');

let isEnvelopeOpened = false;
let isAudioPlaying = false;

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createFloatingHearts();
    setupEnvelopeClick();
    setupAudioToggle();
});

function createParticles() {
    const particleCount = 25;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
    }
}

function createFloatingHearts() {
    const heartCount = 8;
    const hearts = ['💕', '💖', '💗', '💓', '💝'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        
        heart.style.animationDelay = Math.random() * 12 + 's';
        heart.style.animationDuration = (Math.random() * 6 + 10) + 's';
        
        const size = Math.random() * 1 + 1;
        heart.style.fontSize = size + 'rem';
        
        floatingHearts.appendChild(heart);
    }
}

function setupEnvelopeClick() {
    envelope.addEventListener('click', openEnvelope);
}

function openEnvelope() {
    if (isEnvelopeOpened) return;
    isEnvelopeOpened = true;
    
    envelope.classList.add('open');
    
    envelope.style.cursor = 'default';
    
    setTimeout(() => {
        envelopeSection.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        envelopeSection.style.opacity = '0';
        envelopeSection.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            envelopeSection.style.display = 'none';
            showLetter();
        }, 300);
    }, 400);
}

function showLetter() {
    letterContainer.classList.add('visible');
    
    setTimeout(() => {
        typewriterEffect(loveLetterText, letterText, 1, () => {
            setTimeout(() => {
                typewriterEffect('', signatureText, 3);
            }, 100);
        });
    }, 200);
    
    setTimeout(() => {
        createSparkles();
    }, 1500);
}

function typewriterEffect(text, element, speed = 4, onComplete = null) {
    let index = 0;
    element.innerHTML = '';
    
    function type() {
        if (index < text.length) {
            const char = text.charAt(index);
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.animation = 'fadeInChar 0.2s ease-in forwards';
            element.appendChild(span);
            index++;
            
            const delay = (char === '.' || char === '!' || char === '?') ? speed * 1.0 :
                         (char === ',' || char === ';') ? speed * 1.0:
                         (char === ' ') ? speed * 1.0 : speed;
            
            requestAnimationFrame(() => {
                setTimeout(type, delay);
            });
        } else {
            if (onComplete) {
                onComplete();
            }
        }
    }
    
    type();
}

function createSparkles() {
    const sparkleCount = 20;
    
    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            
            sparkle.style.animationDelay = Math.random() * 0.5 + 's';
            
            sparklesContainer.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2500);
        }, i * 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const rose = document.querySelector('.rose');
        if (rose) {
            rose.addEventListener('mouseenter', () => {
                rose.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
                rose.style.transform = 'translateX(-50%) scale(1.1)';
                rose.style.filter = 'brightness(1.1) drop-shadow(0 8px 16px rgba(255, 23, 68, 0.4))';
            });
            
            rose.addEventListener('mouseleave', () => {
                rose.style.transform = 'translateX(-50%) scale(1)';
                rose.style.filter = '';
            });
        }
    }, 2000);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        if (!isEnvelopeOpened && document.activeElement === envelope) {
            e.preventDefault();
            openEnvelope();
        }
    }
});

envelope.setAttribute('tabindex', '0');
envelope.setAttribute('role', 'button');
envelope.setAttribute('aria-label', 'Open love letter');

if ('scrollBehavior' in document.documentElement.style) {
    document.documentElement.style.scrollBehavior = 'smooth';
}

if (window.innerWidth < 768) {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        if (index % 2 === 0) {
            particle.remove();
        }
    });
}

let bouquetClickCount = 0;
bouquetMain.addEventListener('click', () => {
    bouquetClickCount++;
    if (bouquetClickCount >= 2) {
        createSparkles();
        bouquetClickCount = 0;
    }
    setTimeout(() => {
        bouquetClickCount = 0;
    }, 500);
});