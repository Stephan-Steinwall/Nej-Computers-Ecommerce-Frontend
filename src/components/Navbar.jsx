import { useState } from 'react';
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState('Select Store');
  const [cartTotal] = useState(0);
  const [cartCount] = useState(0);

  // Navigation items
  const navItems = [
    { name: 'Home', hasDropdown: true },
    { name: 'About Us', hasDropdown: false },
    { name: 'Pages', hasDropdown: true },
    { name: 'Blog', hasDropdown: true },
    { name: 'Contact Us', hasDropdown: false },
  ];

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-200 py-2 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                <span className="text-xl md:text-2xl font-bold">Logo</span>
              </div>
              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-0 md:mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search For"
                  className="w-full px-4 py-2 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center space-x-6">
              {/* My Account */}
              <div className="flex items-center space-x-2 cursor-pointer hover:text-orange-500 transition-colors duration-300">
                <User className="h-5 w-5" />
                <span>My Account</span>
              </div>

              {/* Cart */}
              <div className="flex items-center space-x-2 cursor-pointer group">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {cartCount}
                  </span>
                </div>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              {/* Country Selector */}
              <div className="relative group">
                <button className="flex items-center space-x-2 py-2 px-4 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-300">
                  <span className="w-6 h-6">🇺🇸</span>
                  <span>USA</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Canada</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Australia</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Germany</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Navigation Items */}
            <ul className="hidden lg:flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <a href="#" className="flex items-center space-x-1 hover:text-orange-500 transition-colors duration-300">
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4 transform group-hover:rotate-180 transition-transform duration-300" />
                    )}
                  </a>
                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="py-2">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 3</a>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Side Info */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Pickup Location */}
              <div className="flex items-center space-x-3">
                <span>🏪</span>
                <div>
                  <p className="text-sm">Picking Up?</p>
                  <select 
                    value={selectedStore}
                    onChange={(e) => setSelectedStore(e.target.value)}
                    className="bg-transparent text-white cursor-pointer hover:text-orange-500 transition-colors duration-300"
                  >
                    <option value="Select Store">Select Store</option>
                    <option value="Store 1">Store 1</option>
                    <option value="Store 2">Store 2</option>
                    <option value="Store 3">Store 3</option>
                  </select>
                </div>
              </div>

              {/* Free Shipping */}
              <div className="flex items-center space-x-3">
                <span>🚚</span>
                <div>
                  <p className="text-sm">Free Shipping</p>
                  <p className="text-sm">On Order <span className="font-bold">Over $100</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
            {/* Mobile Account and Cart */}
            <div className="flex items-center justify-between py-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>My Account</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                </div>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Mobile Navigation */}
            <ul className="py-4 space-y-4 border-t border-gray-700">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center justify-between py-2 hover:text-orange-500 transition-colors duration-300">
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Store Selection and Shipping Info */}
            <div className="py-4 space-y-4 border-t border-gray-700">
              <div className="flex items-center space-x-3">
                <span>🏪</span>
                <div>
                  <p className="text-sm">Picking Up?</p>
                  <select 
                    value={selectedStore}
                    onChange={(e) => setSelectedStore(e.target.value)}
                    className="bg-transparent text-white cursor-pointer"
                  >
                    <option value="Select Store">Select Store</option>
                    <option value="Store 1">Store 1</option>
                    <option value="Store 2">Store 2</option>
                    <option value="Store 3">Store 3</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span>🚚</span>
                <div>
                  <p className="text-sm">Free Shipping</p>
                  <p className="text-sm">On Order <span className="font-bold">Over $100</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;