
import { useState } from 'react';
import { Button2 } from '../../components/atom/button/Button2.components';
import { Input2 } from '../../components/atom/input/Input2.components';
import { useFetch } from '../../hooks/useFetch.hook';
import { Header } from '../../components/moleculis/Header.components';

export interface Weather {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: Text;
  icon: Icon;
  code: number;
}

export enum Icon {
  CDNWeatherapiCOMWeather64X64Day113PNG = "//cdn.weatherapi.com/weather/64x64/day/113.png",
  CDNWeatherapiCOMWeather64X64Day116PNG = "//cdn.weatherapi.com/weather/64x64/day/116.png",
  CDNWeatherapiCOMWeather64X64Day119PNG = "//cdn.weatherapi.com/weather/64x64/day/119.png",
  CDNWeatherapiCOMWeather64X64Night113PNG = "//cdn.weatherapi.com/weather/64x64/night/113.png",
  CDNWeatherapiCOMWeather64X64Night116PNG = "//cdn.weatherapi.com/weather/64x64/night/116.png",
}

export enum Text {
  Clear = "Clear",
  Cloudy = "Cloudy",
  PartlyCloudy = "Partly cloudy",
  Sunny = "Sunny",
}

export enum WindDir {
  Nnw = "NNW",
  Nw = "NW",
  Sw = "SW",
  W = "W",
  Wnw = "WNW",
  Wsw = "WSW",
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
  is_moon_up: number;
  is_sun_up: number;
}

export interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

export interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: WindDir;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}




export const Weather = () => {

  const [location, setLocation] = useState<string>('Cáceres');

  const { data, fetchData } = useFetch<Weather>({ url: `https://api.weatherapi.com/v1/current.json?key=c56bb0dd602c49438ba82122231307&q=${location}&aqi=no` })

  return (
    <>
      <Header />
      <div className='flex w-screen h-screen justify-center bg-gradient-to-tl from-rose-500 to-indigo-700'>
        <div className="w-96 h-96 bg-gray-800 m-40 rounded-xl flex flex-col">
          <div className='flex'>
            <div className="px-10 py-5 ">
              <p className="text-2xl text-white">{data?.location.name}</p>
              <p className="text-2sm text-white">{data?.location.country}</p>
              <p className="text-7xl text-white">{data?.current.temp_c}°</p>
            </div>
            <div className="relative left-4 py-2">
              <img src={data?.current.condition.icon} className="w-28"></img>
            </div>
          </div>

          <div className="px-10 mt-20">
            <Input2 labelText="Introduce localización" onChange={(e) => setLocation(e.target.value)} value={location}></Input2>
            <Button2 onClick={fetchData}>Buscar</Button2>
          </div>
          <p className="text-xs text-white mt-10 px-20">Última actualización: {data?.current.last_updated}</p>
        </div>
      </div>


    </>


  )
}
