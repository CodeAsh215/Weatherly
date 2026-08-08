import {
    Sun,
    CloudSun,
    Cloud,
    CloudRain,
    CloudSnow,
    CloudLightning,
} from "lucide-react"

const formatTime = (time) => {

    return new Date(time).toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
    })
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

const HourlyForecast = ({ weather }) => {

    if (!weather) {
        return null
    }

    const hourlyData = weather.hourly.time
        .map((time, index) => ({
            time,
            temperature: weather.hourly.temperature_2m[index],
            weatherCode: weather.hourly.weather_code[index],
        }))
        .slice(0, 12)

    return (
        <div className="w-[90%] mx-auto mt-6">

            <h2 className="font-bold text-lg mb-3">
                Hourly Forecast
            </h2>

            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">

                {hourlyData.map((hour, index) => {

                    const Icon = getWeatherIcon(
                        hour.weatherCode
                    )

                    return (
                        <div
                            key={index}
                            className="min-w-[78px] rounded-2xl bg-white/40 backdrop-blur-sm p-3 text-center"
                        >

                            <p className="text-xs text-gray-600 whitespace-nowrap">
                                {formatTime(hour.time)}
                            </p>

                            <Icon
                                size={25}
                                className="mx-auto my-3 text-gray-700"
                            />

                            <p className="text-lg font-semibold text-gray-800">
                                {Math.round(hour.temperature)}°
                            </p>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default HourlyForecast