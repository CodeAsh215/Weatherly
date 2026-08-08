import { CloudRain } from 'lucide-react'

const WeeklyForecast = () => {
    return (
        <div className='w-[90%] mx-auto mt-3 p-1'>
            <span className='font-bold '>7-Day Forecast</span>

            <div className='flex justify-around border-y border-gray-400 mt-1'>
                <span>Sun,9 Aug</span>
                <span className='flex gap-1'><CloudRain />Rain</span>
                <span>H 45°C | L 25°C</span>
            </div>
            <div className='flex justify-around border-y border-gray-400'>
                <span>Mon,9 Aug</span>
                <span className='flex gap-1'><CloudRain />Rain</span>
                <span>H 45°C | L 25°C</span>
            </div>
            <div className='flex justify-around border-y border-gray-400'>
                <span>Tue,9 Aug</span>
                <span className='flex gap-1'><CloudRain />Rain</span>
                <span>H 45°C | L 25°C</span>
            </div>
            <div className='flex justify-around border-y border-gray-400'>
                <span>Wed,9 Aug</span>
                <span className='flex gap-1'><CloudRain />Rain</span>
                <span>H 45°C | L 25°C</span>
            </div>
            <div className='flex justify-around border-y border-gray-400'>
                <span>Thu,9 Aug</span>
                <span className='flex gap-1'><CloudRain />Rain</span>
                <span>H 45°C | L 25°C</span>
            </div>
            <div className='flex justify-around border-y border-gray-400'>
                <span>Fri,9 Aug</span>
                <span className='flex gap-1'><CloudRain />Rain</span>
                <span>H 45°C | L 25°C</span>
            </div>
            <div className='flex justify-around border-y border-gray-400'>
                <span>Sat,9 Aug</span>
                <span className='flex gap-1'><CloudRain />Rain</span>
                <span>H 45°C | L 25°C</span>
            </div>
        </div>
    )
}

export default WeeklyForecast