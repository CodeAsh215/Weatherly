import { useState } from "react"

import CurrentWeather from "./components/CurrentWeather"
import HourlyForecast from "./components/HourlyForecast"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import WeatherDetails from "./components/WeatherDetails"
import WeeklyForecast from "./components/WeeklyForecast"

function App() {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const getWeather = async (cityName) => {

    try {

      setLoading(true)
      setError("")

      // Get coordinates from city name
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
      )

      if (!response.ok) {
        throw new Error("Geocoding request failed")
      }

      const data = await response.json()

      if (!data.results || data.results.length === 0) {
        setError("City not found")
        setWeather(null)
        return
      }

      const location = data.results[0]

      const latitude = location.latitude
      const longitude = location.longitude

      // Get weather
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,visibility&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,uv_index_max,weather_code&timezone=auto`
      )

      if (!weatherResponse.ok) {
        throw new Error("Weather request failed")
      }

      const weatherData = await weatherResponse.json()

      // Store city information too
      setCity(location.name)

      setWeather({
        ...weatherData,
        location: {
          name: location.name,
          country: location.country,
          latitude: location.latitude,
          longitude: location.longitude,
        },
      })

    } catch (err) {

      console.log(err)

      setError("Something went wrong. Please try again.")
      setWeather(null)

    } finally {

      setLoading(false)

    }
  }

  const handleSearch = (cityName) => {

    if (cityName.trim() === "") {
      return
    }

    getWeather(cityName.trim())
  }

  const handleLocation = (latitude, longitude) => {

    const getLocationWeather = async () => {

      try {

        setLoading(true)
        setError("")

        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,visibility&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,uv_index_max,weather_code&timezone=auto`
        )

        if (!weatherResponse.ok) {
          throw new Error("Location weather request failed")
        }

        const weatherData = await weatherResponse.json()

        // Reverse geocoding
        const locationResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}&count=1&language=en&format=json`
        )

        let locationName = "Current Location"

        if (locationResponse.ok) {

          const locationData = await locationResponse.json()

          if (locationData.results?.length > 0) {
            locationName = locationData.results[0].name
          }
        }

        setCity(locationName)

        setWeather({
          ...weatherData,
          location: {
            name: locationName,
            latitude,
            longitude,
          },
        })

      } catch (err) {

        console.log(err)
        setError("Unable to get your location weather.")
        setWeather(null)

      } finally {

        setLoading(false)

      }
    }

    getLocationWeather()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">

      <div className="relative w-[380px] h-[800px] bg-black rounded-[40px] p-3 shadow-2xl">

        {/* Phone Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl z-10" />

        {/* App Screen */}
        <div className="w-full h-full bg-gradient-to-br from-blue-200 via-purple-100 to-amber-100 rounded-[30px] overflow-y-auto scrollbar-hide">

          <Navbar />

          <SearchBar
            onSearch={handleSearch}
            onLocation={handleLocation}
          />

          {loading && (
            <div className="text-center mt-5 text-gray-600">
              Loading weather...
            </div>
          )}

          {error && (
            <div className="mx-auto mt-5 w-[90%] rounded-xl bg-red-100 p-3 text-center text-sm text-red-600">
              {error}
            </div>
          )}

          <CurrentWeather
            weather={weather}
            city={city}
          />

          <HourlyForecast
            weather={weather}
          />

          <WeatherDetails
            weather={weather}
          />

          <WeeklyForecast
            weather={weather}
          />

        </div>

      </div>

    </div>
  )
}

export default App