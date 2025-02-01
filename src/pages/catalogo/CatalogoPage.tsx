import { BotaoProdutoCategoria } from "../../components/botoes/BotaoProdutoCategoria";
import type React from "react";
import { useState, useEffect, useRef } from "react";

const delays:string[] = [
    ' animate-delay-400 ',
    ' animate-delay-500 ',
    ' animate-delay-600 ',
    ' animate-delay-700 ',
    ' animate-delay-800 ',
    ' animate-delay-900 ',
]



const Catalogo: React.FC = () => {
    const [mostrarCategorias, setMostrarCategorias] = useState<boolean>(false);
    const catalogoRef = useRef<any>(null);

    const scrollToTop = () => {
        if(catalogoRef.current)
        catalogoRef.current.scrollIntoView({ behavior: "smooth" })
    };

    return (
        <>
        <div className="flex w-screen min-h-screen justify-center items-center flex-col p-0">
        {/* Catálogo */}
            <div ref={catalogoRef} id="catalogo" className="flex justify-center items-start wire-one-regular text-orange-900 p-5 font-bold gap-2 select-none max-w-[90%] flex-wrap ">
                <p className="text-[clamp(4rem,24vw,16rem)] mt-30 animate-fade-up animate-duration-2000 animate-delay-100 hover:scale-110 transition-transform">
                C
                </p>
                <p className="text-[clamp(4rem,24vw,16rem)] mt-30 animate-fade-up animate-duration-2000 animate-delay-[150ms] hover:scale-110 transition-transform">
                A
                </p>
                <p className="text-[clamp(4rem,24vw,16rem)] mt-30 animate-fade-up animate-duration-2000 animate-delay-[200ms] hover:scale-110 transition-transform">
                T
                </p>
                <p className="text-[clamp(4rem,24vw,16rem)] mt-30 animate-fade-up animate-duration-2000 animate-delay-[250ms] hover:scale-110 transition-transform">
                Á
                </p>
                <p className="text-[clamp(4rem,24vw,16rem)] mt-30 animate-fade-up animate-duration-2000 animate-delay-[300ms] hover:scale-110 transition-transform">
                L
                </p>
                <p className="text-[clamp(4rem,24vw,16rem)] mt-30 animate-fade-up animate-duration-2000 animate-delay-[350ms] hover:scale-110 transition-transform">
                O
                </p>
                <p className="text-[clamp(4rem,24vw,16rem)] mt-30 animate-fade-up animate-duration-2000 animate-delay-[400ms] hover:scale-110 transition-transform">
                G
                </p>
                <p className="text-[clamp(4rem,24vw,16rem)] mt-30 animate-fade-up animate-duration-2000 animate-delay-[450ms] hover:scale-110 transition-transform">
                O
                </p>
            </div>

        <div className="flex justify-center items-center flex-col p-0 animate-fade animate-duration-1000 animate-delay-500 animate-ease-in">
            <BotaoProdutoCategoria onClick={() => {setMostrarCategorias(!mostrarCategorias);scrollToTop()}} />
        </div>

          {/* Cards das Comidas */}
            {!mostrarCategorias &&(
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
            {[1,2,3,4,5,6,7,8,9,10].map((item) => (
                <div
                key={item}
                className={'bg-white drop-shadow-lg h-fill md:w-70  lg:w-full '+
                    (item%2==0? ' rounded-tl-4xl rounded-bl-4xl' : 'rounded-tr-4xl rounded-br-4xl ')+
                    ' flex flex-col items-center hover:scale-105 transition-transform animate-fade-right animate-duration-2000 ' +delays[item]}
                >
                <img
                  src={`https://i.imgur.com/UoEzRUQ.png`} // Substituir por imagem real
                    alt="Comida"
                    className="h-fit w-fit object-cover rounded-md"
                />
                <h2 className="text-lg font-bold mt-2">Comida {item}</h2>
                <p className="text-gray-600">Descrição da comida {item}</p>
                </div>
            ))}
            </div>
            )}
        
            {mostrarCategorias && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
                {[1,2,3,4,5,6,8].map((item) => (
                    <div
                    key={item}
                    className={`bg-white drop-shadow-lg ${item%2==0? ' rounded-tl-4xl rounded-bl-4xl' : 'rounded-tr-4xl rounded-br-4xl '} flex flex-col items-center hover:scale-105 transition-transform animate-fade-left animate-duration-2000 animate-ease-in-out ${delays[item]}`}
                    >
                    <img
                    src={`https://uploads.spiritfanfiction.com/historias/capitulos/202106/kazuma-x-megumim-22580901-300620210759.gif`} // Substituir por imagem real
                        alt="Comida"
                        className="h-100 w-100 object-cover rounded-md"
                    />
                    <h2 className="text-lg font-bold mt-2">Comida {item}</h2>
                    <p className="text-gray-600">Descrição da comida {item}</p>
                    </div>
                ))}
            </div>
            )}
        </div>
        </>
    );
};

export default Catalogo;