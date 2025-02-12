import React from 'react'
import { Camera, Mic, Search } from 'lucide-react'

function SearchBar() {
  return (
    <div className="flex-1 max-w-2xl md:mx-8 relative">
      <div className="flex items-center bg-white rounded-md">
            <button className="pl-2 py-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                <Search className="size-5" />
              </button>
              <input
                type="text"
                placeholder="Search for Gold jewellery and more..."
                className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
              />
              <button className="px-2 py-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                <Mic className="size-5" />
              </button>
              <button className="px-2 py-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                <Camera className="size-5" />
              </button>
      </div>
    </div>

  )
}

export default SearchBar