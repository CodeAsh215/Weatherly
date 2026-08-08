import { Cloudy } from "lucide-react"

const CurrentWeather = () => {
    return (
        <div className="border border-gray-400 p-2 mt-3 w-[90%] mx-auto rounded-lg flex flex-col">
            <span className="font-bold text-lg">Bhubaneswar, India</span>
            <span>Saturday, 8 August</span>
            <span className="text-6xl">29°C</span>
            <span className="flex font-bold"><Cloudy />Partly Cloudy</span>
            <span>Feels like 40°C</span>
            <span>High 45°C | Low 27°C</span>
        </div>
    )
}

export default CurrentWeather   