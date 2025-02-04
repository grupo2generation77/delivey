import type Categoria from "../../../models/categoria/Categoria"
import { BotaoDeletar } from "../../botoes/BotaoDeletar"
import { BotaoEditar } from "../../botoes/BotaoEditar"

const delays: string[] = [
    " animate-delay-500 ",
    " animate-delay-400 ",
    " animate-delay-300 ",
    " animate-delay-200 ",
]
const roundend1: string = " rounded-tl-4xl rounded-bl-4xl "
const roundend2: string = " rounded-tr-4xl rounded-br-4xl "

interface CardCategoriaProps {
    categoria: Categoria
    item: number
    onEdit: (id: number) => void
    onDelete: (id: number) => void
}

export function CardCategoria({ categoria, item, onEdit, onDelete }: CardCategoriaProps) {
    return (
        <div
            className={
                "bg-white h-full lg:w-full select-none" +
                (item % 2 === 0 ? roundend1 : roundend2) +
                " flex flex-col items-end hover:scale-105 transition-transform animate-fade-left animate-duration-2000 " +
                delays[item]
            }
            key={categoria.id}
        >
            <img
                src={categoria.icone || "https://i.imgur.com/Y0CpQjP.gif"}
                alt={categoria.descricao}
                className="h-100 w-100 object-cover rounded-md"
            />
            <div className="fixed flex items-end justify-end z-20">
                <div className="flex opacity-10 hover:opacity-100 z-20 focus:opacity-100">
                    <button onClick={() => onEdit(categoria.id)}>{BotaoEditar()}</button>
                    <button onClick={() => onDelete(categoria.id)}>{BotaoDeletar(item)}</button>
                </div>
            </div>

            <div className="fixed flex flex-end items-end justify-evenly w-full h-full group text-center text-lg ">
                <p className="text-5xl text-orange-900">{categoria.descricao}</p>
            </div>
        </div>
    )
}

