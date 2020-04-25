import React from 'react';
import './App.css';

const api = {
  key:"674f174661d03bcc88281615e3d3871f",
  base:"api.openweathermap.org/data/2.5/"
}
function App() {

  const dateBuilder = (d) => {
    let months =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ["Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }

  return ( 
    <div className="app warm">
    <main> 
      <div className="search-box">
        <input 
        type="text"
        className="search-bar"
        placeholder="Search"
        />
      </div>
      <div className="location-box">
    <div className="location">
New York City, US
    </div>
    <div className="date">
{dateBuilder(new Date())}
    </div>
      </div>
      <div className="weather-box">
<div className="temp">
15"c
</div>
      </div>
      <div className="weather"> Sunny </div>
    </main>
    </div>
  );
}

export default App;
