import React, { useState } from "react";
import CarouselItems from "./CarouselItems";
import Errorcode from "./Errorcode";

export default function Carousel(props) {
  const base = "https://api.openweathermap.org/data/2.5/";
  const key= "1c46d5bdf6853f2ce38f28a045c0d8f4"
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (true) {
      props.set(10);
      fetch(`${base}weather?q=${query}&units=metric&appid=${key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          // console.log(result)
          props.set(70);
        });
      props.set(100);
    }
  };
  return (
    <>
      <main>
        {typeof weather.main != "undefined" ? (
          <div className="cont">
            <div className="item">
              <CarouselItems
                City={weather.name}
                Country={weather.sys.country}
                date={new Date(weather.dt * 1000).toUTCString()}
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
          <Errorcode cod={weather.cod} />
        )}
        <div className="search-box my-4 mx-4 d-flex justify-content-center">
          <input
            type="text"
            className="search"
            placeholder="Current weather location..."
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
