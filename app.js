const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const key = "78a2e5e9bf7046b23f797509ec4702b5";
const search = document.querySelector("#search-input");
const btn = document.querySelector("#search-btn");
const icon =  document.querySelector(".weather img");


async function checkWeather (city){
    const responce = await fetch(url +city +`&appid=${key}`);

    if(responce.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    } else{
        const data = await responce.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "kmp/h";
    
        if(data.weather[0].main == "Clouds"){
            icon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            icon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            icon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Snow"){
            icon.src = "images/snow.png";
        }
        else if(data.weather[0].main == "Rain"){
            icon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Mist"){
            icon.src = "images/mist.png";
        }
        document.querySelector(".error").style.display ="none";

        document.querySelector(".weather").style.display = "block";
    
    }
}

btn.addEventListener("click", () => {
    checkWeather(search.value);
});

