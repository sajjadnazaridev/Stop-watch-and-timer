//alert variables
const alert = document.querySelector(".alert");
const closeBtn = document.querySelector(".close-btn");
const textAlert = document.querySelector(".text-alert");

//function close btn
closeBtn.addEventListener("click", () => {
  alert.classList.add("passive-alert");
  alert.classList.remove("active-alert");
});

// main variables
const stopWatchBtn = document.querySelector(".stopwatch-section");
const timerBtn = document.querySelector(".timer-section");
const containerStopWatch = document.querySelector(".container-stopwatch");
const containerTimer = document.querySelector(".container-timer");

stopWatchBtn.addEventListener("click", () => {
  timerBtn.classList.replace("active", "passive");
  stopWatchBtn.classList.add("active");
  stopWatchBtn.classList.remove("passive");
  containerStopWatch.classList.remove("passive-animation");
  containerTimer.classList.replace("active-animation", "passive-animation");
  containerStopWatch.classList.add("active-animation");
  containerStopWatch.classList.remove("passive-section");
  containerStopWatch.classList.add("active-section");
  containerTimer.classList.remove("active-section");
  containerTimer.classList.add("passive-section");
});

timerBtn.addEventListener("click", () => {
  stopWatchBtn.classList.replace("active", "passive");
  timerBtn.classList.add("active");
  timerBtn.classList.remove("passive");
  containerTimer.classList.add("active-animation");
  containerStopWatch.classList.replace("active-animation", "passive-animation");
  containerTimer.classList.remove("passive-animation");
  containerStopWatch.classList.replace("active-section", "passive-section");
  containerTimer.classList.replace("passive-section", "active-section");
});

// stopwatch variables
const minuteNum = document.querySelector(".minute");
const secondNum = document.querySelector(".second");
const milliSecondNum = document.querySelector(".milli-second");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

var startInterval = null;

startBtn.addEventListener("click", () => {
  startInterval = setInterval(startBtntimer, 10);
});

function startBtntimer() {
  let milliSecond = Number(milliSecondNum.innerHTML) + 1;
  let minute = 0;

  milliSecond != 100
    ? (milliSecondNum.innerHTML = milliSecond)
    : ((secondNum.innerHTML = Number(secondNum.innerHTML) + 1),
      (milliSecondNum.innerHTML = 0));
}

// create function for stop number stopwatch
stopBtn.addEventListener("click", () => {
  clearInterval(startInterval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(startInterval);
  minuteNum.innerHTML = "00";
  secondNum.innerHTML = "00";
  milliSecondNum.innerHTML = "00";
});

// timer variables
const numbersInputTimer = document.querySelectorAll("input[type=number]");
const startButton = document.getElementById("start-timer");
const stopButton = document.getElementById("stop-timer");
const restButton = document.getElementById("reset-timer");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

var timerInterval;

numbersInputTimer.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.length > 2) {
      input.value = input.value.slice(0, 2);
    } else {
      if (numbersInputTimer[1].value > 59) {
        numbersInputTimer[2].value = "99";
        let remaining = numbersInputTimer[1].value % 60;
        numbersInputTimer[1].value = remaining.toString().padStart(2, "0");
        let resultMath = Math.floor(numbersInputTimer[1].value / remaining);
        numbersInputTimer[0].value = resultMath.toString().padStart(2, "0");
      }
    }
  });
});

startButton.addEventListener("click", () => {
  minutes = parseInt(numbersInputTimer[0].value) || 0;
  seconds = parseInt(numbersInputTimer[1].value) || 0;
  milliseconds = parseInt(numbersInputTimer[2].value) || 0;

  timerInterval = setInterval(() => {
    if (minutes === 0 && seconds === 0 && milliseconds === 0) {
      clearInterval(timerInterval);
      alert.classList.add("active-alert");
      alert.classList.remove("passive-alert");
      textAlert.textContent = "Time's up!";
    } else {
      if (milliseconds > 0) {
        milliseconds--;
      } else {
        if (seconds > 0) {
          seconds--;
          milliseconds = 99;
        } else {
          if (minutes > 0) {
            minutes--;
            milliseconds = 99;
            seconds = 60;
          }
        }
      }

      numbersInputTimer[0].value = minutes.toString().padStart(2, "0");
      numbersInputTimer[1].value = seconds.toString().padStart(2, "0");
      numbersInputTimer[2].value = milliseconds.toString().padStart(2, "0");
    }
  }, 10);
});

stopButton.addEventListener("click", () => {
  clearInterval(timerInterval);
});

restButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  numbersInputTimer.forEach((input) => {
    input.value = "00";
  });
});
