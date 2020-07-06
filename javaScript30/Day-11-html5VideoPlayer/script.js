/* get the elements*/

const player =  document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



/* define the functions*/

function togglePlay () {
    video[video.paused ? 'play' : 'pause']();
}

function updatePlayButton () {
    toggle.textContent = this.paused ? '►' : '❚❚';
}

function skip () {
video.currentTime += parseFloat(this.dataset.skip);
}

function handleChangeUpdate () {
    video[this.name] = this.value
}

function handleProgress () {
const percent = (video.currentTime / video.duration) * 100;
progressBar.style.flexBasis = `${percent}%`;
}

function scrub (e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
/*set up the event listeners*/

video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(element => element.addEventListener('change', handleChangeUpdate));
video.addEventListener('timeupdate', handleProgress);
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

