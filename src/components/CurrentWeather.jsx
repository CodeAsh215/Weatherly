import {
    Sun,
    CloudSun,
    Cloud,
    CloudRain,
    CloudSnow,
    CloudLightning,
} from "lucide-react"

const getWeatherCondition = (code) => {

    if (code === 0) return "Clear"

    if (code >= 1 && code <= 3) return "Cloudy"

    if (code >= 51 && code <= 67) return "Rain"

    if (code >= 71 && code <= 77) return "Snow"

    if (code >= 80 && code <= 82) return "Rain"

    if (code >= 95) return "Thunderstorm"

    return "Unknown"
}

const getWeatherIcon = (code) => {

    if (code === 0) return Sun

    if (code >= 1 && code <= 3) return CloudSun

    if (code >= 51 && code <= 67) return CloudRain

    if (code >= 71 && code <= 77) return CloudSnow

    if (code >= 80 && code <= 82) return CloudRain

    if (code >= 95) return CloudLightning

    return Cloud
}

const formatDate = () => {

    return new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
    })
}

const CurrentWeather = ({ weather, city }) => {

    if (!weather) {
        return (
            <div className="w-[90%] mx-auto mt-8 text-center">

                <p className="text-gray-600">
                    Search for a city to see the weather
                </p>

            </div>
        )
    }

    const code = weather.current.weather_code

    const Icon = getWeatherIcon(code)

    return (
        <div className="w-[90%] mx-auto mt-6">

            <div className="rounded-[30px] bg-white/35 backdrop-blur-md p-6 text-center shadow-sm">

                <p className="text-lg font-semibold text-gray-800">
                    {city.toUpperCase()}
                </p>

                <p className="text-sm text-gray-600 mt-1">
                    {formatDate()}
                </p>

                <div className="flex justify-center mt-5">
                    <Icon
                        size={70}
                        strokeWidth={1.5}
                        className="text-gray-700"
                    />
                </div>

                <h2 className="text-6xl font-bold text-gray-800 mt-2">
                    {Math.round(weather.current.temperature_2m)}°
                </h2>

                <p className="text-lg font-medium text-gray-700 mt-2">
                    {getWeatherCondition(code)}
                </p>

                <p className="text-sm text-gray-600 mt-3">
                    Feels like{" "}
                    {Math.round(weather.current.apparent_temperature)}°
                </p>

                <p className="text-sm text-gray-600 mt-1">
                    High{" "}
                    {Math.round(weather.daily.temperature_2m_max[0])}°
                    {" | "}
                    Low{" "}
                    {Math.round(weather.daily.temperature_2m_min[0])}°
                </p>

            </div>

        </div>
    )
}

export default CurrentWeather