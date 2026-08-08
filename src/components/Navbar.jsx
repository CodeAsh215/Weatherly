import { CloudSun } from "lucide-react"

const Navbar = () => {

    return (
        <nav className="flex items-center justify-between px-5 pt-7 pb-4">

            <div className="flex items-center gap-2">

                <div className="p-2 rounded-xl bg-white/40">
                    <CloudSun
                        size={24}
                        className="text-gray-700"
                    />
                </div>

                <h1 className="text-xl font-bold text-gray-800">
                    Weatherly
                </h1>

            </div>

            <div className="text-sm text-gray-600">
                Weather
            </div>

        </nav>
    )
}

export default Navbar