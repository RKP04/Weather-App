import { useState } from "react";
import "./App.css";

 const api = {
   key: "f72b203065e0bf83cb62d2f5433d8696",
   base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      {/* <div style={{ backgroundColor: "lightblue", padding: "150px"
      }}> */}
        <div className="card" >
          <header className="App-header">
            <h1>Weather App</h1>

            {/* Search Box */}
            <div>
              <input
                type="text"
                placeholder="Enter City/Town..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btns" onClick={searchPressed}>Search</button>
            </div>

            {/* Weather Information */}
            {weather && weather.main && (
              <div>
                <p>
                  {weather.name}, {weather.sys.country}
                </p>
                <p>{Math.round(weather.main.temp)} °C</p>
                {<p>{weather.weather[0].main}</p> }
              </div>
            )}
          </header>
        </div>
      {/* </div> */}
    </>
 
  );
}

export default App;
