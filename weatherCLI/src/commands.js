const fetch = require("node-fetch");
const APIXU_KEY = "xxx";

const fetchNow = async (city) => {
    try {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${APIXU_KEY}&query=${city}`);
        const data = await response.json();
        const now = {
            location: data.location.name,
            country: data.location.country,
            longitude: data.location.lon,
            latitude: data.location.lat,
            temperature: data.current.temperature,
        }
        console.log(now);
    }
    catch(err){
        console.log("fetch failed", err)
    }
}

const weatherForecast = async (city) => {
    const response = await fetch(`http://api.weatherstack.com/forecast?access_key=${APIXU_KEY}&query=${city}&forecast_days=&hourly=1`);
    const data = await response.json();
    console.log(data);
}

module.exports ={
    fetchNow,
    weatherForecast
}