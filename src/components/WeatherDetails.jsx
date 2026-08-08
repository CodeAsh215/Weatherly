import { Droplet, Eye, Sun, Wind } from 'lucide-react'

const WeatherDetails = () => {
    return (
        <div className='flex mt-3 text-sm justify-evenly'>
            <div className='flex border border-gray-400 rounded-xl items-center p-0.5'>
                <Droplet />
                <div className='flex flex-col'>
                    <span>Humidity</span>
                    <span>78%</span>
                </div>
            </div>

            <div className='flex border border-gray-400 rounded-xl items-center p-0.5'>
                <Wind />
                <div className='flex flex-col'>
                    <span>Wind</span>
                    <span>14km/h</span>
                </div>
            </div>

            <div className='flex border border-gray-400 rounded-xl items-center p-0.5'>
                <Eye />
                <div className='flex flex-col'>
                    <span>Visibility</span>
                    <span>8km</span>
                </div>
            </div>

            <div className='flex border border-gray-400 rounded-xl items-center p-0.5'>
                <Sun />
                <div className='flex flex-col'>
                    <span>UV Index</span>
                    <span>6</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails