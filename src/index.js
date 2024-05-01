function search(event) {
    event.preventDefault();
    let searchFormInput = document.querySelector("#search-form-input");
    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = searchFormInput.value 


}

function formatDate(date) {
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();

if (hours < 10) {
    let hours = `0${hours}`
};

if (minutes < 10) {
    let minutes = `0${minutes}`
};

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


let formattedDay = days[day];
return `${formattedDay} ${hours}:${minutes}`;

}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDate = document.querySelector("#current-date-time");
let now = new Date();
currentDate.innerHTML = formatDate(now);