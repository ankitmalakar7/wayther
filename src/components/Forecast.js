import React, { useState } from "react";
import Footer from "./Footer";
import ForecastItems from "./ForecastItems";

export default function Forecast(props) {
  const base = "https://api.weatherbit.io/v2.0/forecast/";
  const key = "1151da0cfff2471e83bf13d23f59396c"
  // const exclude= "hourly,minutely,alerts";
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (true) {
      props.set(10);
      fetch(`${base}daily?city=${query}&key=${key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          props.set(70);
        });
      props.set(100);
    }
  };
  return (
    <>
      <main>
        {typeof weather.data != "undefined" ? (
          <div className="cont">
            <div className="item">
              <ForecastItems
                City={weather.city_name}
                Country={weather.country_code}
                Date1={new Date(weather.data[0].datetime).toDateString()}
                temp1={Math.round(weather.data[0].temp)}
                temp_max1={Math.round(weather.data[0].max_temp)}
                temp_min1={Math.round(weather.data[0].min_temp)}
                Main1={weather.data[0].weather.description}
                Humidity1={weather.data[0].rh}
                WS1={weather.data[0].wind_spd}
                Preci1={weather.data[1].pop}
                Date2={new Date(weather.data[1].datetime).toDateString()}
                temp2={Math.round(weather.data[1].temp)}
                temp_max2={Math.round(weather.data[1].max_temp)}
                temp_min2={Math.round(weather.data[1].min_temp)}
                Main2={weather.data[1].weather.description}
                Humidity2={weather.data[1].rh}
                WS2={weather.data[1].wind_spd}
                Preci2={weather.data[1].pop}
                Date3={new Date(weather.data[2].datetime).toDateString()}
                temp3={Math.round(weather.data[2].temp)}
                temp_max3={Math.round(weather.data[2].max_temp)}
                temp_min3={Math.round(weather.data[2].min_temp)}
                Main3={weather.data[2].weather.description}
                Humidity3={weather.data[2].rh}
                WS3={weather.data[2].wind_spd}
                Preci3={weather.data[2].pop}
                Date4={new Date(weather.data[3].datetime).toDateString()}
                temp4={Math.round(weather.data[3].temp)}
                temp_max4={Math.round(weather.data[3].max_temp)}
                temp_min4={Math.round(weather.data[3].min_temp)}
                Main4={weather.data[3].weather.description}
                Humidity4={weather.data[3].rh}
                WS4={weather.data[3].wind_spd}
                Preci4={weather.data[3].pop}
                Date5={new Date(weather.data[4].datetime).toDateString()}
                temp5={Math.round(weather.data[4].temp)}
                temp_max5={Math.round(weather.data[4].max_temp)}
                temp_min5={Math.round(weather.data[4].min_temp)}
                Main5={weather.data[4].weather.description}
                Humidity5={weather.data[4].rh}
                WS5={weather.data[4].wind_spd}
                Preci5={weather.data[4].pop}
                Date6={new Date(weather.data[5].datetime).toDateString()}
                temp6={Math.round(weather.data[5].temp)}
                temp_max6={Math.round(weather.data[5].max_temp)}
                temp_min6={Math.round(weather.data[5].min_temp)}
                Main6={weather.data[5].weather.description}
                Humidity6={weather.data[5].rh}
                WS6={weather.data[5].wind_spd}
                Preci6={weather.data[5].pop}
                Date7={new Date(weather.data[6].datetime).toDateString()}
                temp7={Math.round(weather.data[6].temp)}
                temp_max7={Math.round(weather.data[6].max_temp)}
                temp_min7={Math.round(weather.data[6].min_temp)}
                Main7={weather.data[6].weather.description}
                Humidity7={weather.data[6].rh}
                WS7={weather.data[6].wind_spd}
                Preci7={weather.data[6].pop}
                Date8={new Date(weather.data[7].datetime).toDateString()}
                temp8={Math.round(weather.data[7].temp)}
                temp_max8={Math.round(weather.data[7].max_temp)}
                temp_min8={Math.round(weather.data[7].min_temp)}
                Main8={weather.data[7].weather.description}
                Humidity8={weather.data[7].rh}
                WS8={weather.data[7].wind_spd}
                Preci8={weather.data[7].pop}
              />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="container">
          <div className="search-box my-4 mx-4 d-flex justify-content-center">
            <input
              type="text"
              className="search"
              placeholder="Forecast weather location..."
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
          <Footer />
        </div>
      </main>
    </>
  );
}
