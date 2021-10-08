import React, { Component } from "react";

export default class CarouselItems extends Component {
  render() {
    let {
      City,
      Country,
      date,
      temp,
      feels_like,
      temp_max,
      temp_min,
      Main,
      Humidity,
      WS,
    } = this.props;
    return (
      <div>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="active"
              aria-current="true"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/1200x500/?sky"
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                alt=""
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>{City}</h1>
                  <p>{Country} {date}</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/1200x500/?weather"
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                alt=""
              />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Temperature {temp}°c</h1>
                  <p>
                    max {temp_max}°c min {temp_min}°c feels-like {feels_like}°c
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/1200x500/?weather,cloud"
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                alt=""
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>{Main}</h1>
                  <p>
                    humidity {Humidity}% wind {Math.round(3.6 * WS)} km/h
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
