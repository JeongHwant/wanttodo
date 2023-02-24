
const API_KEY = "6c326bc1390e488945c3fdefc54f527c"

function onGeoOk(position) {
    console.log(position);
    const lat = position.coords. latitude;
    const lng = position. coords. longitude;
    console.log("you live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;});
    //내 좌표를 얻어서 api로 질문을 던질것이다
} 

function onGeoError() {
    alert("can't find you, No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//위치 얻는데 성공한 함수: onGeoOk, 위치 얻는데 실패한 함수: onGeoError

