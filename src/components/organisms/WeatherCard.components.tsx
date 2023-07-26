
import { useState } from 'react';
import { Button2 } from '../atom/button/Button2.components';
import { Input2 } from '../atom/input/Input2.components';
import { useFetch } from '../../hooks/useFetch.hook';
import { Weather, WeatherSimple } from '../moleculis/WeatherSimple.components';

export const WeatherCard = () => {

    const [location, setLocation] = useState<string>('Cáceres');

    const { data, fetchData } = useFetch<Weather>({ url: `https://api.weatherapi.com/v1/forecast.json?key=c56bb0dd602c49438ba82122231307&q=${location}&days=3&aqi=no&alerts=no` })

    return (
        <>
            <div className="h-screen">
                <div className='flex justify-center'>
                    <div className="w-96 bg-white dark:bg-gray-800 m-20 rounded-xl flex flex-col">
                        <div className='flex'>
                            <div className="py-5 pl-10">
                                <p className="text-2xl text-black dark:text-white">{data?.location.name}</p>
                                <p className="text-2sm text-black dark:text-white">{data?.location.country}</p>
                                <p className="text-7xl text-black dark:text-white">{data?.current.temp_c}°</p>
                            </div>
                            <div className="w-full pt-2 pr-5 flex flex-col justify-start items-end">
                                <img src={data?.current.condition.icon} className="w-32"></img>
                            </div>
                        </div>

                        <WeatherSimple />

                        <div className="px-10 mt-3">
                            <Input2 labelText="Introduce localización" onChange={(e) => setLocation(e.target.value)} value={location}></Input2>
                            <Button2 onClick={fetchData}>Buscar</Button2>
                        </div>
                        <p className="flex justify-center text-xs text-black dark:text-white mt-10 mb-2">Última actualización: {data?.current.last_updated}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
