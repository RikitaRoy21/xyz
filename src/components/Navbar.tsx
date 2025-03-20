import React from 'react';
import { Heart, Activity, Users, Ambulance } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center group">
            <Heart className="h-8 w-8 text-rose-600 transform group-hover:scale-110 transition-transform duration-150" />
            <span className="ml-2 text-xl font-bold text-gray-800 group-hover:text-rose-600 transition-colors duration-150">HealthCare+</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <NavItem to="/" icon={<Heart className="h-5 w-5" />} text="Home" />
            <NavItem to="/medicare" icon={<Activity className="h-5 w-5" />} text="Medicare" />
            <NavItem to="/patho-care" icon={<Users className="h-5 w-5" />} text="Patho Care" />
            <NavItem to="/doctors" icon={<Users className="h-5 w-5" />} text="Doctors" />
            <NavItem to="/ambulance" icon={<Ambulance className="h-5 w-5" />} text="Ambulance" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ icon, text, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transform hover:scale-105 transition-all duration-150 ${
        isActive
          ? 'text-rose-600 hover:text-rose-700'
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default Navbar;