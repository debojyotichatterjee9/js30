/* get the elements*/

const player =  document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');



/* define the functions*/

function togglePlay () {
    video[video.paused ? 'play' : 'pause']();
}

function updatePlayButton () {
    toggle.textContent = this.paused ? '►' : '❚❚';
}
/*set up the event listeners*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
toggle.addEventListener('click', togglePlay);

