"use client";
import Image from "next/image";
// import Search from "./components/Search";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "./components/Weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false); // Have to find out?

  // const url = ''                                /// to put the weather API url

  // const fetchWeather = (e) => {
  //   e.preventDefault()       // this will prevent the page to reload
  //   setLoading(true)
  //   axios.get(url).then((response) => {
  //     setWeather(response.data)
  //   })
  // }

  // const handleOnSearchChange = (searchData) => {
  //   console.log(searchData);
  // }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Search/>
      </main> */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-1" />
      {/* Background Image */}
      <Image src="/sunrise-farm.jpg" layout="fill" alt="bg-wallpaper" />
      {/* <Search className="relative flex justify-between max-w-500px" /> */}

      {/* Search City */}
      <div className="relative flex justify-between items-center max-w-[500px] w-full margin-auto pt-4 z-10">
        <form className="flex justify-between items-center w-full m-auto p-4 bg-transparent border border-gray-500 rounded-3xl ">
          <input type="text" placeholder="Type City to Search" className="bg-transparent border-none focus:outline-none text-2xl"></input>

          <button>
            <BsSearch size={20} />
          </button>
        </form>
      </div>
      {/* <button onClick={fetchWeather}>Refresh</button> */}

      {/* Weather */}
      {weather.main && <Weather/>}
    </div>
  );
}
