import { BiWater } from "react-icons/bi";
import { FaWind } from "react-icons/fa";
import Image from "next/image";

export default async function CardBackground({ city }: { city: string }) {
  const apiKey = "27bfe5feb37c46d1b74899ab94d95423";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  async function checkWeather(city: string) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    return data;
  }

  const { name, weather, main, wind } = await checkWeather(city);

  const icon = weather[0].icon;

  const weatherStatus = weather[0].main;
  const weatherDescription = weather[0].description;

  return (
    <>
      <div className="h-1/2 p-6 rounded-lg shadow-white shadow-lg bg-cover bg-center bg-no-repeat bg-gradient-to-r from-white">
        <div className="flex flex-col justify-center items-center bg-black rounded-md">
          <div className="flex items-center">
            <h5 className="mx-2 text-xl font-medium text-blue-200  ">
              {Math.round(main.temp)}°
            </h5>
            <span className="text-lg text-white font-bold drop-shadow-lg">
              {name}
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <span className="flex flex-col items-center  justify-evenly text-black p-3 rounded-md">
            <BiWater className="text-cyan-400 text-3xl" />
            {main.humidity}%<small>Humidity </small>
          </span>
          <span className="flex flex-col items-center justify-evenly text-white  p-3 rounded-md">
            <FaWind className="text-cyan-400 text-3xl" />
            {wind.speed}km/h
            <small>Wind Speed</small>
            <img
              src={`
              https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="icon"
            />
            <h1 className="text-md text-white font-bold">
              {weatherStatus.charAt(0).toUpperCase() + weatherStatus.slice(1)}
            </h1>
            <p className="text-sm text-white">
              {weatherDescription.charAt(0).toUpperCase() +
                weatherDescription.slice(1)}
            </p>
          </span>
          <div className="justify-evenly"></div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center text-black ">
        <div className="flex flex-col rounded p-4 w-full max-w-xs bg-gradient-to-r from-white">
          <div className="font-bold text-xl">{name}</div>
          <div className="text-sm text-gray-500">Thursday 10 May 2020</div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <svg
              className="w-32 h-32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">24°</div>
            <div className="flex flex-col items-center ml-6">
              <div>Cloudy</div>
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-gray-500">28°C</span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down"></i>
                </span>
                <span className="text-sm font-light text-gray-500">20°C</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">9k/h</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">68%</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">10km</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
