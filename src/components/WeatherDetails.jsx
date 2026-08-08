import {
    Droplets,
    Wind,
    Eye,
    SunMedium,
} from "lucide-react"

const WeatherDetails = ({ weather }) => {

    if (!weather) {
        return null
    }

    const humidity = weather.current.relative_humidity_2m

    const wind = Math.round(
        weather.current.wind_speed_10m
    )

    const visibility = (
        weather.current.visibility / 1000
    ).toFixed(1)

    const uv = Math.round(
        weather.daily.uv_index_max[0]
    )

    const details = [
        {
            title: "Humidity",
            value: `${humidity}%`,
            icon: Droplets,
        },
        {
            title: "Wind",
            value: `${wind} km/h`,
            icon: Wind,
        },
        {
            title: "Visibility",
            value: `${visibility} km`,
            icon: Eye,
        },
        {
            title: "UV Index",
            value: uv,
            icon: SunMedium,
        },
    ]

    return (
        <div className="w-[90%] mx-auto mt-5">

            <h2 className="font-bold text-lg mb-3">
                Weather Details
            </h2>

            <div className="grid grid-cols-2 gap-3">

                {details.map((item) => {

                    const Icon = item.icon

                    return (
                        <div
                            key={item.title}
                            className="rounded-2xl bg-white/40 backdrop-blur-sm p-4"
                        >

                            <div className="flex items-center gap-2 text-gray-600">

                                <Icon size={19} />

                                <span className="text-sm">
                                    {item.title}
                                </span>

                            </div>

                            <p className="text-xl font-semibold text-gray-800 mt-3">
                                {item.value}
                            </p>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default WeatherDetails