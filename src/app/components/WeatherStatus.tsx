import { BiWater } from "react-icons/bi";
import { FaWind } from "react-icons/fa";
import WeatherIcons from "./WeatherIcons";

export default async function WeatherStatus({
  city,
  status,
}: {
  city: string;
  status: string;
}) {
  const apiKey = "27bfe5feb37c46d1b74899ab94d95423";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;

  async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    return data;
  }

  const { name, weather, main, wind } = await checkWeather();
  return (
    <>
      <WeatherIcons status={status} />
      <div className="flex flex-col items-center">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {main.temp}°C
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{name}</span>
      </div>
      <div className="flex justify-between items-start">
        <span className="text-sm flex flex-col items-center text-gray-500 dark:text-gray-400">
          <BiWater />
          {main.humidity}%<small>Humidity </small>
        </span>
        <span className="text-sm flex flex-col items-center text-gray-500 dark:text-gray-400">
          <FaWind />
          {wind.speed}km/h
          <small>Wind Speed</small>
        </span>
      </div>
    </>
  );
}
