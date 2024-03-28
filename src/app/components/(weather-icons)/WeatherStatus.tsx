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

export default function WeatherStatus({ status }: { status: string }) {
  return (
    <div className="flex flex-col items-center pb-10">
      {/* <TiWeatherCloudy />
      <TiWeatherDownpour />
      <TiWeatherNight />
      <TiWeatherPartlySunny />
      <TiWeatherShower />
      <TiWeatherSnow />
      <TiWeatherStormy />
      <TiWeatherSunny />
      <TiWeatherWindy />
      <TiWeatherWindyCloudy /> */}

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
      ) : (
        <TiWeatherWindyCloudy />
      )}
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        21 C
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Kathmandu
      </span>
    </div>
  );
}
