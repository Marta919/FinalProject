
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
celsiusTemperature = Math.round(response.data.main.temp);
temperature.innerHTML = celsiusTemperature;
 let name = response.data.name;
let country = response.data.sys.country;
selectedCity.innerHTML = `${name},${country}`;
document.querySelector("#sky").innerHTML= response.data.weather[0].description;
document.querySelector("#humidity").innerHTML= `Humidity:${Math.round(response.data.main.humidity)}%`;
document.querySelector("#wind").innerHTML= `Wind Speed:${Math.round(response.data.wind.speed)}km/h`;
document.querySelector("#visibility").innerHTML= `Visibility:${response.data.visibility / 1000}km`;
document.querySelector("#feelsLike").innerHTML = `Perceived:${Math.round(response.data.main.feels_like)}`;
let iconElement = document.querySelector("#icon");  
let weather = response.data.weather[0].icon;
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${weather}.png`);
}
function search(event){
    event.preventDefault();
    let city = document.querySelector(".enter").value;
    let apiKey = "e8cf93c11b2e03971616c05c042f7ad8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemperature);
    cels.innerHTML = `°C`;
  
    far.innerHTML = `|°F`;
}
let form = document.querySelector("#submit-city");
form.addEventListener("submit", search);
let far = document.querySelector(".farenheit");
let celsiusTemperature = null;
let cels = document.querySelector(".celsius");
function showFarenheit(event) {
    event.preventDefault();
  let temperature = document.querySelector("#temp");
  let farenheitTemperature = (celsiusTemperature * 9)/5+32;
  temperature.innerHTML = Math.round(farenheitTemperature);
  
}
function showCelsius (event){
    event.preventDefault();
    let temperature = document.querySelector("#temp");
    temperature.innerHTML = celsiusTemperature;
    cels.classList.remove("hover");   
    far.classList.add("hover");
}

cels.addEventListener ("click", showCelsius);
far.addEventListener ("click", showFarenheit);