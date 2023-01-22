import { useState } from "react";

import "./LoggedUserPage.css";
import Button from "@mui/material/Button";



const baseUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=696606efa0d387803b2f600dd5ebaca1";

// we need a function to fetch from api
const getWeather = async () => {
  const response = await fetch(baseUrl); //axios.get replace fetch
  const temp = await response.json();
  return temp;
};

// Axios

export default function LoggedUserPage() {
  // useState to handle data
  const [weather, setWeather] = useState({});
  // console.log(weather);

  // onclick handler function for button click
  const onClickHandler = async (e) => {
    setWeather(await getWeather());
  };

  //Functional component to display Weather
  function DisplayWeather({
    location,
    windspeed,
    feelslike,
    humidity,
    maxtemperature,
    mintemperature,
    temperature,
    weather,
  }) {
    return (
      <div>
        <h3>Location : {location}</h3>
        <h3>Weather : {weather}</h3>
        <h3>Wind Speed : {windspeed} mph</h3>
        <h3>Humidity : {humidity}%</h3>
        <h3>Feels like : {feelslike} degrees Fahrenheit</h3>
        <h3>Max Temperature : {maxtemperature} degrees Fahrenheit</h3>
        <h3>Temperature : {temperature} degrees Fahrenheit</h3>
        <h3>Min Temperature : {mintemperature} degrees Fahrenheit</h3>
      </div>
    );
  }

  // ==========================================================================================

  return (
    <>
      <div className="Weather">
        <h1>You are now Logged in q</h1>

        {/* always imp to use a condtional operator here*/}
        {/* DisplayWeather component used to display weather */}
        <>
          {weather.base ? (
            <DisplayWeather
              location={weather.name}
              windspeed={weather.wind.speed}
              feelslike={weather.main.feels_like}
              humidity={weather.main.humidity}
              maxtemperature={weather.main.temp_max}
              mintemperature={weather.main.temp_min}
              temperature={weather.main.temp / 10}
              weather={weather.weather[0].description}
              // test
            />
          ) : null}
          
        </>

        {/* Mui button */}
        <Button variant="contained" onClick={onClickHandler}>
          Click for Weather
        </Button>
      </div>
    </>
  );
}
