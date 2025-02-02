import Produto from "../../../models/produto/Produto";

const delays:string[] = [
    ' animate-delay-400 ',
    ' animate-delay-500 ',
    ' animate-delay-600 ',
    ' animate-delay-700 ',
    ' animate-delay-800 ',
    ' animate-delay-900 ',
]

const roundend1:string = " rounded-tl-4xl rounded-bl-4xl "
const roundend2:string = " rounded-tr-4xl rounded-br-4xl "
export function CardProduto(produto:Produto,item:number){
    return(
        <>
                <div
                className={'bg-white drop-shadow-lg h-full md:w-70  lg:w-full '+
                    (item%2==0? roundend1: roundend2 )+
                    ' flex flex-col items-center hover:scale-105 transition-transform animate-fade-right animate-duration-2000 ' +delays[item]}
                key={item}>
                    <img
                    src={`https://i.imgur.com/UoEzRUQ.png`} // Substituir por imagem real
                        alt="Comida"
                        className="h-100 w-100 object-cover rounded-md"
                    />
                    <h2 className="text-lg font-bold mt-2">{produto.nome}</h2>
                    <p className="text-gray-600">Descrição da comida {item}</p>
                </div>
        </>
    );
}
