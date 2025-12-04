"use client";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "./components/Weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({}); // Weather Data in an array
  const [loading, setLoading] = useState(false); // Have to find out?
  const [error, setError] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`; /// to put the weather API url

  const fetchWeather = (e) => {
    e.preventDefault(); // this will prevent the page to reload
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    setCity("");
    setLoading(false);
  };
  if (loading) return <div className="text-white p-4">Loading weather…</div>;
  if (error) return <div className="text-red-400 p-4">{error}</div>;

  return (
    <div className=" bg-zinc-50 py-32 px-16 font-sans">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-1" />
      {/* Background Image */}
      <Image
        src="/thunder-storm.jpg"
        fill
        style={{ objectFit: "cover" }}
        alt="bg-wallpaper"
      />

      <div>
        <h1 className=" relative flex text-center justify-center md:text-3xl text-gray-100 ">
          Live Indian Weather Status
        </h1>
      </div>
      {/* Search City */}
      <div className="relative flex justify-between items-center max-w-lg w-full m-auto pt-4 px-4 z-10">
        <form
          onSubmit={fetchWeather}
          className="flex justify-between items-center w-full m-auto p-4 bg-transparent border border-gray-500 rounded-3xl "
        >
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Type Indian City to Search"
            className="bg-transparent border-none focus:outline-none text-sm md:text-2xl"
          ></input>

          <button onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>
      {/* Weather */}
      {weather.main && <Weather data={weather} />}
    </div>
  );
}
