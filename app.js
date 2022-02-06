// ID Data
const hoursData = document.querySelector("#hours");
const minutesData = document.querySelector("#minutes");
const secondsData = document.querySelector("#seconds");
const secondsData = document.querySelector("#months");
const datData = document.querySelector("#day");
const dateData = document.querySelector("#date");
const date = new Date();

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


const date = d.getDate();
const month = monthName[d.getMonth()];
let day = weekDay[d.getDay()];
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

setInterval(1000, date)

monthData.innerText = month;

let allData = [day, date, month, hours, minutes, seconds, monthData]

console.log(allData);


