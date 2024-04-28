

function formatDate(date) {
    let day = days[date.getDay()];
let hours = date.getHours();
let minutes = date.getMinutes();

// if (hours > 10) {
//     let hours = `0${hours}`
// };

// if (minutes > 10) {
//     let minutes = `0${minutes}`
// };

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


let formattedDate = days[day];
return `${formattedDate}, ${hours};${minutes}`;

}

let currentDate = document.querySelector("#current-date-time");
let now = new Date();
currentDate.innerHTML = formatDate(now);