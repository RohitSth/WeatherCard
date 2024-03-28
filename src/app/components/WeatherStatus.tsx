import { BiWater } from "react-icons/bi";
import { FaWind } from "react-icons/fa";

export default function WeatherStatus({
  temperature,
  location,
  humidity,
  windspeed,
}: {
  temperature: number;
  location: string;
  humidity: number;
  windspeed: number;
}) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {temperature}°C
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {location}
        </span>
      </div>
      <div className="flex justify-between items-start">
        <span className="text-sm flex flex-col items-center text-gray-500 dark:text-gray-400">
          <BiWater />
          {humidity}%<small>Humidity </small>
        </span>
        <span className="text-sm flex flex-col items-center text-gray-500 dark:text-gray-400">
          <FaWind />
          {windspeed}km/h
          <small>Wind Speed</small>
        </span>
      </div>
    </>
  );
}
