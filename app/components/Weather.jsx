import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  console.log(data); // to ensure that my data is passed down correctly to the weather component
  let kTemp = data.main.temp;
  const cTemp = Math.round(kTemp - 273.15);
  const fTemp = (cTemp * 9) / 5 + 32;
  let cityTime = data.dt; // unix time in the API response field
  // let timezoneOffset = data.timezone;
  let citySunRise = data.sys.sunrise;
  let citySunSet = data.sys.sunset; 
  const DateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    weekday: "long",
  };
  const TimeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  function getLocalDate(cityTime){
    let localTime = new Date(cityTime * 1000);
    return localTime.toLocaleDateString("en-GB", DateOptions);
  }

  function getLocalTime(cityTime){
    let localTime = new Date((cityTime) * 1000);
    // return localTime.toLocaleString("en-US", options);
    return localTime.toTimeString();
  }
  function getSunriseTime(citySunRise){
    let sunriseTime = new Date((citySunRise) * 1000);
    return sunriseTime.toLocaleTimeString(TimeOptions);
  }
    function getSunsetTime(citySunSet) {
      let sunsetTime = new Date(citySunSet * 1000);
      return sunsetTime.toLocaleTimeString(TimeOptions);
    }
  // console.log(kTemp)
  // console.log(cTemp)
  // console.log(fTemp)
  // let sunriseTime = data.sys.sunsrise
  // console.log(getLocalTime(cityTime));
  // console.log(getLocalDate(cityTime));

  return (
    <div className="relative p-4 pt-12 h-auto md:h-40 z-10">
      <div className="relative flex flex-col items-center">
        <p className="text-2xl text-white/85">
          Current Time in {data.name} {data.sys.country}
        </p>
        <p className="text-xl md:text-2xl text-white/85">
          {getLocalTime(cityTime)}
        </p>

        <div className="text-xl md:text-2xl text-white/85">
          Date: {getLocalDate(cityTime)}{" "}
        </div>
        <div className="text-xl md:text-1.8xl text-white/85">
          Unix Timestamp: {data.dt}
        </div>
        {/* Need to Modify the Date */}

        <Image
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather-icon"
          width={100}
          height={100}
          className="border border-gray-50 rounded-3xl"
        />
        <p className="text-2xl text-white">{data.weather[0].main}</p>
        <p className="text-1.5xl text-white">Description: {data.weather[0].description}</p>
      </div>

      {/* Bottom widget */}
      <div className="bg-black/40 relative p-6 rounded-md">
        <p className="text-2xl text-center text-white/85 pb-6">
          Weather in {data.name}
        </p>
        <div className="flex flex-col md:flex-row justify-between text-center">
          <div>
            <p className="font-bold text-xl text-white/85">
              {data.main.humidity}%
            </p>
            <p className="text-xl text-white/85 ">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-xl text-white/85">
              {kTemp} K / {cTemp} °C / {fTemp} F
            </p>
            <p className="text-xl text-white/85 ">Temperature</p>
          </div>
          <div>
            <p className="font-bold text-xl text-white/85">
              {data.wind.speed.toFixed(1)} km/h
            </p>
            <p className="text-xl text-white/85">Winds</p>
          </div>
        </div>
      </div>

      <div className="bg-black/40 relative p-6 rounded-md">
        <p className="text-2xl text-center text-white/85 pb-6">
          Timings in {data.name}
        </p>
        <div className="flex flex-col md:flex-row justify-between text-center">
          <div>
            <p className="font-bold text-2xl text-white/85"> {getSunriseTime(citySunRise)}</p>
            <p className="text-xl text-white/85 ">Sunrise</p>
          </div>
          <div>
            <p className="font-bold text-2xl text-white/85">{getSunsetTime(citySunSet)} </p>
            <p className="text-xl text-white/85 ">Sunset</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
