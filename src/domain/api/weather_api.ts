import { WeatherResponse } from "../models/weather_response";
import axios from "axios";

export const getWeatherResult = async (lat: number, long: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=f024fe03b1b2c4a1e3c33b2bd875b97b`;
    const { data } = await axios.get(url);
    return data as WeatherResponse;
};