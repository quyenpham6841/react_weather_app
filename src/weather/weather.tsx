import { Button } from "semantic-ui-react";
import { WeatherResponse } from "../domain/models/weather_response";
import moment from "moment";
import "./styles.css";

const refresh = () => {
  window.location.reload();
};

function WeatherCard({ weatherData }: { weatherData: WeatherResponse }) {
  return (
    <div className="page">
      <div className="main">
        <div className="top">
          <p className="header">{weatherData.name}</p>
          <Button
            className="button"
            inverted
            color="blue"
            circular
            icon="refresh"
            onClick={refresh}
          />
        </div>
        <div className="flex">
          <p className="day">
            {moment().format("dddd")}, <span>{moment().format("LL")}</span>
          </p>
          <p className="description">{(weatherData?.weather ?? [])[0].main}</p>
        </div>

        <div className="flex">
          <p className="temp">Temprature: {weatherData?.main?.temp} &deg;C</p>
          <p className="temp">Humidity: {weatherData?.main?.humidity} %</p>
        </div>
        <div className="flex">
          <p className="temp">Feels like: {weatherData?.main?.feels_like} &deg;C</p>
          <p className="temp">Wind speed: {weatherData?.wind?.speed} m/s</p>
        </div>

        <div className="flex">
          <p className="sunrise-sunset">
            Sunrise:{" "}
            {new Date(weatherData?.sys?.sunrise ?? 0 * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
          <p className="sunrise-sunset">
            Sunset:{" "}
            {new Date(weatherData?.sys?.sunset ?? 0 * 1000).toLocaleTimeString(
              "en-IN"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
