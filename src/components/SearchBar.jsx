import { LocateFixed, Search } from 'lucide-react'

const SearchBar = () => {
    return (
        <div className='flex justify-evenly border border-gray-400 p-2 w-[90%] mx-auto rounded-lg'>
            <Search />
            <input
                type="text"
                placeholder='Search city'
                className='outline-none' />
            <LocateFixed />
        </div>
    )
}

export default SearchBar