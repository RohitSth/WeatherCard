// import { BiWater } from "react-icons/bi";
// import { FaWind } from "react-icons/fa";
// import WeatherIcons from "./WeatherIcons";

// export default async function WeatherCard(
//   name: any,
//   weather: any,
//   main: any,
//   wind: any,
//   city: any
// ) {
//   try {
//     const { name, weather, main, wind } = await checkWeather(city);

//     const weatherStatus = weather[0].main;
//     const weatherDescription = weather[0].description;

//     return (
//       <>
//         <div className="w-80 h-1/2 p-6 rounded-lg shadow-white shadow-lg bg-cover bg-center bg-no-repeat bg-gradient-to-r from-white">
//           <div className="flex flex-col justify-center items-center bg-black rounded-md">
//             <div className="flex items-center">
//               <h5 className="mx-2 text-xl font-medium text-blue-200  ">
//                 {Math.round(main.temp)}°
//               </h5>
//               <span className="text-lg text-white font-bold drop-shadow-lg">
//                 {name}
//               </span>
//             </div>
//           </div>

//           <div className="mt-6 flex justify-between">
//             <span className="text-sm flex flex-col items-center  justify-evenly text-white bg-black p-3 rounded-md">
//               <BiWater className="text-cyan-400" />
//               {main.humidity}%<small>Humidity </small>
//             </span>
//             <span className="text-sm flex flex-col items-center justify-evenly text-white bg-black p-3 rounded-md">
//               <FaWind className="text-cyan-400" />
//               {wind.speed}km/h
//               <small>Wind Speed</small>
//             </span>

//             <div className="bg-black/40 rounded-md  justify-evenly">
//               <WeatherIcons
//                 status={weatherStatus}
//                 description={weatherDescription}
//               />
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     return <div>Error fetching weather data. Please try again later.</div>;
//   }
// }
