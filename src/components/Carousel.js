import React, { useState } from "react";
import CarouselItems from "./CarouselItems";

const api = {
  key: "1c46d5bdf6853f2ce38f28a045c0d8f4",
  base: "https://api.openweathermap.org/data/2.5/",
};
export default function Carousel() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (true) {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  return (
    <>
      <main>
        {typeof weather.main != "undefined" ? (
          console.log(weather.dt),
          <div className="cont">
            <div className="item">
              <CarouselItems
                City={weather.name}
                Country={weather.sys.country}
                date={(new Date((weather.dt)*1000).toUTCString())}
                temp={Math.round(weather.main.temp)}
                feels_like={Math.round(weather.main.feels_like)}
                temp_max={Math.round(weather.main.temp_max)}
                temp_min={Math.round(weather.main.temp_min)}
                Main={weather.weather[0].main}
                Humidity={weather.main.humidity}
                WS={weather.wind.speed}
              />
            </div>
          </div>
        ) : (
          "404 error"
        )}
        <div className="search-box my-4 mx-4 d-flex justify-content-center">
          <input
            type="text"
            className="search"
            placeholder="Current weather location"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button
            type="submit"
            onClick={search}
            className="btn btn-primary mx-4"
          >
            Search
          </button>
        </div>
      </main>
    </>
  );
}
