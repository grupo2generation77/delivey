import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);  
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);  




    const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);


    const closeSubMenu = () => setIsSubMenuOpen(false);

    return (
        <>
            <div className="w-full flex justify-between py-5 bg-transparent text-red-800 fixed top-0 left-0 z-50 shadow-md shadow-[4px_4px_0px_rgba(155,44,44,1)]">
                <div className="container flex justify-between items-center text-lg">

                    <div className="font-bold ml-15 text-4xl">Delivey</div>

                    {!isMenuOpen && (
                        <div className="flex gap-6 text-xl">
                            <button className="w-24 h-10 border-1 border-red-800 bg-red-50 relative overflow-hidden group shadow-[2px_2px_0px_rgba(155,44,44,1)]">
                                <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
                                <span className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300">Não sei</span>
                            </button>
                            <button className="w-24 h-10 border-1 border-red-800 bg-red-50 relative overflow-hidden group shadow-[2px_2px_0px_rgba(155,44,44,1)]">
                                <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
                                <span className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300">Sei lá</span>
                            </button>
                            <button 
                                onClick={toggleSubMenu} 
                                className="w-24 h-10 border-1 border-red-800 bg-red-50 relative overflow-hidden group shadow-[2px_2px_0px_rgba(155,44,44,1)]"
                            >
                                <span className="absolute inset-0 bg-red-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
                               
                        
                                <span className="relative z-10 text-red-800 group-hover:text-white transition-colors duration-300">Menu</span>
                            </button>

                            
                        </div>
                    )}

                    
                </div>
            </div>

           

            {isSubMenuOpen && (
                <div className="fixed top-0 right-0 w-1/3 bg-red-800 text-white p-6 z-50 rounded-bl-xl rounded-br-xl">
                    <button
                        onClick={closeSubMenu}
                        className="absolute top-4 right-4 text-2xl text-white"
                    >
                        X
                    </button>

                    <div className="text-4xl space-y-4">
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
