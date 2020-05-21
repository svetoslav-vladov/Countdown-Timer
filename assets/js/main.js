const daysBox     = document.querySelector("#timer #days .number");
const hoursBox    = document.querySelector("#timer #hours .number");
const minutesBox  = document.querySelector("#timer #minutes .number");
const secondsBox  = document.querySelector("#timer #seconds .number");

let customDate    = new Date(2020, 5, 21, 09, 30, 0);


function calculateTime() {
  const today     = new Date().getTime();
  const timeDiff  = customDate.getTime() - today;

  const aDay    = 24*60*60*1000;
  const anHour  = 60*60*1000;
  const aMinute = 60*1000;

  let days    = Math.floor(timeDiff / aDay);
  let hours   = Math.floor((timeDiff % aDay) / anHour);
  let minutes = Math.floor((timeDiff % anHour) / aMinute);
  let seconds = Math.floor((timeDiff % aMinute) / 1000);

  setDateValues(days, hours, minutes, seconds);

  if (timeDiff < 0) {
    clearInterval(countdown);
    setDateValues(day, hours, minutes, seconds);
  };
}

function setDateValues(days, hours, minutes, seconds) {
  daysBox. innerHTML = formatDateTimeItem(days);
  hoursBox. innerHTML = formatDateTimeItem(hours);
  minutesBox. innerHTML = formatDateTimeItem(minutes);
  secondsBox. innerHTML = formatDateTimeItem(seconds);
}

function formatDateTimeItem(item){
  return (item < 10) ? `0${item}` : item;
}

let countdown = setInterval(calculateTime, 1000);
calculateTime();