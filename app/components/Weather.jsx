import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  console.log(data); // to ensure that my data is passed down correctly to the weather component
  let kTemp = data.main.temp;
  const cTemp = Math.round(kTemp - 273.15);
  const fTemp = (cTemp * 9) / 5 + 32;
  // console.log(kTemp)
  // console.log(cTemp)
  // console.log(fTemp)

  return (
    <div className="relative p-4 pt-12 h-40 z-10">
      <div className="relative flex flex-col items-center">
        <p className="text-2xl text-white/85">
          Current Time in {data.name} {data.sys.country}
        </p>

        <div className="text-1.6xl text-white/85">
          Unix Timestamp: {data.dt}
        </div>
        <div className="text-1.5xl text-white/85">Date:</div>
        {/* Need to Modify the Date */}

        <Image
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather-icon"
          width={100}
          height={100}
        />
        <p className="text-2xl">{data.weather[0].main}</p>
        <p className="text-1.5xl">{data.weather[0].description}</p>
      </div>

      {/* Bottom widget */}
      <div className="bg-black/40 relative p-8 rounded-md">
        <p className="text-2xl text-center text-white/85 pb-6">
          Weather in {data.name}
        </p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl text-white/85">
              {data.main.humidity}%
            </p>
            <p className="text-xl text-white/85 ">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl text-white/85">
              {kTemp} K / {cTemp} °C / {fTemp} F
            </p>
            <p className="text-xl text-white/85 ">Temperature</p>
          </div>
          <div>
            <p className="font-bold text-2xl text-white/85">
              {data.wind.speed.toFixed(1)} KMPH
            </p>
            <p className="text-xl text-white/85">Winds</p>
          </div>
        </div>
      </div>

      <div className="bg-black/40 relative p-8 pt-12 rounded-md">
        <p className="text-2xl text-center text-white/85 pb-6">
          Timings in {data.name}
        </p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl text-white/85">Sunrise Timing</p>
            <p className="text-xl text-white/85 ">Sunrise</p>
          </div>
          <div>
            <p className="font-bold text-2xl text-white/85">Sunset Timing</p>
            <p className="text-xl text-white/85 ">Sunset</p>
          </div>
          <div>
            <p className="font-bold text-2xl text-white/85">KMPH</p>
            <p className="text-xl text-white/85">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
