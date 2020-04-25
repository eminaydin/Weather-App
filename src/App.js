import React, { useState } from 'react';
import './App.css';

const api = {
  key: "674f174661d03bcc88281615e3d3871f",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {

      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          console.log(result);
          setQuery("");
        })
    }
  }
  const initial = e => {
    fetch(`${api.base}weather?q=Berlin&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)

      })
  }

  const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }

  function theme() {
    if (weather.main.temp < 6) {
      return "app winter"
    }
    if (weather.main.temp > 6 && weather.main.temp < 20) {
      return "app autumn"
    }
    if (weather.main.temp > 20) {
      return "app summer"
    }
  }

  return (
    <div className={(typeof weather.main != "undefined") ? theme() : "app"}>

      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">
                {dateBuilder(new Date())}
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
            </div>
              <p className="feels">Feels:</p>
              <div className="temp-feels">
                {Math.round(weather.main.feels_like)}°c</div>
              <div className="weather"> {weather.weather[0].main} </div>
            </div>
          </div>
        )
          :

          (
            initial()
          )
        }

      </main>
    </div>
  );
}

export default App;
