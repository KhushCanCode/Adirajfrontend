import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Heart, ShoppingBag, Menu, X, Search, ChevronDown } from "lucide-react";
import Logo2 from "../assets/logofull.png";
import SearchBar from "./SearchBar";
import DropDownMenu from "./DropDownMenu";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  return (
    <header className="fixed top-0 w-full z-40 bg-secondary shadow-lg h-28 md:h-32  " data-load-animation="fade-down" >
      
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
          <img src={Logo2} alt="Adiraj" className="w-32 cursor-pointer" 
          onClick={() => navigate("/")}/>
        </div>

        {/* Icons - Hidden on Mobile, Visible on Desktop */}
        <div className="hidden md:flex items-center justify-end space-x-4 text-gray-700">
          
          <Heart className="cursor-pointer text-light size-5"
          onClick={() => navigate("/profile")} />
          <ShoppingBag className="cursor-pointer text-light size-5" 
          onClick={() => navigate("/profile")}/>
          <button className="bg-secondary text-light border border-light py-1 px-2 rounded-md hover:bg-white hover:text-secondary cursor-pointer"
          onClick={() => navigate("/login")}>
            Login / Register
          </button>
        </div>

      </div>

      {/* Mobile Menu - Shows Search, Wishlist, Shopping Bag, and Login/Register */}
      {menuOpen && (
        <nav className="bg-white md:hidden absolute top-full left-0 w-full shadow-lg">
          <ul className="flex flex-col items-start gap-4 py-4 px-6">
            <li className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-secondary"
            onClick={() => setMenuOpen(false)}>
              <Search size={20} /> Search
            </li>
            <li className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-secondary"
            onClick={() => setMenuOpen(false)}>
              <Heart size={20} /> Wishlist
            </li>
            <li className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-secondary"
            onClick={() => setMenuOpen(false)}>
              <ShoppingBag size={20} /> Shopping Bag
            </li>
            <li>
              <button className="bg-secondary text-light py-2 px-4 w-full rounded-md hover:bg-light hover:text-secondary cursor-pointer"
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}>
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
          <li
            className="relative text-gray-700 hover:text-secondary cursor-pointer font-semibold flex items-center gap-2 text-sm md:text-base"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            CATEGORIES <ChevronDown />
          </li>
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
      {dropdownOpen && <DropDownMenu />}
    </header>
  );
}

export default Navbar;  