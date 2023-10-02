// ID Data
const hoursData = document.querySelector("#hours");
const minutesData = document.querySelector("#minutes");
const secondsData = document.querySelector("#seconds");
const monthsData = document.querySelector("#months");
const dayData = document.querySelector("#day");
const dateData = document.querySelector("#date");

// Monthname Array
const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Weekday Array
const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function time() {
  const date = new Date();
  hoursData.textContent = date.getHours();
  minutesData.textContent = date.getMinutes();
  secondsData.textContent = date.getSeconds();
  monthsData.textContent = monthName[date.getMonth()];
  dayData.textContent = weekDay[date.getDay()];
  dateData.textContent = date.getDate();
}
setInterval(time, 1000);

// console.log(weekDay);
