function changeColor(color) {
    document.body.style.backgroundColor = color;
}
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    const muteButton = document.getElementById('mute-button');

    muteButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = 'Mute';
        } else {
            video.muted = true;
            muteButton.textContent = 'Unmute';
        }
    });
});