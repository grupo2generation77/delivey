import type Produto from "../../../models/produto/Produto"
import { BotaoDeletar } from "../../botoes/BotaoDeletar"
import { BotaoEditar } from "../../botoes/BotaoEditar"

interface CardProdutoProps {
    item: number
    produto: Produto
    onEdit: (id: number) => void
    onDelete: (id: number) => void
}

const delays = ["animate-delay-600", "animate-delay-800", "animate-delay-1000", "animate-delay-1200"]

export function CardProduto({ item, produto, onEdit, onDelete }: CardProdutoProps) {
    return (
        <div
            className={`bg-white drop-shadow-lg h-full lg:w-full select-none
      ${item % 2 === 0 ? "rounded-tl-4xl rounded-bl-4xl" : "rounded-tr-4xl rounded-br-4xl"}
      flex flex-col items-end hover:scale-105 transition-transform animate-fade-right animate-duration-2000
      ${delays[item]}
      ${produto.artesanal ? "border-2 border-orange-900" : ""}`}
            key={produto.id}
        >
            <img
                src={produto.foto || "https://i.imgur.com/Y0CpQjP.gif"}
                alt={produto.nome}
                className="h-100 w-100 object-cover rounded-md"
            />
            <div className="fixed flex items-end justify-end z-20">
                <div className="flex opacity-10 hover:opacity-100 z-20 focus:opacity-100">
                    <button onClick={() => onEdit(produto.id)}>{BotaoEditar()}</button>
                    <button onClick={() => onDelete(produto.id)}>{BotaoDeletar(item)}</button>
                </div>
            </div>

            <div className="fixed flex flex-end items-end justify-evenly w-full h-full group text-center text-lg ">
                <p className="text-5xl text-orange-900">{produto.nome}</p>
                <p className="text-2xl ml-5">{produto.preco}</p>
                <div
                    className={`fixed flex flex-col opacity-0 group-hover:animate-fade-up group-active:animate-fade-up group w-full h-50 bg-orange-300/30 backdrop-blur-md
          ${item % 2 === 0 ? "rounded-tl-4xl rounded-bl-4xl" : "rounded-tr-4xl rounded-br-4xl"}`}
                >
                    <p className="text-5xl">{produto.nome}</p>
                    <p className="text-3xl">{produto.categoria?.descricao}</p>
                    <p>{produto.calorias}</p>
                    <p>{produto.artesanal ? "Artesanal" : ""}</p>
                    <p>{produto.preco}</p>
                </div>
            </div>
        </div>
    )
}

