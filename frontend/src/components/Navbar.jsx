import React from 'react'
import { ArrowDown, Camera, ChevronDown, Mic, Search, ShoppingBag, User } from 'lucide-react'
import Logo from "../assets/logo.png"
import Logo2 from "../assets/logofull.png"
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <div>
      {/* Top Navigation */}
      <nav className="bg-cherry text-white">
        <div className="container mx-auto px-4 md:px-10 py-3 flex items-center justify-between">

          {/* Logo */}
          <div className='size-8'>
            <img src={Logo} alt="logo" />
          </div>
          
          {/* Search Bar */}
          <div className='hidden md:flex flex-1 max-w-2xl md:mx-8 relative'>
            <SearchBar/>
          </div>
        
          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <ShoppingBag className="size-5 cursor-pointer" />
            <User className="size-5 cursor-pointer hover:text-yellow-" />
          </div>
        </div>
      </nav>

      {/* Full Name Logo */}
      <div className='bg-wine hidden md:flex items-center justify-center py-2 '>
        <img src={Logo2} alt="" className='w-26' />
      </div>

        {/*Search Bar (Moves Below on Mobile) */}
        <div className="bg-cherry flex items-center p-2 md:hidden">
          <SearchBar/>
        </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-300 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex items-center lg:justify-center lg:space-x-8 gap-4 md:gap-8 lg:gap-0 py-4  overflow-x-auto whitespace-nowrap scrollbar-hide">
            <li className="text-gray-700 hover:text-[#8B0000] cursor-pointer flex items-center gap-2 font-semibold"> Categories <ChevronDown size={20}/></li>
            <li className="text-gray-700 hover:text-[#8B0000] cursor-pointer text-sm md:text-base">GOLD</li>
            <li className="text-gray-700 hover:text-[#8B0000] cursor-pointer text-sm md:text-base">DIAMOND</li>
            <li className="text-gray-700 hover:text-[#8B0000] cursor-pointer text-sm md:text-base">EARRINGS</li>
            <li className="text-gray-700 hover:text-[#8B0000] cursor-pointer text-sm md:text-base">RINGS</li>
            <li className="text-gray-700 hover:text-[#8B0000] cursor-pointer text-sm md:text-base">VALENTINE</li>
            <li className="text-gray-700 hover:text-[#8B0000] cursor-pointer text-sm md:text-base">COLLECTIONS</li>
            <li className="text-gray-700 hover:text-[#8B0000] cursor-pointer text-sm md:text-base">WEDDING</li>
            <li className="text-gray-700 hover:text-[#8B0000] cursor-pointer text-sm md:text-base">MORE</li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Navbar