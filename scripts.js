let currentAudio = null;
const beats = [
    '321_1_01.mp3',
    '321_2_01.mp3',
    '321_3_01.mp3',
    '321_4_01.mp3',
    '321_5_01.mp3',
    '321_6_01.mp3',
    '321_7_01.mp3',
    '321_8_01.mp3',
    '321_9_01.mp3'
];

function getRandomBeat() {
    const randomIndex = Math.floor(Math.random() * beats.length);
    return beats[randomIndex];
}

function toggleBeat() {
    if (currentAudio && !currentAudio.paused) {
        // Detener el audio actual
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    } else {
        // Reproducir un nuevo beat aleatorio
        const beat = getRandomBeat();
        currentAudio = new Audio(beat);
        currentAudio.play();
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Cerrar el menú si se hace clic fuera de él
window.onclick = function(event) {
    const menu = document.getElementById('menu');
    if (!event.target.matches('.menu-btn')) {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    }
}
