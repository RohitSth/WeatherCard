import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherNight,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindy,
} from "react-icons/ti";
import { RiFoggyLine } from "react-icons/ri";

export default function WeatherIcons({ status }: { status: string }) {
  return (
    <div className="flex flex-col items-center pb-10">
      {status === "cloudy" ? (
        <TiWeatherCloudy className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "downpour" ? (
        <TiWeatherDownpour className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "night" ? (
        <TiWeatherNight className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "partly-sunny" ? (
        <TiWeatherPartlySunny className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "shower" ? (
        <TiWeatherShower className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "snowy" ? (
        <TiWeatherSnow className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "stormy" ? (
        <TiWeatherStormy className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "sunny" ? (
        <TiWeatherSunny className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "windy" ? (
        <TiWeatherWindy className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : status === "foggy" ? (
        <RiFoggyLine className="text-4xl font-bold text-cyan-500 drop-shadow-md" />
      ) : (
        <TiWeatherSunny />
      )}

      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
}
