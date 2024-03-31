import { BiWater } from "react-icons/bi";
import { FaWind } from "react-icons/fa";
import WeatherIcons from "./WeatherIcons";

export default async function CardBackground({ city }: { city: string }) {
  const apiKey = "27bfe5feb37c46d1b74899ab94d95423";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  async function checkWeather(city: string) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    return data;
  }

  try {
    const { name, weather, main, wind } = await checkWeather(city);

    const weatherStatus = weather[0].main;
    const weatherDescription = weather[0].description;

    let backgroundImageUrl;

    switch (weatherStatus) {
      case "Clouds":
        backgroundImageUrl =
          "https://imgs.search.brave.com/LuAAXo9tVzbusaFi5FRiH1HJaxtKHmRwDFIhnOT8Oyk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MzM1NDgzL3Bob3Rv/L2ZsdWZmeS13aGl0/ZS1jbG91ZHMtZnJv/bS1hYm92ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ME9o/LTJYc2ZrWWdJaVBu/eUppLVdtNlFOYjJJ/UXJrNGdqZ050bHRi/QTNWND0";
        break;
      case "Rain":
        backgroundImageUrl =
          "https://imgs.search.brave.com/ILbSMDe-Vg7SuIaFtEpbAZpdaYJMFoZclE41dzoXG8c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzAxLzEwLzQw/LzM2MF9GXzMwMTEw/NDAzNl9vdnRCSkkz/UzM0dzRIQ25CbEh0/OVhxZzk5TXFGZTJG/SS5qcGc";
        break;
      case "Fog":
        backgroundImageUrl =
          "https://imgs.search.brave.com/NGv8uRGYEy2H6u4lq-WY2CD7bqzhk7twA4pOFyJDIJw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Zm9nLW9uLW1vdW50/YWluLW5lYXItc2Fu/LWZyYW5jaXNjby12/MC1yZHIwbGJidHNv/Z2MxLmpwZWc_d2lk/dGg9NjQwJmNyb3A9/c21hcnQmYXV0bz13/ZWJwJnM9NTg0Zjhj/YzkzNjViNzZjZTMz/MTY4ZGRlNjM1ZWIy/MDE0YzMxNWJjNQ";
        break;
      case "Smoke":
        backgroundImageUrl =
          "https://imgs.search.brave.com/dyDwPL22693qkq732omHcfdWZyTCH2AlAywrr_e4HsU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MzAwMTc0Ny9waG90/by9zbW9rZS1hZ2Fp/bnN0LWJsYWNrLWJh/Y2tncm91bmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTE0/T3JMR1pBYVBkalE4/R3pnWWc2emYwaTBG/Sm9haVhTbjBzMVRt/aFlRY3c9";
        break;
      case "Haze":
        backgroundImageUrl =
          "https://imgs.search.brave.com/dyDwPL22693qkq732omHcfdWZyTCH2AlAywrr_e4HsU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MzAwMTc0Ny9waG90/by9zbW9rZS1hZ2Fp/bnN0LWJsYWNrLWJh/Y2tncm91bmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTE0/T3JMR1pBYVBkalE4/R3pnWWc2emYwaTBG/Sm9haVhTbjBzMVRt/aFlRY3c9";
        break;
      case "Thunderstorm":
        backgroundImageUrl =
          "https://imgs.search.brave.com/2uVUZoK7XgtPcgX_DyDpSvlfUPCmXCwMr9CBzqjp9PQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzI2LzE5LzEy/LzM2MF9GXzMyNjE5/MTIzNF9RMTJ1dFNa/MHZteFY2dEtRWG9n/a3RVN2UzZG1aMkpM/SS5qcGc";
        break;
      case "Snow":
        backgroundImageUrl =
          "https://imgs.search.brave.com/pSOSWmZ7PQBxES0_nvguFz3YHuMyNOiHz2Iq1DgsiOM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE0LzZm/LzdjLzE0NmY3YzU3/ODM2ZTcwOWM4ZjAy/NDg2NzQ4ZTg4Y2Iy/LmpwZw";
        break;
      case "Clear":
        backgroundImageUrl =
          "https://imgs.search.brave.com/WDwIbhWLSNQKOHumFnyEcXssEo3lWlMaMzvro7IHvts/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbGVhci1ibHVl/LXNreS1ncmFkaWVu/dC1mcm9tLWRhcmst/bGlnaHQtdmVydGlj/YWxfMTU2NzQ1LTEy/MTkuanBnP3NpemU9/NjI2JmV4dD1qcGc";
        break;
      case "Dust":
        backgroundImageUrl =
          "https://imgs.search.brave.com/Pp0FhaBU3iK4vNvF8LOZ3DRfxUmZkGi_8pJ4yOoug3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/ZWF1dGlmdWwtc2t5/LXdpdGgtY2xvdWRz/XzU4NzAyLTE0NTUu/anBnP3NpemU9NjI2/JmV4dD1qcGc";
        break;
      case "Ash":
        backgroundImageUrl =
          "https://imgs.search.brave.com/ScMXM_US0MSw6kAWdBJVFOiuA-JBG6oDrwppGBEjmDs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAz/NTg1NjM3L3Bob3Rv/L2Nsb3VkLW9mLXZv/bGNhbmljLWFzaC1m/cm9tLXNha3VyYWpp/bWEta2Fnb3NoaW1h/LWphcGFuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1TeG9S/QURISVZ6b1pGYkJL/OVRTaFlWR05vQ0U1/ZlpabjhPQXhMdlZq/ZUUwPQ";
        break;
      case "Sand":
        backgroundImageUrl =
          "https://imgs.search.brave.com/4GqnlrXqgD0zLsh10UyuiR7aROJ6BO9AiZh_qJCfuLI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAy/ODgzNzk3Ni9waG90/by9jbG91ZHMtaW4t/c2FuZHN0b3JtLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1t/LXhlWU4yZlU1Q3Bq/cXJPTUQtMmFqdWFU/QzdoTktjbE11MjVt/S3ZPSWNzPQ";
        break;
      case "Squall":
        backgroundImageUrl =
          "https://imgs.search.brave.com/giC_RGjzqVshq05-VHQz6HMnug51uM20Oa4J91n_sGQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQ2L1Ro/dW5kZXJfYW5kX3dp/bmRfZHVyaW5nX2Ff/dGh1bmRlcnN0b3Jt/LndlYm0vNjQwcHgt/LVRodW5kZXJfYW5k/X3dpbmRfZHVyaW5n/X2FfdGh1bmRlcnN0/b3JtLndlYm0uanBn";
        break;
      case "Tornado":
        backgroundImageUrl =
          "https://imgs.search.brave.com/7_qrO-a3Y-nqOBGAd4WTbbS9y_vaTRvEcwDfPhQpIIY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzU3LzMyLzIz/LzM2MF9GXzE1NzMy/MjMzOF9iWGxpTXNw/SEM2cUdaSTNqWjF4/bHZteHJqSWdFQ0Rh/ZS5qcGc";
        break;
      case "Drizzle":
        backgroundImageUrl =
          "https://imgs.search.brave.com/Wsrsbrdb_3P3TiGJbN8mFbznQuQTc74iyPcFHuQMUQs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/MTM1Mzg3NS9waG90/by9yYWluLWRyb3Bz/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXQtWjFZM2hVODRF/ZHQwN1F3TFZtSkRW/N2Z0RDJ3R3BMcHFh/LWd6RkVLYUk9";
        break;
    }

    return (
      <>
        <div
          className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
          }}
        >
          <WeatherIcons
            status={weatherStatus}
            description={weatherDescription}
          />
          <div className="flex flex-col items-center">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {Math.round(main.temp)}°C
            </h5>
            <span className="text-sm text-cyan-400 drop-shadow-sm">{name}</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-sm flex flex-col items-center text-gray-500 dark:text-gray-400">
              <BiWater className="text-cyan-400" />
              {main.humidity}%<small>Humidity </small>
            </span>
            <span className="text-sm flex flex-col items-center text-gray-500 dark:text-gray-400">
              <FaWind className="text-cyan-400" />
              {wind.speed}km/h
              <small>Wind Speed</small>
            </span>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return <div>Error fetching weather data. Please try again later.</div>;
  }
}
