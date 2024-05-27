// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menuContent = document.querySelector('.menu-content');
    const playBtn = document.querySelector('.play-btn');
    let isPlaying = false;
    let audio = null;

    const tracks = [
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

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
    });

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playBtn.textContent = 'PLAY';
        } else {
            const randomTrack = Math.floor(Math.random() * tracks.length);
            audio = new Audio(tracks[randomTrack]);
            audio.play();
            playBtn.textContent = 'STOP';
            audio.addEventListener('ended', () => {
                playBtn.textContent = 'PLAY';
                isPlaying = false;
            });
        }
        isPlaying = !isPlaying;
    });
});
