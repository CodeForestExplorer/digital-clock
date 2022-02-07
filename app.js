// ID Data
let hoursData = document.querySelector("#hours");
let minutesData = document.querySelector("#minutes");
let secondsData = document.querySelector("#seconds");
let monthsData = document.querySelector("#months");
let dayData = document.querySelector("#day");
let dateData = document.querySelector("#date");

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
  hoursData.textcontent = date.getHours();
  minutesData.textcontent = date.getMinutes();
  secondsData.textcontent = date.getSeconds();
  monthsData.textcontent = monthName[date.getMonth()];
  dayData.textcontent = weekDay[date.getDay()];
  dateData.textcontent = date.getDate();

}
setInterval(time, 1000)