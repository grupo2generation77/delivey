import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);
  const closeSubMenu = () => setIsSubMenuOpen(false);

  return (
    <nav className="w-full h-14 flex justify-between items-center px-6 py-5 text-red-800 fixed top-0 left-0 bg-transparent backdrop-blur-xs z-50">
      <Link className="font-bold text-2xl md:text-4xl" to="/home">
        Delivey
      </Link>

      {/* Menu desktop */}
      <div className="hidden md:flex gap-6 text-xl">
        <button className="w-24 h-10 border border-red-800 bg-red-50 relative overflow-hidden group shadow-[2px_2px_0px_rgba(155,44,44,1)]">
          <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
          <Link
            className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300"
            to="/login"
          >
            Login
          </Link>
        </button>

        <button className="w-24 h-10 border border-red-800 bg-red-50 relative overflow-hidden group shadow-[2px_2px_0px_rgba(155,44,44,1)]">
          <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
          <Link
            className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300"
            to="/catalogo"
          >
            Catálogo
          </Link>
        </button>

        <button
          onClick={toggleSubMenu}
          className="w-24 h-10 border border-red-800 bg-red-50 relative overflow-hidden group shadow-[2px_2px_0px_rgba(155,44,44,1)]"
        >
          <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
          <span className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300">
            Menu
          </span>
        </button>
      </div>

      {/* Menu mobile */}
      <button className="md:hidden text-red-800" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-orange-200 shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <button className="w-24 h-10 border border-red-800 bg-red-50 relative overflow-hidden group shadow-[2px_2px_0px_rgba(155,44,44,1)]">
            <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
            <Link
              className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300"
              to="/login"
            >
              Login
            </Link>
          </button>

          <button className="w-24 h-10 border border-red-800 bg-red-50 relative overflow-hidden group shadow-[2px_2px_0px_rgba(155,44,44,1)]">
            <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
            <Link
              className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300"
              to="/catalogo"
            >
              Catálogo
            </Link>
          </button>

          <button
            className="w-24 h-10 border border-red-800 bg-red-50 relative overflow-hidden group shadow-[2px_2px_0px_rgba(155,44,44,1)]"
            onClick={toggleSubMenu}
          >
            <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
            <span className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300">
              Menu
            </span>
          </button>
        </div>
      )}

      {/* Submenu */}
      {isSubMenuOpen && (
        <div className="fixed top-0 right-0 w-2/3 md:w-1/3 bg-red-800 text-white p-6 z-50 rounded-bl-xl rounded-br-xl shadow-lg">
          <button
            onClick={closeSubMenu}
            className="absolute top-4 right-4 text-2xl text-white"
          >
            X
          </button>
          <div className="text-2xl space-y-4 mt-10">
            <span>
              <Link to="/sobre" onClick={closeSubMenu}>
                Sobre nós
              </Link>
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
