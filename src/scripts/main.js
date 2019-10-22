'use strict';
const span = document.querySelector('.times');

let timesClicked = sessionStorage.getItem('timesClicked') || 0;
span.textContent = timesClicked;

document.body.addEventListener('click', () => {
  timesClicked++;
  sessionStorage.setItem('timesClicked', timesClicked);
  span.textContent = timesClicked;
});
