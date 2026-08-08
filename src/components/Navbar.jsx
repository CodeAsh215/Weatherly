import { CloudSun, Moon, Sun } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-2 py-6'>
            <div className='flex gap-2'>
                <CloudSun />
                <span className='font-bold'>Weatherly</span>
            </div>

            <div className='flex gap-2'>
                <button className='font-bold'>°C | °F</button>
                {/* <Sun/> */}
                <Moon className='bg-gray-300 p-1 rounded-full' size={30} />
            </div>
        </nav>
    )
}

export default Navbar