
let time = new Date ();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
let day = days[time.getDay()];

function date(time){

let minutes = time.getMinutes();
if (minutes<10){
    minutes = (`0${minutes}`);
}
let hours = time.getHours();
if (hours < 10){
    hours = (`0${hours}`);
}
return `${day}, ${hours}:${minutes}`;
}

let now = document.querySelector("#time");
now.innerHTML = date(time);
function displayTemperature (response){
let temperature = document.querySelector("#temp");
let selectedCity = document.querySelector("#city");
temperature.innerHTML = Math.round(response.data.main.temp);
selectedCity.innerHTML = response.data.name;
document.querySelector("#sky").innerHTML= response.data.weather[0].description;
document.querySelector("#humidity").innerHTML= `Humidity:${Math.round(response.data.main.humidity)}%`;
document.querySelector("#wind").innerHTML= `Wind Speed:${Math.round(response.data.wind.speed)}km/h`;
document.querySelector("#feelsLike").innerHTML = `Perceived:${Math.round(response.data.main.feels_like)}`;
}
function search(event){
    event.preventDefault();
    let city = document.querySelector(".enter").value;
    let apiKey = "e8cf93c11b2e03971616c05c042f7ad8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemperature);
}
let form = document.querySelector("#submit-city");
form.addEventListener("submit", search);
