const apiKey = "664cd2f5c7a6d03b77e9d96dc1540590";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=`;

const searchbox = document.querySelector(".search-part input");
const searchbtn = document.querySelector(".search-part button");

async function checkweather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data);
        document.querySelector('.cityname').innerHTML = data.name; 
        let celcies = Math.round(data.main.temp) -273.15;
        let totalcelcies=Math.round(celcies);
        document.querySelector(".temp").innerHTML = `Temperature: ${totalcelcies} &#8451;` + "°C";
        document.querySelector(".humi").innerHTML = `Humidity: ${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `Wind Speed: ${Math.round(data.wind.speed)} m/s`;
        document.querySelector(".pressure").innerHTML= `Pressure: ${Math.round(data.main.pressure)} hPa`;
       
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}   

searchbtn.addEventListener("click", () => {
    const city = searchbox.value.trim();
    if (city !== '') {
        checkweather(city);
    } else {
        console.log('Please enter a city name');
    }
});
