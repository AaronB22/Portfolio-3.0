const projOne = document.querySelector("#mainProject");
projOne.addEventListener("click", toProj);
const weatherApp = document.querySelector("#leftBlock");
weatherApp.addEventListener("click", goToWeatherApp);
const dayPlannerApp = document.querySelector("#rightBlock");
dayPlannerApp.addEventListener("click", goToDayPlanner);
function toProj() {
    window.location.replace("https://pacific-tor-20392.herokuapp.com/");
}
function goToWeatherApp() {
    window.location.replace("https://aaronb22.github.io/WeatherHW/");
}
function goToDayPlanner() {
    window.location.replace("https://aaronb22.github.io/Project_1/");
}
