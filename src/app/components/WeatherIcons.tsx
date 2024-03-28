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
  TiWeatherWindyCloudy,
} from "react-icons/ti";
import { RiFoggyLine } from "react-icons/ri";

export default function WeatherIcons({ status }: { status: string }) {
  return (
    <div className="flex flex-col items-center pb-10">
      {status === "cloudy" ? (
        <TiWeatherCloudy />
      ) : status === "downpour" ? (
        <TiWeatherDownpour />
      ) : status === "night" ? (
        <TiWeatherNight />
      ) : status === "partly-sunny" ? (
        <TiWeatherPartlySunny />
      ) : status === "shower" ? (
        <TiWeatherShower />
      ) : status === "snow" ? (
        <TiWeatherSnow />
      ) : status === "stormy" ? (
        <TiWeatherStormy />
      ) : status === "sunny" ? (
        <TiWeatherSunny />
      ) : status === "windy" ? (
        <TiWeatherWindy />
      ) : status === "foggy" ? (
        <RiFoggyLine />
      ) : (
        <TiWeatherSunny />
      )}

      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
}
