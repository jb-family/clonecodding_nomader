const API_KEY = "6f64bbfcd8dc27b07eede24b9a429f23";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        city.innerText = data.name;
        weather.innerText = `${data.main.temp} ${data.weather[0].main}`;
        
    })
}

function onGeoError(){
    alert("Can't fid you. No Weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);