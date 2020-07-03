let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clearing any previous existing timers
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

// clearing the interval when the secondsLeft is less than zero
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
  }, 1000)
}


function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = `⏰${display}`;
  timerDisplay.textContent = display;
}


function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  // if you awant to use a 24 hour clock forma then you can leave this conversion part below
  endTime.textContent = `Be Back At ${hours > 12 ? hours - 12: hours}:${minutes < 10 ? '0' : ''}${minutes}`

}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

// we can use the name instead of query selecetor or any other selector of the element to select the element if the element has an name attribute
// we can also select a child element inside that element in the nested form for example:
// document.customForm.minutes

document.customForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const mins =  this.minutes.value;
  const minutesToSeconds = mins * 60;
  this.reset();
  timer(minutesToSeconds);
})
