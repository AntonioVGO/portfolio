
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch.hook';
import { Weather } from '../../pages/Weather/Weather.page';

export const IconoTiempo = () => {

  const [location] = useState<string>('Cáceres');

  const { data } = useFetch<Weather>({ url: `http://api.weatherapi.com/v1/current.json?key=c56bb0dd602c49438ba82122231307&q=${location}&aqi=no` })

  return (
    <>
      <div className="flex flex-row justify-center items-center text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg">
        <p className="text-white">{data?.current.temp_c}°</p>
        <img src={data?.current.condition.icon} className="w-9"></img>
      </div>
    </>
  )
}



