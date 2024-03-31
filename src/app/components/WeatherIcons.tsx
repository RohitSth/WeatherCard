import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherSunny,
  TiWeatherWindy,
} from "react-icons/ti";
import { RiFoggyLine, RiDrizzleLine, RiHazeLine } from "react-icons/ri";
import { IoThunderstorm } from "react-icons/io5";
import { BsCloudSnow } from "react-icons/bs";
import { WiSmoke, WiDust, WiSandstorm } from "react-icons/wi";
import { FaVolcano } from "react-icons/fa6";
import { GiTornado } from "react-icons/gi";

export default function WeatherIcons({
  status,
  description,
}: {
  status: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center p-10 bg-black rounded-lg opacity-60 shadow-lg shadow-white mb-8">
      {status === "Clouds" ? (
        <TiWeatherCloudy className="text-4xl font-bold text-gray-300 drop-shadow-md" />
      ) : status === "Rain" ? (
        <TiWeatherDownpour className="text-4xl font-bold text-cyan-200 drop-shadow-md" />
      ) : status === "Fog" ? (
        <RiFoggyLine className="text-4xl font-bold text-gray-200 drop-shadow-md" />
      ) : status === "Smoke" ? (
        <WiSmoke className="text-4xl font-bold text-cyan-200 drop-shadow-md" />
      ) : status === "Haze" ? (
        <RiHazeLine className="text-4xl font-bold text-cyan-200 drop-shadow-md" />
      ) : status === "Snow" ? (
        <BsCloudSnow className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "Thunderstorm" ? (
        <IoThunderstorm className="text-4xl font-bold text-purple-300 drop-shadow-md" />
      ) : status === "Clear" ? (
        <TiWeatherSunny className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "Dust" ? (
        <WiDust className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "Mist" ? (
        <RiFoggyLine className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "Sand" ? (
        <WiSandstorm className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "Ash" ? (
        <FaVolcano className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "Squall" ? (
        <TiWeatherWindy className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "Tornado" ? (
        <GiTornado className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "Drizzle" ? (
        <RiDrizzleLine className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : (
        <TiWeatherSunny />
      )}

      <h1 className="text-md text-white pt-3 font-semibold">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </h1>
      <p className="text-sm text-white font-thin hover:text-blue-300">
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </p>
    </div>
  );
}
