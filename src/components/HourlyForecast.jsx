import { Sun } from 'lucide-react'

const HourlyForecast = () => {
    return (
        <div className='p-1 border border-gray-400 w-[90%] mx-auto mt-3 rounded-lg'>
            <span className='font-bold ml-1'>Today's Forecast</span>

            <div className='flex gap-1 p-1'>
                <div className='flex flex-col items-center border border-gray-400 p-1 rounded-md'>
                    <span>12 PM</span>
                    <Sun />
                    <span>29°C</span>
                </div>

                <div className='flex flex-col items-center border border-gray-400 p-1 rounded-md'>
                    <span>12 PM</span>
                    <Sun />
                    <span>29°C</span>
                </div>

                <div className='flex flex-col items-center border border-gray-400 p-1 rounded-md'>
                    <span>12 PM</span>
                    <Sun />
                    <span>29°C</span>
                </div>

                <div className='flex flex-col items-center border border-gray-400 p-1 rounded-md'>
                    <span>12 PM</span>
                    <Sun />
                    <span>29°C</span>
                </div>

                <div className='flex flex-col items-center border border-gray-400 p-1 rounded-md'>
                    <span>12 PM</span>
                    <Sun />
                    <span>29°C</span>
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast