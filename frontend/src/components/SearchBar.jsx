import React from 'react'
import { Camera, Mic, Search } from 'lucide-react'

function SearchBar() {
  return (
    <div className="flex-1 w-full relative ">
      <div className="flex items-center bg-secondary border-b border-orange-100">
            <button className="pl-2 py-2 text-light hover:text-light cursor-pointer">
                <Search className="size-5" />
              </button>
              <input
                type="text"
                placeholder="Search for Gold jewellery and more..."
                className="w-full px-4 py-2 rounded-l-md text-light focus:outline-none"
              />
              <button className="px-2 py-2 text-light hover:text-neutral cursor-pointer">
                <Mic className="size-5" />
              </button>
              <button className="px-2 py-2 text-light hover:text-light cursor-pointer">
                <Camera className="size-5" />
              </button>
      </div>
    </div>

  )
}

export default SearchBar