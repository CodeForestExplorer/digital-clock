const monthData = document.querySelector("#hours");

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

const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();

const date = d.getDate();
const month = monthName[d.getMonth()];
let day = weekDay[d.getDay()];
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

monthData.innerText = month;

let allData = [day, date, month, hours, minutes, seconds, monthData]

console.log(allData);


