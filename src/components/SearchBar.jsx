import { useState } from "react"
import { LocateFixed, Search } from "lucide-react"

const SearchBar = ({ onSearch, onLocation }) => {

    const [city, setCity] = useState("")

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {

            onSearch(city)

            setCity("")

        }
    }

    const handleLocation = () => {

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.")
            return
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {

                const latitude = position.coords.latitude
                const longitude = position.coords.longitude

                onLocation(latitude, longitude)

            },
            () => {
                alert("Please allow location access.")
            }
        )
    }

    return (
        <div className="flex items-center gap-2 border border-gray-400/60 bg-white/40 backdrop-blur-sm p-2 w-[90%] mx-auto rounded-2xl">

            <Search
                size={20}
                className="text-gray-600 shrink-0"
            />

            <input
                type="text"
                placeholder="Search city"
                className="outline-none bg-transparent flex-1 min-w-0 text-gray-800 placeholder:text-gray-500"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button
                type="button"
                onClick={handleLocation}
                className="shrink-0"
                title="Use current location"
            >
                <LocateFixed
                    size={20}
                    className="text-gray-600 hover:text-gray-900 transition"
                />
            </button>

        </div>
    )
}

export default SearchBar