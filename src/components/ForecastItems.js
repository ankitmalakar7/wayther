import React, { Component } from "react";

export default class ForecastItems extends Component {
  render() {
    let {
      City,
      Country,
      Date1,
      Date2,
      Date3,
      Date4,
      Date5,
      Date6,
      Date7,
      Date8,
      temp1,
      temp2,
      temp3,
      temp4,
      temp5,
      temp6,
      temp7,
      temp8,
      temp_max1,
      temp_max2,
      temp_max3,
      temp_max4,
      temp_max5,
      temp_max6,
      temp_max7,
      temp_max8,
      temp_min1,
      temp_min2,
      temp_min3,
      temp_min4,
      temp_min5,
      temp_min6,
      temp_min7,
      temp_min8,
      Main1,
      Main2,
      Main3,
      Main4,
      Main5,
      Main6,
      Main7,
      Main8,
      Humidity1,
      Humidity2,
      Humidity3,
      Humidity4,
      Humidity5,
      Humidity6,
      Humidity7,
      Humidity8,
      WS1,
      WS2,
      WS3,
      WS4,
      WS5,
      WS6,
      WS7,
      WS8,
      Preci1,
      Preci2,
      Preci3,
      Preci4,
      Preci5,
      Preci6,
      Preci7,
      Preci8,
    } = this.props;
    return (
      <div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://source.unsplash.com/265x225/?nature"
                    className="bd-placeholder-img card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {City} {Country} {Date1} <b>Temparature</b> {temp1}°c{" "}
                      <b>max</b> {temp_max1}°c <b>min</b> {temp_min1}°c{" "}
                      <b>{Main1}</b> <b>Humidity </b>
                      {Humidity1}% <b>wind</b> {Math.round(3.6 * WS1)} km/h{" "}
                      <b>Precipitation chance</b> {Preci1}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://source.unsplash.com/265x225/?sea"
                    className="bd-placeholder-img card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {City} {Country} {Date2} <b>Temparature</b> {temp2}°c{" "}
                      <b>max</b> {temp_max2}°c <b>min</b> {temp_min2}°c{" "}
                      <b>{Main2}</b> <b>Humidity </b>
                      {Humidity2}% <b>wind</b> {Math.round(3.6 * WS2)} km/h{" "}
                      <b>Precipitation chance</b> {Preci2}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://source.unsplash.com/265x225/?cloud"
                    className="bd-placeholder-img card-img-top"
                    alt=""
                  />

                  <div className="card-body">
                    <p className="card-text">
                      {City} {Country} {Date3} <b>Temparature</b> {temp3}°c{" "}
                      <b>max</b> {temp_max3}°c <b>min</b> {temp_min3}°c{" "}
                      <b>{Main3}</b> <b>Humidity </b>
                      {Humidity3}% <b>wind</b> {Math.round(3.6 * WS3)} km/h{" "}
                      <b>Precipitation chance</b> {Preci3}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://source.unsplash.com/265x225/?sky"
                    className="bd-placeholder-img card-img-top"
                    alt=""
                  />

                  <div className="card-body">
                    <p className="card-text">
                      {City} {Country} {Date4} <b>Temparature</b> {temp4}°c{" "}
                      <b>max</b> {temp_max4}°c <b>min</b> {temp_min4}°c{" "}
                      <b>{Main4}</b> <b>Humidity </b>
                      {Humidity4}% <b>wind</b> {Math.round(3.6 * WS4)} km/h{" "}
                      <b>Precipitation chance</b> {Preci4}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://source.unsplash.com/265x225/?waterdrops"
                    className="bd-placeholder-img card-img-top"
                    alt=""
                  />

                  <div className="card-body">
                    <p className="card-text">
                      {City} {Country} {Date5} <b>Temparature</b> {temp5}°c{" "}
                      <b>max</b> {temp_max5}°c <b>min</b> {temp_min5}°c{" "}
                      <b>{Main5}</b> <b>Humidity </b>
                      {Humidity5}% <b>wind</b> {Math.round(3.6 * WS5)} km/h{" "}
                      <b>Precipitation chance</b> {Preci5}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://source.unsplash.com/265x225/?water"
                    className="bd-placeholder-img card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {City} {Country} {Date6} <b>Temparature</b> {temp6}°c{" "}
                      <b>max</b> {temp_max6}°c <b>min</b> {temp_min6}°c{" "}
                      <b>{Main6}</b> <b>Humidity </b>
                      {Humidity6}% <b>wind</b> {Math.round(3.6 * WS6)} km/h{" "}
                      <b>Precipitation chance</b> {Preci6}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://source.unsplash.com/265x225/?snow"
                    className="bd-placeholder-img card-img-top"
                    alt=""
                  />

                  <div className="card-body">
                    <p className="card-text">
                      {City} {Country} {Date7} <b>Temparature</b> {temp7}°c{" "}
                      <b>max</b> {temp_max7}°c <b>min</b> {temp_min7}°c{" "}
                      <b>{Main7}</b> <b>Humidity </b>
                      {Humidity7}% <b>wind</b> {Math.round(3.6 * WS7)} km/h{" "}
                      <b>Precipitation chance</b> {Preci7}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://source.unsplash.com/265x225/?ocean"
                    className="bd-placeholder-img card-img-top"
                    alt=""
                  />

                  <div className="card-body">
                    <p className="card-text">
                      {City} {Country} {Date8} <b>Temparature</b> {temp8}°c{" "}
                      <b>max</b> {temp_max8}°c <b>min</b> {temp_min8}°c{" "}
                      <b>{Main8}</b> <b>Humidity </b>
                      {Humidity8}% <b>wind</b> {Math.round(3.6 * WS8)} km/h{" "}
                      <b>Precipitation chance</b> {Preci8}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
