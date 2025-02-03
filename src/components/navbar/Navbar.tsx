import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);
  const closeSubMenu = () => setIsSubMenuOpen(false);

  return (
    <>
      <div className="w-full flex justify-between py-5 bg-transparent text-red-800 fixed top-0 left-0 z-50 shadow-md shadow-[4px_4px_0px_rgba(155,44,44,1)]">
        <div className="container flex justify-between items-center text-lg px-4 md:px-10">
          <div className="font-bold text-2xl md:text-4xl">Delivery</div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-red-800 text-2xl"
            >
              ☰
            </button>
          </div>

          <div
            className={`absolute top-16 left-0 w-full bg-red-50 md:bg-transparent md:static md:flex gap-6 text-xl p-4 md:p-0 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            } md:flex`}
          >
            <button className="w-full md:w-24 h-10 border border-red-800 bg-red-50 relative overflow-hidden group shadow-md">
              <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
              <span className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300">
                Não sei
              </span>
            </button>
            <button className="w-full md:w-24 h-10 border border-red-800 bg-red-50 relative overflow-hidden group shadow-md">
              <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
              <span className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300">
                Sei lá
              </span>
            </button>
            <button
              onClick={toggleSubMenu}
              className="w-full md:w-24 h-10 border border-red-800 bg-red-50 relative overflow-hidden group shadow-md"
            >
              <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
              <span className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300">
                Menu
              </span>
            </button>
          </div>
        </div>
      </div>

      {isSubMenuOpen && (
        <div className="fixed top-0 right-0 w-2/3 md:w-1/3 bg-red-800 text-white p-6 z-50 rounded-bl-xl rounded-br-xl transition-all duration-300">
          <button
            onClick={closeSubMenu}
            className="absolute top-4 right-4 text-2xl text-white"
          >
            X
          </button>

          <div className="text-2xl md:text-4xl space-y-4">
            <div>Home</div>
            <div>Sobre nós</div>
            <div>Contatos</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
