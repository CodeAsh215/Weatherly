import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import WeatherDetails from './components/WeatherDetails'
import WeeklyForecast from './components/WeeklyForecast'

function App() {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-neutral-900">
        <div className="relative w-[380px] h-[800px] bg-black rounded-[40px] p-3 shadow-2xl">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl z-10" />
          <div className="w-full h-full bg-white rounded-[30px] overflow-hidden">
            <Navbar />
            <SearchBar />
            <CurrentWeather />
            <HourlyForecast />
            <WeatherDetails />
            <WeeklyForecast />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
