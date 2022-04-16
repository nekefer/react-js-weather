import React, { useState } from "react";
import "../style/meteo.css";
import MeteoInfo from "./MeteoInfo";

const Meteo = () => {
  const [form, setForm] = useState({
    city: "",
    country: "",
  });
  const [weather, setWeather] = useState([]);
  const APIKEY = "3f3f4940ff04c595154149d98b7d47a7";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
    alert("Aucune donnée entrée");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      setWeather({ data: data });
    }
  }
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="meteo">
      <form>
   
       <input
          type="search"
          name="city"
          id="city"
          placeholder="Entrez le nom de la ville"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="search"
          name="country"
          id="country"
          placeholder="Entrez le nom de la pays"
          onChange={(e) => handleChange(e)}
        />
              <input type="submit" value="Search" onClick={(e) => weatherData(e)} />
      </form>
        {weather.data !== undefined ? (
          <div>
            <MeteoInfo data={weather.data} />
          </div>
        ) : null}
    </div>
  );
};

export default Meteo;
