import "./App.css";
import { useEffect, useState } from "react";
import WeatherCard from "./weather/weather";
import { getWeatherResult } from "./domain/api/weather_api";
import { WeatherResponse } from "./domain/models/weather_response";
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();
  const [weather, setWeather] = useState<WeatherResponse>();

  // lấy location hiện tại
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log(lat);
    console.log(long);
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getWeatherResult(lat!, long!);
      console.log(data);
      setWeather(data);
    }

    if (lat && long) {
      fetchData();
    }
  }, [lat, long]);

  return (
    <div className="App">
     {(typeof weather != 'undefined') ? (
        <WeatherCard weatherData={weather}/>
      ): (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
       </div>
     )}
    </div>
  );
}

export default App;
