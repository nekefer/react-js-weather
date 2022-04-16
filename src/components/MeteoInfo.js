import React from "react";
import "../style/meteoInfo.css";

const MeteoInfo = ({ data }) => {
  if (data.cod !== "404") {
    const iconurl =
      "http://openweathermap.org/img/wn/" + `${data.weather[0].icon}` + ".png";
    return (
     <div className="meteoinfo">
            <div className="maincard">
              <span className="cardtitle">
                {data.name} , {data.sys.country}. Weather
              </span>
              <span className="cardsubtitle">
                As of {new Date().toLocaleTimeString()}
              </span>

              <h1>
                {" "}
                {Math.floor(data.main.temp - 273.15)}
                <sup>°</sup>
              </h1>
              <span className="weather-main">{data.weather[0].main}</span>
              <img className="weather-icon" src={iconurl} alt="" srcset="" />
              <span className="weather-description">
                {" "}
                {data.weather[0].description}
              </span>
            </div>
            <div className="weatherdetails">
              <div className="section1">
                <table>
                  <tr>
                    <td>
                      <h4>Haut/Bas</h4>
                    </td>
                    <td>
                      <span>
                        {Math.floor(data.main.temp_max - 273.15)} <sup>°</sup>/
                        {Math.floor(data.main.temp_min - 273.15)} <sup>°</sup>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Humidité</h4>
                    </td>
                    <td>
                      <span>{data.main.humidity} %</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Pression</h4>
                    </td>
                    <td>
                      <span>{data.main.pressure} hPa</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Visibilité</h4>
                    </td>
                    <td>
                      <span>{data.visibility / 1000} Km</span>
                    </td>
                  </tr>
                </table>
              </div>

              <div className="section2">
                <table>
                  <tr>
                    <td>
                      <h4>Vitesse du vent</h4>
                    </td>
                    <td>
                      <span>
                        {Math.floor((data.wind.speed * 18) / 5)} km/hr
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Direction du vent</h4>
                    </td>
                    <td>
                      <span>
                        {data.wind.deg}
                        <sup>o</sup> deg
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Heure du lever du soleil</h4>
                    </td>
                    <td>
                      <span>
                        {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Heure du coucher du soleil</h4>
                    </td>
                    <td>
                      <span>
                        {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
    
    );
  } else {
    return <div className="nocity">Pas de ville ou pays pourtant ce nom</div>;
  }
};

export default MeteoInfo;
