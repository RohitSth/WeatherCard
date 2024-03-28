import WeatherStatus from "./components/(weather-icons)/WeatherStatus";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <WeatherStatus status="cloudy" />
        <div className="flex justify-between items-start">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Kathmandu
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Kathmandu
          </span>
        </div>
      </div>
    </main>
  );
}
