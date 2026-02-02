const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainCard = document.getElementById('main-card');
const successCard = document.getElementById('success-card');

// Make the "No" button move when hovered
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Show success message when "Yes" is clicked
yesBtn.addEventListener('click', () => {
    mainCard.classList.add('hidden');
    successCard.classList.remove('hidden');
});