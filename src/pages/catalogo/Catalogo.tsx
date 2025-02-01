import { BotaoProdutoCategoria } from "../../components/botoes/BotaoProdutoCategoria";

const Catalogo: React.FC = () => {
    return (
        <>
        <div className="flex w-screen min-h-screen justify-center items-center flex-col p-0">
          {/* Catálogo */}
            <div className="flex justify-center items-start wire-one-regular text-orange-900 p-5 font-bold gap-2 select-none max-w-[90%] flex-wrap ">
            {["C", "A", "T", "Á", "L", "O", "G", "O"].map((letter, index) => (
                <p
                key={index}
                className={`text-[clamp(4rem,24vw,16rem)] mt-30 animate-fade-up animate-duration-2000 animate-delay-${index*100} hover:scale-110 transition-transform`}                >
                {letter}
                </p>
            ))}
        </div>

        <div className="flex justify-center items-center flex-col p-0">
            <BotaoProdutoCategoria />
        </div>

          {/* Cards das Comidas */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
            {[1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16].map((item) => (
                <div
                key={item}
                className={`bg-white drop-shadow-lg rounded-tl-4xl flex flex-col items-center hover:scale-105 transition-transform animate-fade-right animate-duration-1000 animate-delay-${item*200} animate-ease-in-out`}
                >
                <img
                  src={`https://i.imgur.com/UoEzRUQ.png`} // Substituir por imagem real
                    alt="Comida"
                    className="h-full object-cover rounded-md"
                />
                <h2 className="text-lg font-bold mt-2">Comida {item}</h2>
                <p className="text-gray-600">Descrição da comida {item}</p>
                </div>
            ))}
            </div>
        </div>
        </>
    );
};

export default Catalogo;