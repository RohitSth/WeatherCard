"use client";

import { useState } from "react";

export default function Card({
  cityName,
  humidity,
  temperature,
  windSpeed,
  visibility,
  icon,
  weatherStatus,
  weatherDescription,
}: {
  cityName: string;
  humidity: number;
  temperature: number;
  windSpeed: number;
  visibility: number;
  icon: string;
  weatherStatus: string;
  weatherDescription: string;
}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {!clicked ? (
        <div
          className="absolute right-2 top-2 bg-white/40 rounded-full shadow-pink-600 shadow-md cursor-pointer"
          onClick={handleClick}
        >
          <h5 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r p-2 from-purple-400 to-pink-600 drop-shadow-sm ">
            {Math.round(temperature)}°C
          </h5>
        </div>
      ) : (
        <div className="h-1/2 p-6 rounded-lg shadow-white shadow-lg bg-cover bg-center bg-no-repeat bg-gradient-to-r from-white transition duration-1000 hover:duration-200 hover:shadow-pink-600">
          <button
            className="flex absolute right-2 top-2 rounded-full bg-pink-600 text-white p-2"
            onClick={handleClick}
          ></button>

          <div className="flex items-center">
            <p className="font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-sm">
              {cityName}
              {/* {currentTime.toLocaleString()} */}
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="mt-7">
                <h5 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-sm ">
                  {Math.round(temperature)}°C
                  {/* <p className="text-sm pt-4">
                  Feels like {Math.round(main.feels_like)}°C
                </p> */}
                </h5>
              </div>

              <div className="flex flex-col items-center font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                <img
                  src={`
            https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="icon"
                />
                <h1 className="text-xl font-bold">
                  {weatherStatus.charAt(0).toUpperCase() +
                    weatherStatus.slice(1)}
                </h1>
                <p className="text-sm ">
                  {weatherDescription.charAt(0).toUpperCase() +
                    weatherDescription.slice(1)}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between font-semibold text-transparent text-md bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-sm">
            <span className="flex flex-col items-center justify-evenly p-3">
              <small className="font-bold">Wind</small>
              <p className="text-sm">{windSpeed}km/h</p>
            </span>
            <span className="flex flex-col items-center  justify-evenly  p-3">
              <small className="font-bold">Visibility </small>
              <p className="text-sm">{visibility / 1000}km</p>
            </span>
            <span className="flex flex-col items-center  justify-evenly p-3">
              <small className="font-bold">Humidity </small>
              <p className="text-sm">{humidity}%</p>
            </span>
            <div className="justify-evenly"></div>
          </div>
        </div>
      )}
    </>
  );
}
