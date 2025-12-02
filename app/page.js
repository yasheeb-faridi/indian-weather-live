import Image from "next/image";
import Search from "./components/Search";
import axios from "axios";
import { useState, useEffect } from "react";


export default function Home() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)    // Have to find out?

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <Search/>
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Search/>
      </main> */}

    </div>
  );
}
