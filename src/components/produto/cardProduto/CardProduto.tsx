import { useEffect, useState } from "react";
import Produto from "../../../models/produto/Produto";
import {BotaoDeletar} from "../../botoes/BotaoDeletar";
import { BotaoEditar } from "../../botoes/BotaoEditar";

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
export function CardProduto({ item, produto }: { item: number; produto: Produto }) {
    const [teste,setTeste] = useState(false)
    return(
        <>
                <div
                className={'bg-white drop-shadow-lg h-full  lg:w-full select-none'+
                    (item%2==0? roundend1: roundend2 )+
                    ' flex flex-col items-end hover:scale-105 transition-transform animate-fade-right animate-duration-2000 ' +delays[item]}
                key={produto.id}>
                    <img
                    src={'https://i.imgur.com/Y0CpQjP.gif'} // Substituir por imagem real
                        alt="Comida"
                        className="h-100 w-100 object-cover rounded-md"
                    />
                    <div className="fixed flex  items-end justify-end z-50">
                        <div className="flex opacity-10 hover:opacity-100 z-50 focus:opacity-100">
                            {BotaoEditar()}
                            {BotaoDeletar(item)}
                        </div>
                    </div>
                    <div className="fixed flex flex-end items-end justify-evenly w-full h-full group text-center text-lg ">
                    <p className="text-5xl text-orange-900">{produto.nome}</p>
                    <p className="text-2xl ml-5">{`${produto.categoria}`}</p>
                        <div className={"fixed flex flex-col opacity-0 group-hover:animate-fade-up group-active:animate-fade-up   group w-full h-50 bg-orange-300/30 backdrop-blur-md "+(item%2==0? roundend1: roundend2 )}>
                            <p className="text-5xl">{produto.nome}</p>  
                            <p className="text-5xl">{`${produto.categoria}`}</p>
                            <p>{produto.calorias}</p>
                            <p>{produto.proteinas}</p>
                            <p>{produto.preco}</p>
                        </div>
                    </div>
                        
                    
                    
                </div>
        </>
    );
}
