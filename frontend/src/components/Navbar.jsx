import { useState } from "react";
import { Heart, ShoppingBag, Menu, X, Search } from "lucide-react";
import Logo2 from "../assets/logofull.png";
import SearchBar from "./SearchBar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-secondary shadow-md h-28 md:h-32">
      
      {/* Top Bar */}
      <div className="grid grid-cols-3 px-4 lg:px-8 w-full  py-3 ">
        
        <div className="items-center hidden md:flex">
          <SearchBar />
        </div>
       
        {/* Hamburger Menu - Visible on Mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} className="text-light" /> : <Menu size={24} className="text-light" />}
        </button>

        {/* Logo - Centered on Mobile */}
        <div className="flex justify-center items-center">
          <img src={Logo2} alt="Adiraj" className="w-32" />
        </div>

        {/* Icons - Hidden on Mobile, Visible on Desktop */}
        <div className="hidden md:flex items-center justify-end space-x-4 text-gray-700">
          
          <Heart className="cursor-pointer text-light size-5" />
          <ShoppingBag className="cursor-pointer text-light size-5" />
          <button className="bg-secondary text-light border border-light py-1 px-2 rounded-md hover:bg-white hover:text-secondary cursor-pointer">
            Login / Register
          </button>
        </div>

      </div>

      {/* Mobile Menu - Shows Search, Wishlist, Shopping Bag, and Login/Register */}
      {menuOpen && (
        <nav className="bg-white md:hidden absolute top-full left-0 w-full shadow-lg">
          <ul className="flex flex-col items-start gap-4 py-4 px-6">
            <li className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-secondary">
              <Search size={20} /> Search
            </li>
            <li className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-secondary">
              <Heart size={20} /> Wishlist
            </li>
            <li className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-secondary">
              <ShoppingBag size={20} /> Shopping Bag
            </li>
            <li>
              <button className="bg-secondary text-light py-2 px-4 w-full rounded-md hover:bg-white hover:text-secondary cursor-pointer">
                Login / Register
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Desktop Navigation Menu - Always Visible */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <ul className="flex items-center lg:justify-center lg:space-x-8 gap-4 md:gap-8 lg:gap-0 py-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <li className="text-gray-700 hover:text-secondary cursor-pointer font-semibold text-sm md:text-base">CATEGORIES</li>
            <li className="text-gray-700 hover:text-secondary cursor-pointer text-sm md:text-base">GOLD</li>
            <li className="text-gray-700 hover:text-secondary cursor-pointer text-sm md:text-base">DIAMOND</li>
            <li className="text-gray-700 hover:text-secondary cursor-pointer text-sm md:text-base">EARRINGS</li>
            <li className="text-gray-700 hover:text-secondary cursor-pointer text-sm md:text-base">RINGS</li>
            <li className="text-gray-700 hover:text-secondary cursor-pointer text-sm md:text-base">VALENTINE</li>
            <li className="text-gray-700 hover:text-secondary cursor-pointer text-sm md:text-base">COLLECTIONS</li>
            <li className="text-gray-700 hover:text-secondary cursor-pointer text-sm md:text-base">WEDDING</li>
            <li className="text-gray-700 hover:text-secondary cursor-pointer text-sm md:text-base">MORE</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;  