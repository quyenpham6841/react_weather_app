import { WeatherResponse } from "../models/weather_response";
import axios from "axios";

export const getWeatherResult = async (lat: number, long: number) => {
    const url = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
    console.log(url);
    const { data } = await axios.get(url);
    return data as WeatherResponse;
};