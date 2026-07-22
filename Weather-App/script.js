/*=========================================
        WEATHER API KEY
=========================================*/

// Paste your own API key here
// const apiKey = "5584480468c54c48f830f6a546162ba6";


/*=========================================
        WEATHER API KEY
=========================================*/

const apiKey = "5584480468c54c48f830f6a546162ba6";

/*=========================================
        HTML ELEMENTS
=========================================*/

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const city = document.getElementById("city");
const country = document.getElementById("country");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");

/*=========================================
        SEARCH BUTTON
=========================================*/

searchBtn.addEventListener("click", function(){

    let cityName = cityInput.value;

    errorMessage.style.display = "none";

    loading.style.display = "block";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)

    .then(function(response){

        return response.json();

    })

    .then(function(data){

        loading.style.display = "none";

        if(data.cod == "404"){

            errorMessage.style.display = "block";

            return;

        }

        city.textContent = data.name;
        country.textContent = data.sys.country;
        temperature.textContent = data.main.temp + " °C";
        weather.textContent = data.weather[0].main;
        humidity.textContent = data.main.humidity + "%";
        wind.textContent = data.wind.speed + " m/s";
        let icon = data.weather[0].icon;

weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

// Change background based on weather

if(data.weather[0].main === "Clear"){

    document.body.style.background =
    "linear-gradient(to right, orange, gold)";

}

else if(data.weather[0].main === "Clouds"){

    document.body.style.background =
    "linear-gradient(to right, gray, lightgray)";

}

else if(data.weather[0].main === "Rain"){

    document.body.style.background =
    "linear-gradient(to right, #2c3e50, #3498db)";

}

else if(data.weather[0].main === "Thunderstorm"){

    document.body.style.background =
    "linear-gradient(to right, black, #434343)";

}

else if(data.weather[0].main === "Snow"){

    document.body.style.background =
    "linear-gradient(to right, white, #dfe9f3)";

}

else{

    document.body.style.background =
    "linear-gradient(to right, #4facfe, #00f2fe)";

}

    });

});


/*=========================================
        PRESS ENTER TO SEARCH
=========================================*/

cityInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        searchBtn.click();

    }

});