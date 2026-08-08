import {
    Sun,
    CloudSun,
    Cloud,
    CloudRain,
    CloudSnow,
    CloudLightning,
} from "lucide-react"

const getWeatherIcon = (code) => {

    if (code === 0) return Sun

    if (code >= 1 && code <= 3) return CloudSun

    if (code >= 51 && code <= 67) return CloudRain

    if (code >= 71 && code <= 77) return CloudSnow

    if (code >= 80 && code <= 82) return CloudRain

    if (code >= 95) return CloudLightning

    return Cloud
}

const formatDay = (date) => {

    return new Date(date).toLocaleDateString(
        "en-US",
        {
            weekday: "short",
        }
    )
}

const WeeklyForecast = ({ weather }) => {

    if (!weather) {
        return null
    }

    const weeklyData = weather.daily.time
        .map((date, index) => ({
            date,
            max: weather.daily.temperature_2m_max[index],
            min: weather.daily.temperature_2m_min[index],
            weatherCode: weather.daily.weather_code[index],
        }))
        .slice(0, 7)

    return (
        <div className="w-[90%] mx-auto mt-6 pb-6">

            <h2 className="font-bold text-lg mb-3">
                7-Day Forecast
            </h2>

            <div className="space-y-2">

                {weeklyData.map((day, index) => {

                    const Icon = getWeatherIcon(
                        day.weatherCode
                    )

                    return (
                        <div
                            key={day.date}
                            className="grid grid-cols-[60px_1fr_50px_50px] items-center rounded-2xl bg-white/40 backdrop-blur-sm p-3"
                        >

                            <p className="font-medium text-gray-800">
                                {index === 0
                                    ? "Today"
                                    : formatDay(day.date)}
                            </p>

                            <Icon
                                size={22}
                                className="mx-auto text-gray-700"
                            />

                            <p className="font-semibold text-gray-800 text-right">
                                {Math.round(day.max)}°
                            </p>

                            <p className="text-gray-500 text-right">
                                {Math.round(day.min)}°
                            </p>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default WeeklyForecast