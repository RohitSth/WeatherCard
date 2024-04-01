export default async function CardBackground({ city }: { city: string }) {
  const apiKey = "27bfe5feb37c46d1b74899ab94d95423";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  async function checkWeather(city: string) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    return data;
  }

  const { name, weather, main, wind, visibility } = await checkWeather(city);

  const icon = weather[0].icon;

  const weatherStatus = weather[0].main;
  const weatherDescription = weather[0].description;

  return (
    <>
      <div className="h-1/2 p-6 rounded-lg shadow-white shadow-lg bg-cover bg-center bg-no-repeat bg-gradient-to-r from-white transition duration-1000 hover:duration-200 hover:shadow-pink-600">
        <div className="flex items-center">
          <p className="font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-sm">
            {name}
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="mt-7">
              <h5 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-sm ">
                {Math.round(main.temp)}°C
                <p className="text-sm pt-4">
                  Feels like {Math.round(main.feels_like)}°C
                </p>
              </h5>
            </div>

            <div className="flex flex-col items-center font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
              <img
                src={`
            https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="icon"
              />
              <h1 className="text-xl font-bold">
                {weatherStatus.charAt(0).toUpperCase() + weatherStatus.slice(1)}
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
            <p className="text-sm">{wind.speed}km/h</p>
          </span>
          <span className="flex flex-col items-center  justify-evenly  p-3">
            <small className="font-bold">Visibility </small>
            <p className="text-sm">{visibility / 1000}km</p>
          </span>
          <span className="flex flex-col items-center  justify-evenly p-3">
            <small className="font-bold">Humidity </small>
            <p className="text-sm">{main.humidity}%</p>
          </span>
          <div className="justify-evenly"></div>
        </div>
      </div>
    </>
  );
}
