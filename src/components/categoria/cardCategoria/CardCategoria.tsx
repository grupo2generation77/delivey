import Categoria from "../../../models/categoria/Categoria";

const delays:string[] = [
    ' animate-delay-200 ',
    ' animate-delay-300 ',
    ' animate-delay-400 ',
    ' animate-delay-500 ',
    ' animate-delay-600 ',
    ' animate-delay-700 ',
]
const roundend1:string = " rounded-tl-4xl rounded-bl-4xl "
const roundend2:string = " rounded-tr-4xl rounded-br-4xl "

export function CardCategoria(categoria:Categoria,item:number){
    return(
        <>
                <div
                className={'bg-white drop-shadow-lg h-full md:w-70  lg:w-full '+
                    (item%2==0? roundend1: roundend2 )+
                    ' flex flex-col items-center hover:scale-105 transition-transform animate-fade-left animate-duration-2000 ' +delays[5-item]}
                key={item}>
                    <img
                    src={`https://i.imgur.com/Y0CpQjP.gif`} // Substituir por imagem real
                        alt="Comida"
                        className="h-100 w-100 object-cover rounded-md"
                    />
                    <h2 className="text-lg font-bold mt-2">{categoria.descricao}</h2>
                    <p className="text-gray-600">Descrição da comida {item}</p>
                </div>
        </>
    );
}
